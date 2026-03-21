import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto, UpdateLeadDto, QueryLeadsDto } from './dto/lead.dto';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLeadDto) {
    return this.prisma.lead.create({ data: dto });
  }

  async findAll(query: QueryLeadsDto) {
    const { status, advisorId, source, page = 1, limit = 20 } = query;
    const where: any = {};
    if (status) where.status = status;
    if (advisorId) where.advisorId = advisorId;
    if (source) where.source = source;

    const [data, total] = await Promise.all([
      this.prisma.lead.findMany({
        where,
        include: { advisor: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.lead.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const lead = await this.prisma.lead.findUnique({
      where: { id },
      include: {
        advisor: { select: { id: true, name: true, email: true } },
        calculatorResults: true,
        paymentRequests: true,
      },
    });
    if (!lead) throw new NotFoundException(`Lead ${id} not found`);
    return lead;
  }

  async update(id: string, dto: UpdateLeadDto) {
    await this.findOne(id);
    return this.prisma.lead.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.lead.delete({ where: { id } });
  }

  async assignAdvisor(leadId: string, advisorId: string) {
    await this.findOne(leadId);
    return this.prisma.lead.update({ where: { id: leadId }, data: { advisorId } });
  }

  async getLeadsByAdvisor(advisorId: string) {
    return this.prisma.lead.findMany({
      where: { advisorId },
      include: { advisor: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async exportToCsv(query: QueryLeadsDto): Promise<string> {
    const { data } = await this.findAll({ ...query, page: 1, limit: 10000 });
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Source', 'Status', 'Advisor', 'Created At'];
    const rows = data.map((l) => [
      l.id, l.name, l.email, l.phone || '', l.source, l.status,
      l.advisor?.name || 'Unassigned', l.createdAt.toISOString(),
    ]);
    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
}
