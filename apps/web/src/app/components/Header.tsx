"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, LogOut, BadgeCheck, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/auth-context";
import Image from "next/image";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { userRole, openLoginModal, handleLogout } = useAuth();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/properties", label: "Property" },
    { id: "/calculators", label: "Calculators" },
    { id: "/about", label: "About " },
    { id: "/teams", label: "Teams" },
    { id: "/insights", label: "Journals" },
    { id: "/faq", label: "FAQ" },
    { id: "/contact", label: "Contact" },
  ];

  const currentPage = pathname;

  const onDashboardClick = () => {
    if (userRole) {
      router.push("/dashboard");
    } else {
      openLoginModal();
    }
  };

  const onLogout = () => {
    handleLogout();
    router.push("/");
  };

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-velvet-dark text-gold-light py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          {/* Licence badges */}
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase">
              <BadgeCheck className="w-4 h-4 text-gold" />
              RERA DLD Licensed
            </span>
            <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase">
              <ShieldCheck className="w-4 h-4 text-gold" />
              SHAMS Freezone Licensed
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:info@akrgroupuae.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@akrgroupuae.com</span>
            </a>
            <a
              href="tel:+971558847365"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+971 55 884 7365</span>
            </a>

            <span className="hidden sm:inline w-px h-4 bg-gold/30" />
            {!userRole ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gold-light hover:text-gold hover:bg-velvet h-8"
                  onClick={openLoginModal}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-velvet hover:bg-velvet-light text-white h-8"
                  onClick={onDashboardClick}
                >
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <span className="text-gold-light text-sm hidden sm:inline">
                  Welcome,{" "}
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </span>
                <Button
                  size="sm"
                  className="bg-velvet hover:bg-velvet-light text-white h-8"
                  onClick={onDashboardClick}
                >
                  Dashboard
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gold-light hover:text-gold hover:bg-velvet h-8"
                  onClick={onLogout}
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-pearl border-b border-gold/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
             <Image
              src="/logonew.png"
              alt="AKR Group UAE Logo"
              width={120}
              height={130}
              className="object-cover w-14 h-auto"
            />
              <div>
                <div className="text-xl font-bold tracking-wider text-velvet font-display leading-none">
                  AKR GROUP UAE
                </div>
                <div className="text-[10px] text-gold-dark tracking-[0.2em] mt-1">
                  FINANCIAL &amp; REAL ESTATE INVESTMENT ARCHITECTS
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`px-3 py-2 text-sm font-medium tracking-wide border-b-2 transition-all ${currentPage === item.id
                    ? "text-velvet border-gold"
                    : "text-velvet/70 border-transparent hover:text-velvet hover:border-gold/50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-3 bg-velvet hover:bg-velvet-light text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-velvet hover:text-gold-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gold/30 pt-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-left text-sm font-medium tracking-wide transition-all ${currentPage === item.id
                      ? "text-velvet bg-gold/10 border-l-2 border-gold"
                      : "text-velvet/70 hover:text-velvet hover:bg-gold/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 mx-4 text-center bg-velvet hover:bg-velvet-light text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}