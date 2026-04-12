"use client";

import { useEffect, useState } from "react";

const marqueeItems = [
  "Frontend systems",
  "Motion with purpose",
  "Product-minded engineering",
  "Fast, accessible interfaces",
  "Next.js builds that feel alive"
];

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate pb-16 pt-2 sm:pb-18 sm:pt-3">
      <div className="section-shell grain section-glow relative min-h-screen">

        <div className="relative z-10 mt-2 grid min-h-[calc(100vh-8rem)] items-center gap-8 pb-10 lg:mt-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex w-full justify-end lg:col-span-2">
            <p className="glass-panel inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Next.js frontend developer
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl md:text-7xl xl:text-[7.5rem]">
                Building sleek
                <span className="block bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-2))] bg-clip-text text-transparent">
                  neon interfaces
                </span>
                for the modern web.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                I design and ship portfolio-grade interfaces with strong visual rhythm,
                cinematic motion, and performance discipline so products feel sharp,
                premium, and alive from the first scroll.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn btn-primary px-6 py-3 text-sm font-black uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text)]"
              >
                <span>View Projects</span>
              </a>
              <a
                href="#contact"
                className="btn btn-secondary px-6 py-3 text-sm font-black uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[20rem]">
            <div
              className="parallax-layer absolute inset-x-[10%] top-6 h-48 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,79,216,0.42),rgba(52,245,208,0.12))] blur-3xl"
              style={{ transform: `translateY(${offset * -0.2}px)` }}
              aria-hidden="true"
            />
            <div
              className="glass-panel neon-ring parallax-layer absolute right-0 top-0 w-full rounded-[2rem] p-6 md:p-8"
              style={{ transform: `translateY(${offset * -0.08}px)` }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-2)]">
                Selected focus
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-2))] bg-clip-text text-4xl font-black text-transparent">
                    05+
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Projects built with story-first UI
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Next.js", "React", "Tailwind", "Motion systems"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur">
        <div className="marquee flex min-w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className={index % 2 === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-accent-2)]"}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
