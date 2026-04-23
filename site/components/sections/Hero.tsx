import Link from "next/link";
import Image from "next/image";
import { firm } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-paper min-h-[calc(100vh-112px)] flex flex-col">
      {/* Full-bleed background image */}
      <Image
        src="/pexels-zmutaqin-17006487.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-30 scale-105"
      />

      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 -z-20 bg-ink/55" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-t from-ink/80 via-transparent to-ink/30"
        aria-hidden="true"
      />
      {/* Subtle warm vignette */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(181,146,87,0.12),transparent)]"
        aria-hidden="true"
      />

      {/* Decorative vertical rule */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brass-light/30 to-transparent hidden lg:block" aria-hidden="true" />

      {/* Main content — vertically centred */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-12 md:pb-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {/* Left editorial column */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-6" data-reveal>
            {/* Kicker with decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-brass-light/70" aria-hidden="true" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brass-light">
                London Law Practice · Est. Lewisham
              </span>
            </div>

            {/* Display headline */}
            <h1 className="font-display text-display-xl text-paper drop-shadow-sm max-w-[18ch]">
              Resolute counsel for life&rsquo;s <span className="italic text-brass-light">decisive</span> moments.
            </h1>

            {/* Brass rule divider */}
            <div className="mt-6 mb-5 h-px w-24 bg-brass-light/50" aria-hidden="true" />

            <p className="max-w-lg text-lg md:text-xl text-paper/85 leading-relaxed font-light">
              A client-focused practice that puts care at the heart of its operation.
              We work tirelessly to achieve your objectives&nbsp;&mdash; with professionalism
              at all times.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-5" data-reveal data-delay="120">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-brass text-paper font-semibold px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-paper hover:text-brass hover:shadow-lg"
              >
                <span className="relative z-10">Book a Consultation</span>
                <span aria-hidden="true" className="relative z-10 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <a
                href={firm.phoneHref}
                className="group inline-flex items-center gap-3 border border-paper/30 backdrop-blur-sm px-7 py-4 text-paper hover:border-brass-light hover:bg-paper/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-brass-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono text-sm tracking-wider2">{firm.phone}</span>
              </a>
            </div>
          </div>

          {/* Right column — floating stat card for editorial richness */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 xl:col-start-8 hidden lg:flex items-end justify-end" data-reveal data-delay="200">
            <div className="backdrop-blur-md bg-paper/[0.06] border border-paper/15 p-8 max-w-xs w-full">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light mb-6">At a Glance</div>
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">Google Rating</dt>
                  <dd className="mt-1 font-display text-2xl text-paper">
                    5.0 <span className="text-brass-light text-base">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  </dd>
                  <dd className="text-paper/50 text-xs mt-0.5">52 verified reviews</dd>
                </div>
                <div className="h-px bg-paper/10" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">Practice Areas</dt>
                  <dd className="mt-1 font-display text-2xl text-paper">8 <span className="text-base text-paper/60">disciplines</span></dd>
                </div>
                <div className="h-px bg-paper/10" aria-hidden="true" />
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">Office</dt>
                  <dd className="mt-1 text-sm text-paper/80 leading-relaxed">
                    Ivy House, Lewisham<br />London SE6 4TT
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom meta bar — frosted glass strip */}
      <div className="relative border-t border-paper/15 bg-ink/40 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2.5">
              <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass-light">SRA&nbsp;&#x2116;</dt>
              <dd className="font-display text-lg text-paper">{firm.sra}</dd>
            </div>
            <div className="hidden sm:block h-5 w-px bg-paper/20" aria-hidden="true" />
            <div className="flex items-center gap-2.5">
              <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass-light">Lexcel</dt>
              <dd className="text-sm text-paper/80">Accredited</dd>
            </div>
            <div className="hidden sm:block h-5 w-px bg-paper/20" aria-hidden="true" />
            <div className="flex items-center gap-2.5">
              <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass-light">Hours</dt>
              <dd className="text-sm text-paper/80">Mon&ndash;Fri 9&ndash;5</dd>
            </div>
          </dl>
          <Link
            href="/practices"
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-brass-light hover:text-paper transition-colors"
          >
            Explore our practices &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
