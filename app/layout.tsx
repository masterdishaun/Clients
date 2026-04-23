import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import Reveal from "@/components/ui/Reveal";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jet-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Bridges Solicitors — Resolute counsel for life's decisive moments",
  description:
    "Bridges Solicitors is a client-focused London law practice. Crime, Conveyancing, Litigation, Immigration, Employment, Family, Landlord & Tenant, Road Traffic.",
  metadataBase: new URL("https://bridgessolicitors.co.uk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-graphite antialiased">
        <TopBar />
        <Header />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm">Skip to main content</a>
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
