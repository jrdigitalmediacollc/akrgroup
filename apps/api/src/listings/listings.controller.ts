import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ListingsService } from './listings.service';
import { CreateListingDto, UpdateListingDto, QueryListingsDto } from './dto/listing.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get('public')
  @ApiOperation({ summary: 'Get public approved listings' })
  getPublicListings(@Query() query: QueryListingsDto) {
    return this.listingsService.getPublicListings(query);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Submit a new listing (requires auth)' })
  create(@Body() dto: CreateListingDto, @Request() req: any) {
    return this.listingsService.create(req.user.userId, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get all listings (paginated, requires auth)' })
  findAll(@Query() query: QueryListingsDto) {
    return this.listingsService.findAll(query);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get listing by ID' })
  findOne(@Param('id') id: string) {
    return this.listingsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Update listing' })
  update(@Param('id') id: string, @Body() dto: UpdateListingDto, @Request() req: any) {
    return this.listingsService.update(id, req.user.userId, req.user.role, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete listing (admin only)' })
  remove(@Param('id') id: string, @Request() req: any) {
    return this.listingsService.remove(id, req.user.userId, req.user.role);
  }

  @Patch(':id/approve')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Approve listing (admin only)' })
  approve(@Param('id') id: string) {
    return this.listingsService.approve(id);
  }

  @Patch(':id/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Reject listing (admin only)' })
  reject(@Param('id') id: string) {
    return this.listingsService.reject(id);
  }
}
