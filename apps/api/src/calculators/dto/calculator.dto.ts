import { IsNumber, IsEnum, IsOptional, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InvestmentMode } from '@prisma/client';

export class MortgageCalculatorDto {
  @ApiProperty({ example: 2000000 })
  @IsNumber()
  @Min(1)
  loanAmount: number;

  @ApiProperty({ example: 4.5 })
  @IsNumber()
  @Min(0)
  @Max(100)
  interestRate: number;

  @ApiProperty({ example: 240 })
  @IsNumber()
  @Min(1)
  tenureMonths: number;

  @ApiProperty({ required: false, example: 15000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  insuranceCost?: number;

  @ApiProperty({ required: false, example: 5000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  adminCharges?: number;
}

export class RoiCalculatorDto {
  @ApiProperty({ enum: InvestmentMode })
  @IsEnum(InvestmentMode)
  investmentMode: InvestmentMode;

  @ApiProperty({ example: 500000, description: 'For lump sum investment' })
  @IsNumber()
  @Min(1)
  principal: number;

  @ApiProperty({ example: 5000, description: 'Monthly SIP amount' })
  @IsNumber()
  @Min(1)
  monthlyAmount: number;

  @ApiProperty({ example: 60, description: 'Tenure in months' })
  @IsNumber()
  @Min(1)
  tenureMonths: number;

  @ApiProperty({ example: 12, description: 'Expected annual return %' })
  @IsNumber()
  @Min(0)
  expectedReturn: number;

  @ApiProperty({ required: false, example: 7, description: 'Annual rental yield %' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  rentalYield?: number;
}

export class MutualFundDto {
  @ApiProperty({ enum: InvestmentMode })
  @IsEnum(InvestmentMode)
  investmentMode: InvestmentMode;

  @ApiProperty({ example: 500000 })
  @IsNumber()
  @Min(1)
  lumpSumAmount: number;

  @ApiProperty({ example: 5000 })
  @IsNumber()
  @Min(1)
  sipAmount: number;

  @ApiProperty({ example: 60 })
  @IsNumber()
  @Min(1)
  tenureMonths: number;

  @ApiProperty({ example: 14 })
  @IsNumber()
  @Min(0)
  expectedReturn: number;
}
