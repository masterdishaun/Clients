export default function Welcome() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-4" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 01 / Welcome</div>
            <h2 className="font-display text-display-md text-ink">
              A client-focused law practice.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6" data-reveal data-delay="120">
            <p className="text-xl leading-[1.55] text-ink/85">
              Bridges Solicitors puts client care at the heart of its operation. We aim to achieve
              our clients' objectives by working tirelessly with them, while maintaining
              professionalism at all times.
            </p>
            <p className="mt-6 text-lg leading-[1.7] text-ink/70">
              Our track record speaks values. We place great weight on our integrity and on how we
              operate our business — whether we are defending a client at the Crown Court,
              advising on a cross-border property matter, or preparing a settlement application at
              the Home Office.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
              {[
                { k: "5.0", l: "Google rating" },
                { k: "08", l: "Practice areas" },
                { k: "20+", l: "Years' combined PQE" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-ink leading-none">
                    {s.k}
                  </div>
                  <div className="kicker mt-3 text-ink/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
