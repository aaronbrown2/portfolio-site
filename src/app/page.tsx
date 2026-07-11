import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CTAButton } from "@/components/CTAButton";
import { Headshot } from "@/components/Headshot";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollFocus } from "@/components/ScrollFocus";
import { featuredProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="portal-shell text-navy">
      <section className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden">
        <ScrollFocus
          className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20"
          fadeOut={false}
          initialVisible
        >
          <div className="text-center lg:text-left">
            <h1 className="balanced mx-auto max-w-4xl text-5xl font-bold leading-[0.96] text-navy sm:text-7xl lg:mx-0 lg:text-8xl">
              Hi, I’m <span className="text-brown">Aaron</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-navy/70 lg:mx-0">
              A full-stack software developer seeking product-focused
              engineering roles, bringing a multidisciplinary background in
              software development, design, audio production, hospitality,
              entrepreneurship, and management.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <CTAButton
                className="bg-navy !text-white hover:bg-navy-deep"
                href="/projects"
              >
                View Projects
              </CTAButton>
              <CTAButton
                className="border-navy/10 bg-white text-navy hover:border-brown/40 hover:bg-cream"
                href="/resume"
                variant="secondary"
              >
                Resume
              </CTAButton>
              <CTAButton
                className="border-navy/10 bg-white text-navy hover:border-brown/40 hover:bg-cream"
                href="#contact"
                variant="secondary"
              >
                Contact
              </CTAButton>
            </div>
          </div>
          <div className="order-first lg:order-none lg:justify-self-end">
            <div className="relative mx-auto w-[min(100%,15.5rem)] sm:w-[24rem] lg:w-[clamp(22rem,34vw,30rem)]">
              <div className="absolute -inset-5 rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_20%,rgba(138,79,43,0.12),transparent_58%)] blur-2xl" />
              <Headshot
                className="relative border-navy/10 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.12)]"
                priority
              />
            </div>
          </div>
        </ScrollFocus>
      </section>

      <section className="relative px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <ScrollFocus className="pb-20 text-center">
            <h2 className="balanced text-5xl font-bold text-navy sm:text-6xl lg:text-7xl">
              My Work
            </h2>
            <Link
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brown hover:text-navy"
              href="/projects"
            >
              All projects
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </ScrollFocus>
          <div className="mt-16 grid gap-20 lg:mt-20 lg:gap-28">
            {featuredProjects.map((project, index) => (
              <ScrollFocus key={project.slug}>
                <ProjectCard project={project} reverse={index % 2 === 1} />
              </ScrollFocus>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="contact">
        <div className="mx-auto max-w-xl">
          <ScrollFocus fadeOut={false}>
            <h2 className="balanced text-center text-5xl font-bold text-navy sm:text-6xl lg:text-7xl">
              Contact
            </h2>
            <ContactForm
              className="mt-10"
              idPrefix="home-contact"
              tone="warm"
            />
          </ScrollFocus>
        </div>
      </section>
    </div>
  );
}
