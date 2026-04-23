const pillars = [
  {
    n: "i",
    title: "Client at the centre",
    body:
      "Every matter we take on is run with transparent communication, fixed-fee structures where appropriate, and a single point of contact who knows your file inside-out.",
  },
  {
    n: "ii",
    title: "Multicultural fluency",
    body:
      "Our clients come from diverse multicultural and multi-religious backgrounds. We listen, we translate nuance, and we tailor our advice accordingly.",
  },
  {
    n: "iii",
    title: "Record of results",
    body:
      "From record-breaking immigration appeal outcomes to flexible debt-recovery success, our track record speaks to our values: rigour, integrity, and outcome.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 md:col-span-7" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 04 / Why Bridges</div>
            <h2 className="font-display text-display-md text-ink">
              Technical authority.
              <br />
              <span className="italic text-brass-dark">Human refinement.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15 border-y border-ink/15">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className="bg-paper p-10 md:p-12"
              data-reveal
              data-delay={i * 100}
            >
              <div className="font-mono text-brass text-sm tracking-wider2">— {p.n}</div>
              <h3 className="mt-6 font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-4 text-ink/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
