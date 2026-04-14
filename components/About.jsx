import { skills } from "@/lib/projects";

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
      </div>
    </section>
  );
}
