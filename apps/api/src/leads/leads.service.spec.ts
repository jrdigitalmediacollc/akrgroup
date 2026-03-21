import { Test, TestingModule } from '@nestjs/testing';
import { LeadsService } from '../leads.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('LeadsService', () => {
  let service: LeadsService;
  let prismaService: Partial<PrismaService>;

  const mockLead = {
    id: 'lead-1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+971501234567',
    source: 'MORTGAGE',
    status: 'NEW',
    notes: null,
    advisorId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    advisor: null,
    calculatorResults: [],
    paymentRequests: [],
    emailLogs: [],
  };

  beforeEach(async () => {
    prismaService = {
      lead: {
        create: jest.fn().mockResolvedValue(mockLead),
        findMany: jest.fn().mockResolvedValue([mockLead]),
        findUnique: jest.fn().mockResolvedValue(mockLead),
        update: jest.fn().mockResolvedValue({ ...mockLead, status: 'CONTACTED' }),
        delete: jest.fn().mockResolvedValue(mockLead),
        count: jest.fn().mockResolvedValue(1),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeadsService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<LeadsService>(LeadsService);
  });

  describe('create', () => {
    it('should create a lead', async () => {
      const dto = { name: 'John Doe', email: 'john@example.com', source: 'MORTGAGE' as any };
      const result = await service.create(dto);
      expect(prismaService.lead!.create).toHaveBeenCalledWith({ data: dto });
      expect(result).toEqual(mockLead);
    });
  });

  describe('findAll', () => {
    it('should return paginated leads', async () => {
      const result = await service.findAll({ page: 1, limit: 20 });
      expect(result.data).toBeInstanceOf(Array);
      expect(result.total).toBe(1);
      expect(result.page).toBe(1);
    });

    it('should filter by status', async () => {
      await service.findAll({ status: 'NEW' as any, page: 1, limit: 20 });
      expect(prismaService.lead!.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: expect.objectContaining({ status: 'NEW' }) }),
      );
    });
  });

  describe('findOne', () => {
    it('should return lead by id', async () => {
      const result = await service.findOne('lead-1');
      expect(result).toEqual(mockLead);
    });

    it('should throw NotFoundException for non-existent lead', async () => {
      (prismaService.lead!.findUnique as jest.Mock).mockResolvedValue(null);
      await expect(service.findOne('non-existent')).rejects.toThrow('Lead non-existent not found');
    });
  });

  describe('update', () => {
    it('should update lead status', async () => {
      const result = await service.update('lead-1', { status: 'CONTACTED' as any });
      expect(prismaService.lead!.update).toHaveBeenCalledWith({
        where: { id: 'lead-1' },
        data: { status: 'CONTACTED' },
      });
    });
  });

  describe('exportToCsv', () => {
    it('should generate valid CSV string', async () => {
      const csv = await service.exportToCsv({ page: 1, limit: 20 });
      expect(csv).toContain('Name');
      expect(csv).toContain('John Doe');
      expect(csv).toContain('john@example.com');
    });
  });

  describe('assignAdvisor', () => {
    it('should assign advisor to lead', async () => {
      await service.assignAdvisor('lead-1', 'advisor-1');
      expect(prismaService.lead!.update).toHaveBeenCalledWith({
        where: { id: 'lead-1' },
        data: { advisorId: 'advisor-1' },
      });
    });
  });
});
