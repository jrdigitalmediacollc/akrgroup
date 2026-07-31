"use client";

import { useState } from 'react';
import { Calculator, Download, Mail, Phone, TrendingUp, PieChart, DollarSign, GraduationCap, Umbrella, Building2, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useEffect } from 'react';

export function CalculatorsPage() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });

  return (
    <div className="min-h-screen bg-pearl py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-velvet mb-4">Financial Calculators</h1>
          <p className="text-xl text-velvet/70">Advanced tools to help you make informed investment decisions</p>
        </div>

        {/* Calculator Tabs */}
        <Tabs defaultValue="mortgage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white mb-8">
            <TabsTrigger value="mortgage" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <Calculator className="w-4 h-4 mr-2" />
              Mortgage
            </TabsTrigger>
            <TabsTrigger value="roi" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <TrendingUp className="w-4 h-4 mr-2" />
              ROI (XIRR)
            </TabsTrigger>
            <TabsTrigger value="mutual" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <PieChart className="w-4 h-4 mr-2" />
              Mutual Fund
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <GraduationCap className="w-4 h-4 mr-2" />
              Child Education
            </TabsTrigger>
            <TabsTrigger value="retirement" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <Umbrella className="w-4 h-4 mr-2" />
              Retirement
            </TabsTrigger>
            <TabsTrigger value="offplan" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <Building2 className="w-4 h-4 mr-2" />
              Off-Plan
            </TabsTrigger>
            <TabsTrigger value="rental" className="data-[state=active]:bg-velvet data-[state=active]:text-white text-velvet">
              <Home className="w-4 h-4 mr-2" />
              Rental Yield
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mortgage">
            <MortgageCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="roi">
            <ROICalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="mutual">
            <MutualFundCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="education">
            <ChildEducationCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="retirement">
            <RetirementCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="offplan">
            <OffPlanCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>

          <TabsContent value="rental">
            <RentalYieldCalculator onShowLeadCapture={() => setShowLeadCapture(true)} />
          </TabsContent>
        </Tabs>

        {/* Compliance Disclaimer */}
        <Card className="mt-12 bg-white border border-gold/30 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gold-dark flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-velvet/70 space-y-2">
            <p>
              <strong className="text-gold-dark">AKR Financial & Real Estate Service LLC</strong> (Sharjah) and{' '}
              <strong className="text-gold-dark">AKR Realty LLC</strong> (Dubai) operate as independent, non-custodial
              advisory entities across the UAE, in line with applicable UAE Central Bank, Insurance Authority,
              and Real Estate Regulatory Agency (RERA) guidance.
            </p>
            <p>
              All calculator results are for <strong>illustrative and educational purposes only</strong> and do not
              constitute financial, investment, tax, or real estate advice. Results are indicative estimates based on
              the figures you enter and do not guarantee actual future performance. Interest rates, inflation rates,
              service charges, government fees, rental yields, and property appreciation may vary based on market
              conditions, lender or developer policies, and individual circumstances.
            </p>
            <p>
              For personalized, regulation-compliant advice, please consult one of our licensed advisors before
              making any financial or real estate decision.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Lead Capture Modal */}
      <Dialog open={showLeadCapture} onOpenChange={setShowLeadCapture}>
        <DialogContent className="bg-pearl border-2 border-gold text-velvet">
          <DialogHeader>
            <DialogTitle className="text-2xl text-velvet">Get Your Detailed Report</DialogTitle>
            <DialogDescription className="text-velvet/70">
              Enter your details to receive a comprehensive PDF report via email
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label className="text-velvet">Full Name</Label>
              <Input
                value={leadData.name}
                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                placeholder="Enter your name"
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>
            <div>
              <Label className="text-velvet">Email Address</Label>
              <Input
                type="email"
                value={leadData.email}
                onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                placeholder="your@email.com"
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>
            <div>
              <Label className="text-velvet">Phone Number</Label>
              <Input
                type="tel"
                value={leadData.phone}
                onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                placeholder="+971 XX XXX XXXX"
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => {
                  // Handle lead capture and PDF generation
                  alert('PDF report sent to ' + leadData.email);
                  setShowLeadCapture(false);
                }}
                className="flex-1 bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowLeadCapture(false)}
                className="flex-1 border-gold/30 text-velvet hover:bg-gold-dark"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MortgageCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    propertyValue: 1000000,
    downPayment: 250000,
    interestRate: 4.5,
    tenure: 300,
    insuranceCost: 150,
    adminFees: 5000
  });

  const [results, setResults] = useState({
    emi: 0,
    totalInterest: 0,
    totalPayable: 0,
    monthlyOutflow: 0,
    loanAmount: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const principal = inputs.propertyValue - inputs.downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const months = inputs.tenure;

    let emi = 0;
    if (monthlyRate === 0) {
      emi = principal / months;
    } else {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayable = emi * months + inputs.adminFees;
    const totalInterest = totalPayable - principal - inputs.adminFees;
    const monthlyOutflow = emi + inputs.insuranceCost;

    setResults({
      emi,
      totalInterest,
      totalPayable,
      monthlyOutflow,
      loanAmount: principal
    });
  };

  const chartData = Array.from({ length: Math.min(12, Math.ceil(inputs.tenure / 12)) }, (_, i) => {
    const year = i + 1;
    const remainingMonths = inputs.tenure - (i * 12);
    const monthsInYear = Math.min(12, remainingMonths);
    return {
      year: `Year ${year}`,
      principal: results.emi * monthsInYear * 0.4,
      interest: results.emi * monthsInYear * 0.6
    };
  });

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Advanced Mortgage Loan Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Calculate your EMI with insurance and administrative charges
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Property Value (AED)</Label>
              <Input
                type="number"
                value={inputs.propertyValue}
                onChange={(e) => setInputs({ ...inputs, propertyValue: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Down Payment (AED)</Label>
              <Input
                type="number"
                value={inputs.downPayment}
                onChange={(e) => setInputs({ ...inputs, downPayment: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                {((inputs.downPayment / inputs.propertyValue) * 100).toFixed(1)}% of property value
              </p>
            </div>

            <div>
              <Label className="text-velvet">Interest Rate (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Loan Tenure (Months)</Label>
              <Input
                type="number"
                value={inputs.tenure}
                onChange={(e) => setInputs({ ...inputs, tenure: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                {(inputs.tenure / 12).toFixed(1)} years
              </p>
            </div>

            <div>
              <Label className="text-velvet">Monthly Insurance (AED)</Label>
              <Input
                type="number"
                value={inputs.insuranceCost}
                onChange={(e) => setInputs({ ...inputs, insuranceCost: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Administrative Fees (AED)</Label>
              <Input
                type="number"
                value={inputs.adminFees}
                onChange={(e) => setInputs({ ...inputs, adminFees: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Monthly EMI</div>
              <div className="text-4xl font-bold text-white">
                AED {results.emi.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Loan Amount</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Interest</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Monthly Outflow</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.monthlyOutflow.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gold-dark mt-1">EMI + Insurance</div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Payable</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalPayable.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Payment Breakdown (Yearly)</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="year" stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FEFCF8', border: '1px solid #B8952E' }}
                    labelStyle={{ color: '#7A0F16' }}
                  />
                  <Legend />
                  <Bar dataKey="principal" fill="#B8952E" name="Principal" />
                  <Bar dataKey="interest" fill="#7A0F16" name="Interest" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ROICalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    investmentType: 'lumpsum',
    initialAmount: 500000,
    monthlyAmount: 10000,
    expectedReturn: 8,
    tenure: 10,
    includeRealEstate: true,
    rentalYield: 6,
    appreciation: 5
  });

  const [results, setResults] = useState({
    finalValue: 0,
    totalInvested: 0,
    totalReturns: 0,
    xirr: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const years = inputs.tenure;
    let finalValue = 0;
    let totalInvested = 0;

    if (inputs.investmentType === 'lumpsum') {
      totalInvested = inputs.initialAmount;
      finalValue = inputs.initialAmount * Math.pow(1 + inputs.expectedReturn / 100, years);
    } else {
      totalInvested = inputs.initialAmount + (inputs.monthlyAmount * 12 * years);
      const monthlyRate = inputs.expectedReturn / 100 / 12;
      const months = years * 12;

      // Future value of initial investment
      finalValue = inputs.initialAmount * Math.pow(1 + inputs.expectedReturn / 100, years);

      // Future value of SIP
      const sipFV = inputs.monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate);
      finalValue += sipFV;
    }

    if (inputs.includeRealEstate) {
      const rentalIncome = finalValue * (inputs.rentalYield / 100) * years;
      finalValue += rentalIncome;
      finalValue *= Math.pow(1 + inputs.appreciation / 100, years);
    }

    const totalReturns = finalValue - totalInvested;
    const xirr = ((Math.pow(finalValue / totalInvested, 1 / years) - 1) * 100);

    setResults({
      finalValue,
      totalInvested,
      totalReturns,
      xirr
    });
  };

  const chartData = Array.from({ length: inputs.tenure + 1 }, (_, i) => {
    const year = i;
    let value = 0;

    if (inputs.investmentType === 'lumpsum') {
      value = inputs.initialAmount * Math.pow(1 + inputs.expectedReturn / 100, year);
    } else {
      const initialPart = inputs.initialAmount * Math.pow(1 + inputs.expectedReturn / 100, year);
      const monthlyRate = inputs.expectedReturn / 100 / 12;
      const months = year * 12;
      const sipPart = months > 0 ? inputs.monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate) : 0;
      value = initialPart + sipPart;
    }

    return {
      year: `Year ${year}`,
      value: Math.round(value)
    };
  });

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">ROI & Real Estate Calculator (XIRR)</CardTitle>
        <CardDescription className="text-velvet/70">
          Calculate returns for lump sum, SIP, and real estate investments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Investment Type</Label>
              <Select value={inputs.investmentType} onValueChange={(value) => setInputs({ ...inputs, investmentType: value })}>
                <SelectTrigger className="bg-pearl border-gold/30 text-velvet mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-pearl border-gold/30">
                  <SelectItem value="lumpsum">Lump Sum</SelectItem>
                  <SelectItem value="sip">Systematic Investment Plan (SIP)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-velvet">Initial Investment (AED)</Label>
              <Input
                type="number"
                value={inputs.initialAmount}
                onChange={(e) => setInputs({ ...inputs, initialAmount: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            {inputs.investmentType === 'sip' && (
              <div>
                <Label className="text-velvet">Monthly Investment (AED)</Label>
                <Input
                  type="number"
                  value={inputs.monthlyAmount}
                  onChange={(e) => setInputs({ ...inputs, monthlyAmount: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                />
              </div>
            )}

            <div>
              <Label className="text-velvet">Expected Annual Return (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expectedReturn}
                onChange={(e) => setInputs({ ...inputs, expectedReturn: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Investment Tenure (Years)</Label>
              <Input
                type="number"
                value={inputs.tenure}
                onChange={(e) => setInputs({ ...inputs, tenure: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div className="pt-4 border-t border-gold/30">
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="realEstate"
                  checked={inputs.includeRealEstate}
                  onChange={(e) => setInputs({ ...inputs, includeRealEstate: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="realEstate" className="text-velvet">Include Real Estate Returns</Label>
              </div>

              {inputs.includeRealEstate && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-velvet">Rental Yield (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={inputs.rentalYield}
                      onChange={(e) => setInputs({ ...inputs, rentalYield: Number(e.target.value) })}
                      className="bg-pearl border-gold/30 text-velvet mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-velvet">Capital Appreciation (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={inputs.appreciation}
                      onChange={(e) => setInputs({ ...inputs, appreciation: Number(e.target.value) })}
                      className="bg-pearl border-gold/30 text-velvet mt-2"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Expected Final Value</div>
              <div className="text-4xl font-bold text-white">
                AED {results.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-white/80 text-sm mb-1">XIRR (Annualized Return)</div>
                <div className="text-3xl font-bold text-white">
                  {results.xirr.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Invested</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Returns</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalReturns.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Growth Projection</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="year" stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FEFCF8', border: '1px solid #B8952E' }}
                    labelStyle={{ color: '#7A0F16' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#B8952E" strokeWidth={2} dot={{ fill: '#B8952E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MutualFundCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    investmentType: 'lumpsum',
    amount: 100000,
    monthlyAmount: 5000,
    expectedReturn: 12,
    tenure: 10,
    expenseRatio: 1.5,
    returnType: 'compound'
  });

  const [results, setResults] = useState({
    finalValue: 0,
    totalInvested: 0,
    netReturns: 0,
    expenseCost: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const years = inputs.tenure;
    const netReturn = inputs.expectedReturn - inputs.expenseRatio;
    let finalValue = 0;
    let totalInvested = 0;
    let grossValue = 0;

    if (inputs.investmentType === 'lumpsum') {
      totalInvested = inputs.amount;
      if (inputs.returnType === 'compound') {
        finalValue = inputs.amount * Math.pow(1 + netReturn / 100, years);
        grossValue = inputs.amount * Math.pow(1 + inputs.expectedReturn / 100, years);
      } else {
        finalValue = inputs.amount + (inputs.amount * netReturn / 100 * years);
        grossValue = inputs.amount + (inputs.amount * inputs.expectedReturn / 100 * years);
      }
    } else {
      totalInvested = inputs.monthlyAmount * 12 * years;
      const monthlyRate = netReturn / 100 / 12;
      const grossMonthlyRate = inputs.expectedReturn / 100 / 12;
      const months = years * 12;

      if (inputs.returnType === 'compound') {
        finalValue = inputs.monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate);
        grossValue = inputs.monthlyAmount * (Math.pow(1 + grossMonthlyRate, months) - 1) / grossMonthlyRate * (1 + grossMonthlyRate);
      } else {
        const simpleReturn = inputs.monthlyAmount * months * (1 + (netReturn / 100 * years) / (2 * months));
        finalValue = simpleReturn;
        grossValue = inputs.monthlyAmount * months * (1 + (inputs.expectedReturn / 100 * years) / (2 * months));
      }
    }

    const expenseCost = grossValue - finalValue;
    const netReturns = finalValue - totalInvested;

    setResults({
      finalValue,
      totalInvested,
      netReturns,
      expenseCost
    });
  };

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Mutual Fund Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Calculate returns with expense ratio consideration
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Investment Type</Label>
              <Select value={inputs.investmentType} onValueChange={(value) => setInputs({ ...inputs, investmentType: value })}>
                <SelectTrigger className="bg-pearl border-gold/30 text-velvet mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-pearl border-gold/30">
                  <SelectItem value="lumpsum">Lump Sum</SelectItem>
                  <SelectItem value="sip">Systematic Investment Plan (SIP)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {inputs.investmentType === 'lumpsum' ? (
              <div>
                <Label className="text-velvet">Investment Amount (AED)</Label>
                <Input
                  type="number"
                  value={inputs.amount}
                  onChange={(e) => setInputs({ ...inputs, amount: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                />
              </div>
            ) : (
              <div>
                <Label className="text-velvet">Monthly Investment (AED)</Label>
                <Input
                  type="number"
                  value={inputs.monthlyAmount}
                  onChange={(e) => setInputs({ ...inputs, monthlyAmount: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                />
              </div>
            )}

            <div>
              <Label className="text-velvet">Return Type</Label>
              <Select value={inputs.returnType} onValueChange={(value) => setInputs({ ...inputs, returnType: value })}>
                <SelectTrigger className="bg-pearl border-gold/30 text-velvet mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-pearl border-gold/30">
                  <SelectItem value="compound">Compound Returns</SelectItem>
                  <SelectItem value="simple">Simple Returns</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-velvet">Expected Annual Return (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expectedReturn}
                onChange={(e) => setInputs({ ...inputs, expectedReturn: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Expense Ratio (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expenseRatio}
                onChange={(e) => setInputs({ ...inputs, expenseRatio: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                Annual fund management charges
              </p>
            </div>

            <div>
              <Label className="text-velvet">Investment Tenure (Years)</Label>
              <Input
                type="number"
                value={inputs.tenure}
                onChange={(e) => setInputs({ ...inputs, tenure: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            {/* Risk Disclaimer */}
            <div className="bg-gold/10 p-4 rounded border border-gold/30">
              <p className="text-xs text-velvet/70">
                <strong className="text-gold-dark">Risk Disclaimer:</strong> Mutual fund investments are subject to market risks.
                Past performance does not guarantee future results. This calculator provides estimates only.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Expected Final Value (After Expenses)</div>
              <div className="text-4xl font-bold text-white">
                AED {results.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Invested</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Net Returns</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.netReturns.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30 col-span-2">
                <div className="text-gold-dark text-xs mb-1">Total Expense Cost</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.expenseCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gold-dark mt-1">
                  Impact of {inputs.expenseRatio}% expense ratio over {inputs.tenure} years
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Investment Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-velvet/70 text-sm">Principal Amount</span>
                  <span className="text-velvet font-semibold">
                    AED {results.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-velvet/70 text-sm">Gross Returns</span>
                  <span className="text-velvet font-semibold">
                    AED {(results.netReturns + results.expenseCost).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-red-400">
                  <span className="text-sm">- Expense Charges</span>
                  <span className="font-semibold">
                    AED {results.expenseCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="border-t border-gold/30 pt-3 flex justify-between items-center">
                  <span className="text-velvet/70 text-sm font-bold">Net Returns</span>
                  <span className="text-velvet font-bold text-lg">
                    AED {results.netReturns.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button
                  variant="outline"
                  className="border-gold/30 text-velvet hover:bg-gold-dark"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ChildEducationCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    currentCost: 100000,
    yearsToGoal: 15,
    inflationPreset: 'uae',
    customInflation: 4,
    expectedReturn: 8
  });

  const inflationRate = inputs.inflationPreset === 'uae' ? 4
    : inputs.inflationPreset === 'india' ? 7
    : inputs.customInflation;

  const [results, setResults] = useState({
    futureCost: 0,
    monthlySip: 0,
    totalInvested: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const years = inputs.yearsToGoal;
    const futureCost = inputs.currentCost * Math.pow(1 + inflationRate / 100, years);

    const monthlyRate = inputs.expectedReturn / 100 / 12;
    const months = years * 12;
    const monthlySip = monthlyRate === 0
      ? futureCost / months
      : futureCost / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

    setResults({
      futureCost,
      monthlySip,
      totalInvested: monthlySip * months
    });
  };

  const chartData = Array.from({ length: inputs.yearsToGoal + 1 }, (_, i) => ({
    year: `Year ${i}`,
    cost: Math.round(inputs.currentCost * Math.pow(1 + inflationRate / 100, i))
  }));

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Child Education Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Plan for future education costs adjusted for inflation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Current Annual Education Cost (AED)</Label>
              <Input
                type="number"
                value={inputs.currentCost}
                onChange={(e) => setInputs({ ...inputs, currentCost: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Years Until Goal</Label>
              <Input
                type="number"
                value={inputs.yearsToGoal}
                onChange={(e) => setInputs({ ...inputs, yearsToGoal: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Education Inflation Rate</Label>
              <Select value={inputs.inflationPreset} onValueChange={(value) => setInputs({ ...inputs, inflationPreset: value })}>
                <SelectTrigger className="bg-pearl border-gold/30 text-velvet mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-pearl border-gold/30">
                  <SelectItem value="uae">UAE (approx. 4% p.a. estimate)</SelectItem>
                  <SelectItem value="india">India (approx. 7% p.a. estimate)</SelectItem>
                  <SelectItem value="custom">Enter Manually</SelectItem>
                </SelectContent>
              </Select>
              {inputs.inflationPreset === 'custom' && (
                <Input
                  type="number"
                  step="0.1"
                  value={inputs.customInflation}
                  onChange={(e) => setInputs({ ...inputs, customInflation: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                  placeholder="Custom inflation rate (%)"
                />
              )}
              <p className="text-xs text-gold-dark mt-1">
                Using {inflationRate}% p.a. — indicative estimate, editable at any time
              </p>
            </div>

            <div>
              <Label className="text-velvet">Expected Investment Return (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expectedReturn}
                onChange={(e) => setInputs({ ...inputs, expectedReturn: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div className="bg-gold/10 p-4 rounded border border-gold/30">
              <p className="text-xs text-velvet/70">
                <strong className="text-gold-dark">Disclaimer:</strong> Inflation and return figures are indicative
                estimates for illustration purposes only, not official statistics. Actual education costs and
                investment returns may vary. Please consult a licensed advisor for personalized planning.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Future Education Cost</div>
              <div className="text-4xl font-bold text-white">
                AED {results.futureCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Required Monthly SIP</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.monthlySip.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Total Invested</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Cost Growth Over Time</h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="year" stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#B8952E" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FEFCF8', border: '1px solid #B8952E' }}
                    labelStyle={{ color: '#7A0F16' }}
                  />
                  <Line type="monotone" dataKey="cost" stroke="#B8952E" strokeWidth={2} dot={{ fill: '#B8952E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RetirementCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    currentAge: 35,
    retirementAge: 60,
    monthlyExpenseToday: 15000,
    inflationPreset: 'uae',
    customInflation: 4,
    expectedReturn: 8,
    yearsInRetirement: 20
  });

  const inflationRate = inputs.inflationPreset === 'uae' ? 4
    : inputs.inflationPreset === 'india' ? 7
    : inputs.customInflation;

  const [results, setResults] = useState({
    monthlyExpenseAtRetirement: 0,
    corpusRequired: 0,
    monthlySip: 0,
    totalInvested: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const yearsToRetirement = Math.max(inputs.retirementAge - inputs.currentAge, 0);
    const monthlyExpenseAtRetirement = inputs.monthlyExpenseToday * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    const annualExpenseAtRetirement = monthlyExpenseAtRetirement * 12;

    const postRetirementReturn = Math.max(inputs.expectedReturn / 100 - inflationRate / 100, 0.01);
    const corpusRequired = annualExpenseAtRetirement * ((1 - Math.pow(1 + postRetirementReturn, -inputs.yearsInRetirement)) / postRetirementReturn);

    const monthlyRate = inputs.expectedReturn / 100 / 12;
    const months = yearsToRetirement * 12;
    const monthlySip = months <= 0 ? 0 : (monthlyRate === 0
      ? corpusRequired / months
      : corpusRequired / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)));

    setResults({
      monthlyExpenseAtRetirement,
      corpusRequired,
      monthlySip,
      totalInvested: monthlySip * months
    });
  };

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Retirement Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Estimate your retirement corpus adjusted for inflation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-velvet">Current Age</Label>
                <Input
                  type="number"
                  value={inputs.currentAge}
                  onChange={(e) => setInputs({ ...inputs, currentAge: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                />
              </div>
              <div>
                <Label className="text-velvet">Retirement Age</Label>
                <Input
                  type="number"
                  value={inputs.retirementAge}
                  onChange={(e) => setInputs({ ...inputs, retirementAge: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                />
              </div>
            </div>

            <div>
              <Label className="text-velvet">Current Monthly Expenses (AED)</Label>
              <Input
                type="number"
                value={inputs.monthlyExpenseToday}
                onChange={(e) => setInputs({ ...inputs, monthlyExpenseToday: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Retirement / General Inflation Rate</Label>
              <Select value={inputs.inflationPreset} onValueChange={(value) => setInputs({ ...inputs, inflationPreset: value })}>
                <SelectTrigger className="bg-pearl border-gold/30 text-velvet mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-pearl border-gold/30">
                  <SelectItem value="uae">UAE (approx. 4% p.a. estimate)</SelectItem>
                  <SelectItem value="india">India (approx. 7% p.a. estimate)</SelectItem>
                  <SelectItem value="custom">Enter Manually</SelectItem>
                </SelectContent>
              </Select>
              {inputs.inflationPreset === 'custom' && (
                <Input
                  type="number"
                  step="0.1"
                  value={inputs.customInflation}
                  onChange={(e) => setInputs({ ...inputs, customInflation: Number(e.target.value) })}
                  className="bg-pearl border-gold/30 text-velvet mt-2"
                  placeholder="Custom inflation rate (%)"
                />
              )}
              <p className="text-xs text-gold-dark mt-1">
                Using {inflationRate}% p.a. — indicative estimate, editable at any time
              </p>
            </div>

            <div>
              <Label className="text-velvet">Expected Investment Return (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expectedReturn}
                onChange={(e) => setInputs({ ...inputs, expectedReturn: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Years in Retirement</Label>
              <Input
                type="number"
                value={inputs.yearsInRetirement}
                onChange={(e) => setInputs({ ...inputs, yearsInRetirement: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div className="bg-gold/10 p-4 rounded border border-gold/30">
              <p className="text-xs text-velvet/70">
                <strong className="text-gold-dark">Disclaimer:</strong> Inflation and return figures are indicative
                estimates for illustration purposes only, not official statistics. Actual retirement needs and
                investment returns may vary. Please consult a licensed advisor for personalized planning.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Retirement Corpus Required</div>
              <div className="text-4xl font-bold text-white">
                AED {results.corpusRequired.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Monthly Expense at Retirement</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.monthlyExpenseAtRetirement.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30">
                <div className="text-gold-dark text-xs mb-1">Required Monthly SIP</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.monthlySip.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="bg-pearl p-4 rounded border border-gold/30 col-span-2">
                <div className="text-gold-dark text-xs mb-1">Total Invested Until Retirement</div>
                <div className="text-xl font-bold text-velvet">
                  AED {results.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function OffPlanCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    propertyValue: 1500000,
    expectedAppreciation: 20,
    yearsToCompletion: 3,
    annualMaintenanceCharge: 15000,
    govtCharges: 4,
    otherCharges: 10000
  });

  const [results, setResults] = useState({
    futureValue: 0,
    grossGain: 0,
    totalMaintenance: 0,
    govtChargesAmount: 0,
    totalExpenses: 0,
    netGain: 0,
    netReturnPct: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const futureValue = inputs.propertyValue * Math.pow(1 + inputs.expectedAppreciation / 100, inputs.yearsToCompletion / 1);
    const grossGain = futureValue - inputs.propertyValue;

    const totalMaintenance = inputs.annualMaintenanceCharge * inputs.yearsToCompletion;
    const govtChargesAmount = inputs.propertyValue * (inputs.govtCharges / 100);
    const totalExpenses = totalMaintenance + govtChargesAmount + inputs.otherCharges;

    const netGain = grossGain - totalExpenses;
    const netReturnPct = (netGain / inputs.propertyValue) * 100;

    setResults({
      futureValue,
      grossGain,
      totalMaintenance,
      govtChargesAmount,
      totalExpenses,
      netGain,
      netReturnPct
    });
  };

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Off-Plan Investment Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Estimate gross and net returns on off-plan property investments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Property Value (AED)</Label>
              <Input
                type="number"
                value={inputs.propertyValue}
                onChange={(e) => setInputs({ ...inputs, propertyValue: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Expected Appreciation on Handover (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.expectedAppreciation}
                onChange={(e) => setInputs({ ...inputs, expectedAppreciation: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Years to Completion / Handover</Label>
              <Input
                type="number"
                value={inputs.yearsToCompletion}
                onChange={(e) => setInputs({ ...inputs, yearsToCompletion: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Annual Maintenance / Service Charge (AED)</Label>
              <Input
                type="number"
                value={inputs.annualMaintenanceCharge}
                onChange={(e) => setInputs({ ...inputs, annualMaintenanceCharge: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                As charged by the developer / owners' association — enter manually per project
              </p>
            </div>

            <div>
              <Label className="text-velvet">Government Charges (% of Property Value)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.govtCharges}
                onChange={(e) => setInputs({ ...inputs, govtCharges: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                E.g. DLD registration fee — enter the applicable rate manually
              </p>
            </div>

            <div>
              <Label className="text-velvet">Other Charges (AED)</Label>
              <Input
                type="number"
                value={inputs.otherCharges}
                onChange={(e) => setInputs({ ...inputs, otherCharges: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                Agency, admin, NOC or other one-off fees
              </p>
            </div>

            <div className="bg-gold/10 p-4 rounded border border-gold/30">
              <p className="text-xs text-velvet/70">
                <strong className="text-gold-dark">Disclaimer:</strong> This illustration is for educational and
                understanding purposes only. Actual gross and net returns may vary based on differences in developer
                service charges, government fees, market conditions, and other additional costs not entered here.
                Please consult a licensed advisor before making an investment decision.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Net Return (After Expenses)</div>
              <div className="text-4xl font-bold text-white">
                AED {results.netGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-white/80 text-sm mb-1">Net Return %</div>
                <div className="text-3xl font-bold text-white">
                  {results.netReturnPct.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Gross vs. Net Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-velvet/70 text-sm">Estimated Future Value</span>
                  <span className="text-velvet font-semibold">
                    AED {results.futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-velvet/70 text-sm">Gross Return</span>
                  <span className="text-velvet font-semibold">
                    AED {results.grossGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-red-400">
                  <span className="text-sm">- Maintenance Charges</span>
                  <span className="font-semibold">
                    AED {results.totalMaintenance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-red-400">
                  <span className="text-sm">- Government Charges</span>
                  <span className="font-semibold">
                    AED {results.govtChargesAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-red-400">
                  <span className="text-sm">- Other Charges</span>
                  <span className="font-semibold">
                    AED {inputs.otherCharges.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="border-t border-gold/30 pt-3 flex justify-between items-center">
                  <span className="text-velvet/70 text-sm font-bold">Net Return</span>
                  <span className="text-velvet font-bold text-lg">
                    AED {results.netGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RentalYieldCalculator({ onShowLeadCapture }: { onShowLeadCapture: () => void }) {
  const [inputs, setInputs] = useState({
    propertyValue: 1200000,
    annualRent: 84000,
    annualMaintenanceCharge: 12000,
    govtCharges: 4,
    otherCharges: 5000
  });

  const [results, setResults] = useState({
    grossYield: 0,
    totalExpenses: 0,
    netIncome: 0,
    netYield: 0
  });

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const grossYield = (inputs.annualRent / inputs.propertyValue) * 100;
    const govtChargesAmount = inputs.propertyValue * (inputs.govtCharges / 100);
    const totalExpenses = inputs.annualMaintenanceCharge + govtChargesAmount + inputs.otherCharges;
    const netIncome = inputs.annualRent - totalExpenses;
    const netYield = (netIncome / inputs.propertyValue) * 100;

    setResults({
      grossYield,
      totalExpenses,
      netIncome,
      netYield
    });
  };

  return (
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-velvet">Rental Yield Calculator</CardTitle>
        <CardDescription className="text-velvet/70">
          Estimate gross and net rental yield after annual expenses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-velvet">Property Value (AED)</Label>
              <Input
                type="number"
                value={inputs.propertyValue}
                onChange={(e) => setInputs({ ...inputs, propertyValue: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Expected Annual Rent (AED)</Label>
              <Input
                type="number"
                value={inputs.annualRent}
                onChange={(e) => setInputs({ ...inputs, annualRent: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
            </div>

            <div>
              <Label className="text-velvet">Annual Maintenance / Service Charge (AED)</Label>
              <Input
                type="number"
                value={inputs.annualMaintenanceCharge}
                onChange={(e) => setInputs({ ...inputs, annualMaintenanceCharge: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                As charged by the developer / owners' association — enter manually per project
              </p>
            </div>

            <div>
              <Label className="text-velvet">Government Charges (% of Property Value)</Label>
              <Input
                type="number"
                step="0.1"
                value={inputs.govtCharges}
                onChange={(e) => setInputs({ ...inputs, govtCharges: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                E.g. municipality / Ejari or other annual government fees — enter applicable rate manually
              </p>
            </div>

            <div>
              <Label className="text-velvet">Other Annual Charges (AED)</Label>
              <Input
                type="number"
                value={inputs.otherCharges}
                onChange={(e) => setInputs({ ...inputs, otherCharges: Number(e.target.value) })}
                className="bg-pearl border-gold/30 text-velvet mt-2"
              />
              <p className="text-xs text-gold-dark mt-1">
                Property management, insurance, vacancy allowance, or other recurring costs
              </p>
            </div>

            <div className="bg-gold/10 p-4 rounded border border-gold/30">
              <p className="text-xs text-velvet/70">
                <strong className="text-gold-dark">Disclaimer:</strong> This illustration is for educational and
                understanding purposes only. Actual gross and net rental yields may vary based on differences in
                developer service charges, government fees, occupancy rates, and other additional costs not entered
                here. Please consult a licensed advisor before making an investment decision.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gold p-6 rounded-lg">
              <div className="text-white/80 text-sm mb-1">Net Rental Yield</div>
              <div className="text-4xl font-bold text-white">
                {results.netYield.toFixed(2)}%
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-white/80 text-sm mb-1">Gross Rental Yield</div>
                <div className="text-3xl font-bold text-white">
                  {results.grossYield.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="bg-pearl p-4 rounded border border-gold/30">
              <h4 className="text-velvet mb-4">Gross vs. Net Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-velvet/70 text-sm">Annual Rental Income</span>
                  <span className="text-velvet font-semibold">
                    AED {inputs.annualRent.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-red-400">
                  <span className="text-sm">- Total Annual Expenses</span>
                  <span className="font-semibold">
                    AED {results.totalExpenses.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="border-t border-gold/30 pt-3 flex justify-between items-center">
                  <span className="text-velvet/70 text-sm font-bold">Net Annual Income</span>
                  <span className="text-velvet font-bold text-lg">
                    AED {results.netIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={onShowLeadCapture}
                className="w-full bg-velvet hover:bg-velvet-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full PDF Report
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Advisor
                </Button>
                <Button variant="outline" className="border-gold/30 text-velvet hover:bg-gold-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
