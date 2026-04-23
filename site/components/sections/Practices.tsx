import Link from "next/link";
import { practices } from "@/lib/content";

export default function Practices() {
  return (
    <section id="practices" className="py-section bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4" data-reveal>
            <div className="kicker text-brass-light mb-5">— 02 / Practices</div>
            <h2 className="font-display text-display-md">
              Eight disciplines,
              <br />
              one standard of care.
            </h2>
            <p className="mt-6 text-paper/60 max-w-sm">
              From defending your liberty to securing your home, our solicitors work across the
              full spectrum of civil and criminal practice.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ul>
              {practices.map((p, idx) => (
                <li key={p.slug} data-reveal data-delay={idx * 60}>
                  <Link
                    href={`/practice/${p.slug}`}
                    className="group grid grid-cols-12 gap-6 items-start border-t border-paper/15 py-8 md:py-10 transition-colors hover:bg-paper/[0.03]"
                  >
                    <div className="col-span-2 md:col-span-1 font-mono text-xs text-brass-light tracking-wider2 pt-2">
                      {p.number}
                    </div>
                    <div className="col-span-10 md:col-span-7">
                      <div className="font-display text-3xl md:text-4xl text-paper group-hover:text-brass-light transition-colors">
                        {p.title}
                      </div>
                    </div>
                    <div className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto text-sm text-paper/55 leading-relaxed">
                      {p.short}
                    </div>
                    <div className="col-span-2 md:col-span-1 flex md:justify-end pt-2">
                      <span className="text-paper/60 group-hover:text-brass-light group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="border-t border-paper/15" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
