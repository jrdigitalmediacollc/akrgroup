import type { Metadata } from "next";
import "../styles/index.css";
import { Providers } from "./providers";
import { SiteHeader } from "./components/Header";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";

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
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-linear-to-b from-[#2a0808] to-[#1a0404]">
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
