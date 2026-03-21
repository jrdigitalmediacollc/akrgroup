import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LeadsModule } from './leads/leads.module';
import { CalculatorsModule } from './calculators/calculators.module';
import { ListingsModule } from './listings/listings.module';
import { PaymentsModule } from './payments/payments.module';
import { DisclaimersModule } from './disclaimers/disclaimers.module';
import { AuditModule } from './audit/audit.module';
import { EmailModule } from './email/email.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    LeadsModule,
    CalculatorsModule,
    ListingsModule,
    PaymentsModule,
    DisclaimersModule,
    AuditModule,
    EmailModule,
    PdfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
