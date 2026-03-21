import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PdfModule } from '../pdf/pdf.module';
import { EmailModule } from '../email/email.module';
import { CalculatorsController } from './calculators.controller';
import { CalculatorsService } from './calculators.service';

@Module({
  imports: [PrismaModule, forwardRef(() => PdfModule), forwardRef(() => EmailModule)],
  controllers: [CalculatorsController],
  providers: [CalculatorsService],
  exports: [CalculatorsService],
})
export class CalculatorsModule {}
