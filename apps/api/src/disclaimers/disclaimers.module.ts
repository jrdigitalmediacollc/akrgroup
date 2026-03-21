import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DisclaimersController } from './disclaimers.controller';
import { DisclaimersService } from './disclaimers.service';

@Module({
  imports: [PrismaModule],
  controllers: [DisclaimersController],
  providers: [DisclaimersService],
  exports: [DisclaimersService],
})
export class DisclaimersModule {}
