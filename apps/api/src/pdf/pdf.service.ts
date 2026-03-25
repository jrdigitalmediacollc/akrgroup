import { Injectable, Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import * as fs from 'fs';
import * as path from 'path';
import { CalculatorType } from '@prisma/client';

@Injectable()
export class PdfService {
  private readonly logger = new Logger(PdfService.name);
  private readonly outputDir = path.join(process.cwd(), 'public', 'uploads', 'pdfs');

  constructor() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  async generateCalculatorPdf(result: any): Promise<string> {
    const fileName = `${result.referenceId}.pdf`;
    const filePath = path.join(this.outputDir, fileName);

    const calcTypeLabels: Record<string, string> = {
      MORTGAGE: 'Mortgage Loan Calculator',
      ROI: 'ROI / XIRR Calculator',
      MUTUAL_FUND: 'Mutual Fund Calculator',
    };

    const calcType = calcTypeLabels[result.type] || 'Calculator';
    const inputs = result.inputs as any;
    const outputs = result.outputs as any;

    const inputsHtml = Object.entries(inputs)
      .map(([key, val]) => `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${key}</strong></td><td style="padding: 8px;">${val}</td></tr>`)
      .join('');

    const outputsHtml = Object.entries(outputs)
      .filter(([key]) => key !== 'cashFlowTable' && key !== 'chartData')
      .map(([key, val]) => {
        const valStr = typeof val === 'object' ? JSON.stringify(val) : String(val);
        return `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${key}</strong></td><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">${valStr}</td></tr>`;
      })
      .join('');

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .header { background: linear-gradient(135deg, #1a1a1a, #2d2d2d); padding: 30px; text-align: center; color: white; }
    .header h1 { color: #d4a853; margin: 0; font-size: 24px; }
    .header p { color: #aaa; margin: 5px 0 0; font-size: 12px; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section h3 { color: #1a4d2e; border-bottom: 2px solid #d4a853; padding-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
    .ref-box { background: #f5f5f5; padding: 12px; text-align: center; border-radius: 6px; margin-bottom: 20px; }
    .ref-box span { font-size: 14px; color: #666; }
    .ref-box strong { color: #1a4d2e; font-size: 16px; display: block; margin-top: 5px; }
    .disclaimer { background: #fff8e1; border-left: 4px solid #ffc107; padding: 15px; font-size: 11px; color: #666; margin-top: 30px; }
    .footer { background: #1a1a1a; color: #888; padding: 20px; text-align: center; font-size: 11px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>AKR Group UAE</h1>
    <p>Financial & Real Estate Advisory Platform</p>
  </div>
  <div class="content">
    <h2 style="text-align:center; color: #333;">${calcType} Report</h2>
    <div class="ref-box">
      <span>Reference ID</span>
      <strong>${result.referenceId}</strong>
    </div>
    <div class="section">
      <h3>Input Summary</h3>
      <table><tbody>${inputsHtml}</tbody></table>
    </div>
    <div class="section">
      <h3>Calculation Results</h3>
      <table><tbody>${outputsHtml}</tbody></table>
    </div>
    <div class="disclaimer">
      <strong>Important Disclaimer:</strong> This report is generated for informational purposes only and does not constitute financial, legal, or professional advice. The calculations and projections contained herein are estimates based on the inputs provided and should not be relied upon as guarantees of future performance. Actual results may vary significantly. AKR Group UAE, its affiliates, and advisors accept no liability for decisions made based on this report. All investments carry inherent risks, including potential loss of principal. Please consult with a qualified financial advisor before making any financial commitments. AKR Group is regulated by RERA and licensed by the UAE Central Bank.
    </div>
  </div>
  <div class="footer">
    <p>AKR Realty LLC | AKR Financial & Real Estate LLC</p>
    <p>Dubai, United Arab Emirates | info@akrgroup.ae</p>
    <p>Generated on ${new Date().toLocaleDateString('en-AE', { timeZone: 'Asia/Dubai' })}</p>
  </div>
</body>
</html>`;

    try {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      await page.pdf({ path: filePath, format: 'A4', printBackground: true });
      await browser.close();
      this.logger.log(`PDF generated: ${filePath}`);
      return filePath;
    } catch (error) {
      this.logger.error('PDF generation failed:', error);
      const fallbackPath = path.join(this.outputDir, fileName);
      fs.writeFileSync(fallbackPath.replace('.pdf', '.html'), html);
      return fallbackPath.replace('.pdf', '.html');
    }
  }
}
