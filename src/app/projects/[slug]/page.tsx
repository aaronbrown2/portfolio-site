import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectUIPreview } from "@/components/ProjectUIPreview";
import { ScrollFocus } from "@/components/ScrollFocus";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          className="rounded-md border border-navy/10 bg-cream px-4 py-3 text-sm leading-6 text-navy/75 shadow-sm"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <ScrollFocus initialVisible>
      <section className="rounded-lg border border-navy/10 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
        <h2 className="text-2xl font-bold text-navy">{title}</h2>
        <div className="mt-4">{children}</div>
      </section>
    </ScrollFocus>
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const highlightItems = project.keyFeatures.slice(0, 4);
  const improvementItems = project.improvements.slice(0, 3);

  return (
    <article className="portal-shell text-navy">
      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <ScrollFocus
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16"
          initialVisible
        >
          <div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-brown transition hover:text-navy"
              href="/projects"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
              Back to projects
            </Link>
            <h1 className="balanced mt-3 text-5xl font-bold leading-tight text-navy sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/70">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-md border border-brown-muted/15 bg-cream px-3 py-1 text-sm font-semibold text-brown-muted/75"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <ProjectUIPreview project={project} />
          </div>
        </ScrollFocus>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-28 pt-4 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:px-8 lg:pb-36">
        <aside className="h-fit space-y-5 lg:sticky lg:top-28">
          <section className="rounded-lg border border-navy/10 bg-white p-5 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
            <h2 className="text-lg font-bold text-navy">Project Links</h2>
            <div className="mt-4 space-y-3">
              {project.links.map((link) => {
                const isInternal = link.href.startsWith("/");
                const content = (
                  <>
                    <span>{link.label}</span>
                    {!isInternal ? (
                      <ExternalLink aria-hidden className="h-4 w-4" />
                    ) : null}
                  </>
                );

                return isInternal ? (
                  <Link
                    className="flex items-center justify-between rounded-md border border-navy/10 px-3 py-2 text-sm font-semibold text-navy/75 transition hover:border-brown/40 hover:text-navy"
                    href={link.href}
                    key={link.label}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    className="flex items-center justify-between rounded-md border border-navy/10 px-3 py-2 text-sm font-semibold text-navy/75 transition hover:border-brown/40 hover:text-navy"
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
          </section>

          <section className="rounded-lg border border-navy/10 bg-white p-5 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
            <h2 className="text-lg font-bold text-navy">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  className="rounded-md border border-brown-muted/15 bg-cream px-2.5 py-1 text-xs font-semibold text-brown-muted/75"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <CaseSection title="My role">
            <p className="text-base leading-7 text-navy/75">
              {project.roleSummary}
            </p>
          </CaseSection>

          <CaseSection title="Project highlights">
            <DetailList items={highlightItems} />
          </CaseSection>

          <CaseSection title="What I would improve next">
            <DetailList items={improvementItems} />
          </CaseSection>

          <ScrollFocus initialVisible>
            <div className="rounded-lg border border-navy/10 bg-white p-6 text-navy shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-bold">
                Continue through the portfolio
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  className="flex min-h-20 items-center gap-3 rounded-md border border-navy/10 bg-cream px-4 py-3 text-sm font-semibold text-navy/75 transition hover:border-brown/40 hover:text-navy"
                  href={`/projects/${previousProject.slug}`}
                >
                  <ArrowLeft aria-hidden className="h-4 w-4 shrink-0" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-brown/70">
                      Previous project
                    </span>
                    <span className="mt-1 block text-base text-navy">
                      {previousProject.title}
                    </span>
                  </span>
                </Link>
                <Link
                  className="flex min-h-20 items-center justify-between gap-3 rounded-md border border-navy/10 bg-cream px-4 py-3 text-sm font-semibold text-navy/75 transition hover:border-brown/40 hover:text-navy"
                  href={`/projects/${nextProject.slug}`}
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-brown/70">
                      Next project
                    </span>
                    <span className="mt-1 block text-base text-navy">
                      {nextProject.title}
                    </span>
                  </span>
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollFocus>
        </div>
      </div>
    </article>
  );
}
