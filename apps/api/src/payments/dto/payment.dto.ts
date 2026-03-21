import { IsString, IsNumber, IsEnum, IsOptional, IsObject, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PaymentStatus } from '@prisma/client';

export class CreatePaymentDto {
  @ApiProperty({ example: 'uuid-of-lead' })
  @IsString()
  leadId: string;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ required: false, default: 'AED' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ example: { accountName: 'AKR Group', accountNumber: '123456789', bankName: 'Emirates NBD', iban: 'AE12...' } })
  @IsObject()
  bankDetails: { accountName: string; accountNumber: string; bankName: string; iban?: string };

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdatePaymentDto {
  @ApiProperty({ required: false, enum: PaymentStatus })
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  bankDetails?: { accountName?: string; accountNumber?: string; bankName?: string; iban?: string };
}

export class QueryPaymentsDto {
  @ApiProperty({ required: false, enum: PaymentStatus })
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  advisorId?: string;

  @ApiProperty({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiProperty({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 20;
}
