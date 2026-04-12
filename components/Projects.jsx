"use client";

import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const scrollerRef = useRef(null);

  const onKeyDown = (event) => {
    if (!scrollerRef.current) {
      return;
    }

    const amount = 320;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollerRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="scroll-mt-24 pt-12 pb-18 sm:scroll-mt-28 sm:pt-14 sm:pb-22">
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
            Browse horizontally on smaller screens with touch, trackpad, or keyboard
            arrows. On larger screens, the gallery settles into a cleaner grid so the
            section feels deliberate instead of oversized.
          </p>
        </div>

        <div
          ref={scrollerRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="Project gallery"
          className="project-gallery-frame glass-panel projects-scroller overflow-x-auto overflow-y-hidden rounded-[2rem] p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          <div className="flex w-max gap-4 lg:grid lg:min-w-0 lg:w-full lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="min-h-full w-[18.5rem] shrink-0 sm:w-[22rem] lg:w-auto"
              >
                <ProjectCard project={project} priority={index < 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
