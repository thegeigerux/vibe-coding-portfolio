import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, priority = false }) {
  return (
    <article className="project-card glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] transition hover:translate-y-[-4px] hover:shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 28vw"
          priority={priority}
          className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,8,22,0.8))]" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {project.year}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {project.role}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-black uppercase leading-tight">{project.title}</h3>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-secondary mt-auto w-fit px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          <span>View case study</span>
        </Link>
      </div>
    </article>
  );
}
