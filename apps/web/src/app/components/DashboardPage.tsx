"use client";

import { useState, useEffect } from 'react';
import { Users, Calculator, Building2, TrendingUp, FileText, DollarSign, Activity, Mail, Phone, Download, Eye, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { leadsApi, usersApi, calculatorsApi, listingsApi } from '@/lib/api';

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
  const [leads, setLeads] = useState<any[]>([]);
  const [advisors, setAdvisors] = useState<any[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leadsRes, advisorsRes, listingsRes] = await Promise.all([
          leadsApi.getAll({ limit: 10 }),
          usersApi.getAdvisors(),
          listingsApi.getAll({ status: 'PENDING', limit: 10 }),
        ]);
        setLeads(leadsRes.data.data);
        setAdvisors(advisorsRes.data);
        setListings(listingsRes.data.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const stats = [
    { label: 'Total Leads', value: leads.length || '—', icon: Users, color: 'text-green-500' },
    { label: 'Active Advisors', value: advisors.length || '—', icon: Users, color: 'text-blue-500' },
    { label: 'Pending Listings', value: listings.length || '—', icon: Building2, color: 'text-amber-500' },
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
                </div>
                <div className="text-3xl font-bold text-amber-100 mb-1">{loading ? '...' : stat.value}</div>
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
                    {(loading ? [] : leads).map((lead: any) => (
                      <TableRow key={lead.id} className="border-amber-700 hover:bg-[#3a1010]">
                        <TableCell className="text-amber-100">{lead.name}</TableCell>
                        <TableCell className="text-amber-200 text-sm">{lead.email}</TableCell>
                        <TableCell>
                          <Badge className="bg-amber-700 text-amber-100">{lead.source}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={
                            lead.status === 'NEW' ? 'bg-green-700 text-white' :
                              lead.status === 'CONTACTED' ? 'bg-blue-700 text-white' :
                                lead.status === 'QUALIFIED' ? 'bg-purple-700 text-white' :
                                  'bg-yellow-700 text-white'
                          }>
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-amber-200 text-sm">{new Date(lead.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                            Assign
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {!loading && leads.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-amber-300 py-8">No leads found</TableCell>
                      </TableRow>
                    )}
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
                  {(loading ? [] : advisors).map((advisor: any) => (
                    <Card key={advisor.id} className="bg-[#3a1010] border border-amber-700">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-amber-100">{advisor.name}</h3>
                            <Badge className="mt-2 bg-green-700 text-white text-xs">
                              active
                            </Badge>
                          </div>
                          <Users className="w-8 h-8 text-amber-400" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-amber-300">Email</span>
                            <span className="text-amber-100 font-semibold text-xs">{advisor.email}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-amber-300">Phone</span>
                            <span className="text-amber-100 font-semibold">{advisor.phone || '—'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {!loading && advisors.length === 0 && (
                    <p className="text-amber-300 text-center col-span-3 py-8">No advisors found</p>
                  )}
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
                  {(loading ? [] : listings).map((listing: any) => (
                    <div key={listing.id} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-100 mb-1">{listing.title}</h3>
                        <p className="text-sm text-amber-300 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {listing.location} • AED {Number(listing.price).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={
                          listing.status === 'PENDING' ? 'bg-yellow-700 text-white' :
                            listing.status === 'APPROVED' ? 'bg-green-700 text-white' :
                              'bg-red-700 text-white'
                        }>
                          {listing.status}
                        </Badge>
                        {listing.status === 'PENDING' && (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => listingsApi.approve(listing.id)}>
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-700 text-red-400 hover:bg-red-700" onClick={() => listingsApi.reject(listing.id)}>
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {!loading && listings.length === 0 && (
                    <p className="text-amber-300 text-center py-8">No pending listings</p>
                  )}
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
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await leadsApi.getAll({ limit: 20 });
        setLeads(res.data.data);
      } catch (err) {
        console.error("Failed to fetch leads:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#2a0808] to-[#3a1010] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-100 mb-2">Advisor Dashboard</h1>
          <p className="text-amber-200">Manage your leads and client relationships</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Leads', value: loading ? '...' : leads.length, icon: Users },
            { label: 'Reports Generated', value: '—', icon: FileText },
            { label: 'This Month', value: '—', icon: TrendingUp },
            { label: 'Conversion Rate', value: '—', icon: Activity },
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

        <Card className="bg-[#4a1810] border-2 border-amber-700 mb-8">
          <CardHeader>
            <CardTitle className="text-amber-100">Assigned Leads</CardTitle>
            <CardDescription className="text-amber-200">Your active client prospects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(loading ? [] : leads).map((lead: any) => (
                <div key={lead.id} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-100 mb-1">{lead.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-amber-300">
                        <span className="flex items-center gap-1">
                          <Calculator className="w-4 h-4" />
                          {lead.source}
                        </span>
                        <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Badge className={
                      lead.status === 'NEW' ? 'bg-green-700 text-white' :
                        lead.status === 'CONTACTED' ? 'bg-blue-700 text-white' :
                          lead.status === 'QUALIFIED' ? 'bg-purple-700 text-white' :
                            'bg-yellow-700 text-white'
                    }>
                      {lead.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
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
              {!loading && leads.length === 0 && (
                <p className="text-amber-300 text-center py-8">No leads assigned yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CustomerDashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await calculatorsApi.getMyResults();
        setResults(res.data || []);
      } catch (err) {
        console.error("Failed to fetch calculator results:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

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
              {(loading ? [] : results).map((result: any) => (
                <div key={result.id} className="bg-[#3a1010] p-6 rounded-lg border border-amber-700 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-100 mb-1">
                      {result.type === 'MORTGAGE' ? 'Mortgage Calculator' :
                        result.type === 'ROI' ? 'ROI / XIRR Calculator' :
                          'Mutual Fund Calculator'}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-amber-300">
                      <span>Ref: {result.referenceId.slice(0, 8)}...</span>
                      <span>•</span>
                      <span>{new Date(result.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-2">
                      <Badge className="bg-amber-600 text-white">
                        {result.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {result.pdfUrl && (
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                        <a href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/calculators/${result.id}/pdf`} download>
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="border-amber-700 text-amber-100 hover:bg-amber-700">
                      <Phone className="w-4 h-4 mr-1" />
                      Discuss
                    </Button>
                  </div>
                </div>
              ))}
              {!loading && results.length === 0 && (
                <p className="text-amber-300 text-center py-8">
                  No calculator results yet. Visit the calculators page to get started.
                </p>
              )}
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
