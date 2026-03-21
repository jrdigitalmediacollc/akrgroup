import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto, QueryPaymentsDto } from './dto/payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  private generateInvoiceId(): string {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `INV-${date}-${random}`;
  }

  async create(advisorId: string, dto: CreatePaymentDto) {
    const invoiceId = this.generateInvoiceId();
    return this.prisma.paymentRequest.create({
      data: { ...dto, advisorId, invoiceId },
    });
  }

  async findAll(query: QueryPaymentsDto, userId: string, role: string) {
    const { status, advisorId, page = 1, limit = 20 } = query;
    const where: any = {};
    if (status) where.status = status;
    if (role !== 'ADMIN' && role !== 'ADVISOR') {
      where.advisorId = userId;
    } else if (advisorId) {
      where.advisorId = advisorId;
    }

    const [data, total] = await Promise.all([
      this.prisma.paymentRequest.findMany({
        where,
        include: {
          advisor: { select: { id: true, name: true, email: true } },
          lead: { select: { id: true, name: true, email: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.paymentRequest.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const payment = await this.prisma.paymentRequest.findUnique({
      where: { id },
      include: {
        advisor: { select: { id: true, name: true, email: true } },
        lead: { select: { id: true, name: true, email: true, phone: true } },
      },
    });
    if (!payment) throw new NotFoundException(`Payment ${id} not found`);
    return payment;
  }

  async update(id: string, dto: UpdatePaymentDto) {
    await this.findOne(id);
    return this.prisma.paymentRequest.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.paymentRequest.delete({ where: { id } });
  }

  async generateInvoice(id: string) {
    const payment = await this.findOne(id);
    return {
      invoiceId: payment.invoiceId,
      amount: payment.amount,
      currency: payment.currency,
      bankDetails: payment.bankDetails,
      lead: payment.lead,
      advisor: payment.advisor,
      status: payment.status,
      createdAt: payment.createdAt,
    };
  }
}
