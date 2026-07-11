import type { Project } from "@/lib/projects";

type ProjectUIPreviewProps = {
  project: Project;
};

const previewAccent: Record<string, string> = {
  healthnest: "bg-brown/50",
  "dental-records": "bg-brown-muted/50",
  "local-dog": "bg-tan/60",
  "hot-take": "bg-brown-deep/40",
};

export function ProjectUIPreview({ project }: ProjectUIPreviewProps) {
  const accent = previewAccent[project.slug] ?? "bg-brown/50";

  if (project.imageSrc) {
    return (
      <div
        aria-label={`${project.title} UI preview`}
        className="relative isolate aspect-[3/4] w-full max-w-full overflow-hidden sm:aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/3]"
        role="img"
      >
        <picture>
          {project.imageSrcMobile ? (
            <source
              media="(max-width: 767px)"
              srcSet={project.imageSrcMobile}
            />
          ) : null}
          {project.imageSrcTablet ? (
            <source
              media="(max-width: 1023px)"
              srcSet={project.imageSrcTablet}
            />
          ) : null}
          <img
            alt={`${project.title} user interface screenshot`}
            className="h-full w-full object-contain object-center"
            loading="lazy"
            src={project.imageSrc}
          />
        </picture>
      </div>
    );
  }

  return (
    <div
      aria-label={`${project.title} UI preview`}
      className="relative isolate aspect-[4/3] w-full max-w-full overflow-hidden rounded-lg border border-navy/10 bg-cream shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(251,247,241,0.82))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,32,51,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,51,0.055)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-55" />

      <div className="relative grid h-full gap-4 p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-navy/10 pb-3">
          <div className="grid gap-2">
            <span className="h-2 w-20 rounded-full bg-brown/25" />
            <span className="h-3 w-36 rounded-full bg-navy/15" />
          </div>
          <div className="h-8 w-20 rounded-md bg-navy/90" aria-hidden />
        </div>

        <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-navy/10 bg-white/72 p-3">
            <div className="h-2 w-16 rounded-full bg-brown/30" />
            <div className="mt-4 grid gap-2">
              {[0, 1, 2, 3].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="h-6 w-6 rounded-md bg-tan/30" />
                  <span className="h-2 flex-1 rounded-full bg-navy/12" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            {[0, 1, 2].map((row) => (
              <div
                className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-navy/10 bg-white/80 px-3 py-2"
                key={row}
              >
                <div>
                  <div className="h-2 w-24 rounded-full bg-navy/15" />
                  <div className="mt-3 h-2 w-full rounded-full bg-navy/10">
                    <div
                      className={`h-full rounded-full ${accent}`}
                      style={{ width: `${48 + row * 16}%` }}
                    />
                  </div>
                </div>
                <span className="h-8 w-8 rounded-md bg-tan/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
