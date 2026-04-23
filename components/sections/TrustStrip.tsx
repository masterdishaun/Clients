import Image from "next/image";

type Mark =
  | { kind: "img"; src: string; alt: string; w: number; h: number; href: string }
  | { kind: "wordmark"; label: string; sub: string; alt: string; href: string };

const marks: Mark[] = [
  { kind: "img",      src: "/logos/sra.svg",            alt: "Solicitors Regulation Authority",   w: 200, h: 80, href: "https://www.sra.org.uk/" },
  { kind: "wordmark", label: "The Law Society",         sub: "England and Wales",                 alt: "The Law Society of England and Wales", href: "https://www.lawsociety.org.uk/" },
  { kind: "img",      src: "/logos/lexcel.png",         alt: "Lexcel Accredited",                 w: 180, h: 60, href: "https://www.lawsociety.org.uk/topics/lexcel" },
  { kind: "img",      src: "/logos/resolution.jpg",     alt: "Resolution — first for family law", w: 180, h: 42, href: "https://resolution.org.uk/" },
  { kind: "img",      src: "/logos/legalombudsman.png", alt: "Legal Ombudsman",                   w: 200, h: 80, href: "https://www.legalombudsman.org.uk/" },
  { kind: "img",      src: "/logos/hmcts.svg",          alt: "HM Courts & Tribunals Service",     w: 200, h: 80, href: "https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service" },
  { kind: "img",      src: "/logos/landregistry.svg",   alt: "HM Land Registry",                  w: 200, h: 80, href: "https://www.gov.uk/government/organisations/land-registry" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Regulators and accreditations" className="relative bg-ink text-paper overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(138,149,199,0.10),transparent)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-brass-light/50" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brass-light">
              Regulated &amp; Accredited
            </span>
            <span className="h-px w-10 bg-brass-light/50" aria-hidden="true" />
          </div>
          <p className="text-paper/60 text-sm md:text-base max-w-md mx-auto">
            Governed by the highest standards of English legal practice.
          </p>
        </div>

        {/* Logos & marks grid — every mark lives on a paper chip so native brand colours stay readable on the ink background */}
        <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
          {marks.map((m) => (
            <li key={m.href}>
              <a
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-sm bg-paper px-5 py-3 h-20 min-w-[160px] shadow-[0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-paper/10 hover:ring-brass-light/60 hover:shadow-lg transition-all duration-300"
                aria-label={m.alt}
              >
                {m.kind === "img" ? (
                  <span className="flex h-full w-full items-center justify-center">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      width={m.w}
                      height={m.h}
                      className="max-h-12 w-auto object-contain"
                    />
                  </span>
                ) : (
                  <span className="flex h-full w-full flex-col items-center justify-center text-center">
                    <span className="font-display text-[18px] leading-tight tracking-tight text-ink">
                      {m.label}
                    </span>
                    <span className="mt-0.5 font-mono text-[9px] tracking-[0.2em] uppercase text-ink/55">
                      {m.sub}
                    </span>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom divider line */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-paper/10 to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
