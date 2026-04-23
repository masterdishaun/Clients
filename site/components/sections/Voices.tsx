export default function Voices() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-4" data-reveal>
            <div className="kicker text-brass-dark mb-5">— 05 / Voices</div>
            <h2 className="font-display text-display-md text-ink leading-[1.05]">
              Rated 5.0 on Google, built on relationships.
            </h2>
            <div className="mt-10 flex items-baseline gap-4">
              <div className="font-display text-7xl text-ink leading-none">5.0</div>
              <div>
                <div className="text-brass tracking-wider2 text-lg">★★★★★</div>
                <div className="kicker text-ink/70 mt-2">Based on 52 Google reviews</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Bridges handled our matter with absolute professionalism and genuine care. They explained every step and we felt informed the entire way through.",
                a: "Private client, Immigration",
              },
              {
                q: "Responsive, pragmatic, and technically sharp. They brought calm to a stressful dispute and achieved a far better outcome than we expected.",
                a: "Commercial client, Litigation",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="border-t border-ink/20 pt-8"
                data-reveal
                data-delay={i * 120}
              >
                <span className="block w-12 h-px bg-brass -mt-8 mb-8" />
                <blockquote className="font-display text-2xl leading-[1.3] text-ink">
                  "{t.q}"
                </blockquote>
                <figcaption className="kicker mt-6 text-ink/70">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
