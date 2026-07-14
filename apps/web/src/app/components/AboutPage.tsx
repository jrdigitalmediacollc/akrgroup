"use client";

import { Mail, Phone, Building2, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-pearl py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-velvet mb-4">About AKR Group UAE</h1>
          <p className="text-xl text-velvet/70 max-w-3xl mx-auto">
            Your trusted partner in financial and real estate advisory services across the United Arab Emirates
          </p>
        </div>

{/* Founder Message Section */}
<section className="relative py-20 px-10 overflow-hidden" style={{ background: "#5C0B10" }}>
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover opacity-[0.12]" />
    <div className="absolute inset-0 bg-[#5C0B10]/82" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Tag */}
    <div className="flex items-center gap-4 mb-12">
      <div className="w-10 h-px bg-gold" />
      <span className="text-gold-dark text-xs tracking-[3px] uppercase font-sans">Message from the Founder</span>
    </div>

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

      {/* Left — Founder card */}
      <div className="flex flex-col items-center">
        <div className="w-44 h-44 border-2 border-gold bg-gold/10 flex items-center justify-center mb-5 relative">
          <div className="absolute inset-1.5 border border-gold/30" />
          {/* Replace with founder photo if available */}
          <img src="/founder.jpg" alt="Founder" className="w-full h-full object-cover" 
            onError={(e) => { e.currentTarget.style.display='none'; }} />
          <span className="text-5xl font-bold text-gold-dark font-serif">AKR</span>
        </div>
        <div className="text-lg font-bold text-gold-dark font-serif text-center mb-1">Founder, AKR Group UAE</div>
        <div className="text-xs tracking-[2px] text-gold-dark uppercase font-sans text-center mb-6">Chairman & CEO</div>
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-px bg-gold/30" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="flex-1 h-px bg-gold/30" />
        </div>
      </div>

      {/* Right — Message */}
      <div>
        <span className="text-7xl leading-none text-gold-dark/20 font-serif block mb-4">"</span>
        <div className="font-serif italic text-sm leading-loose mb-8 space-y-4" style={{ color: "rgba(228,199,102,0.85)" }}>
          <p>I founded AKR on a simple belief: that wealth is only truly valuable when it provides peace of mind for the people you love.</p>
          <p>In a world of cold transactions and complex paperwork, it is easy to forget the human story behind the wealth. At AKR, we choose to look past the balance sheets and focus on what truly matters: your peace of mind.</p>
          <p>We know that every investment represents a lifetime of your sacrifice, your hard work, and your dreams for your children. It is a promise made to those you love. That is why we don't just act as advisors; we act as the steady guardians of your family's future.</p>
          <p>When you trust us with your journey, we take it personally. We provide the honest guidance and the stable hands you need to ensure that what you build today becomes a legacy that lasts forever.</p>
        </div>
        <div className="border-l-4 border-gold pl-5 py-3 bg-gold/[0.07]">
          <div className="text-lg font-bold font-serif italic text-gold-dark">
            " We Forward Together. For Life. For Legacy."
          </div>
          <div className="text-xs tracking-[2px] text-gold-dark uppercase font-sans mt-1">
            — Founder, AKR Group UAE
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* Company Overview */}
        <Card className="bg-white border border-gold/30 shadow-sm mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-velvet mb-4">Who We Are</h2>
                <div className="space-y-4 text-velvet/70">
                  <p>
                    AKR Group UAE is a leading advisory firm specializing in financial planning and real estate investment solutions.
                    We provide comprehensive guidance to individuals
                    and businesses seeking to optimize their investment portfolios.
                  </p>
                  <p>
                    Our advisor-led approach ensures that every client receives personalized attention and data-driven recommendations
                    aligned with their unique financial goals. We don't just provide information – we guide you through every step
                    of your investment journey.
                  </p>
                  <p>
                    Operating through two specialized entities – <strong className="text-gold-dark">AKR Realty LLC</strong> for
                    real estate advisory and <strong className="text-gold-dark">AKR Financial & Real Estate LLC</strong> for financial
                    services – we maintain strict regulatory compliance while delivering exceptional value to our clients.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop"
                  alt="Dubai Skyline"
                  className="w-full rounded-lg border-2 border-gold/30"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision Section */}
<section className="relative py-20 px-10 overflow-hidden" style={{ background: "#5C0B10" }}>
  <div className="absolute inset-0">
    <img src="/texture-bg.png" alt="" className="w-full h-full object-cover opacity-10" />
    <div className="absolute inset-0 bg-[#5C0B10]/80" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Header */}
    <div className="text-center mb-14">
      <span className="text-gold-dark text-xs tracking-[3px] uppercase font-sans">Our Foundation</span>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="w-10 h-px bg-gold" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45" />
        <div className="w-10 h-px bg-gold" />
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/15">

      {/* Mission */}
      <div className="bg-[#5C0B10] p-12 relative">
        <div className="absolute inset-3 border border-gold/15 pointer-events-none" />
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-gold" />
          <span className="text-gold-dark text-xs tracking-[3px] uppercase font-sans font-bold">Our Mission</span>
        </div>
        <div className="w-12 h-12 border border-gold/40 bg-gold/8 flex items-center justify-center mb-5">
          <svg className="w-5 h-5 fill-gold-dark" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div className="font-serif italic text-sm leading-loose mb-6" style={{ color: "rgba(228,199,102,0.8)" }}>
          <p className="mb-4">
            As <strong className="text-gold-dark not-italic">Architects</strong> of your financial future, we don't just manage assets; we design the structural integrity of your family's wealth.
          </p>
          <p>
            At <strong className="text-gold-dark not-italic">AKR</strong>, our mission is to ensure that every investment serves as a cornerstone for the{" "}
            <strong className="text-gold-dark not-italic">generations to follow</strong> — because{" "}
            <strong className="text-gold-dark not-italic">We Forward Together. For Life. For Legacy.</strong>
          </p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2 bg-gold/[0.06] font-serif italic text-gold-dark text-sm">
          Every investment, a cornerstone. Every family, a legacy.
        </div>
      </div>

      {/* Vision */}
      <div className="bg-[#5C0B10] p-12 relative">
        <div className="absolute inset-3 border border-gold/15 pointer-events-none" />
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-gold" />
          <span className="text-gold-dark text-xs tracking-[3px] uppercase font-sans font-bold">Our Vision</span>
        </div>
        <div className="w-12 h-12 border border-gold/40 bg-gold/8 flex items-center justify-center mb-5">
          <svg className="w-5 h-5 fill-gold-dark" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        </div>
        <div className="font-serif italic text-sm leading-loose mb-6" style={{ color: "rgba(228,199,102,0.8)" }}>
          <p className="mb-4">
            True wealth is not just what you earn; it is what you leave behind. As your{" "}
            <strong className="text-gold-dark not-italic">Investment Architects</strong>, we don't just build portfolios —
          </p>
          <p className="mb-4">
            <strong className="text-gold-dark not-italic">"we build foundations that stand for generations."</strong>
          </p>
          <p>
            At AKR, we bridge the gap between today's ambition and tomorrow's heritage, ensuring your vision becomes a life well-lived and a legacy that never fades.
          </p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2 bg-gold/[0.06] font-serif italic text-gold-dark text-sm">
          We Forward Together. For Life. For Legacy.
        </div>
      </div>

    </div>

    {/* Bottom strip */}
    <div className="border border-gold/20 bg-gold/[0.07] px-10 py-6 text-center mt-px">
      <div className="font-serif italic font-bold text-lg text-gold-dark">
        " We Forward Together. For Life. For Legacy."
      </div>
      <div className="text-xs tracking-[2px] text-gold-dark uppercase font-sans mt-2">— The AKR Promise</div>
    </div>

  </div>
</section>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-velvet text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gold/30 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-velvet mb-3">Excellence</h3>
                <p className="text-velvet/70">
                  We maintain the highest standards in advisory services, ensuring accuracy and reliability in every recommendation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gold/30 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-velvet mb-3">Client-First</h3>
                <p className="text-velvet/70">
                  Your financial success is our priority. We build long-term relationships based on trust and results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gold/30 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-velvet mb-3">Innovation</h3>
                <p className="text-velvet/70">
                  We leverage advanced analytics and technology to provide data-driven insights for smarter investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Services */}
        <Card className="bg-white border border-gold/30 shadow-sm mb-12">
          <CardHeader>
            <CardTitle className="text-velvet text-3xl text-center">What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-velvet mb-2">Real Estate Advisory</h3>
                    <p className="text-velvet/70">
                      Expert guidance on property investments, market analysis, ROI calculations, and portfolio optimization
                      in Dubai's dynamic real estate market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-velvet mb-2">Financial Planning</h3>
                    <p className="text-velvet/70">
                      Comprehensive financial advisory services including investment planning, portfolio management,
                      and wealth optimization strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-velvet mb-2">Investment Analysis</h3>
                    <p className="text-velvet/70">
                      Advanced calculators and analytics tools to evaluate mortgage options, ROI projections,
                      and investment performance using XIRR methodology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-velvet mb-2">Personalized Consultation</h3>
                    <p className="text-velvet/70">
                      One-on-one sessions with licensed advisors who understand your goals and create tailored
                      strategies for your investment success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Licenses & Compliance */}
      <Card className="bg-white border border-gold/30 shadow-sm mb-12">
  <CardHeader>
    <CardTitle className="text-velvet text-3xl text-center">Licensed & Regulated</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-6 max-w-4xl mx-auto">

      {/* Box 1 - AKR Realty */}
      <div className="bg-pearl p-6 rounded-lg border border-gold/30">
        <div className="flex items-start gap-4">
          <Building2 className="w-8 h-8 text-gold-dark shrink-0 mt-1" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-gold-dark">AKR Realty LLC</h3>
              <span className="text-xs border border-gold text-gold-dark px-2 py-0.5 tracking-wider uppercase">RERA · DLD</span>
            </div>
            <p className="text-velvet/70 text-sm leading-relaxed mb-3">
              A RERA & DLD-registered real estate brokerage in Dubai. Licensed to provide full property
              transaction and brokerage services in compliance with UAE laws and Dubai Land Department regulations.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gold/10 border border-gold/40 px-4 py-2.5 rounded">
                <div className="text-gold-dark text-xs uppercase tracking-widest mb-0.5">ORN No.</div>
                <div className="text-gold-dark font-bold tracking-wider">57750</div>
              </div>
              <div className="bg-gold/10 border border-gold/40 px-4 py-2.5 rounded">
                <div className="text-gold-dark text-xs uppercase tracking-widest mb-0.5">BRN No.</div>
                <div className="text-gold-dark font-bold tracking-wider">95660</div>
              </div>
            </div>
            <p className="text-velvet/50 text-xs mt-3 italic">
              All property transactions are subject to UAE laws and DLD regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Box 2 - AKR Financial */}
      <div className="bg-pearl p-6 rounded-lg border border-gold/30">
        <div className="flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-gold-dark shrink-0 mt-1" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-gold-dark">AKR Financial & Real Estate Service LLC</h3>
              <span className="text-xs border border-gold text-gold-dark px-2 py-0.5 tracking-wider uppercase">SHAMS</span>
            </div>
            <p className="text-velvet/70 text-sm leading-relaxed mb-3">
              Registered under Sharjah Media City (SHAMS), Sharjah. Licensed to provide financial, real estate,
              and marketing advisory services subject to UAE regulatory requirements and approvals where applicable.
            </p>
            <div className="bg-gold/10 border border-gold/40 px-4 py-2.5 rounded inline-block">
              <div className="text-gold-dark text-xs uppercase tracking-widest mb-0.5">License No.</div>
              <div className="text-gold-dark font-bold tracking-wider">24286.01</div>
            </div>
            <p className="text-velvet/50 text-xs mt-3 italic">
              Advisory services are subject to UAE regulatory requirements and approvals where applicable.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gold/10 p-6 rounded-lg border border-gold/30 text-center">
        <p className="text-velvet/70 text-sm leading-relaxed">
          <strong className="text-gold-dark">Important: </strong>
          AKR Group operates as an advisory firm. We do not facilitate direct transactions, act as brokers,
          or provide brokerage services beyond our licensed scope. All recommendations are for advisory
          purposes and subject to regulatory compliance.
        </p>
      </div>

    </div>
  </CardContent>
</Card>



        {/* CTA Section */}
        <Card className="bg-linear-to-r from-velvet to-velvet-light border-none">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with our expert advisors and discover how we can help you achieve your financial goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => router.push('/contact')}
                className="bg-pearl hover:bg-pearl text-velvet px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/calculators')}
                className="border-2 border-white text-white hover:bg-white hover:text-velvet px-8"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Try Our Calculators
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
