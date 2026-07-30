import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description: "Professional bio for Aaron Brown.",
};

export default function AboutPage() {
  return (
    <section className="portal-shell min-h-screen text-navy">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-center text-5xl font-bold leading-tight text-navy sm:text-6xl">
            About <span className="text-brown">Me</span>
          </h1>

          <div className="mt-8 space-y-6 text-left text-lg leading-8 text-navy/74">
            <p>
              I am an MS candidate in Software Development at Boston University
              building full-stack applications, backend APIs, React interfaces,
              cloud workflows, and relational database systems.
            </p>
            <p>
              Before focusing on software, I spent years in audio production,
              hospitality, entrepreneurship, and client-facing operations. That
              background shaped how I build: I care about clear communication,
              dependable systems, practical tradeoffs, and products that make
              sense to the people using them.
            </p>
            <p>
              I am especially drawn to work where engineering quality and real
              product needs meet: secure workflows, clean data models,
              thoughtful UX, and deployment paths that are maintainable,
              reliable, and scalable. I enjoy collaborating with designers,
              product managers, and other engineers to build useful software.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CTAButton href="/projects">View Projects</CTAButton>
            <CTAButton href="/resume" variant="secondary">
              View Resume
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
