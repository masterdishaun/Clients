export default function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/15">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="kicker text-brass-dark mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-brass" />
          <span>{kicker}</span>
        </div>
        <h1 className="font-display text-display-lg text-ink max-w-4xl leading-[1.02]">
          {title}
        </h1>
        {lede && <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">{lede}</p>}
      </div>
    </section>
  );
}
