import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectUIPreview } from "@/components/ProjectUIPreview";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group grid w-full items-center gap-4 overflow-hidden rounded-lg border border-navy/10 bg-white p-4 shadow-[0_18px_70px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-0.5 hover:border-brown/30 hover:shadow-[0_26px_90px_rgba(15,23,42,0.10)] focus-within:border-brown/45 sm:gap-6 sm:p-6 md:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 lg:p-8",
        reverse
          ? "grid-cols-1 min-[576px]:grid-cols-[minmax(8.5rem,0.5fr)_minmax(0,1fr)] sm:grid-cols-[minmax(12rem,0.6fr)_minmax(0,1fr)] md:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1fr)]"
          : "grid-cols-1 min-[576px]:grid-cols-[minmax(0,1fr)_minmax(8.5rem,0.5fr)] sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.6fr)] md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)]",
      )}
    >
      <div className={reverse ? "order-2 min-w-0" : "min-w-0"}>
        <h3 className="text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-xs font-semibold tracking-[0.13em] text-navy/50 sm:mt-4 sm:text-sm sm:tracking-[0.16em]">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              className="rounded-md border border-brown-muted/15 bg-cream px-2 py-1 text-[0.68rem] font-semibold text-brown-muted/75 sm:px-2.5 sm:text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-md bg-navy px-3 py-2 text-sm font-bold text-white transition hover:bg-navy-deep"
            href={`/projects/${project.slug}`}
          >
            Enter Project
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          {project.links.slice(0, 2).map((link) => {
            const isInternal = link.href.startsWith("/");
            const content = (
              <>
                {link.label}
                {!isInternal ? (
                  <ExternalLink aria-hidden className="h-4 w-4" />
                ) : null}
              </>
            );

            return isInternal ? (
              <Link
                className="inline-flex items-center gap-2 rounded-md border border-navy/10 px-3 py-2 text-sm font-semibold text-navy/70 transition hover:border-brown/40 hover:text-navy"
                href={link.href}
                key={link.label}
              >
                {content}
              </Link>
            ) : (
              <a
                className="inline-flex items-center gap-2 rounded-md border border-navy/10 px-3 py-2 text-sm font-semibold text-navy/70 transition hover:border-brown/40 hover:text-navy"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>

      <div
        className={cn("hidden min-w-0 min-[576px]:block", reverse && "order-1")}
      >
        <ProjectUIPreview project={project} />
      </div>
    </article>
  );
}
