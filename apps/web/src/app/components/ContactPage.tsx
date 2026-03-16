"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-100 mb-4">Contact Us</h1>
          <p className="text-xl text-amber-200">Get in touch with our expert advisors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100">Get in Touch</CardTitle>
                <CardDescription className="text-amber-200">
                  We're here to help you with your investment journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold mb-1">Phone</h3>
                    <p className="text-amber-200 text-sm">+971 12 345 6789</p>
                    <p className="text-amber-300 text-xs mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold mb-1">Email</h3>
                    <p className="text-amber-200 text-sm">info@akrgroupuae.com</p>
                    <p className="text-amber-300 text-xs mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold mb-1">WhatsApp</h3>
                    <p className="text-amber-200 text-sm">+971 50 123 4567</p>
                    <p className="text-amber-300 text-xs mt-1">Instant messaging</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold mb-1">Office</h3>
                    <p className="text-amber-200 text-sm">
                      Downtown Dubai<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold mb-1">Business Hours</h3>
                    <p className="text-amber-200 text-sm">
                      Sunday - Thursday<br />
                      9:00 AM - 6:00 PM GST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Call
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100 text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-amber-200">
                  Fill out the form below and our team will get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-amber-100">Full Name *</Label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="bg-[#2a0808] border-amber-700 text-amber-100 mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-amber-100">Email Address *</Label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-[#2a0808] border-amber-700 text-amber-100 mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-amber-100">Phone Number *</Label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 XX XXX XXXX"
                        className="bg-[#2a0808] border-amber-700 text-amber-100 mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-amber-100">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger className="bg-[#2a0808] border-amber-700 text-amber-100 mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a0808] border-amber-700">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="property">Property Investment</SelectItem>
                          <SelectItem value="financial">Financial Advisory</SelectItem>
                          <SelectItem value="mortgage">Mortgage Consultation</SelectItem>
                          <SelectItem value="roi">Investment ROI Analysis</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-amber-100">Message *</Label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your investment goals and how we can help..."
                      rows={6}
                      className="bg-[#2a0808] border-amber-700 text-amber-100 mt-2 resize-none"
                    />
                  </div>

                  <div className="bg-amber-900/30 p-4 rounded border border-amber-700">
                    <p className="text-xs text-amber-200">
                      <strong className="text-amber-300">Privacy Notice:</strong> Your information is confidential and will only be used to respond to your inquiry.
                      We comply with UAE data protection regulations.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* License Information */}
            <Card className="mt-8 bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-300 text-lg">Licensed & Regulated</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-amber-200 space-y-3">
                <div>
                  <strong className="text-amber-300">AKR Realty LLC</strong><br />
                  Real Estate Regulatory Agency (RERA) Licensed<br />
                  License No: XXXXX
                </div>
                <div>
                  <strong className="text-amber-300">AKR Financial & Real Estate LLC</strong><br />
                  UAE Central Bank & Insurance Authority Licensed<br />
                  License No: XXXXX
                </div>
                <p className="pt-3 border-t border-amber-700">
                  All services are provided in compliance with UAE regulations.
                  Advisory services do not constitute financial transactions or brokerage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
