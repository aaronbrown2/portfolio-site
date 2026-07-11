import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Headshot } from "@/components/Headshot";

export const metadata: Metadata = {
  title: "About",
  description: "Professional bio for Aaron Brown.",
};

export default function AboutPage() {
  return (
    <section className="portal-shell min-h-screen text-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 min-[900px]:grid min-[900px]:grid-cols-[minmax(14rem,0.55fr)_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:px-8 lg:py-24">
        <div className="mx-auto mb-10 grid w-full max-w-[16rem] gap-6 min-[500px]:max-[691px]:max-w-none min-[500px]:max-[691px]:grid-cols-[minmax(10rem,16rem)_minmax(0,1fr)] min-[500px]:max-[691px]:items-center min-[692px]:float-left min-[692px]:mb-4 min-[692px]:mr-8 min-[692px]:max-w-[18rem] min-[900px]:sticky min-[900px]:top-28 min-[900px]:float-none min-[900px]:mb-0 min-[900px]:mr-0 min-[900px]:max-w-none">
          <div>
            <Headshot
              className="aspect-square border-navy/10 bg-white shadow-[0_26px_90px_rgba(15,23,42,0.10)] min-[900px]:aspect-auto"
              priority
            />
          </div>
          <h1 className="text-center text-[2.35rem] font-bold leading-none text-navy min-[500px]:max-[691px]:text-[4rem] min-[692px]:hidden">
            <span className="min-[500px]:max-[691px]:block">Hi, I'm</span>{" "}
            <span className="text-brown min-[500px]:max-[691px]:block">
              Aaron
            </span>
          </h1>
        </div>

        <div className="mx-auto w-full max-w-3xl text-center min-[692px]:max-w-none min-[692px]:text-left min-[900px]:max-w-3xl">
          <h1 className="hidden text-5xl font-bold leading-tight text-navy min-[692px]:block sm:text-6xl">
            Hi, I'm <span className="text-brown">Aaron</span>
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-navy/74">
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
