import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DisclaimerPage } from '@prisma/client';

@Injectable()
export class DisclaimersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const disclaimers = await this.prisma.disclaimer.findMany({
      where: { active: true },
      orderBy: { page: 'asc' },
    });
    const grouped: Record<string, any[]> = {};
    for (const d of disclaimers) {
      if (!grouped[d.page]) grouped[d.page] = [];
      grouped[d.page].push(d);
    }
    return grouped;
  }

  async findByPage(page: string) {
    return this.prisma.disclaimer.findMany({
      where: { page: page as DisclaimerPage, active: true },
    });
  }

  async update(id: string, content: string) {
    const disclaimer = await this.prisma.disclaimer.findUnique({ where: { id } });
    if (!disclaimer) throw new NotFoundException(`Disclaimer ${id} not found`);
    return this.prisma.disclaimer.update({ where: { id }, data: { content } });
  }
}
