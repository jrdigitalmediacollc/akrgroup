"use client";

import { useState } from 'react';
import { Building2, MapPin, Bed, Bath, Square, TrendingUp, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';

export function PropertiesPage() {
  const router = useRouter();
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  const properties = [
    {
      id: 1,
      name: 'Palm Jumeirah Villa',
      location: 'Palm Jumeirah',
      type: 'Villa',
      price: 25000000,
      bedrooms: 6,
      bathrooms: 7,
      area: 8500,
      roi: 5.8,
      rentalYield: 4.5,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      description: 'Luxurious waterfront villa with private beach access and stunning views of Dubai skyline.',
      status: 'available'
    },
    {
      id: 2,
      name: 'Emirates Hills Mansion',
      location: 'Emirates Hills',
      type: 'Villa',
      price: 35000000,
      bedrooms: 7,
      bathrooms: 9,
      area: 12000,
      roi: 6.2,
      rentalYield: 5.0,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      description: 'Ultra-luxury mansion in Dubai\'s most prestigious community with golf course views.',
      status: 'available'
    },
    {
      id: 3,
      name: 'Downtown Dubai Penthouse',
      location: 'Downtown Dubai',
      type: 'Penthouse',
      price: 18500000,
      bedrooms: 4,
      bathrooms: 5,
      area: 5500,
      roi: 7.5,
      rentalYield: 6.2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      description: 'Premium penthouse with panoramic views of Burj Khalifa and Dubai Fountain.',
      status: 'available'
    },
    {
      id: 4,
      name: 'Dubai Marina Apartment',
      location: 'Dubai Marina',
      type: 'Apartment',
      price: 4500000,
      bedrooms: 3,
      bathrooms: 4,
      area: 2200,
      roi: 8.2,
      rentalYield: 7.0,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      description: 'Modern apartment with marina views and access to world-class amenities.',
      status: 'available'
    },
    {
      id: 5,
      name: 'Arabian Ranches Villa',
      location: 'Arabian Ranches',
      type: 'Villa',
      price: 8500000,
      bedrooms: 5,
      bathrooms: 6,
      area: 6000,
      roi: 6.8,
      rentalYield: 5.5,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Family-oriented villa in gated community with golf course and polo club.',
      status: 'available'
    },
    {
      id: 6,
      name: 'Jumeirah Lake Towers Apt',
      location: 'JLT',
      type: 'Apartment',
      price: 1800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      roi: 9.5,
      rentalYield: 8.0,
      image: 'https://images.unsplash.com/photo-1502672260066-6bc09da47858?w=800&h=600&fit=crop',
      description: 'Smart investment opportunity with high rental yields in established community.',
      status: 'available'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-velvet mb-4">Exclusive Properties</h1>
          <p className="text-xl text-velvet/70">Investment-Grade Real Estate in Dubai</p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 bg-white border border-gold/40 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gold-dark flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Advisory-Led Property Service
            </CardTitle>
          </CardHeader>
          <CardContent className="text-velvet/70 space-y-2">
            <p>
              <strong className="text-gold-dark">AKR Realty LLC</strong> - Licensed by RERA (Real Estate Regulatory Agency). License No: XXXXX
            </p>
            <p>
              All property listings are curated for investment advisory purposes.
              For detailed information, property viewings, or investment consultation, please contact our licensed advisors.
              <strong className="text-gold-dark"> Direct client-lister contact is not permitted as per regulatory requirements.</strong>
            </p>
          </CardContent>
        </Card>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="bg-white border border-gold/30 hover:border-gold shadow-sm transition-all overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProperty(property.id)}
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold text-white">
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <div className="text-2xl font-bold text-white">
                    AED {(property.price / 1000000).toFixed(1)}M
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-velvet text-xl">{property.name}</CardTitle>
                <CardDescription className="text-velvet/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Bed className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                      <div className="text-sm text-velvet">{property.bedrooms}</div>
                      <div className="text-xs text-gold-dark">Beds</div>
                    </div>
                    <div className="text-center">
                      <Bath className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                      <div className="text-sm text-velvet">{property.bathrooms}</div>
                      <div className="text-xs text-gold-dark">Baths</div>
                    </div>
                    <div className="text-center">
                      <Square className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                      <div className="text-sm text-velvet">{property.area}</div>
                      <div className="text-xs text-gold-dark">Sq Ft</div>
                    </div>
                  </div>

                  {/* Investment Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold/30">
                    <div className="bg-gold/10 p-3 rounded">
                      <div className="text-xs text-gold-dark mb-1">Projected ROI</div>
                      <div className="text-lg font-bold text-velvet flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {property.roi}%
                      </div>
                    </div>
                    <div className="bg-gold/10 p-3 rounded">
                      <div className="text-xs text-gold-dark mb-1">Rental Yield</div>
                      <div className="text-lg font-bold text-velvet">
                        {property.rentalYield}%
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-velvet/70 line-clamp-2">
                    {property.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-velvet hover:bg-velvet-light text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Contact advisor action
                    }}
                  >
                    Contact Advisor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="mt-12 bg-linear-to-r from-velvet to-velvet-light border-none">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for Investment Guidance?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert advisors can help you identify the best real estate opportunities aligned with your investment goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pearl hover:bg-pearl text-velvet"
                onClick={() => router.push('/contact')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-velvet"
                onClick={() => router.push('/calculators')}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Calculate ROI
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
