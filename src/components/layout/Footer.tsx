"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
  ],
  Services: [
    { label: "Structural Engineering", href: "/#services" },
    { label: "Civil Engineering", href: "/#services" },
    { label: "Geoenvironmental", href: "/#services" },
  ],
  Projects: [
    { label: "Student Accommodation", href: "/projects" },
    { label: "Residential", href: "/projects" },
    { label: "Refurbishment", href: "/projects" },
    { label: "Historical", href: "/projects" },
    { label: "All Projects", href: "/projects" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <Container>
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.svg"
                  alt="Apex Consulting Engineers"
                  width={160}
                  height={80}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-body-sm leading-relaxed max-w-xs mb-8">
                Experienced Yorkshire-based structural, civil, and
                geo-environmental consultancy delivering innovative engineering
                solutions across the UK.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/apexconsultingengineers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-2">
                <h4 className="text-overline font-semibold uppercase tracking-[0.15em] text-white mb-6">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-sm hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-2">
              <h4 className="text-overline font-semibold uppercase tracking-[0.15em] text-white mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-body-sm">
                <li>
                  <a
                    href="mailto:contactus@apexconsulting.co.uk"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    contactus@apexconsulting.co.uk
                  </a>
                </li>
                <li>
                  <a
                    href="tel:01142419360"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    0114 241 9360
                  </a>
                </li>
                <li>Sheffield &middot; Leeds</li>
              </ul>
            </div>
          </div>

          {/* Accreditations */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h4 className="text-overline font-semibold uppercase tracking-[0.15em] text-white/60 mb-6">
              Accreditations
            </h4>
            <div className="flex flex-wrap items-center gap-8">
              <Image
                src="/images/accreditations/istructe-ser.png"
                alt="IStructE / SER Approved"
                width={120}
                height={50}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/accreditations/chas.png"
                alt="CHAS Accredited Contractor"
                width={120}
                height={50}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/accreditations/iso-9001.png"
                alt="QMS ISO 9001:2015 Registered"
                width={120}
                height={50}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/60">
            &copy; {new Date().getFullYear()} Apex Consulting Engineers. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-body-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy & Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
