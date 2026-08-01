import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { SiteHeader } from "./components/Header";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { EntrancePopup } from "./components/entrance-popup";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKR Group UAE - Financial & Real Estate Advisory",
  description:
    "Expert guidance for your investment journey in the UAE. Financial planning, real estate advisory, and advanced calculators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}>
      <body>
        <Providers>
            <EntrancePopup />
          <div className="min-h-screen flex flex-col bg-pearl">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Footer />
            <LoginModal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
