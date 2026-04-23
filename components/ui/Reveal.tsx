"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Rescue any element that is already above the fold or fully in view when
    // the page mounts — otherwise the IO may not fire for them on fast routes
    // (Next App Router client navigations in particular).
    const reveal = (el: HTMLElement) => {
      const delay = Number(el.dataset.delay ?? 0);
      if (delay) window.setTimeout(() => el.classList.add("in"), delay);
      else el.classList.add("in");
    };

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));

    // Immediately reveal anything already in the viewport.
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.filter((el) => !el.classList.contains("in")).forEach((el) => io.observe(el));

    // Failsafe: after a beat, force-reveal anything still hidden (prevents
    // content staying blank if IO never fires for whatever reason).
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)").forEach(reveal);
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
