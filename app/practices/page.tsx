import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { practices, firm } from "@/lib/content";

export const metadata = {
  title: "Our Practices — Bridges Solicitors",
  description:
    "Explore the practice areas covered by Bridges Solicitors: Crime, Conveyancing, Litigation & Debt Recovery, Road Traffic Offences, Immigration & Nationality, Employment Law, Family Law, Landlord & Tenant.",
};

export default function PracticesPage() {
  return (
    <>
      <PageHero
        kicker="— Practice Areas"
        title="Our Practices."
        lede="Eight disciplines across civil, criminal and private-client work. Each matter is handled by a named solicitor from first call to final resolution."
      />

      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <ul className="border-t border-ink/15">
            {practices.map((p, i) => (
              <li key={p.slug} data-reveal data-delay={i * 50}>
                <Link
                  href={`/practice/${p.slug}`}
                  className="group grid grid-cols-12 gap-6 items-start border-b border-ink/15 py-8 md:py-10 transition-colors hover:bg-ink/[0.02]"
                >
                  <div className="col-span-2 md:col-span-1 font-mono text-xs text-brass tracking-wider2 pt-3">
                    {p.number}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <div className="font-display text-3xl md:text-4xl text-ink group-hover:text-brass transition-colors leading-tight">
                      {p.title}
                    </div>
                  </div>
                  <div className="col-span-10 col-start-3 md:col-span-5 md:col-start-auto text-base text-ink/70 leading-relaxed">
                    {p.short}
                  </div>
                  <div className="col-span-2 md:col-span-1 flex md:justify-end pt-3">
                    <span className="text-ink/60 group-hover:text-brass group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <div className="kicker text-brass-dark mb-5">&mdash; Not sure where your matter fits?</div>
              <h2 className="font-display text-display-md text-ink leading-[1.05]">
                Speak with a solicitor today.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="text-lg text-ink/80 leading-[1.75]">
                Our solicitors will listen to your situation and let you know honestly whether we
                are the right firm for your matter &mdash; and, where helpful, point you in the
                right direction if we are not.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-brass transition-colors font-semibold"
                >
                  Book a consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <a
                  href={firm.phoneHref}
                  className="inline-flex items-center gap-3 border border-ink/25 px-6 py-4 hover:border-ink font-mono text-sm tracking-wider2"
                >
                  {firm.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
