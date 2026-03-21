import { IsString, IsEmail, IsOptional, IsEnum, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { LeadStatus, CalculatorType } from '@prisma/client';

export class CreateLeadDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+971501234567', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ enum: CalculatorType })
  @IsEnum(CalculatorType)
  source: CalculatorType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  advisorId?: string;
}

export class UpdateLeadDto {
  @ApiProperty({ enum: LeadStatus, required: false })
  @IsOptional()
  @IsEnum(LeadStatus)
  status?: LeadStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  advisorId?: string;
}

export class QueryLeadsDto {
  @ApiProperty({ required: false, enum: LeadStatus })
  @IsOptional()
  @IsEnum(LeadStatus)
  status?: LeadStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  advisorId?: string;

  @ApiProperty({ required: false, enum: CalculatorType })
  @IsOptional()
  @IsEnum(CalculatorType)
  source?: CalculatorType;

  @ApiProperty({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;
}
