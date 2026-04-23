import Link from "next/link";
import { fees } from "@/lib/content";

export default function Fees() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 03 / Fees</div>
            <h2 className="font-display text-display-md text-ink">
              Transparent hourly rates.
            </h2>
            <p className="mt-6 text-ink/80 leading-relaxed max-w-md">
              Our pricing is structured by experience and published in advance. A full breakdown
              of costs and disbursements is provided in our letter of engagement.
            </p>
            <Link
              href="/fees"
              className="link-underline inline-flex items-center gap-2 mt-8 text-ink font-mono text-sm tracking-wider2 uppercase"
            >
              View full fee schedule <span>→</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7" data-reveal data-delay="120">
            <div className="border-t-2 border-ink">
              {fees.hourly.map((row, i) => (
                <div
                  key={row.role}
                  className="grid grid-cols-12 items-baseline gap-6 py-6 border-b border-ink/15"
                >
                  <div className="col-span-1 font-mono text-xs text-brass tracking-wider2">
                    0{i + 1}
                  </div>
                  <div className="col-span-8 md:col-span-9 font-display text-xl md:text-2xl text-ink">
                    {row.role}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right font-display text-2xl md:text-3xl text-ink">
                    {row.rate}
                    <span className="ml-1 font-sans text-xs text-ink/70 align-top">/ hr</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink/70 leading-relaxed">{fees.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
