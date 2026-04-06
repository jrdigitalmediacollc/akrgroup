"use client";

import { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Building2, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useRouter } from 'next/navigation';
import { ServicesSection } from "@/app/components/service-components";
import { WhyAkrSection } from "@/app/components/why-akr-section";
import { ProcessSection } from "@/app/components/process-section";
import { TrustComplianceSection } from "@/app/components/trust-compliance-section";
import { CTASection } from "@/app/components/cta-section";
export function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">

      {/* Hero Section */}

{/* Hero Section */}
<section className="relative min-h-[500px] flex items-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    
    {/* Layer 1: Image */}
    <img
      src="/bg-img.jpeg"
      alt="Luxury Dubai Property"
      className="w-full h-full object-cover absolute inset-0"
    />
    
    {/* Layer 2: Strong amber multiply blend */}
    <div className="absolute inset-0 bg-amber-600 mix-blend-multiply opacity-80" />
    
    {/* Layer 3: Extra warm orange on top */}
    <div className="absolute inset-0 bg-orange-800 mix-blend-color opacity-50" />

    {/* Layer 4: Dark left for text */}
    <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(30,5,0,0.85) 0%, rgba(30,5,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'}} />

  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-12 py-24 w-full">
    <div className="max-w-xl">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
        Trusted Strategic Real Estate,  <br />Financial & Investment Advisory
      </h1>
      <p className="text-amber-300 text-lg mb-8 italic">
        Guiding You to the Right Investment
      </p>
      <button
        onClick={() => router.push('/contact')}
        className="border-2 border-amber-500 text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-3 text-sm font-semibold tracking-wide transition-all"
      >
           Explore Opportunities
      </button>
       <button
        onClick={() => router.push('/contact')}
        className="border-2 border-amber-500 text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-3 text-sm font-semibold tracking-wide transition-all"
      >
           Speak To an Advisor
      </button>
    </div>
  </div>
</section>
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
            Trusted Strategic Real Estate,  <br />Financial & Investment Advisory
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Delivering integrated, compliant, and high-value solutions across UAE’s real estate and financial landscape for discerning clients.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => router.push('/calculators')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Explore Opportunities
            </Button>
            <Button
              size="lg"
              onClick={() => router.push('/properties')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="relative overflow-hidden py-20 px-10" style={{background: 'linear-gradient(135deg, #3a0f08 0%, #5a1810 50%, #4a1208 100%)'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <span className="inline-block border border-amber-600 bg-amber-900/30 text-amber-400 text-xs tracking-widest px-4 py-1.5 uppercase mb-6">
            About AKR Group UAE
          </span>
          <h2 className="text-4xl font-bold text-amber-100 leading-snug mb-4">
            Multi-Sector Advisory<br />
            <span className="text-amber-400">Built for UAE</span>
          </h2>
          <div className="w-14 h-0.5 bg-amber-600 mb-7" />
          <p className="text-amber-200/80 text-base leading-relaxed mb-8">
            AKR Group UAE is a multi-sector advisory firm combining real estate, finance, insurance, 
            and strategic marketing into one unified platform.<br /><br />
            With 25+ years of collective expertise and deep-rooted UAE market knowledge, we provide 
            confidential, insight-driven advisory services tailored for investors, business owners, 
            and high-net-worth individuals.
          </p>
          <div className="border-l-4 border-amber-500 pl-5 py-3 bg-amber-500/10 italic text-amber-300 text-lg">
            One Partner. Complete Advisory. Measurable Value.
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {[{num: '25+', label: 'Years of Expertise'}, {num: '4', label: 'Advisory Sectors'}].map((s) => (
              <div key={s.label} className="border border-amber-700/40 bg-white/5 p-6 border-l-2 border-l-amber-600">
                <div className="text-4xl font-bold text-amber-400">{s.num}</div>
                <div className="text-xs text-amber-700 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          {[
            {title: 'Real Estate', desc: 'Premium property advisory & investment'},
            {title: 'Finance', desc: 'Structured financial planning & solutions'},
            {title: 'Insurance', desc: 'Comprehensive risk & asset protection'},
            {title: 'Marketing', desc: 'Strategic growth & brand positioning'},
          ].map((p) => (
            <div key={p.title} className="flex items-center gap-4 p-4 border border-amber-700/25 bg-white/[0.03]">
              <div className="w-9 h-9 rounded-full bg-amber-700/30 border border-amber-600/50 flex items-center justify-center shrink-0">
                <span className="text-amber-400 text-xs font-bold">{p.title[0]}</span>
              </div>
              <div className="text-sm text-amber-200/80">
                <strong className="text-amber-200">{p.title}</strong> — {p.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    {/* Services */}


  <div className="text-center mb-16">
    <span className="inline-block border border-amber-600 bg-amber-900/20 text-amber-400 text-xs tracking-widest px-4 py-1.5 uppercase mb-5">
      What We Offer
    </span>
    <h2 className="text-4xl font-bold text-amber-100 font-serif mb-3">
      Our <span className="text-amber-400">Premium</span> Services
    </h2>
    <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-4" />
    <p className="text-amber-800 text-sm max-w-lg mx-auto leading-relaxed">
      Three powerful pillars of advisory — unified under one trusted partner across the UAE.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
    {[
      {
        sector: "Sector A",
        title: "Real Estate Advisory",
        location: "Dubai — AKR Realty LLC",
        overview: "End-to-end property advisory aligned with Dubai's regulatory standards.",
        image: "/realestate.jpg",
        items: ["Buy | Sell | Lease — Residential & Commercial", "Off-Plan Investment Opportunities", "Distress Property Solutions", "Portfolio Structuring"],
        compliance: "Regulated by Real Estate Regulatory Agency & Dubai Land Department",
      },
      {
        sector: "Sector B",
        title: "Financial & Insurance Advisory",
        location: "Sharjah — SHAMS Licensed",
        overview: "Structured financial solutions supporting asset growth and protection.",
        image: "/financial.jpg",
        items: ["Mortgage Loans", "Personal Loans & Credit Cards", "Life, Medical, Motor & Home Insurance", "Mortgage Protection", "Mutual Fund Analysis", "Risk Assessment & Financial Structuring"],
        compliance: "Licensed under Sharjah Media City — Non-custodial advisory services",
      },
      {
        sector: "Sector C",
        title: "Marketing & Business Solutions",
        location: "UAE-Wide Coverage",
        overview: "Driving visibility, engagement, and revenue growth for businesses across the UAE.",
        image: "/marketing.jpg",
        items: ["Events Production & Brand Activation", "Marketing Campaigns & Promotions", "Digital & Social Media Marketing", "Direct & Email Marketing"],
        compliance: "Strategic growth partner for businesses & high-net-worth individuals",
      },
    ].map((s) => (
      <div key={s.sector} className="bg-[#3a0f08] hover:bg-[#4a1810] transition-colors flex flex-col border border-amber-700/20">
        <div className="h-48 w-full overflow-hidden bg-amber-900/30 relative">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover brightness-75" />
        </div>
        <div className="h-0.5 bg-amber-600" />
        <div className="p-7 flex flex-col flex-1">
          <span className="text-amber-500 text-xs tracking-widest uppercase mb-2">{s.sector}</span>
          <h3 className="text-xl font-bold text-amber-100 mb-1">{s.title}</h3>
          <p className="text-amber-600 text-xs tracking-wide mb-3">{s.location}</p>
          <p className="text-amber-200/60 text-sm leading-relaxed mb-5">{s.overview}</p>
          <ul className="flex flex-col gap-2 mb-5">
            {s.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-amber-200/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-l-2 border-amber-600 pl-3 py-2 text-xs text-amber-700 leading-relaxed">
            <span className="text-amber-600 font-semibold">Note: </span>{s.compliance}
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="max-w-6xl mx-auto mt-6 border border-amber-700/25 bg-amber-500/5 px-10 py-7 flex items-center justify-between gap-6">
    <p className="font-serif text-lg text-amber-100 italic">
      Ready to explore our services? <span className="text-amber-400">Let's build your strategy.</span>
    </p>
    <button className="bg-amber-600 hover:bg-amber-500 text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors whitespace-nowrap">
      Book a Consultation
    </button>
  </div>

      {/* Quick Calculator Section */}
      <section className="bg-linear-to-b from-[#5a1810] to-[#4a1810] py-12 border-y-2 border-amber-600">
        <div className="max-w-5xl mx-auto px-4">
          <MortgageCalculatorQuick />
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20 bg-linear-to-b from-[#2a0808] to-[#3a1010]">
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
      </section> */}

        {/* Why Choose Us */}
     
{<WhyAkrSection /> }

{/* Processes */}
{ <ProcessSection /> }

{/* Trust */}
{ <TrustComplianceSection /> }

      {/* CTA Section */}
     {<CTASection /> }
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