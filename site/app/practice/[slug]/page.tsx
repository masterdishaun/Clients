import Link from "next/link";
import { notFound } from "next/navigation";
import { practices, firm } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = practices.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — Bridges Solicitors` : "Practice" };
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = practices.find((x) => x.slug === slug);
  if (!p) return notFound();

  const others = practices.filter((x) => x.slug !== p.slug);

  return (
    <>
      <PageHero kicker={`Practice ${p.number}`} title={p.title} lede={p.short} />

      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl text-ink/85 leading-[1.6]">{p.description}</p>

            {p.bullets.length > 0 && (
              <>
                <div className="kicker mt-14 mb-6 text-brass-dark">— Areas of work</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-ink/15 pt-6">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-ink/80 py-1.5 border-b border-ink/10"
                    >
                      <span className="mt-2 h-px w-3 bg-brass shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {p.closing && (
              <p className="mt-12 text-lg text-ink/75 leading-relaxed">{p.closing}</p>
            )}

            <div className="mt-14 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 hover:bg-brass transition-colors"
              >
                Discuss your matter
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-3 border border-ink/25 px-6 py-4 hover:border-ink"
              >
                <span className="font-mono text-sm tracking-wider2">{firm.phone}</span>
              </a>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="border-t-2 border-ink pt-6 sticky top-28">
              <div className="kicker text-ink/70 mb-4">— Other practices</div>
              <ul className="space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/practice/${o.slug}`}
                      className="group flex items-baseline justify-between gap-3 border-b border-ink/10 py-2 text-ink/80 hover:text-ink"
                    >
                      <span className="font-display text-lg">{o.title}</span>
                      <span className="font-mono text-[10px] text-brass tracking-wider2">
                        {o.number}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
