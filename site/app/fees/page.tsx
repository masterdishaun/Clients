import PageHero from "@/components/ui/PageHero";
import { fees } from "@/lib/content";

export const metadata = { title: "Legal Fees — Bridges Solicitors" };

const categories = [
  "Crime & Driving Offences",
  "Employment Fees",
  "Immigration Fees",
  "Commercial & Residential Litigation",
  "Landlords & Tenants",
  "Family & Children Cases",
  "Divorce",
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        kicker="Legal Fees"
        title="Transparent hourly rates and fixed-fee options."
        lede="Our hourly rates, plus VAT @ 20%, excluding disbursements — for private fee-paying, non legal-aid clients."
      />

      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8">
            <div className="kicker text-brass-dark mb-6">— Hourly rates</div>
            <div className="border-t-2 border-ink">
              {fees.hourly.map((r, i) => (
                <div
                  key={r.role}
                  className="grid grid-cols-12 items-baseline gap-6 py-6 border-b border-ink/15"
                >
                  <div className="col-span-1 font-mono text-xs text-brass tracking-wider2">
                    0{i + 1}
                  </div>
                  <div className="col-span-8 md:col-span-9 font-display text-xl md:text-2xl text-ink">
                    {r.role}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right font-display text-2xl md:text-3xl text-ink">
                    {r.rate}
                    <span className="ml-1 font-sans text-xs text-ink/70 align-top">/ hr</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink/80 leading-relaxed max-w-2xl">{fees.note}</p>
          </div>

          <aside className="col-span-12 md:col-span-4">
            <div className="border-t-2 border-ink pt-6">
              <div className="kicker text-ink/70 mb-4">— Fee schedules by matter</div>
              <ul className="divide-y divide-ink/10">
                {categories.map((c) => (
                  <li key={c} className="py-3 text-ink/80">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink/70">
                A full breakdown of costs including disbursements is provided in our letter of
                engagement. Contact us for an individual quote.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
