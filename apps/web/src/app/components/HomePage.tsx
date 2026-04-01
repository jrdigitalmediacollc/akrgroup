"use client";

import { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Building2, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useRouter } from 'next/navigation';

export function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#2a0808]/95 via-[#3a1010]/90 to-[#2a0808]/95 z-10" />
          <img
            src="/banner.jpg"
            alt="Luxury Dubai Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-100 mb-6 tracking-wide">
            ALI RAZA FINANCIAL &<br />REAL ESTATE ADVISORY
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Expert guidance for your investment journey in the UAE
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => router.push('/calculators')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Try Our Calculators
            </Button>
            <Button
              size="lg"
              onClick={() => router.push('/properties')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Calculator Section */}
      <section className="bg-linear-to-b from-[#5a1810] to-[#4a1810] py-12 border-y-2 border-amber-600">
        <div className="max-w-5xl mx-auto px-4">
          <MortgageCalculatorQuick />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-linear-to-b from-[#2a0808] to-[#3a1010]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Our Services</h2>
            <p className="text-xl text-amber-200">Comprehensive advisory solutions for your financial goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Calculator className="w-8 h-8" />}
              title="Advanced Calculators"
              description="Mortgage, ROI, and investment calculators with XIRR analysis"
              onClick={() => router.push('/calculators')}
            />
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Real Estate Advisory"
              description="Expert guidance on property investments and market insights"
              onClick={() => router.push('/properties')}
            />
            <ServiceCard
              icon={<DollarSign className="w-8 h-8" />}
              title="Financial Planning"
              description="Comprehensive financial advisory services tailored to your needs"
              onClick={() => router.push('/calculators')}
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Investment Analysis"
              description="ROI calculations and portfolio performance tracking"
              onClick={() => router.push('/calculators')}
            />
            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Regulatory Compliance"
              description="Fully compliant with RERA, Central Bank, and Insurance Authority"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Expert Advisors"
              description="Dedicated professionals to guide your investment decisions"
              onClick={() => router.push('/contact')}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-linear-to-b from-[#3a1010] to-[#2a0808]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Why Choose AKR Group UAE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#4a1810] p-8 rounded-lg border-2 border-amber-700 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-3">Licensed & Regulated</h3>
              <p className="text-amber-200">
                Fully compliant with UAE regulatory authorities including RERA and Central Bank
              </p>
            </div>

            <div className="bg-[#4a1810] p-8 rounded-lg border-2 border-amber-700 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-3">Expert Advisors</h3>
              <p className="text-amber-200">
                Experienced professionals dedicated to your financial success
              </p>
            </div>

            <div className="bg-[#4a1810] p-8 rounded-lg border-2 border-amber-700 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-3">Data-Driven Insights</h3>
              <p className="text-amber-200">
                Advanced analytics and calculators to inform your investment decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-amber-800 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Speak with one of our expert advisors today
          </p>
          <Button
            size="lg"
            onClick={() => router.push('/contact')}
            className="bg-[#3a1010] hover:bg-[#2a0808] text-amber-100 px-8 py-6 text-lg"
          >
            Contact an Advisor
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <Card
      className="bg-[#4a1810] border-2 border-amber-700 hover:border-amber-500 transition-all cursor-pointer group"
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-amber-100 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-amber-200">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function MortgageCalculatorQuick() {
  const router = useRouter();
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [downPayment, setDownPayment] = useState(250000);
  const [loanRate, setLoanRate] = useState(4.5);
  const [loanTenure, setLoanTenure] = useState(300);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [propertyValue, downPayment, loanRate, loanTenure]);

  const calculateEMI = () => {
    const principal = propertyValue - downPayment;
    const monthlyRate = loanRate / 100 / 12;
    const months = loanTenure;

    if (monthlyRate === 0) {
      setEmi(principal / months);
    } else {
      const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiValue);
    }
  };

  return (
    <Card className="bg-linear-to-br from-[#3a1010] to-[#4a1810] border-2 border-amber-600">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-amber-100">Mortgage Calculator</CardTitle>
        <CardDescription className="text-amber-200">Get an instant estimate of your monthly payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-amber-100 mb-2">Property Value (AED)</label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#2a0808] border border-amber-700 rounded text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-amber-100 mb-2">Down Payment (AED)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#2a0808] border border-amber-700 rounded text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-amber-100 mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={loanRate}
                onChange={(e) => setLoanRate(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#2a0808] border border-amber-700 rounded text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-amber-100 mb-2">Loan Tenure (Months)</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#2a0808] border border-amber-700 rounded text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-amber-600 p-8 rounded-lg text-center">
              <div className="text-white/80 mb-2">Estimated Monthly EMI</div>
              <div className="text-4xl font-bold text-white mb-4">
                AED {emi.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-white/90 mb-6">
                Loan Amount: AED {(propertyValue - downPayment).toLocaleString('en-US')}
              </div>
              <Button
                onClick={() => router.push('/calculators')}
                className="bg-[#3a1010] hover:bg-[#2a0808] text-amber-100 w-full"
              >
                View Detailed Report
              </Button>
            </div>
            <p className="text-xs text-amber-300 mt-4 text-center">
              * This is an indicative calculation. Final terms subject to lender approval.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
