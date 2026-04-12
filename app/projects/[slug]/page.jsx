import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }]
    }
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-[var(--color-text)]">
      <section className="section-glow mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-24 md:px-10">
        <Link
          href="/#projects"
          className="btn btn-secondary w-fit px-4 py-2 text-sm font-medium text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          <span>Back to projects</span>
        </Link>

        <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
              {project.year} / {project.role}
            </p>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
              {project.description}
            </p>
          </div>

          <dl className="glass-panel neon-ring grid gap-4 rounded-[2rem] p-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Stack
              </dt>
              <dd className="mt-2 text-base font-medium">{project.stack.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Outcome
              </dt>
              <dd className="mt-2 text-base font-medium">{project.outcome}</dd>
            </div>
          </dl>
        </header>

        <div className="glass-panel relative overflow-hidden rounded-[2rem]">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={1000}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase">Highlights</h2>
            <ul className="space-y-3 text-[var(--color-muted)]">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="glass-panel rounded-2xl px-5 py-4 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase">Build Notes</h2>
            <div className="glass-panel rounded-[2rem] p-6 text-[var(--color-muted)]">
              <p className="leading-relaxed">{project.summary}</p>
              <p className="mt-4 leading-relaxed">
                The experience was designed to balance product clarity, interaction feel,
                and performance. Motion is used with restraint, image loading stays
                optimized, and content hierarchy remains accessible across screen sizes.
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
