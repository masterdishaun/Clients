import PageHero from "@/components/ui/PageHero";
import { externalLinks } from "@/lib/content";

export const metadata = { title: "Resources — Bridges Solicitors" };

export default function ExternalLinksPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Regulators, courts & public registers."
        lede="Official bodies and resources relevant to our practice and to clients navigating the UK legal system."
      />

      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <ul className="border-t-2 border-ink">
            {externalLinks.map((l, i) => (
              <li key={l.href} className="border-b border-ink/15">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-12 items-baseline gap-6 py-8"
                >
                  <div className="col-span-1 font-mono text-xs text-brass tracking-wider2">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 font-display text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors">
                    {l.label}
                  </div>
                  <div className="col-span-1 text-right text-ink/70 group-hover:text-brass">
                    ↗
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
