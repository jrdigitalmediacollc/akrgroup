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
    {/* Video Background */}
    <iframe
  className="absolute inset-0 w-full h-full pointer-events-none"
  src="https://www.youtube.com/embed/6N-WrDHtUf8?autoplay=1&mute=1&loop=1&playlist=6N-WrDHtUf8&controls=0&showinfo=0&rel=0"
  allow="autoplay; fullscreen"
  frameBorder="0"
  style={{ transform: 'scale(1.5)' }}
/>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 z-10" />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-12 py-24 w-full">
    <div className="max-w-xl">
     
      <p className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
        Trusted Strategic,<br />
        Real Estate,<br />
        Financial &<br />
        Investment Architects
      </p>
      <p className="text-gold-dark text-lg mb-8 italic">
        Forward Together. For Life. For Legacy
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => router.push('/contact')}
          className="border-2 border-gold text-white hover:bg-gold hover:border-gold px-8 py-3 text-sm font-semibold tracking-wide transition-all"
        >
          Explore Opportunities
        </button>
        <button
          onClick={() => router.push('/contact')}
          className="border-2 border-gold text-white hover:bg-gold hover:border-gold px-8 py-3 text-sm font-semibold tracking-wide transition-all"
        >
          Speak To an Advisor
        </button>
      </div>
    </div>
  </div>
</section>

{/* Golden Services Section */}
<section className="relative py-14 px-10 overflow-hidden">
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Title */}
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="flex-1 max-w-[120px] h-0.5" style={{ background: "linear-gradient(to right, transparent, #7A0F16)" }} />
      <div
        className="px-12 py-2.5 border-2 border-gold/40"
        style={{
          background: "linear-gradient(180deg, #7A0F16 0%, #5C0B10 100%)",
          clipPath: "polygon(14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0% 50%)"
        }}
      >
        <span className="text-gold-light font-bold tracking-[3px] uppercase text-lg font-serif">Our Services</span>
      </div>
      <div className="flex-1 max-w-[120px] h-0.5" style={{ background: "linear-gradient(to left, transparent, #7A0F16)" }} />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-11">
      {[
        { title: "Property Consulting", desc: "Personalized property advice", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h8v1H8v-1zm0 3h8v1H8v-1zm0-6h3v1H8v-1z" },
        { title: "Investment Advisory", desc: "Strategic investment solutions", icon: "M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM12 1L2 6v2h20V6L12 1z" },
        { title: "Real Estate Management", desc: "Comprehensive property management", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10" },
      ].map((s) => (
        <div key={s.title} className="border-2 border-gold p-[3px]"
          style={{ background: "linear-gradient(170deg, #7A0F16 0%, #5C0B10 100%)" }}>
          {/* Middle border layer */}
          <div className="border border-gold/50 p-[3px] h-full">
            {/* Inner border layer with corner ornaments */}
            <div className="border border-gold/25 p-7 text-center flex flex-col items-center h-full relative">
              {/* Corner ornaments */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-gold" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-gold" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-gold" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-gold" />

              <svg className="w-14 h-14 fill-gold mb-4" viewBox="0 0 24 24">
                <path d={s.icon} />
              </svg>
              <h3 className="text-gold-light font-bold text-base font-serif mb-2">{s.title}</h3>
              <p className="text-white/80 text-xs mb-5 leading-relaxed font-sans">{s.desc}</p>

              {/* Button with dot ornaments */}
              <div className="mt-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <button className="border-2 border-gold text-gold-light text-xs tracking-widest uppercase px-6 py-2 hover:bg-gold/15 transition-colors font-sans">
                  View More
                </button>
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center">
      <h3 className="text-3xl font-bold font-serif italic mb-6" style={{ color: "#fff" }}>
        Let's Find Your Dream Property
      </h3>
      <button
        onClick={() => router.push('/contact')}
        className="border-2 border-gold/40 text-gold-light font-bold text-xs tracking-[3px] uppercase px-14 py-3 font-sans hover:opacity-90 transition-opacity"
        style={{
          background: "linear-gradient(180deg, #7A0F16 0%, #5C0B10 100%)",
          clipPath: "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)"
        }}
      >
        Schedule a Consultation
      </button>
    </div>

  </div>
</section>


      {/* Hero Section */}
      {/* {/* <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden"> */}
      
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#2a0808]/95 via-[#3a1010]/90 to-[#2a0808]/95 z-10" />
          <img
            src="/banner.jpg"
            alt="Luxury Dubai Property"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Content */}
        {/* <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-velvet mb-6 tracking-wide">
            Trusted Strategic Real Estate,  <br />Financial & Investment Advisory
          </h1>
          <p className="text-xl md:text-2xl text-velvet/70 mb-8 max-w-3xl mx-auto">
            Delivering integrated, compliant, and high-value solutions across UAE’s real estate and financial landscape for discerning clients.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => router.push('/calculators')}
              className="bg-velvet hover:bg-velvet-light text-white px-8 py-6 text-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Explore Opportunities
            </Button>
            <Button
              size="lg"
              onClick={() => router.push('/properties')}
              className="bg-velvet hover:bg-velvet-light text-white px-8 py-6 text-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </section> */}

      {/* About Section */}
   <section className="relative overflow-hidden py-20 px-10">
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 " />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Left */}
    <div>
      <div className="inline-block border border-[#7A0F16] bg-[#5C0B10]/60 text-[#E4C766] text-xs tracking-[3px] px-4 py-1.5 uppercase mb-6"
        style={{ clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)" }}>
        About AKR Group UAE
      </div>

      <h2 className="text-4xl font-bold leading-snug mb-4 font-serif" style={{ color: "#fff" }}>
        Multi-Sector Advisory<br />
        <span style={{ color: "#5C0B10" }}>Built for UAE</span>
      </h2>

      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-0.5" style={{ background: "#7A0F16" }} />
        <div className="w-2 h-2 rotate-45" style={{ background: "#B8952E" }} />
        <div className="w-10 h-0.5" style={{ background: "#7A0F16" }} />
      </div>

      <p className="text-base leading-relaxed mb-8" style={{ color: "#fff" }}>
        AKR Group UAE is a multi-sector advisory firm combining real estate, finance, insurance,
        and strategic marketing into one unified platform.<br /><br />
        Guided by vision and led by 25+ years of collective expertise and deep-rooted UAE market knowledge, we provide
        confidential, insight-driven advisory services tailored for investors, business owners,
        and high-net-worth individuals.
      </p>

      <div className="border-l-4 py-3 pl-5 pr-4"
        style={{ borderColor: "#7A0F16", background: "rgba(122,15,22,0.25)" }}>
        <p className="italic text-lg font-serif" style={{ color: "#fff" }}>
          One Partner. Complete Advisory. Measurable Value.
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-col gap-4">

      {/* Stat boxes */}
      <div className="grid grid-cols-2 gap-4">
        {[{num: '25+', label: 'Years of Expertise'}, {num: '4', label: 'Advisory Sectors'}].map((s) => (
          <div key={s.label}
            className="p-6 border-2 relative"
            style={{ borderColor: "#B8952E", background: "linear-gradient(170deg, #7A0F16 0%, #5C0B10 100%)" }}>
            {/* Corner ornaments */}
            <div className="absolute top-1 left-1 w-3 h-3 border-t border-l" style={{ borderColor: "#B8952E" }} />
            <div className="absolute top-1 right-1 w-3 h-3 border-t border-r" style={{ borderColor: "#B8952E" }} />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l" style={{ borderColor: "#B8952E" }} />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r" style={{ borderColor: "#B8952E" }} />
            <div className="text-4xl font-bold mb-1" style={{ color: "#E4C766" }}>{s.num}</div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "#B8952E" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pillar items */}
      {[
        {title: 'Real Estate', desc: 'Premium property advisory & investment'},
        {title: 'Finance', desc: 'Structured financial planning & solutions'},
        {title: 'Insurance', desc: 'Comprehensive risk & asset protection'},
        {title: 'Marketing', desc: 'Strategic growth & brand positioning'},
      ].map((p) => (
        <div key={p.title}
          className="flex items-center gap-4 p-4 border relative"
          style={{ borderColor: "rgba(184,149,46,0.3)", background: "rgba(122,15,22,0.35)" }}>
          <div className="w-9 h-9 flex items-center justify-center shrink-0 border-2 font-bold text-sm"
            style={{ borderColor: "#B8952E", background: "rgba(92,11,16,0.6)", color: "#E4C766" }}>
            {p.title[0]}
          </div>
          <div className="text-sm">
            <strong style={{ color: "#E4C766" }}>{p.title}</strong>
            <span style={{ color: "#fff" }}> — {p.desc}</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


    {/* Services */}
<section className="relative py-20 px-10 overflow-hidden">
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 " />
  </div>

  <div className="relative z-10">

    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block border border-[#7A0F16]  text-[#E4C766] text-xs tracking-[3px] px-4 py-1.5 uppercase mb-5"
        style={{ clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)" }}>
        What We Offer
      </div>
      <h2 className="text-4xl font-bold font-serif mb-3" style={{ color: "#7A0F16" }}>
        Our <span style={{ color: "#7A0F16" }}>Premium</span> Services
      </h2>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-0.5" style={{ background: "#7A0F16" }} />
        <div className="w-2 h-2 rotate-45" style={{ background: "#B8952E" }} />
        <div className="w-10 h-0.5" style={{ background: "#7A0F16" }} />
      </div>
      <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: "#7A0F16" }}>
        Three powerful pillars of advisory — unified under one trusted partner across the UAE.
      </p>
    </div>

    {/* Cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[
        {
          sector: "Sector A",
          title: "Real Estate Advisory",
          location: "Dubai — AKR Realty LLC",
          overview: "End-to-end property advisory aligned with Dubai's regulatory standards.",
          image: "/realestate.jpg",
          items: ["Buy | Sell  — Residential & Commercial", "Off-Plan Investment Opportunities", "Distress Property Solutions", "Portfolio Structuring"],
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
        <div key={s.sector}
          className="flex flex-col border-2 relative p-[3px] transition-opacity hover:opacity-95"
          style={{ borderColor: "#B8952E", background: "linear-gradient(170deg, #7A0F16 0%, #5C0B10 100%)" }}>
          {/* Corner ornaments */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l z-10" style={{ borderColor: "#B8952E" }} />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r z-10" style={{ borderColor: "#B8952E" }} />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l z-10" style={{ borderColor: "#B8952E" }} />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r z-10" style={{ borderColor: "#B8952E" }} />

          <div className="border flex flex-col flex-1" style={{ borderColor: "rgba(184,149,46,0.3)" }}>
            {/* Image */}
            <div className="h-48 w-full overflow-hidden relative">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover brightness-75" />
            </div>
            <div className="h-0.5" style={{ background: "#B8952E" }} />

            {/* Body */}
            <div className="p-7 flex flex-col flex-1">
              <span className="text-xs tracking-widest uppercase mb-2" style={{ color: "#B8952E" }}>{s.sector}</span>
              <h3 className="text-xl font-bold mb-1 font-serif" style={{ color: "#E4C766" }}>{s.title}</h3>
              <p className="text-xs tracking-wide mb-3" style={{ color: "#B8952E" }}>{s.location}</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(228,199,102,0.7)" }}>{s.overview}</p>

              <ul className="flex flex-col gap-2 mb-5">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: "rgba(228,199,102,0.8)" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#B8952E" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-l-2 pl-3 py-2 text-xs leading-relaxed" style={{ borderColor: "#B8952E", background: "rgba(184,149,46,0.08)" }}>
                <span className="font-semibold" style={{ color: "#B8952E" }}>Note: </span>
                <span style={{ color: "rgba(184,149,46,0.7)" }}>{s.compliance}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="max-w-6xl mx-auto mt-6 border px-10 py-7 flex items-center justify-between gap-6"
      style={{ borderColor: "rgba(184,149,46,0.3)", background: "rgba(122,15,22,0.4)" }}>
      <p className="font-serif text-lg italic" style={{ color: "#fff" }}>
        Ready to explore our services?{" "}
        <span style={{ color: "#E4C766" }}>Let's build your strategy.</span>
      </p>
      <button
        className="text-xs tracking-widest uppercase px-8 py-3 transition-opacity hover:opacity-90 whitespace-nowrap border-2 font-bold"
        style={{
          borderColor: "#7A0F16",
          background: "linear-gradient(180deg, #7A0F16 0%, #5C0B10 100%)",
          color: "#E4C766",
          clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)"
        }}
      >
        Book a Consultation
      </button>
    </div>

  </div>
</section>

    {/* Quick Calculator Section */}
    <section className="relative py-12 border-y-2 border-gold overflow-hidden">
  {/* Texture background */}
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 " />
  </div>
  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4">
    <MortgageCalculatorQuick />
  </div>
</section>

      {/* Services Section */}
      {/* <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-velvet mb-4">Our Services</h2>
            <p className="text-xl text-velvet/70">Comprehensive advisory solutions for your financial goals</p>
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
      className="bg-white border border-gold/30 hover:border-gold shadow-sm transition-all cursor-pointer group"
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-velvet text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-velvet/70">{description}</CardDescription>
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
    <Card className="bg-white border border-gold/30 shadow-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-velvet">Mortgage Calculator</CardTitle>
        <CardDescription className="text-velvet/70">Get an instant estimate of your monthly payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-velvet mb-2">Property Value (AED)</label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full px-4 py-3 bg-pearl border border-gold/30 rounded text-velvet focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-velvet mb-2">Down Payment (AED)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full px-4 py-3 bg-pearl border border-gold/30 rounded text-velvet focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-velvet mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={loanRate}
                onChange={(e) => setLoanRate(Number(e.target.value))}
                className="w-full px-4 py-3 bg-pearl border border-gold/30 rounded text-velvet focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-velvet mb-2">Loan Tenure (Months)</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full px-4 py-3 bg-pearl border border-gold/30 rounded text-velvet focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-gold p-8 rounded-lg text-center">
              <div className="text-white/80 mb-2">Estimated Monthly EMI</div>
              <div className="text-4xl font-bold text-white mb-4">
                AED {emi.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-white/90 mb-6">
                Loan Amount: AED {(propertyValue - downPayment).toLocaleString('en-US')}
              </div>
              <Button
                onClick={() => router.push('/calculators')}
                className="bg-velvet hover:bg-velvet-light text-white w-full"
              >
                View Detailed Report
              </Button>
            </div>
            <p className="text-xs text-gold-dark mt-4 text-center">
              * This is an indicative calculation. Final terms subject to lender approval.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}