import Link from "next/link";
import Image from "next/image";
import { firm, practices, externalLinks } from "@/lib/content";

const footerLogos = [
  { src: "/logos/lexcel.png", alt: "Lexcel Accredited", w: 140, h: 47, href: "https://www.lawsociety.org.uk/topics/lexcel" },
  { src: "/logos/resolution.jpg", alt: "Resolution — first for family law", w: 140, h: 33, href: "https://resolution.org.uk/" },
];

export default function Footer() {
  return (
    <footer className="mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 pt-24 pb-10">
        <div className="grid grid-cols-12 gap-10 pb-16 border-b border-paper/15">
          <div className="col-span-12 md:col-span-5">
            <Link href="/" aria-label="Bridges Solicitors — Home" className="inline-block mb-8">
              <Image
                src="/bridges-logo.png"
                alt="Bridges Solicitors"
                width={220}
                height={54}
                className="h-11 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <div className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-md">
              Considered counsel, delivered with conviction.
            </div>
            <div className="kicker mt-8 text-brass-light">&mdash; Bridges Solicitors</div>
            <p className="mt-4 text-paper/70 text-sm max-w-sm">
              A client-focused London law practice serving Lewisham, Greater London and
              clients across the UK and abroad.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="kicker text-paper/50 mb-5">Practices</div>
            <ul className="space-y-2.5 text-sm">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link href={`/practice/${p.slug}`} className="text-paper/80 hover:text-brass-light transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="kicker text-paper/50 mb-5">Firm</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-paper/80 hover:text-brass-light transition-colors">About</Link></li>
              <li><Link href="/fees" className="text-paper/80 hover:text-brass-light transition-colors">Legal Fees</Link></li>
              <li><Link href="/contact" className="text-paper/80 hover:text-brass-light transition-colors">Contact</Link></li>
              <li><Link href="/external-links" className="text-paper/80 hover:text-brass-light transition-colors">Resources</Link></li>
              <li><Link href="/privacy" className="text-paper/80 hover:text-brass-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="/complaints" className="text-paper/80 hover:text-brass-light transition-colors">Complaints</Link></li>
              <li><Link href="/terms" className="text-paper/80 hover:text-brass-light transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="kicker text-paper/70 mb-5">Office</div>
            <address className="not-italic text-sm text-paper/80 leading-relaxed">
              {firm.address}<br />
              <br />
              Tel <a href={firm.phoneHref} className="text-paper hover:text-brass-light transition-colors">{firm.phone}</a><br />
              Fax {firm.fax}<br />
              Emergency <a href={firm.emergencyHref} className="text-paper hover:text-brass-light transition-colors">{firm.emergency}</a><br />
              <a href={`mailto:${firm.email}`} className="text-paper hover:text-brass-light transition-colors">{firm.email}</a>
            </address>

            {/* SRA Digital Badge (official iframe) */}
            <div className="mt-8">
              <div className="kicker text-paper/70 mb-3">SRA Regulated</div>
              <div className="max-w-[180px] max-h-[150px]">
                <div className="relative h-auto overflow-hidden" style={{ paddingBottom: "59.1%" }}>
                  <iframe
                    title="SRA Digital Badge"
                    src="https://cdn.yoshki.com/iframe/55845r.html"
                    style={{ border: 0 }}
                    scrolling="no"
                    className="absolute top-0 left-0 w-full h-full border-0 m-0 p-0 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulator logos strip */}
        <div className="py-10 border-b border-paper/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40 shrink-0">
              Accreditations
            </span>
            <div className="flex flex-wrap items-center gap-8">
              {footerLogos.map((logo) => (
                <a
                  key={logo.href}
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center bg-paper rounded-sm px-3 py-2 h-14 min-w-[140px] ring-1 ring-paper/10 hover:ring-brass-light/60 transition-all duration-300"
                  aria-label={logo.alt}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                    className="max-h-9 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[12px] font-mono tracking-wider2 uppercase text-paper/55">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>&copy; 2026 Bridges Solicitors</span>
            <span>SRA &#x2116; {firm.sra}</span>
            <Link href="/privacy" className="hover:text-brass-light transition-colors">Privacy Policy</Link>
            <Link href="/complaints" className="hover:text-brass-light transition-colors">Complaints</Link>
            <Link href="/terms" className="hover:text-brass-light transition-colors">Terms of Use</Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {externalLinks.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="hover:text-brass-light transition-colors">
                {l.label.split(" ")[0] === "Solicitors" ? "SRA" : l.label.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
