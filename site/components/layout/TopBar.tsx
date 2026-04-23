import { firm } from "@/lib/content";

export default function TopBar() {
  return (
    <div className="hidden md:block border-b border-ink/10 bg-paper/60 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-8 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider2 uppercase text-ink/70">
        <div className="flex items-center gap-6">
          <span>SRA № {firm.sra}</span>
          <span className="text-ink/25">/</span>
          <span>Est. London</span>
          <span className="text-ink/25">/</span>
          <span>Lewisham · SE6</span>
        </div>
        <div className="flex items-center gap-6">
          <span>{firm.hours}</span>
          <a href={firm.phoneHref} className="link-underline text-ink">
            {firm.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
