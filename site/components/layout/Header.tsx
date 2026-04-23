"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { firm } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practices", label: "Practices" },
  { href: "/fees", label: "Fees" },
  { href: "/external-links", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-[76px] flex items-center justify-between">
        <Link href="/" aria-label="Bridges Solicitors — Home" className="flex items-center gap-3">
          <Image
            src="/bridges-logo.png"
            alt="Bridges Solicitors"
            width={180}
            height={44}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="link-underline text-[14px] text-ink/80 hover:text-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={firm.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-mono tracking-wider2 uppercase text-ink/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            {firm.phone}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-ink text-paper px-4 py-2.5 text-[13px] tracking-wide hover:bg-brass transition-colors"
          >
            Book consultation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden ml-1 p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current ml-auto" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
