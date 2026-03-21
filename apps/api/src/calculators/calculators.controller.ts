import { Controller, Get, Post, Param, Body, Res, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CalculatorsService } from './calculators.service';
import { MortgageCalculatorDto, RoiCalculatorDto, MutualFundDto } from './dto/calculator.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CalculatorType, InvestmentMode } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

@ApiTags('Calculators')
@Controller('calculators')
export class CalculatorsController {
  constructor(private readonly calculatorsService: CalculatorsService) {}

  @Post('mortgage')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Calculate mortgage EMI' })
  async calculateMortgage(@Body() dto: MortgageCalculatorDto, @Request() req: any) {
    const outputs = this.calculatorsService.calculateMortgage(dto);
    const result = await this.calculatorsService.saveCalculatorResult(
      req.user.userId, null, CalculatorType.MORTGAGE, null, dto, outputs,
    );
    return { ...result, outputs };
  }

  @Post('roi')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Calculate ROI / XIRR' })
  async calculateROI(@Body() dto: RoiCalculatorDto, @Request() req: any) {
    const outputs = this.calculatorsService.calculateROI(dto);
    const result = await this.calculatorsService.saveCalculatorResult(
      req.user.userId, null, CalculatorType.ROI, dto.investmentMode, dto, outputs,
    );
    return { ...result, outputs };
  }

  @Post('mutual-fund')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Calculate mutual fund returns' })
  async calculateMutualFund(@Body() dto: MutualFundDto, @Request() req: any) {
    const outputs = this.calculatorsService.calculateMutualFund(dto);
    const result = await this.calculatorsService.saveCalculatorResult(
      req.user.userId, null, CalculatorType.MUTUAL_FUND, dto.investmentMode, dto, outputs,
    );
    return { ...result, outputs };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get current user calculator results' })
  getMyResults(@Request() req: any) {
    return this.calculatorsService.getResultsByUser(req.user.userId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get calculator result by ID' })
  getResult(@Param('id') id: string) {
    return this.calculatorsService.getResult(id);
  }

  @Get(':id/pdf')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Download PDF report' })
  async downloadPdf(@Param('id') id: string, @Res() res: Response) {
    const result = await this.calculatorsService.generatePdf(id);
    const pdfPath = path.resolve(result.pdfUrl!);
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ message: 'PDF not found' });
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="AKR-Report-${result.referenceId}.pdf"`);
    const file = fs.createReadStream(pdfPath);
    file.pipe(res);
  }
}
