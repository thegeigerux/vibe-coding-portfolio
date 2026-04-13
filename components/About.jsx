import { skills } from "@/lib/projects";
import { Hexagon, Ghost, Gem, Cpu } from "lucide-react";

const CLIENTS = [
  { name: "Next.js", icon: Hexagon },
  { name: "React", icon: Cpu },
  { name: "TypeScript", icon: Gem },
  { name: "Tailwind", icon: Ghost },
  { name: "Node.js", icon: Hexagon },
  { name: "Vercel", icon: Cpu },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-10 pb-18 sm:scroll-mt-28 sm:pt-12 sm:pb-22"
    >
      <div className="section-shell">
        <div className="section-glow grid gap-10 rounded-[2rem] px-0 py-2 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              About
            </p>
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
              Design energy, engineering discipline.
            </h2>
          </div>

          <div className="grid gap-6">
            <p className="glass-panel max-w-3xl rounded-[2rem] p-6 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              I build modern web experiences for founders, teams, and ambitious
              products that need more than a template. My work lives where
              frontend systems, UX craft, and performance discipline overlap, so
              the result feels distinctive without becoming fragile.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="glass-panel rounded-[1.75rem] px-5 py-5"
                >
                  <p className="text-base font-bold uppercase tracking-[0.08em]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
          <p className="mb-4 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Tech Stack
          </p>
          <div
            className="relative flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                >
                  <client.icon
                    className="h-6 w-6 text-white"
                    strokeWidth={1.5}
                  />
                  <span className="text-lg font-bold text-white tracking-tight">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
