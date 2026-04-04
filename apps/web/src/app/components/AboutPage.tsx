"use client";

import { Mail, Phone, Building2, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-100 mb-4">About AKR Group UAE</h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Your trusted partner in financial and real estate advisory services across the United Arab Emirates
          </p>
        </div>

        {/* Company Overview */}
        <Card className="bg-[#4a1810] border-2 border-amber-700 mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-100 mb-4">Who We Are</h2>
                <div className="space-y-4 text-amber-200">
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
                    Operating through two specialized entities – <strong className="text-amber-300">AKR Realty LLC</strong> for
                    real estate advisory and <strong className="text-amber-300">AKR Financial & Real Estate LLC</strong> for financial
                    services – we maintain strict regulatory compliance while delivering exceptional value to our clients.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop"
                  alt="Dubai Skyline"
                  className="w-full rounded-lg border-2 border-amber-700"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-100 text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#4a1810] border-2 border-amber-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-3">Excellence</h3>
                <p className="text-amber-200">
                  We maintain the highest standards in advisory services, ensuring accuracy and reliability in every recommendation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#4a1810] border-2 border-amber-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-3">Client-First</h3>
                <p className="text-amber-200">
                  Your financial success is our priority. We build long-term relationships based on trust and results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#4a1810] border-2 border-amber-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-3">Innovation</h3>
                <p className="text-amber-200">
                  We leverage advanced analytics and technology to provide data-driven insights for smarter investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Services */}
        <Card className="bg-[#4a1810] border-2 border-amber-700 mb-12">
          <CardHeader>
            <CardTitle className="text-amber-100 text-3xl text-center">What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-2">Real Estate Advisory</h3>
                    <p className="text-amber-200">
                      Expert guidance on property investments, market analysis, ROI calculations, and portfolio optimization
                      in Dubai's dynamic real estate market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-2">Financial Planning</h3>
                    <p className="text-amber-200">
                      Comprehensive financial advisory services including investment planning, portfolio management,
                      and wealth optimization strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-2">Investment Analysis</h3>
                    <p className="text-amber-200">
                      Advanced calculators and analytics tools to evaluate mortgage options, ROI projections,
                      and investment performance using XIRR methodology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-2">Personalized Consultation</h3>
                    <p className="text-amber-200">
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
      <Card className="bg-[#4a1810] border-2 border-amber-700 mb-12">
  <CardHeader>
    <CardTitle className="text-amber-100 text-3xl text-center">Licensed & Regulated</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-6 max-w-4xl mx-auto">

      {/* Box 1 - AKR Realty */}
      <div className="bg-[#3a1010] p-6 rounded-lg border border-amber-700">
        <div className="flex items-start gap-4">
          <Building2 className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-amber-300">AKR Realty LLC</h3>
              <span className="text-xs border border-amber-600 text-amber-400 px-2 py-0.5 tracking-wider uppercase">RERA · DLD</span>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed mb-3">
              A RERA & DLD-registered real estate brokerage in Dubai. Licensed to provide full property
              transaction and brokerage services in compliance with UAE laws and Dubai Land Department regulations.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-900/30 border border-amber-700/50 px-4 py-2.5 rounded">
                <div className="text-amber-600 text-xs uppercase tracking-widest mb-0.5">ORN No.</div>
                <div className="text-amber-300 font-bold tracking-wider">57750</div>
              </div>
              <div className="bg-amber-900/30 border border-amber-700/50 px-4 py-2.5 rounded">
                <div className="text-amber-600 text-xs uppercase tracking-widest mb-0.5">BRN No.</div>
                <div className="text-amber-300 font-bold tracking-wider">95660</div>
              </div>
            </div>
            <p className="text-amber-700 text-xs mt-3 italic">
              All property transactions are subject to UAE laws and DLD regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Box 2 - AKR Financial */}
      <div className="bg-[#3a1010] p-6 rounded-lg border border-amber-700">
        <div className="flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-amber-300">AKR Financial & Real Estate Service LLC</h3>
              <span className="text-xs border border-amber-600 text-amber-400 px-2 py-0.5 tracking-wider uppercase">SHAMS</span>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed mb-3">
              Registered under Sharjah Media City (SHAMS), Sharjah. Licensed to provide financial, real estate,
              and marketing advisory services subject to UAE regulatory requirements and approvals where applicable.
            </p>
            <div className="bg-amber-900/30 border border-amber-700/50 px-4 py-2.5 rounded inline-block">
              <div className="text-amber-600 text-xs uppercase tracking-widest mb-0.5">License No.</div>
              <div className="text-amber-300 font-bold tracking-wider">24286.01</div>
            </div>
            <p className="text-amber-700 text-xs mt-3 italic">
              Advisory services are subject to UAE regulatory requirements and approvals where applicable.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-700 text-center">
        <p className="text-amber-200 text-sm leading-relaxed">
          <strong className="text-amber-300">Important: </strong>
          AKR Group operates as an advisory firm. We do not facilitate direct transactions, act as brokers,
          or provide brokerage services beyond our licensed scope. All recommendations are for advisory
          purposes and subject to regulatory compliance.
        </p>
      </div>

    </div>
  </CardContent>
</Card>

        {/* CTA Section */}
        <Card className="bg-linear-to-r from-amber-800 to-amber-600 border-none">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with our expert advisors and discover how we can help you achieve your financial goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => router.push('/contact')}
                className="bg-[#3a1010] hover:bg-[#2a0808] text-amber-100 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/calculators')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#3a1010] px-8"
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
