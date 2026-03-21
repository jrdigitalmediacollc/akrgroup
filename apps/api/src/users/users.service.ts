import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      where: { isActive: true },
      select: { id: true, email: true, name: true, phone: true, role: true, isActive: true, createdAt: true },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAdvisors() {
    return this.prisma.user.findMany({
      where: { role: 'ADVISOR' as any, isActive: true },
      select: { id: true, email: true, name: true, phone: true },
    });
  }

  async create(dto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(dto.password, 12);
    return this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        name: dto.name,
        phone: dto.phone,
        role: dto.role,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);
    const data: any = { ...dto };
    if (dto.password) {
      data.passwordHash = await bcrypt.hash(dto.password, 12);
      delete data.password;
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findById(id);
    return this.prisma.user.update({ where: { id }, data: { isActive: false } });
  }
}
