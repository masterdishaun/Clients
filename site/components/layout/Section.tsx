import { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`py-section ${className}`}>
      <div className={bleed ? "" : "mx-auto max-w-[1400px] px-6 md:px-8"}>{children}</div>
    </section>
  );
}
