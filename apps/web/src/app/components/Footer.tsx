import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-velvet to-velvet-dark text-pearl border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logonew.png"
                alt="AKR Group UAE Logo"
                width={120}
                height={130}
                className="object-cover"
              />
              <div className="font-bold text-lg text-pearl">
                AKR GROUP UAE
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted partner in financial and real estate advisory
              services in the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-sm text-white/70 hover:text-gold-light transition-colors">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-white/70 hover:text-gold-light transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-white/70 hover:text-gold-light transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-gold-light transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-1 text-gold" />
                <span>+971 55 884 7365</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 mt-1 text-gold" />
                <span>info@akrgroupuae.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-1 text-gold" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gold hover:bg-gold-light text-velvet rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold hover:bg-gold-light text-velvet rounded-full flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold hover:bg-gold-light text-velvet rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold hover:bg-gold-light text-velvet rounded-full flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimers */}
        <div className="mt-12 pt-8 border-t border-gold/30">
          <div className="bg-velvet-dark p-6 rounded-lg space-y-4 text-xs text-white/70">
            <div>
              <strong className="text-gold-light">AKR Realty LLC</strong> -
             AKR Realty LLC is a RERA-Dubai Land Department -registered and licensed real estate brokerage in Dubai-UAE
ORN no:57750 &
BRN NO:95660
All property transactions are subject to UAE laws and DLD regulations.
            </div>
            <div>
              <strong className="text-gold-light">AKR Financial &amp; Real Estate LLC</strong>{" "}
              Registered and Licensed by SHAMS ,SHARJAH -UAE
License no:24286.01
Financial & Real Estate & Marketing advisory services are subject to UAE regulatory requirements and approvals where-ever applicable.
            </div>
            <div>
              <strong className="text-gold-light">Important Disclaimer:</strong>{" "}
              All calculators and estimates provided are for advisory purposes
              only and do not constitute financial advice. Results are
              indicative and subject to approval by relevant financial
              institutions. Past performance does not guarantee future results.
              This platform does not facilitate direct transactions between
              clients and property listers.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gold/30 text-center text-sm text-gold-light">
          <p>&copy; {new Date().getFullYear()} AKR Group UAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
