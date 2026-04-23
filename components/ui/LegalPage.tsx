import type { ReactNode } from "react";
import PageHero from "@/components/ui/PageHero";
import { firm } from "@/lib/content";

export type LegalSection = {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  list?: string[];
  listIntro?: string;
};

export default function LegalPage({
  kicker,
  title,
  lede,
  lastUpdated,
  sections,
  footer,
}: {
  kicker: string;
  title: string;
  lede?: string;
  lastUpdated?: string;
  sections: LegalSection[];
  footer?: ReactNode;
}) {
  return (
    <>
      <PageHero kicker={kicker} title={title} lede={lede} />

      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-10">
          <article className="col-span-12 md:col-span-8">
            {lastUpdated && (
              <div className="kicker text-brass-dark mb-10 pb-6 border-b border-rule">
                Last updated {lastUpdated}
              </div>
            )}

            <div className="space-y-14">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-display text-2xl md:text-3xl text-ink leading-[1.2] mb-5">
                    {s.heading}
                  </h2>
                  {s.intro && (
                    <p className="text-ink/80 leading-[1.75] text-base md:text-lg">
                      {s.intro}
                    </p>
                  )}
                  {s.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="mt-5 text-ink/80 leading-[1.75] text-base md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                  {s.listIntro && (
                    <p className="mt-5 text-ink/80 leading-[1.75] text-base md:text-lg">
                      {s.listIntro}
                    </p>
                  )}
                  {s.list && (
                    <ul className="mt-5 space-y-3">
                      {s.list.map((item, i) => (
                        <li
                          key={i}
                          className="pl-6 relative text-ink/80 leading-[1.7] text-base md:text-lg"
                        >
                          <span
                            className="absolute left-0 top-[0.85em] h-px w-3 bg-brass"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {footer && <div className="mt-16 pt-10 border-t border-rule">{footer}</div>}
          </article>

          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="sticky top-28 border-t-2 border-ink pt-6">
              <div className="kicker text-ink/70 mb-3">&mdash; Contact</div>
              <p className="font-display text-xl text-ink leading-[1.3]">{firm.address}</p>
              <div className="mt-6 space-y-4 text-sm text-ink/75">
                <div>
                  <div className="kicker text-ink/70">Telephone</div>
                  <a href={firm.phoneHref} className="font-display text-xl text-ink hover:text-brass transition-colors">
                    {firm.phone}
                  </a>
                </div>
                <div>
                  <div className="kicker text-ink/70">Email</div>
                  <a href={`mailto:${firm.email}`} className="text-ink hover:text-brass transition-colors break-all">
                    {firm.email}
                  </a>
                </div>
                <div>
                  <div className="kicker text-ink/70">SRA &#x2116;</div>
                  <p className="font-mono text-sm text-ink">{firm.sra}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
