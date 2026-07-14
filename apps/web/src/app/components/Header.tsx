"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, LogOut } from "lucide-react";
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
          <div className="flex items-center gap-6">
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
          </div>
          <div className="flex items-center gap-4">
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
      <div className="bg-linear-to-b from-velvet to-velvet-dark border-b-2 border-gold">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
             <Image
              src="/logonew.png"
              alt="AKR Group UAE Logo"
              width={120}
              height={130}
              className=" shadow-lg object-cover"
            />
              <div className="text-white">
                <div className="text-2xl font-bold tracking-wider text-pearl">
                  AKR GROUP UAE
                </div>
                <div className="text-xs text-gold-light tracking-widest">
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
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-all ${currentPage === item.id
                    ? "text-gold-light bg-velvet-dark"
                    : "text-pearl hover:text-gold-light hover:bg-velvet-dark"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-pearl hover:text-gold-light"
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
            <nav className="lg:hidden mt-4 pb-4 border-t border-gold/40 pt-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-left text-sm font-medium tracking-wide transition-all ${currentPage === item.id
                      ? "text-gold-light bg-velvet-dark"
                      : "text-pearl hover:text-gold-light hover:bg-velvet-dark"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}