import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'smtp.ethereal.email'),
      port: this.configService.get<number>('SMTP_PORT', 587),
      secure: false,
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendTemplatedEmail(to: string, subject: string, html: string): Promise<boolean> {
    try {
      const info = await this.transporter.sendMail({
        from: this.configService.get<string>('SMTP_FROM', 'AKR Group <noreply@akrgroup.ae>'),
        to,
        subject,
        html,
      });
      this.logger.log(`Email sent to ${to}: ${info.messageId}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}:`, error);
      return false;
    }
  }

  async sendCalculatorResults(leadId: string, pdfUrl: string, calcType: string): Promise<void> {
    const lead = await this.prisma.lead.findUnique({ where: { id: leadId } });
    if (!lead) {
      this.logger.warn(`Lead ${leadId} not found for email`);
      return;
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); padding: 30px; text-align: center;">
          <h1 style="color: #d4a853; margin: 0; font-size: 28px;">AKR Group UAE</h1>
          <p style="color: #ccc; margin: 10px 0 0;">Financial & Real Estate Advisory</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333;">Your ${calcType} Report</h2>
          <p>Dear ${lead.name},</p>
          <p>Thank you for using the AKR Group ${calcType} Calculator. Your personalized report is attached to this email.</p>
          <p style="background: #fff; padding: 15px; border-left: 4px solid #d4a853; margin: 20px 0;">
            <strong>Reference:</strong> Your advisor will contact you shortly to discuss your results.
          </p>
          <p style="color: #666; font-size: 12px;">
            <strong>Disclaimer:</strong> This report is for informational purposes only and does not constitute financial advice.
            Please consult with a qualified advisor before making investment decisions.
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #888; font-size: 12px;">
              AKR Group UAE | Dubai, UAE<br/>
              Regulated by RERA | Licensed by UAE Central Bank
            </p>
          </div>
        </div>
      </div>
    `;

    const success = await this.sendTemplatedEmail(lead.email, `Your ${calcType} Calculator Report - AKR Group`, html);

    await this.prisma.emailLog.create({
      data: {
        leadId,
        template: `${calcType.toLowerCase()}_report`,
        recipientEmail: lead.email,
        sentAt: success ? new Date() : null,
        status: success ? 'SENT' : 'FAILED',
        errorMessage: success ? null : 'Send failed',
      },
    });
  }
}
