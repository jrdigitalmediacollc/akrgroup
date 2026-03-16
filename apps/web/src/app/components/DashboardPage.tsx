"use client";

import { useState } from 'react';
import { Users, Calculator, Building2, TrendingUp, FileText, DollarSign, Activity, Mail, Phone, Download, Eye, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface DashboardPageProps {
  userRole: 'admin' | 'advisor' | 'customer';
}

export function DashboardPage({ userRole }: DashboardPageProps) {
  if (userRole === 'admin') {
    return <AdminDashboard />;
  } else if (userRole === 'advisor') {
    return <AdvisorDashboard />;
  } else {
    return <CustomerDashboard />;
  }
}

function AdminDashboard() {
  const stats = [
    { label: 'Total Leads', value: '1,247', icon: Users, change: '+12%', color: 'text-green-500' },
    { label: 'Active Advisors', value: '24', icon: Users, change: '+2', color: 'text-blue-500' },
    { label: 'Calculator Uses', value: '3,456', icon: Calculator, change: '+18%', color: 'text-purple-500' },
    { label: 'Property Listings', value: '156', icon: Building2, change: '+8', color: 'text-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-100 mb-2">Admin Dashboard</h1>
          <p className="text-amber-200">System overview and management</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#4a1810] border-2 border-amber-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-8 h-8 text-amber-400" />
                  <Badge className={`${stat.color} bg-transparent border`}>
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-amber-100 mb-1">{stat.value}</div>
                <div className="text-sm text-amber-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList className="bg-[#4a1810]">
            <TabsTrigger value="leads" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-100">
              Leads
            </TabsTrigger>
            <TabsTrigger value="advisors" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-100">
              Advisors
            </TabsTrigger>
            <TabsTrigger value="listings" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-100">
              Listings
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-100">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100">Recent Leads</CardTitle>
                <CardDescription className="text-amber-200">Latest calculator submissions and inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-amber-700 hover:bg-transparent">
                      <TableHead className="text-amber-300">Name</TableHead>
                      <TableHead className="text-amber-300">Email</TableHead>
                      <TableHead className="text-amber-300">Calculator</TableHead>
                      <TableHead className="text-amber-300">Status</TableHead>
                      <TableHead className="text-amber-300">Date</TableHead>
                      <TableHead className="text-amber-300">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'Ahmed Al Maktoum', email: 'ahmed@example.com', calculator: 'Mortgage', status: 'new', date: '2024-02-17' },
                      { name: 'Sara Johnson', email: 'sara@example.com', calculator: 'ROI', status: 'contacted', date: '2024-02-17' },
                      { name: 'Mohammed Ali', email: 'mohammed@example.com', calculator: 'Mutual Fund', status: 'assigned', date: '2024-02-16' },
                      { name: 'Lisa Chen', email: 'lisa@example.com', calculator: 'Mortgage', status: 'new', date: '2024-02-16' },
                    ].map((lead, index) => (
                      <TableRow key={index} className="border-amber-700 hover:bg-[#3a1010]">
                        <TableCell className="text-amber-100">{lead.name}</TableCell>
                        <TableCell className="text-amber-200 text-sm">{lead.email}</TableCell>
                        <TableCell>
                          <Badge className="bg-amber-700 text-amber-100">{lead.calculator}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={
                            lead.status === 'new' ? 'bg-green-700 text-white' :
                              lead.status === 'contacted' ? 'bg-blue-700 text-white' :
                                'bg-purple-700 text-white'
                          }>
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-amber-200 text-sm">{lead.date}</TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                            Assign
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advisors">
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100">Advisor Management</CardTitle>
                <CardDescription className="text-amber-200">Monitor advisor performance and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Khalid Rahman', leads: 45, conversion: '32%', status: 'active' },
                    { name: 'Emily Watson', leads: 38, conversion: '28%', status: 'active' },
                    { name: 'Omar Farouk', leads: 52, conversion: '35%', status: 'active' },
                    { name: 'Jennifer Lee', leads: 29, conversion: '24%', status: 'active' },
                    { name: 'Hassan Ibrahim', leads: 41, conversion: '30%', status: 'active' },
                    { name: 'Maria Garcia', leads: 33, conversion: '26%', status: 'active' },
                  ].map((advisor, index) => (
                    <Card key={index} className="bg-[#3a1010] border border-amber-700">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-amber-100">{advisor.name}</h3>
                            <Badge className="mt-2 bg-green-700 text-white text-xs">
                              {advisor.status}
                            </Badge>
                          </div>
                          <Users className="w-8 h-8 text-amber-400" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-amber-300">Active Leads</span>
                            <span className="text-amber-100 font-semibold">{advisor.leads}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-amber-300">Conversion Rate</span>
                            <span className="text-amber-100 font-semibold">{advisor.conversion}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings">
            <Card className="bg-[#4a1810] border-2 border-amber-700">
              <CardHeader>
                <CardTitle className="text-amber-100">Property Listings Approval</CardTitle>
                <CardDescription className="text-amber-200">Review and approve new property submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Dubai Marina Tower', location: 'Dubai Marina', price: '5.2M', status: 'pending' },
                    { name: 'Palm Villa Residences', location: 'Palm Jumeirah', price: '28M', status: 'pending' },
                    { name: 'Business Bay Apartment', location: 'Business Bay', price: '2.8M', status: 'approved' },
                  ].map((listing, index) => (
                    <div key={index} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-100 mb-1">{listing.name}</h3>
                        <p className="text-sm text-amber-300 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {listing.location} • AED {listing.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={
                          listing.status === 'pending' ? 'bg-yellow-700 text-white' : 'bg-green-700 text-white'
                        }>
                          {listing.status}
                        </Badge>
                        {listing.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-700 text-red-400 hover:bg-red-700">
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-[#4a1810] border-2 border-amber-700">
                <CardHeader>
                  <CardTitle className="text-amber-100">Calculator Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Mortgage Calculator', uses: 1245, percentage: 45 },
                      { name: 'ROI Calculator', uses: 892, percentage: 32 },
                      { name: 'Mutual Fund Calculator', uses: 641, percentage: 23 },
                    ].map((calc, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-amber-200 text-sm">{calc.name}</span>
                          <span className="text-amber-100 font-semibold">{calc.uses}</span>
                        </div>
                        <div className="w-full bg-[#2a0808] rounded-full h-2">
                          <div
                            className="bg-amber-600 h-2 rounded-full"
                            style={{ width: `${calc.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#4a1810] border-2 border-amber-700">
                <CardHeader>
                  <CardTitle className="text-amber-100">Lead Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { source: 'Calculator Forms', count: 1567, percentage: 55 },
                      { source: 'Property Inquiries', count: 892, percentage: 31 },
                      { source: 'Direct Contact', count: 398, percentage: 14 },
                    ].map((source, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-amber-200 text-sm">{source.source}</span>
                          <span className="text-amber-100 font-semibold">{source.count}</span>
                        </div>
                        <div className="w-full bg-[#2a0808] rounded-full h-2">
                          <div
                            className="bg-amber-600 h-2 rounded-full"
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function AdvisorDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-100 mb-2">Advisor Dashboard</h1>
          <p className="text-amber-200">Manage your leads and client relationships</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Leads', value: '42', icon: Users },
            { label: 'Reports Generated', value: '128', icon: FileText },
            { label: 'This Month', value: '18', icon: TrendingUp },
            { label: 'Conversion Rate', value: '32%', icon: Activity },
          ].map((stat, index) => (
            <Card key={index} className="bg-[#4a1810] border-2 border-amber-700">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-3xl font-bold text-amber-100 mb-1">{stat.value}</div>
                <div className="text-sm text-amber-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Assigned Leads */}
        <Card className="bg-[#4a1810] border-2 border-amber-700 mb-8">
          <CardHeader>
            <CardTitle className="text-amber-100">Assigned Leads</CardTitle>
            <CardDescription className="text-amber-200">Your active client prospects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Ahmed Al Maktoum', calculator: 'Mortgage', amount: 'AED 1.5M', date: '2024-02-17', status: 'new' },
                { name: 'Sara Johnson', calculator: 'ROI', amount: 'AED 500K', date: '2024-02-17', status: 'follow-up' },
                { name: 'Mohammed Ali', calculator: 'Mutual Fund', amount: 'AED 250K', date: '2024-02-16', status: 'contacted' },
                { name: 'Lisa Chen', calculator: 'Mortgage', amount: 'AED 2.2M', date: '2024-02-16', status: 'new' },
              ].map((lead, index) => (
                <div key={index} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-100 mb-1">{lead.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-amber-300">
                        <span className="flex items-center gap-1">
                          <Calculator className="w-4 h-4" />
                          {lead.calculator}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {lead.amount}
                        </span>
                        <span>{lead.date}</span>
                      </div>
                    </div>
                    <Badge className={
                      lead.status === 'new' ? 'bg-green-700 text-white' :
                        lead.status === 'contacted' ? 'bg-blue-700 text-white' :
                          'bg-yellow-700 text-white'
                    }>
                      {lead.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Eye className="w-4 h-4 mr-1" />
                      View Report
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-700 text-amber-100 hover:bg-amber-700">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-700 text-amber-100 hover:bg-amber-700">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-700 text-amber-100 hover:bg-amber-700">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-100 mb-2">My Dashboard</h1>
          <p className="text-amber-200">Your investment journey with AKR Group</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#4a1810] border-2 border-amber-700 hover:border-amber-500 transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calculator className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-amber-100 mb-2">Use Calculators</h3>
              <p className="text-sm text-amber-200">Get instant estimates</p>
            </CardContent>
          </Card>

          <Card className="bg-[#4a1810] border-2 border-amber-700 hover:border-amber-500 transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-amber-100 mb-2">Contact Advisor</h3>
              <p className="text-sm text-amber-200">Schedule consultation</p>
            </CardContent>
          </Card>

          <Card className="bg-[#4a1810] border-2 border-amber-700 hover:border-amber-500 transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <Building2 className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-amber-100 mb-2">Browse Properties</h3>
              <p className="text-sm text-amber-200">View exclusive listings</p>
            </CardContent>
          </Card>
        </div>

        {/* Saved Reports */}
        <Card className="bg-[#4a1810] border-2 border-amber-700 mb-8">
          <CardHeader>
            <CardTitle className="text-amber-100">My Calculator Reports</CardTitle>
            <CardDescription className="text-amber-200">Your saved calculations and reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: 'Mortgage Calculator', date: '2024-02-17', property: 'AED 1.5M Property', emi: 'AED 7,650' },
                { type: 'ROI Calculator', date: '2024-02-15', property: 'AED 500K Investment', roi: '8.2% XIRR' },
                { type: 'Mortgage Calculator', date: '2024-02-10', property: 'AED 2.2M Property', emi: 'AED 11,200' },
              ].map((report, index) => (
                <div key={index} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-100 mb-1">{report.type}</h3>
                    <div className="flex items-center gap-4 text-sm text-amber-300">
                      <span>{report.property}</span>
                      <span>•</span>
                      <span>{report.date}</span>
                    </div>
                    <div className="mt-2">
                      <Badge className="bg-amber-600 text-white">
                        {'emi' in report ? `EMI: ${report.emi}` : `ROI: ${report.roi}`}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Download className="w-4 h-4 mr-1" />
                      Download PDF
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-700 text-amber-100 hover:bg-amber-700">
                      <Phone className="w-4 h-4 mr-1" />
                      Discuss
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-linear-to-r from-amber-800 to-amber-600 border-none">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Expert Guidance?</h2>
            <p className="text-white/90 mb-6">Our advisors are here to help you make informed investment decisions</p>
            <Button size="lg" className="bg-[#3a1010] hover:bg-[#2a0808] text-amber-100">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
