import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { firm, team, practices } from "@/lib/content";

export const metadata = {
  title: "About — Bridges Solicitors",
  description:
    "Bridges Solicitors is a client-focused law practice that puts client care at the heart of its operation. Meet the team behind the firm.",
};

const commitments = [
  "We are committed to our clients, whether publicly funded or paying privately, and regard every case as important.",
  "We are honest and aim to be friendly and fair.",
  "We are proud of the professionalism and high-quality standards our clients experience when they make use of our services.",
  "We are committed to providing quality-assured legal services and access to justice for the most vulnerable people in our society.",
  "Part of the reason for our success is that we are clear about the types of work we have the qualifications, skills, knowledge, and experience to undertake.",
  "We are conscious of compliance with key dates, anti-money laundering regulations, governance, data protection, equality and diversity, and client care.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="— About Bridges Solicitors"
        title="A client-focused Law Practice."
        lede="Bridges Solicitors puts client care at the heart of its operation. We work tirelessly with our clients to achieve their objectives, while maintaining professionalism at all times."
      />

      {/* Our Promise */}
      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 01 / Our Promise</div>
            <h2 className="font-display text-display-md text-ink leading-[1.05]">
              Client care at the <span className="italic">heart</span> of everything.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6" data-reveal data-delay="120">
            <p className="text-xl text-ink/85 leading-[1.6]">
              Bridges Solicitors is a client-focused Law Practice that puts client care at the
              heart of its operation.
            </p>
            <p className="mt-5 text-lg text-ink/80 leading-[1.75]">
              We aim to achieve our clients&rsquo; objectives by working tirelessly with them,
              while maintaining professionalism at all times.
            </p>
            <p className="mt-5 text-lg text-ink/80 leading-[1.75]">
              Our track record speaks values, and we place much on our integrity and on how we
              operate our business.
            </p>

            <div className="mt-14 border-t border-ink/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { k: "2005", l: "Principal admitted" },
                { k: "08", l: "Practice areas" },
                { k: "5.0", l: "Google rating" },
                { k: firm.sra, l: "SRA №" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-ink leading-none">
                    {s.k}
                  </div>
                  <div className="kicker mt-3 text-ink/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-section bg-stone">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-5" data-reveal>
              <div className="kicker text-brass-dark mb-5">— 02 / Our Team</div>
              <h2 className="font-display text-display-md text-ink leading-[1.05]">
                The solicitors
                <br />
                behind Bridges.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7" data-reveal data-delay="120">
              <p className="text-lg text-ink/80 leading-[1.75]">
                Our team combines courtroom experience with the calm, considered advice that
                serious legal matters require. Every instruction is handled by a named solicitor
                who will stay with you from first call to final resolution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {team.map((m, i) => (
              <article
                key={m.slug}
                className="group flex gap-6 md:gap-7"
                data-reveal
                data-delay={i * 120}
              >
                <div className="relative shrink-0 w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-full bg-ink/5 ring-1 ring-ink/10">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 144px, 112px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex-1 min-w-0 border-t-2 border-ink pt-4">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass-dark mb-2">
                    {m.role}
                  </div>
                  <h3 className="font-display text-2xl md:text-[26px] text-ink leading-tight">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-xs text-ink/55 font-mono tracking-wider">
                    {m.admitted}
                  </p>
                  <p className="mt-4 text-[15px] text-ink/80 leading-relaxed">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Firm */}
      <section className="py-section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 03 / Our Firm</div>
            <h2 className="font-display text-display-md text-ink leading-[1.05]">
              Areas of practice.
            </h2>
            <p className="mt-6 text-lg text-ink/80 leading-[1.75] max-w-md">
              The Firm has been set up to provide legal services to privately paying clients.
            </p>
            <p className="mt-5 text-base text-ink/70 leading-[1.75] max-w-md">
              The firm has successfully undergone Law Society Quality Mark accreditations and is
              looking forward to applying for a legal aid franchise in family law and housing
              law.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6" data-reveal data-delay="120">
            <ul className="border-t border-ink/15">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice/${p.slug}`}
                    className="group grid grid-cols-12 gap-6 items-center border-b border-ink/15 py-5 hover:bg-ink/[0.02] transition-colors"
                  >
                    <div className="col-span-2 md:col-span-1 font-mono text-xs text-brass tracking-wider2">
                      {p.number}
                    </div>
                    <div className="col-span-8 md:col-span-9 font-display text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors">
                      {p.title}
                    </div>
                    <div className="col-span-2 flex justify-end text-ink/60 group-hover:text-brass group-hover:translate-x-1 transition-all">
                      &rarr;
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-section bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-5" data-reveal>
              <div className="kicker text-brass-light mb-5">— 04 / Our Commitments</div>
              <h2 className="font-display text-display-md leading-[1.05]">
                What clients can
                <br />
                <span className="italic text-brass-light">expect from us.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7" data-reveal data-delay="120">
              <p className="text-lg text-paper/80 leading-[1.75]">
                Every case matters. These are the standards we hold ourselves to on behalf of
                every client we serve.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 border-t border-paper/15 pt-10">
            {commitments.map((c, i) => (
              <li
                key={i}
                className="flex gap-5 items-start"
                data-reveal
                data-delay={i * 60}
              >
                <span className="font-mono text-[11px] tracking-wider2 text-brass-light shrink-0 mt-1.5">
                  0{i + 1}
                </span>
                <p className="text-paper/85 leading-[1.7]">{c}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 pt-10 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-display text-2xl max-w-lg leading-[1.25]">
              Discuss your matter with a named solicitor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brass text-paper px-7 py-4 hover:bg-paper hover:text-brass transition-colors font-semibold"
              >
                Contact us
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-3 border border-paper/30 px-6 py-4 text-paper hover:border-brass-light hover:bg-paper/10 transition-colors font-mono text-sm tracking-wider2"
              >
                {firm.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
