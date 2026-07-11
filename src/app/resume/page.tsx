import type { Metadata } from "next";
import { Download, Github, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and professional links for Aaron Brown.",
};

const education = [
  {
    school: "Boston University",
    detail: "MS in Software Development",
    meta: "Expected August 2026",
    notes:
      "Coursework includes secure software development, database design, data structures and algorithms, software engineering, design patterns, and advanced machine learning.",
  },
  {
    school: "Berklee College of Music",
    detail: "BA in Songwriting",
    meta: "Audio Engineering Minor",
  },
];

const skills = [
  {
    title: "Software",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "SQL",
      "REST APIs",
      "FastAPI",
      "PostgreSQL",
      "pytest",
      "Jest",
      "Git",
    ],
  },
  {
    title: "Backend and Data",
    items: [
      "Relational modeling",
      "Schema design",
      "Data validation",
      "API design",
      "Automation workflows",
      "Technical documentation",
    ],
  },
  {
    title: "Cloud and Quality",
    items: [
      "Docker",
      "AWS",
      "Google Cloud Run",
      "Vercel",
      "CI/CD",
      "GitHub Actions",
      "Security scanning",
    ],
  },
];

const experience = [
  {
    company: "Local Dog",
    role: "Web Developer",
    dates: "2025 - Present",
    bullets: [
      "Launched and maintained a production Shopify storefront using Liquid, JavaScript, platform APIs, and responsive customer workflows.",
      "Supported e-commerce operations across product, payment, order-management, integration, and user-facing feature work.",
    ],
  },
  {
    company: "Hot Take Recording Co.",
    role: "Founder, Engineer, Web Developer",
    dates: "2018 - Present",
    bullets: [
      "Managed client-facing technical delivery across stakeholder needs, troubleshooting, documentation, and releases.",
      "Designed and deployed the company website on Vercel with AWS integrations including S3 and Route 53.",
    ],
  },
  {
    company: "Hospitality Roles",
    role: "Assistant Manager and Lead Bartender",
    dates: "2017 - Present",
    bullets: [
      "Built communication, team leadership, and real-time problem-solving skills in high-pressure customer-facing environments.",
    ],
  },
];

const resumeProjects = [
  {
    title: "Build Fellowship - Dental Data Pipeline",
    dates: "2025",
    href: "/projects/dental-records",
    bullets: [
      "Built and deployed a secure, containerized backend API using FastAPI, Python, PostgreSQL, Docker, and API contracts.",
      "Protected sensitive data with Fernet encryption, bcrypt, Pydantic schemas, backend validation, and security-focused review.",
    ],
  },
  {
    title: "HealthNest - Full-Stack Healthcare Platform",
    dates: "2026",
    href: "/projects/healthnest",
    bullets: [
      "Built healthcare features end-to-end with FastAPI, React, PostgreSQL, Docker, REST APIs, and Agile practices.",
      "Shipped scheduling, secure messaging, lab workflows, relational schemas, tests, CI/CD, and AI-assisted features.",
    ],
  },
];

const certifications = [
  "IBM Full Stack Software Developer, 2025",
  "Google Cybersecurity Certificate, 2024",
  "Udemy Cloud Computing on AWS, 2024",
];

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-brown">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <section className="portal-shell min-h-screen text-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <header className="rounded-lg border border-line bg-white/86 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
                Aaron Brown
              </h1>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-ink/74">
                MS Software Development candidate at Boston University
                transitioning from audio engineering, hospitality, client
                relations, entrepreneurship, and management into full-stack
                software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CTAButton download href={site.resumeUrl} variant="primary">
                <Download aria-hidden className="h-4 w-4" />
                Download PDF
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                <MessageSquare aria-hidden className="h-4 w-4" />
                Contact
              </CTAButton>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="space-y-8">
            <ResumeSection title="Links">
              <div className="grid gap-3">
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink/76 transition hover:border-tide hover:text-ink"
                  href={site.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink/76 transition hover:border-tide hover:text-ink"
                  href={site.linkedInUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin aria-hidden className="h-4 w-4" />
                  LinkedIn
                </a>
                <Link
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink/76 transition hover:border-tide hover:text-ink"
                  href="/contact"
                >
                  <MessageSquare aria-hidden className="h-4 w-4" />
                  Contact form
                </Link>
              </div>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.school}>
                    <h3 className="font-bold text-ink">{item.school}</h3>
                    <p className="mt-1 text-sm font-semibold text-ink/72">
                      {item.detail}
                    </p>
                    <p className="mt-1 text-sm text-brown">{item.meta}</p>
                    {item.notes ? (
                      <p className="mt-3 text-sm leading-6 text-ink/66">
                        {item.notes}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Skills Summary">
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-bold text-ink">
                      {group.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          className="rounded-md bg-cloud px-2.5 py-1 text-xs font-semibold text-ink/72"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <ul className="space-y-3 text-sm leading-6 text-ink/72">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ResumeSection>
          </aside>

          <main className="space-y-8">
            <ResumeSection title="Professional Statement">
              <p className="text-base leading-8 text-ink/74">
                Full-stack builder with hands-on experience designing backend
                APIs, working with relational data models, deploying cloud-based
                systems, and applying secure software practices. I bring
                operational ownership from technical and client-facing
                environments, with a focus on understanding user needs, learning
                quickly, and executing reliably.
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <div className="space-y-7">
                {experience.map((item) => (
                  <article
                    className="border-b border-line pb-6 last:border-b-0 last:pb-0"
                    key={item.company}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-ink">
                          {item.company}
                        </h3>
                        <p className="text-sm font-semibold text-ink/68">
                          {item.role}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-brown">
                        {item.dates}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/72">
                      {item.bullets.map((bullet) => (
                        <li className="flex gap-3" key={bullet}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brown" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Projects">
              <div className="space-y-7">
                {resumeProjects.map((project) => (
                  <article
                    className="border-b border-line pb-6 last:border-b-0 last:pb-0"
                    key={project.title}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <Link
                        className="text-lg font-bold text-ink transition hover:text-brown"
                        href={project.href}
                      >
                        {project.title}
                      </Link>
                      <p className="text-sm font-bold text-brown">
                        {project.dates}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/72">
                      {project.bullets.map((bullet) => (
                        <li className="flex gap-3" key={bullet}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brown" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </ResumeSection>
          </main>
        </div>
      </div>
    </section>
  );
}
