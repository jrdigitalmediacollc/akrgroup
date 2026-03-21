import { IsString, IsNumber, IsEnum, IsOptional, IsArray, Min, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ListingType } from '@prisma/client';

export class CreateListingDto {
  @ApiProperty({ example: 'Luxury Villa in Palm Jumeirah' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Stunning 5-bedroom villa with private beach access' })
  @IsString()
  description: string;

  @ApiProperty({ enum: ListingType })
  @IsEnum(ListingType)
  type: ListingType;

  @ApiProperty({ example: 8500000 })
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty({ required: false, default: 'AED' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ example: 'Palm Jumeirah, Dubai' })
  @IsString()
  location: string;

  @ApiProperty({ example: 'Villa' })
  @IsString()
  propertyType: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  bedrooms?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  bathrooms?: number;

  @ApiProperty({ example: 5500 })
  @IsNumber()
  @Min(1)
  area: number;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

export class UpdateListingDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false, enum: ListingType })
  @IsOptional()
  @IsEnum(ListingType)
  type?: ListingType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  price?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  propertyType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  bedrooms?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  bathrooms?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  area?: number;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  images?: string[];
}

export class QueryListingsDto {
  @ApiProperty({ required: false, enum: ListingType })
  @IsOptional()
  @IsEnum(ListingType)
  type?: ListingType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  listerId?: string;

  @ApiProperty({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiProperty({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 20;
}
