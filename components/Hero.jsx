"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const marqueeItems = [
  "Accessibility",
  "Design Thinking",
  "Modern/Sleek UI's",
  "Customer Focused",
];

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.18);
      setIsScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate pb-16 pt-2 sm:pb-18 sm:pt-3">
      <div className="section-shell grain section-glow relative min-h-screen">
        <div className="relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-8 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            <p className="glass-panel inline-flex w-fit rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Associate Product Designer
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-[1.75rem] font-medium leading-[1.25] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.5rem]">
                <span
                  className="block"
                  style={{
                    maskImage:
                      "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
                  }}
                >
                  Hello! I'm{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-2))] bg-clip-text text-transparent">
                    James Geiger
                  </span>
                </span>
                <span
                  className="mt-1 block whitespace-nowrap"
                  style={{
                    maskImage:
                      "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
                  }}
                >
                  Product designer turned vibe coder
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                I design products that look sharp, move with intention, and
                perform smoothly from the very first scroll.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn btn-primary px-5 py-2.5 text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-secondary px-5 py-2.5 text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <div
              className="parallax-layer absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(255,79,216,0.3),rgba(52,245,208,0.15))] blur-3xl scale-110"
              style={{ transform: `translateY(${offset * -0.15}px)` }}
              aria-hidden="true"
            />
            <div className="relative mx-auto w-[70%] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_0_60px_-15px_rgba(255,79,216,0.3)] sm:w-[60%] lg:mx-0 lg:w-full">
              <Image
                src="/images/JG_Headshot_2026.jpg"
                alt="James Geiger"
                width={450}
                height={560}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Text Marquee */}
        <div
          className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="marquee flex min-w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={
                    index % 2 === 0
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-accent-2)]"
                  }
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`pointer-events-none fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
          Scroll
        </span>
        <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-full animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
