import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-12 pb-18 sm:scroll-mt-28 sm:pt-14 sm:pb-22"
    >
      <div className="section-shell space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Projects
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none sm:text-5xl">
              Side-scroll gallery with room to breathe.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            On mobile, the work stacks into an easy-to-scan feed. As the screen
            opens up, the gallery shifts into a cleaner multi-column layout so
            the section stays polished instead of cramped.
          </p>
        </div>

        <div
          aria-label="Project gallery"
          className="project-gallery-frame glass-panel rounded-[2rem] p-3 sm:p-4"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.slug} className="min-h-full">
                <ProjectCard project={project} priority={index < 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
