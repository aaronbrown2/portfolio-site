export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  roleSummary: string;
  techStack: string[];
  keyFeatures: string[];
  improvements: string[];
  tags: string[];
  links: ProjectLink[];
  imageSrc?: string;
  imageSrcTablet?: string;
  imageSrcMobile?: string;
  featured?: boolean;
};

const githubProfileUrl = "https://github.com/aaronbrown2";

export const projects: Project[] = [
  {
    slug: "healthnest",
    title: "HealthNest",
    summary:
      "Full-stack healthcare portal for scheduling, secure messaging, lab results, dashboards, and AI-assisted workflows.",
    roleSummary:
      "I worked across the React and FastAPI stack, building scheduling and secure messaging flows while taking the lead on security hardening and contributing to schema design, Docker configuration, CI/CD, and testing.",
    techStack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Realtime",
      "Vercel",
      "Render",
      "Docker",
      "GitHub Actions",
      "Jest",
      "pytest",
      "OWASP ZAP",
      "Bandit",
      "SonarQube",
    ],
    keyFeatures: [
      "Secure real-time messaging",
      "Synchronized appointment scheduling",
      "Agentic AI capabilities",
      "Patient/provider dashboards with lab results",
    ],
    improvements: [
      "Explore healthcare API integrations to improve commercial viability",
      "Expand role-based authorization and audit logging",
      "Add deployment monitoring and incident-response workflows",
    ],
    tags: ["React", "FastAPI", "PostgreSQL", "Supabase Auth", "CI/CD"],
    links: [
      { label: "Live site", href: "https://healthnest-demo.vercel.app" },
      { label: "GitHub", href: "https://github.com/BUMETCS673/HealthNest" },
    ],
    imageSrc: "/projects/healthnest-ui.png",
    imageSrcTablet: "/projects/healthnest-ui-tablet.png",
    imageSrcMobile: "/projects/healthnest-ui-mobile.png",
    featured: true,
  },
  {
    slug: "dental-records",
    title: "Dental Data Pipeline",
    summary:
      "Secure FastAPI backend for dental-record workflows with validation, encryption, hashing, and containerized deployment.",
    roleSummary:
      "I owned the FastAPI backend, PostgreSQL workflows, and security hardening, including Fernet file encryption, bcrypt hashing, Pydantic validation, Docker containerization, and pytest coverage.",
    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Neon",
      "Google Cloud Run",
      "Artifact Registry",
      "Docker",
      "GitHub Actions",
      "pytest",
      "Pydantic",
      "bcrypt",
    ],
    keyFeatures: [
      "Dental-record API workflows",
      "Pydantic validation",
      "Encrypted sensitive fields",
      "Fernet-based sensitive file encryption",
      "Containerized deployment",
    ],
    improvements: [
      "Define target dental-office workflows and buyer requirements",
      "Add HIPAA-aligned audit logging and access controls",
      "Validate EHR/imaging-system integration paths",
    ],
    tags: ["FastAPI", "PostgreSQL", "Google Cloud Run", "Docker", "Neon"],
    links: [
      { label: "Live site", href: "https://dental-records.com" },
      { label: "GitHub", href: `${githubProfileUrl}/dental-records` },
    ],
    featured: true,
  },
  {
    slug: "local-dog",
    title: "Local Dog",
    summary:
      "Production Shopify development and ongoing web support for a small-business e-commerce site.",
    roleSummary:
      "I customized and maintained the Shopify storefront, translating business needs into product, order, payment, and theme updates.",
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Shopify Admin",
      "Shopify Payments",
      "E-commerce Workflows",
      "Theme customization",
    ],
    keyFeatures: [
      "Production Shopify storefront",
      "Product catalog and orders",
      "Custom subscription model",
      "Payment/order workflows",
      "Ongoing maintenance",
    ],
    improvements: [
      "Improve technical SEO for local search and product discovery",
      "Add CMS-backed content marketing for nutrition guides and customer stories",
      "Use analytics to refine conversion, reorder, and subscription flows",
    ],
    tags: ["Shopify", "Liquid", "E-commerce", "JavaScript", "UX"],
    links: [
      { label: "Live site", href: "https://localdogfoodco.com/" },
      { label: "GitHub", href: githubProfileUrl },
    ],
    imageSrc: "/projects/local-dog-ui.png",
    imageSrcTablet: "/projects/local-dog-ui-tablet.png",
    imageSrcMobile: "/projects/local-dog-ui-mobile.png",
    featured: true,
  },
  {
    slug: "hot-take",
    title: "Hot Take Recording Co.",
    summary:
      "Creative audio business combining music production, client work, web presence, and lightweight digital systems.",
    roleSummary:
      "I founded and operated the business, managing client delivery, web presence and design, infrastructure and deployment, and SEO.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "AWS S3",
      "Route 53",
      "GitHub",
      "Lightweight CMS-ready content",
      "Audio Production",
    ],
    keyFeatures: [
      "Client-acquisition landing page",
      "Portfolio of projects sourced through the site",
      "Clear recording, mixing, and production service positioning",
      "Lightweight SEO-focused web presence",
    ],
    improvements: [
      "Add lightweight CMS editing for faster marketing updates",
      "Build conversion paths for booking and lead capture",
      "Package audio services into clearer commercial offers",
    ],
    tags: ["Next.js", "Vercel", "AWS", "Branding", "SEO"],
    links: [
      { label: "Live site", href: "https://hottakerecordingco.com/" },
      { label: "GitHub", href: githubProfileUrl },
    ],
    imageSrc: "/projects/hot-take-ui.png",
    imageSrcTablet: "/projects/hot-take-ui-tablet.png",
    imageSrcMobile: "/projects/hot-take-ui-mobile.png",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Java", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "DevOps and Testing",
    skills: [
      "Docker",
      "GitHub Actions",
      "pytest",
      "Jest",
      "CI/CD workflows",
      "Debugging",
    ],
  },
  {
    title: "Security",
    skills: ["OWASP", "Bandit", "SonarQube", "ZAP", "Threat modeling"],
  },
  {
    title: "Web and Business",
    skills: [
      "Shopify",
      "Liquid",
      "AI-assisted development",
      "Client websites",
      "Small-business systems",
    ],
  },
];
