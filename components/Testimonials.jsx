import { testimonials } from "@/lib/projects";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-14">
      <div className="section-shell space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Testimonials
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none sm:text-5xl">
              The work feels better
              <br />
              when trust is built in.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Kind words from collaborators, clients, and teammates who have
            trusted me to bring more clarity, polish, accessibility, and
            momentum to the work.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-panel rounded-[2rem] p-6 sm:p-7"
              aria-label={`Testimonial from ${item.name}`}
            >
              <p className="text-3xl font-black leading-none text-[var(--color-accent)]">
                &ldquo;
              </p>
              <blockquote className="mt-4 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
                {item.quote}
              </blockquote>
              <footer className="mt-8 border-t border-white/10 pt-4">
                <p className="text-base font-black uppercase tracking-[0.08em]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {item.role}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
