import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateListingDto, UpdateListingDto, QueryListingsDto } from './dto/listing.dto';
import { ListingStatus } from '@prisma/client';

@Injectable()
export class ListingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(listerId: string, dto: CreateListingDto) {
    return this.prisma.listing.create({
      data: { ...dto, listerId, status: ListingStatus.PENDING },
    });
  }

  async findAll(query: QueryListingsDto) {
    const { type, status, listerId, page = 1, limit = 20 } = query;
    const where: any = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (listerId) where.listerId = listerId;

    const [data, total] = await Promise.all([
      this.prisma.listing.findMany({
        where,
        include: { lister: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.listing.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async getPublicListings(query: QueryListingsDto) {
    const { type, page = 1, limit = 20 } = query;
    const where: any = { status: ListingStatus.APPROVED };
    if (type) where.type = type;

    const [data, total] = await Promise.all([
      this.prisma.listing.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.listing.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: { lister: { select: { id: true, name: true, email: true, phone: true } } },
    });
    if (!listing) throw new NotFoundException(`Listing ${id} not found`);
    return listing;
  }

  async update(id: string, userId: string, role: string, dto: UpdateListingDto) {
    const listing = await this.findOne(id);
    if (role !== 'ADMIN' && listing.listerId !== userId) {
      throw new ForbiddenException('You can only update your own listings');
    }
    return this.prisma.listing.update({ where: { id }, data: dto });
  }

  async remove(id: string, userId: string, role: string) {
    const listing = await this.findOne(id);
    if (role !== 'ADMIN' && listing.listerId !== userId) {
      throw new ForbiddenException('You can only delete your own listings');
    }
    return this.prisma.listing.delete({ where: { id } });
  }

  async approve(id: string) {
    const listing = await this.findOne(id);
    return this.prisma.listing.update({ where: { id }, data: { status: ListingStatus.APPROVED } });
  }

  async reject(id: string) {
    const listing = await this.findOne(id);
    return this.prisma.listing.update({ where: { id }, data: { status: ListingStatus.REJECTED } });
  }
}
