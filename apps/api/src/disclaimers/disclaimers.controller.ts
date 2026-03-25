import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DisclaimersService } from './disclaimers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Disclaimers')
@Controller('disclaimers')
export class DisclaimersController {
  constructor(private readonly disclaimersService: DisclaimersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all disclaimers grouped by page' })
  findAll() {
    return this.disclaimersService.findAll();
  }

  @Get(':page')
  @ApiOperation({ summary: 'Get disclaimers by page' })
  findByPage(@Param('page') page: string) {
    return this.disclaimersService.findByPage(page);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Update disclaimer content (admin only)' })
  update(@Param('id') id: string, @Body('content') content: string) {
    return this.disclaimersService.update(id, content);
  }
}
