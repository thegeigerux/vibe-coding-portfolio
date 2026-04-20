"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectTags, projects } from "@/lib/projects";

const tagStyles = {
  All: {
    hover:
      "hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)] hover:text-[var(--color-text)]",
    active:
      "border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-[var(--color-text)] shadow-[0_12px_30px_rgba(255,79,216,0.16)]"
  },
  "Vibe Coding": {
    hover:
      "hover:border-[#46CFF6] hover:bg-[rgba(70,207,246,0.14)] hover:text-[var(--color-text)]",
    active:
      "border-[#46CFF6] bg-[rgba(70,207,246,0.16)] text-[var(--color-text)] shadow-[0_12px_30px_rgba(70,207,246,0.18)]"
  },
  "UX Design": {
    hover:
      "hover:border-[#19E0EA] hover:bg-[rgba(25,224,234,0.14)] hover:text-[var(--color-text)]",
    active:
      "border-[#19E0EA] bg-[rgba(25,224,234,0.16)] text-[var(--color-text)] shadow-[0_12px_30px_rgba(25,224,234,0.18)]"
  },
  "Web Design": {
    hover:
      "hover:border-[#A87AED] hover:bg-[rgba(168,122,237,0.14)] hover:text-[var(--color-text)]",
    active:
      "border-[#A87AED] bg-[rgba(168,122,237,0.18)] text-[var(--color-text)] shadow-[0_12px_30px_rgba(168,122,237,0.2)]"
  }
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tag === activeTag);

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
              Selected Works
              <br />
              Built to feel sharp.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            A curated look at the interfaces, systems, and digital experiences
            I’ve designed and built, from polished product concepts to
            frontend experiments with motion, accessibility, and performance
            baked in.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["All", ...projectTags].map((tag) => {
            const isActive = tag === activeTag;
            const activeClass = tagStyles[tag]?.active ?? tagStyles.All.active;
            const hoverClass = tagStyles[tag]?.hover ?? tagStyles.All.hover;

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition sm:px-5 sm:py-2.5 ${
                  isActive
                    ? activeClass
                    : `border-white/10 bg-white/[0.04] text-[var(--color-muted)] ${hoverClass}`
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div
          aria-label="Project gallery"
          className="project-gallery-frame glass-panel rounded-[2rem] p-3 sm:p-4"
        >
          {filteredProjects.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div key={project.slug} className="min-h-full">
                  <ProjectCard project={project} priority={index < 2} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-48 items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.03] px-6 py-10 text-center">
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                No projects match that tag yet. Try another filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
