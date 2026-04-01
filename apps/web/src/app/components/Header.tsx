"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/auth-context";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { userRole, openLoginModal, handleLogout } = useAuth();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/properties", label: "Property Listings" },
    { id: "/calculators", label: "Financial Services" },
    { id: "/about", label: "About Us" },
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
      <div className="bg-[#4a1810] text-amber-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@akrgroupuae.com"
              className="flex items-center gap-2 hover:text-amber-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@akrgroupuae.com</span>
            </a>
            <a
              href="tel:+971123456789"
              className="flex items-center gap-2 hover:text-amber-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+971 12 345 6789</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {!userRole ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-amber-200 hover:text-amber-100 hover:bg-[#5a2010] h-8"
                  onClick={openLoginModal}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-amber-600 hover:bg-amber-700 text-white h-8"
                  onClick={onDashboardClick}
                >
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <span className="text-amber-200 text-sm hidden sm:inline">
                  Welcome,{" "}
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </span>
                <Button
                  size="sm"
                  className="bg-amber-600 hover:bg-amber-700 text-white h-8"
                  onClick={onDashboardClick}
                >
                  Dashboard
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-amber-200 hover:text-amber-100 hover:bg-[#5a2010] h-8"
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
      <div className="bg-linear-to-b from-[#5a1810] to-[#6a1810] border-b-2 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="apps\web\public\logo-main.jpeg" className="flex items-center gap-4">
              <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center border-4 border-amber-500 shadow-lg">
                <div className="text-white font-bold text-xl">AKR</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold tracking-wider text-amber-100">
                  AKR GROUP UAE
                </div>
                <div className="text-xs text-amber-300 tracking-widest">
                  FINANCIAL &amp; REAL ESTATE ADVISORY
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`px-6 py-2 text-sm font-medium tracking-wide transition-all ${currentPage === item.id
                    ? "text-amber-300 bg-[#4a1810]"
                    : "text-amber-100 hover:text-amber-200 hover:bg-[#4a1810]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-amber-100 hover:text-amber-200"
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
            <nav className="lg:hidden mt-4 pb-4 border-t border-amber-700 pt-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-left text-sm font-medium tracking-wide transition-all ${currentPage === item.id
                      ? "text-amber-300 bg-[#4a1810]"
                      : "text-amber-100 hover:text-amber-200 hover:bg-[#4a1810]"
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