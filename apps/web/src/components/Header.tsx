"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Property Listings", href: "/properties" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="header-topbar-inner">
          {/* Contact Info */}
          <div className="header-contact-group">
            <a
              href="mailto:info@akrgroupuae.com"
              className="header-contact-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="header-contact-icon"
              >
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
              info@akrgroupuae.com
            </a>
            <a href="tel:+971123456789" className="header-contact-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="header-contact-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              +971 12 345 6789
            </a>
          </div>

          {/* Auth Links */}
          <div className="header-auth-group">
            <Link href="/login" className="header-login-link">
              Login
            </Link>
            <Link href="/dashboard" className="header-dashboard-btn">
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header-navbar">
        <div className="header-navbar-inner">
          {/* Logo + Brand */}
          <Link href="/" className="header-brand">
            <div className="header-logo-wrapper">
              <Image
                src="/akr-logo.png"
                alt="AKR Group UAE"
                width={52}
                height={52}
                className="header-logo-img"
              />
            </div>
            <div className="header-brand-text">
              <span className="header-brand-name">AKR GROUP UAE</span>
              <span className="header-brand-tagline">
                FINANCIAL &amp; REAL ESTATE ADVISORY
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <ul className="header-nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`header-nav-link ${isActive ? "header-nav-link--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
