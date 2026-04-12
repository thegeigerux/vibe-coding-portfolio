import Link from "next/link";
import Footer from "@/components/Footer";
import { aboutPrinciples, aboutTimeline, skills } from "@/lib/projects";

export const metadata = {
  title: "About",
  description:
    "Learn more about James Geiger's approach to frontend engineering, interaction design, accessibility, and performance."
};

export default function AboutPage() {
  return (
    <main className="overflow-x-clip text-[var(--color-text)]">
      <section className="section-shell pt-14 sm:pt-16">
        <div className="section-glow grid gap-10 py-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              About
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl md:text-7xl">
              Building frontend work with taste, pace, and staying power.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              I care about the part of frontend engineering where clarity, motion, and
              performance all have to work together. The goal is not just to make a page
              look polished, but to make it feel intentional at every breakpoint,
              interaction, and loading state.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="btn btn-primary px-6 py-3 text-sm font-black uppercase tracking-[0.18em]"
              >
                <span>View Projects</span>
              </Link>
              <Link
                href="/#contact"
                className="btn btn-secondary px-6 py-3 text-sm font-black uppercase tracking-[0.18em]"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-2)]">
              Working Style
            </p>
            <div className="mt-6 space-y-5 text-[var(--color-muted)]">
              <p className="leading-relaxed">
                My strongest work usually sits at the intersection of product thinking
                and visual execution: landing pages that carry a point of view, app
                surfaces that stay legible under pressure, and component systems that do
                not collapse the second a team needs to move fast.
              </p>
              <p className="leading-relaxed">
                I like expressive typography, clear hierarchy, and motion that rewards
                attention without stealing control from the user. Underneath that, I care
                just as much about semantic markup, predictable structure, and fast
                rendering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutTimeline.map((item) => (
            <article key={item.title} className="glass-panel rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {item.year}
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase leading-tight">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Principles
            </p>
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
              The standards behind the work.
            </h2>
          </div>
          <div className="grid gap-4">
            {aboutPrinciples.map((principle) => (
              <div key={principle} className="glass-panel rounded-[1.75rem] px-5 py-5">
                <p className="text-base font-medium leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-8 pb-18 sm:pt-10 sm:pb-22">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Skills
            </p>
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
              Capabilities I keep sharpening.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="glass-panel rounded-[1.75rem] px-5 py-5">
                <p className="text-base font-bold uppercase tracking-[0.08em]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
