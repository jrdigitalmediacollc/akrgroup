import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/calculators", label: "Mortgage Calculator" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/properties", label: "Real Estate Advisory" },
  { href: "/calculators", label: "Financial Advisory" },
  { href: "/calculators", label: "Insurance Advisory" },
  { href: "/calculators", label: "Investment Advisory" },
  { href: "/contact", label: "Marketing Advisory" },
];

const socials = [
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-velvet to-velvet-dark text-pearl border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logonew.png"
                alt="AKR Group UAE Logo"
                width={56}
                height={56}
                className="object-contain w-14 h-14"
              />
              <div>
                <div className="font-bold text-lg text-pearl font-display leading-none">
                  AKR GROUP UAE
                </div>
                <div className="text-[9px] text-gold-light tracking-[0.18em] mt-1">
                  FINANCIAL &amp; REAL ESTATE ADVISORY
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Trusted Premium Strategic, Real Estate, Financial &amp; Investment
              Architects across the UAE.
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gold hover:bg-gold-light text-velvet rounded-full flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-sm tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-sm tracking-[0.15em] uppercase">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-sm tracking-[0.15em] uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+971558847365" className="hover:text-gold-light transition-colors">
                  +971 55 884 7365
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="mailto:info@akrgroupuae.com" className="hover:text-gold-light transition-colors">
                  info@akrgroupuae.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Regulatory Compliance */}
          <div>
            <h3 className="font-bold text-gold-light mb-4 text-sm tracking-[0.15em] uppercase">
              Regulatory Compliance
            </h3>
            <div className="space-y-3">
              <div className="border border-gold/30 bg-black/20 p-3">
                <div className="text-[10px] tracking-[0.15em] text-gold-light uppercase mb-2">
                  RERA Registered — DLD
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-white/50">BRN No.</div>
                    <div className="font-semibold text-pearl">95660</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-white/50">ORN No.</div>
                    <div className="font-semibold text-pearl">57750</div>
                  </div>
                </div>
              </div>

              <div className="border border-gold/30 bg-black/20 p-3">
                <div className="text-[10px] tracking-[0.15em] text-gold-light uppercase mb-1">
                  SHAMS Freezone Licence
                </div>
                <div className="text-xs text-white/70">Sharjah — Licence No. 24286.01</div>
              </div>
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
        <div className="mt-8 pt-8 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gold-light">
          <p>&copy; {new Date().getFullYear()} AKR Group UAE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
