import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PdfService } from '../pdf/pdf.service';
import { EmailService } from '../email/email.service';
import { MortgageCalculatorDto, RoiCalculatorDto, MutualFundDto } from './dto/calculator.dto';
import { v4 as uuidv4 } from 'uuid';
import { CalculatorType, InvestmentMode } from '@prisma/client';

@Injectable()
export class CalculatorsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pdfService: PdfService,
    private readonly emailService: EmailService,
  ) {}

  calculateMortgage(dto: MortgageCalculatorDto) {
    const P = dto.loanAmount;
    const r = dto.interestRate / 12 / 100;
    const n = dto.tenureMonths;
    const insurance = dto.insuranceCost || 0;
    const admin = dto.adminCharges || 0;

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    }

    const totalPayable = emi * n + insurance + admin;
    const totalInterest = emi * n - P;
    const monthlyOutflow = emi + (insurance / n);

    return {
      emi: Math.round(emi * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalPayable: Math.round(totalPayable * 100) / 100,
      monthlyOutflow: Math.round(monthlyOutflow * 100) / 100,
      breakdown: {
        principal: P,
        totalInterest,
        insurance,
        adminCharges: admin,
      },
    };
  }

  calculateROI(dto: RoiCalculatorDto) {
    const { investmentMode, principal, monthlyAmount, tenureMonths, expectedReturn, rentalYield } = dto;
    const r = expectedReturn / 100 / 12;
    const n = tenureMonths;

    let totalInvestment = 0;
    let finalValue = 0;
    let cashFlowTable: any[] = [];

    if (investmentMode === InvestmentMode.LUMP_SUM) {
      totalInvestment = principal;
      finalValue = principal * Math.pow(1 + r, n);
      cashFlowTable = [{ year: 0, investment: principal, value: principal, return: 0 }];
      for (let y = 1; y <= n / 12; y++) {
        const val = principal * Math.pow(1 + r, y * 12);
        cashFlowTable.push({
          year: y,
          investment: principal,
          value: Math.round(val),
          return: Math.round((val - principal) / principal * 100 * 100) / 100,
        });
      }
    } else {
      totalInvestment = monthlyAmount * n;
      finalValue = monthlyAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      cashFlowTable = [];
      for (let y = 1; y <= n / 12; y++) {
        const months = y * 12;
        const val = monthlyAmount * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
        const invested = monthlyAmount * months;
        cashFlowTable.push({
          year: y,
          investment: Math.round(invested),
          value: Math.round(val),
          return: Math.round((val - invested) / invested * 100 * 100) / 100,
        });
      }
    }

    const returns = finalValue - totalInvestment;
    const xirr = this.calculateXIRR(totalInvestment, finalValue, n);

    const chartData = cashFlowTable.map((c) => ({ name: `Year ${c.year}`, value: c.value, invested: c.investment }));

    return {
      totalInvestment: Math.round(totalInvestment * 100) / 100,
      returns: Math.round(returns * 100) / 100,
      finalValue: Math.round(finalValue * 100) / 100,
      xirr: Math.round(xirr * 100) / 100,
      rentalYield: rentalYield ? Math.round(rentalYield * 100) / 100 : null,
      cashFlowTable,
      chartData,
    };
  }

  private calculateXIRR(totalInvestment: number, finalValue: number, nMonths: number): number {
    const nYears = nMonths / 12;
    const cashFlows = [-totalInvestment, finalValue];
    const dates = [0, nYears];
    let rate = 0.1;

    for (let i = 0; i < 100; i++) {
      let npv = 0;
      let dnpv = 0;
      for (let j = 0; j < cashFlows.length; j++) {
        const t = dates[j];
        const pv = cashFlows[j] / Math.pow(1 + rate, t);
        npv += pv;
        dnpv -= t * cashFlows[j] / Math.pow(1 + rate, t + 1);
      }
      if (Math.abs(dnpv) < 1e-10) break;
      rate = rate - npv / dnpv;
      if (rate < -0.99) rate = -0.5;
    }

    return rate * 100;
  }

  calculateMutualFund(dto: MutualFundDto) {
    const { investmentMode, lumpSumAmount, sipAmount, tenureMonths, expectedReturn } = dto;
    const r = expectedReturn / 100 / 12;
    const n = tenureMonths;

    let totalInvestment = 0;
    let finalValue = 0;

    if (investmentMode === InvestmentMode.LUMP_SUM) {
      totalInvestment = lumpSumAmount;
      finalValue = lumpSumAmount * Math.pow(1 + r, n);
    } else {
      totalInvestment = sipAmount * n;
      finalValue = sipAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }

    const gains = finalValue - totalInvestment;
    const annualizedReturn = (Math.pow(finalValue / totalInvestment, 12 / n) - 1) * 100;

    return {
      totalInvestment: Math.round(totalInvestment * 100) / 100,
      returns: Math.round(gains * 100) / 100,
      finalValue: Math.round(finalValue * 100) / 100,
      gains: Math.round(gains * 100) / 100,
      annualizedReturn: Math.round(annualizedReturn * 100) / 100,
    };
  }

  async saveCalculatorResult(
    userId: string | null,
    leadId: string | null,
    type: CalculatorType,
    investmentMode: InvestmentMode | null,
    inputs: any,
    outputs: any,
  ) {
    const referenceId = uuidv4();
    return this.prisma.calculatorResult.create({
      data: { userId, leadId, type, investmentMode, inputs, outputs, referenceId },
    });
  }

  async getResult(id: string) {
    const result = await this.prisma.calculatorResult.findUnique({
      where: { id },
      include: { user: { select: { name: true, email: true } }, lead: true },
    });
    if (!result) throw new NotFoundException(`Calculator result ${id} not found`);
    return result;
  }

  async getResultsByUser(userId: string) {
    return this.prisma.calculatorResult.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async generatePdf(resultId: string) {
    const result = await this.getResult(resultId);
    const pdfPath = await this.pdfService.generateCalculatorPdf(result);
    return this.prisma.calculatorResult.update({
      where: { id: resultId },
      data: { pdfUrl: pdfPath },
    });
  }
}
