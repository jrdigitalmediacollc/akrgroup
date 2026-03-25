import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto, UpdatePaymentDto, QueryPaymentsDto } from './dto/payment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Payments')
@Controller('payments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles(UserRole.ADVISOR, UserRole.ADMIN)
  @ApiOperation({ summary: 'Create payment request (advisor/admin)' })
  create(@Body() dto: CreatePaymentDto, @Request() req: any) {
    return this.paymentsService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all payment requests' })
  findAll(@Query() query: QueryPaymentsDto, @Request() req: any) {
    return this.paymentsService.findAll(query, req.user.userId, req.user.role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payment by ID' })
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Update payment status (admin only)' })
  update(@Param('id') id: string, @Body() dto: UpdatePaymentDto) {
    return this.paymentsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete payment request (admin only)' })
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(id);
  }

  @Get(':id/invoice')
  @ApiOperation({ summary: 'Get invoice details' })
  getInvoice(@Param('id') id: string) {
    return this.paymentsService.generateInvoice(id);
  }
}
