import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-[var(--color-text)]">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
          Project page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          The project you were looking for does not exist, or the route needs a new
          slug in the shared project data.
        </p>
        <Link
          href="/"
          className="btn btn-secondary mt-6 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em]"
        >
          <span>Return home</span>
        </Link>
      </div>
    </main>
  );
}
