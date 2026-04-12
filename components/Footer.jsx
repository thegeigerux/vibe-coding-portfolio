import Link from "next/link";

const links = [
  { href: "https://github.com/", label: "GitHub", icon: GithubIcon },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://instagram.com/", label: "Instagram", icon: InstagramIcon }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell glass-panel flex flex-col gap-4 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
          © {new Date().getFullYear()} James Geiger
        </p>

        <div className="flex items-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="icon-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[var(--color-muted)] transition hover:text-[var(--color-accent-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function GithubIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      {...props}
    >
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.4-5.6-6A4.7 4.7 0 0 1 6.5 8.6a4.4 4.4 0 0 1 .1-3.2s1-.3 3.4 1.2a11.7 11.7 0 0 1 6.1 0c2.3-1.5 3.4-1.2 3.4-1.2a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.9 5.7-5.7 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      {...props}
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.96V21H3Zm7.2 0h3.8v1.54h.05c.53-1 1.82-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-3.96v-4.98c0-1.19-.02-2.73-1.66-2.73-1.67 0-1.93 1.3-1.93 2.65V21H10.2Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      {...props}
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
