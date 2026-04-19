"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-[200]">
      <div className="section-shell">
        <nav
          aria-label="Primary"
          className="glass-panel relative isolate flex flex-col gap-4 rounded-[2rem] px-5 py-4 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-start justify-between gap-4">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <Image
                src="/brand/jg-glyph.svg"
                alt="JG monogram"
                width={40}
                height={29}
                className="h-9 w-auto shrink-0 sm:h-10"
                priority
              />
              <span className="flex flex-col gap-1">
                <span className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-text)] sm:text-base">
                  James Geiger
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-2)] sm:text-[0.72rem]">
                  Product Designer | Vibe Coder
                </span>
              </span>
            </Link>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((current) => !current)}
              className="glass-panel inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--color-text)] transition hover:text-[var(--color-accent-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${
                    isOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${
                    isOpen ? "translate-y-[-7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="hidden flex-wrap items-center gap-4 lg:flex lg:justify-end">
            <div className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <Link href="/about" className="text-link transition hover:text-[var(--color-accent-2)]">
                About
              </Link>
              <a href="/#projects" className="text-link transition hover:text-[var(--color-accent)]">
                Projects
              </a>
              <a href="/resume" className="text-link transition hover:text-[var(--color-accent)]">
                Resume
              </a>
              <a href="/#contact" className="text-link transition hover:text-[var(--color-accent-2)]">
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>

          <div
            id="mobile-nav"
            className={`${isOpen ? "grid" : "hidden"} gap-4 border-t border-white/10 pt-4 lg:hidden`}
          >
            <div className="grid gap-3 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-xl px-1 py-1 transition hover:text-[var(--color-accent-2)]"
              >
                About
              </Link>
              <a
                href="/#projects"
                onClick={closeMenu}
                className="rounded-xl px-1 py-1 transition hover:text-[var(--color-accent)]"
              >
                Projects
              </a>
              <a
                href="/resume"
                onClick={closeMenu}
                className="rounded-xl px-1 py-1 transition hover:text-[var(--color-accent)]"
              >
                Resume
              </a>
              <a
                href="/#contact"
                onClick={closeMenu}
                className="rounded-xl px-1 py-1 transition hover:text-[var(--color-accent-2)]"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
