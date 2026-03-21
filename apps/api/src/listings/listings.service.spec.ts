import { Test, TestingModule } from '@nestjs/testing';
import { ListingsService } from '../listings.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('ListingsService', () => {
  let service: ListingsService;
  let prismaService: Partial<PrismaService>;

  const mockListing = {
    id: 'listing-1',
    listerId: 'user-1',
    title: 'Luxury Villa',
    description: 'Beautiful villa',
    type: 'BUY',
    price: 8500000,
    currency: 'AED',
    location: 'Palm Jumeirah',
    propertyType: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    area: 5500,
    status: 'PENDING',
    images: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    lister: { id: 'user-1', name: 'Agent Smith', email: 'agent@akrgroup.ae' },
  };

  beforeEach(async () => {
    prismaService = {
      listing: {
        create: jest.fn().mockResolvedValue(mockListing),
        findMany: jest.fn().mockResolvedValue([mockListing]),
        findUnique: jest.fn().mockResolvedValue(mockListing),
        update: jest.fn().mockResolvedValue({ ...mockListing, status: 'APPROVED' }),
        delete: jest.fn().mockResolvedValue(mockListing),
        count: jest.fn().mockResolvedValue(1),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListingsService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<ListingsService>(ListingsService);
  });

  describe('create', () => {
    it('should create listing with PENDING status', async () => {
      const dto = {
        title: 'Luxury Villa',
        description: 'Beautiful villa',
        type: 'BUY' as any,
        price: 8500000,
        location: 'Palm Jumeirah',
        propertyType: 'Villa',
        bedrooms: 5,
        bathrooms: 6,
        area: 5500,
      };
      const result = await service.create('user-1', dto);
      expect(prismaService.listing!.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ ...dto, listerId: 'user-1', status: 'PENDING' }),
      });
    });
  });

  describe('getPublicListings', () => {
    it('should only return APPROVED listings', async () => {
      await service.getPublicListings({ page: 1, limit: 20 });
      expect(prismaService.listing!.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: expect.objectContaining({ status: 'APPROVED' }) }),
      );
    });
  });

  describe('approve', () => {
    it('should change status to APPROVED', async () => {
      const result = await service.approve('listing-1');
      expect(prismaService.listing!.update).toHaveBeenCalledWith({
        where: { id: 'listing-1' },
        data: { status: 'APPROVED' },
      });
    });
  });

  describe('reject', () => {
    it('should change status to REJECTED', async () => {
      const result = await service.reject('listing-1');
      expect(prismaService.listing!.update).toHaveBeenCalledWith({
        where: { id: 'listing-1' },
        data: { status: 'REJECTED' },
      });
    });
  });

  describe('update', () => {
    it('should allow lister to update own listing', async () => {
      await service.update('listing-1', 'user-1', 'LISTER', { price: 9000000 });
      expect(prismaService.listing!.update).toHaveBeenCalled();
    });

    it('should allow admin to update any listing', async () => {
      await service.update('listing-1', 'admin-1', 'ADMIN', { price: 9000000 });
      expect(prismaService.listing!.update).toHaveBeenCalled();
    });

    it('should deny non-owner non-admin from updating', async () => {
      await expect(service.update('listing-1', 'other-user', 'CUSTOMER', { price: 9000000 }))
        .rejects.toThrow('You can only update your own listings');
    });
  });
});
