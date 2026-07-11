import Link from "next/link";
import { Download, Github, Linkedin, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-2 py-6 sm:grid-cols-3 lg:grid-cols-5"
        >
          <Link
            className="inline-flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:text-white"
            href="/#contact"
          >
            <MessageSquare aria-hidden className="h-4 w-4" />
            Contact
          </Link>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:text-white"
            href={site.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:text-white"
            href={site.linkedInUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:text-white"
            download
            href={site.resumeUrl}
          >
            <Download aria-hidden className="h-4 w-4" />
            Resume
          </a>
          <Link
            className="inline-flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:text-white"
            href="/projects"
          >
            Projects
          </Link>
        </nav>
        <p className="border-t border-white/10 py-5 text-center text-xs font-semibold tracking-[0.14em] text-white/45">
          Designed and built by Aaron Brown with Next.js, TypeScript, and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
