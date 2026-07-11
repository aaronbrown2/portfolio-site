import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollFocus } from "@/components/ScrollFocus";
import { ScrollToTargetButton } from "@/components/ScrollToTargetButton";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software and creative technology case studies for Aaron Brown.",
};

export default function ProjectsPage() {
  return (
    <section className="portal-shell min-h-screen px-4 py-24 text-navy sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollFocus className="mx-auto max-w-3xl text-center" initialVisible>
          <h1 className="balanced text-5xl font-bold text-navy sm:text-6xl lg:text-7xl">
            My Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-navy/70">
            This portfolio demonstrates full-stack product development across
            healthcare, e-commerce, and client-facing business applications. The
            work spans React, FastAPI, PostgreSQL, cloud deployment, CI/CD,
            secure APIs, responsive UI, and production-oriented delivery.
          </p>
          <ScrollToTargetButton
            className="mx-auto mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-brown-muted/20 bg-white/78 text-brown-muted shadow-sm transition hover:border-brown/40 hover:text-brown"
            targetId="featured-project-healthnest"
          >
            <ArrowDown aria-hidden className="h-5 w-5 animate-bounce" />
          </ScrollToTargetButton>
        </ScrollFocus>
        <div className="mt-20 grid gap-20 lg:mt-24 lg:gap-32" id="project-list">
          {projects.map((project, index) => (
            <div
              id={index === 0 ? "featured-project-healthnest" : undefined}
              key={project.slug}
            >
              <ScrollFocus>
                <ProjectCard project={project} reverse={index % 2 === 1} />
              </ScrollFocus>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
