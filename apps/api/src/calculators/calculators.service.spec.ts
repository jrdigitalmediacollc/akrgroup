import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorsService } from '../calculators.service';
import { PrismaService } from '../../prisma/prisma.service';
import { PdfService } from '../../pdf/pdf.service';
import { EmailService } from '../../email/email.service';

describe('CalculatorsService', () => {
  let service: CalculatorsService;
  let prismaService: Partial<PrismaService>;
  let pdfService: Partial<PdfService>;
  let emailService: Partial<EmailService>;

  beforeEach(async () => {
    prismaService = {
      calculatorResult: {
        create: jest.fn().mockResolvedValue({ id: 'calc-1', referenceId: 'ref-1' }),
      },
    };
    pdfService = { generateCalculatorPdf: jest.fn().mockResolvedValue('/path/to/pdf.pdf') };
    emailService = { sendCalculatorResults: jest.fn().mockResolvedValue(undefined) };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalculatorsService,
        { provide: PrismaService, useValue: prismaService },
        { provide: PdfService, useValue: pdfService },
        { provide: EmailService, useValue: emailService },
      ],
    }).compile();

    service = module.get<CalculatorsService>(CalculatorsService);
  });

  describe('calculateMortgage', () => {
    it('should calculate correct EMI using standard formula', () => {
      const dto = {
        loanAmount: 2000000,
        interestRate: 4.5,
        tenureMonths: 240,
        insuranceCost: 15000,
        adminCharges: 5000,
      };
      const result = service.calculateMortgage(dto);
      expect(result).toHaveProperty('emi');
      expect(result).toHaveProperty('totalInterest');
      expect(result).toHaveProperty('totalPayable');
      expect(result).toHaveProperty('monthlyOutflow');
      expect(result.breakdown.principal).toBe(2000000);
      expect(result.emi).toBeGreaterThan(0);
    });

    it('should handle zero interest rate', () => {
      const dto = { loanAmount: 100000, interestRate: 0, tenureMonths: 12 };
      const result = service.calculateMortgage(dto);
      expect(result.emi).toBe(8333.33);
    });

    it('should include insurance and admin charges in total payable', () => {
      const dto = {
        loanAmount: 100000,
        interestRate: 5,
        tenureMonths: 12,
        insuranceCost: 1000,
        adminCharges: 500,
      };
      const result = service.calculateMortgage(dto);
      expect(result.totalPayable).toBeGreaterThan(result.emi * 12);
    });
  });

  describe('calculateROI', () => {
    it('should calculate lump sum returns correctly', () => {
      const dto = {
        investmentMode: 'LUMP_SUM' as any,
        principal: 500000,
        monthlyAmount: 0,
        tenureMonths: 60,
        expectedReturn: 12,
      };
      const result = service.calculateROI(dto);
      expect(result.totalInvestment).toBe(500000);
      expect(result.finalValue).toBeGreaterThan(500000);
      expect(result.xirr).toBeGreaterThan(0);
      expect(result.cashFlowTable).toBeInstanceOf(Array);
    });

    it('should calculate SIP returns correctly', () => {
      const dto = {
        investmentMode: 'SIP' as any,
        principal: 0,
        monthlyAmount: 5000,
        tenureMonths: 60,
        expectedReturn: 12,
      };
      const result = service.calculateROI(dto);
      expect(result.totalInvestment).toBe(5000 * 60);
      expect(result.finalValue).toBeGreaterThan(result.totalInvestment);
    });

    it('should include chart data in output', () => {
      const dto = {
        investmentMode: 'LUMP_SUM' as any,
        principal: 100000,
        monthlyAmount: 0,
        tenureMonths: 24,
        expectedReturn: 10,
      };
      const result = service.calculateROI(dto);
      expect(result.chartData).toBeInstanceOf(Array);
      expect(result.chartData.length).toBeGreaterThan(0);
    });
  });

  describe('calculateMutualFund', () => {
    it('should calculate lump sum mutual fund returns', () => {
      const dto = {
        investmentMode: 'LUMP_SUM' as any,
        lumpSumAmount: 500000,
        sipAmount: 0,
        tenureMonths: 60,
        expectedReturn: 14,
      };
      const result = service.calculateMutualFund(dto);
      expect(result.totalInvestment).toBe(500000);
      expect(result.finalValue).toBeGreaterThan(500000);
      expect(result.gains).toBeGreaterThan(0);
      expect(result.annualizedReturn).toBeGreaterThan(0);
    });

    it('should calculate SIP mutual fund returns', () => {
      const dto = {
        investmentMode: 'SIP' as any,
        lumpSumAmount: 0,
        sipAmount: 10000,
        tenureMonths: 36,
        expectedReturn: 15,
      };
      const result = service.calculateMutualFund(dto);
      expect(result.totalInvestment).toBe(10000 * 36);
      expect(result.finalValue).toBeGreaterThan(result.totalInvestment);
    });
  });

  describe('saveCalculatorResult', () => {
    it('should save result to database with referenceId', async () => {
      const result = await service.saveCalculatorResult(
        'user-1', null, 'MORTGAGE' as any, null,
        { loanAmount: 100000 },
        { emi: 1000 },
      );
      expect(prismaService.calculatorResult!.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          userId: 'user-1',
          type: 'MORTGAGE',
          inputs: { loanAmount: 100000 },
          outputs: { emi: 1000 },
        }),
      });
    });
  });
});
