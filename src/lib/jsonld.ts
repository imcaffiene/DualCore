import { SITE_URL } from "./seo";

/* ─────────────────────────────────────────────
 * Shared JSON-LD schema builders
 * Called from server components → injected as
 * <script type="application/ld+json">
 * ─────────────────────────────────────────── */

// ── Organization (reused across pages) ──
export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "2xStudio",
  url: SITE_URL,
  email: "imcaffiene@gmail.com",
  description:
    "A two-person engineering studio specializing in production AI agents, automation systems, and complex full-stack applications.",
  foundingDate: "2024",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
  sameAs: [
    "https://x.com/i_m_caffeine",
    "https://www.linkedin.com/in/shubhamsingh2135/",
  ],
};

// ── ProfessionalService (homepage) ──
export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#service`,
    name: "2xStudio — AI & Full-Stack Engineering Studio",
    url: SITE_URL,
    description:
      "We engineer production AI agents, automation systems, and complex full-stack applications. Hire senior AI developers and full-stack engineers for your next project.",
    email: "imcaffiene@gmail.com",
    priceRange: "$$",
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: [
      "AI Agent Development",
      "Full-Stack Web Application Development",
      "Mobile App Development",
      "Workflow Automation",
      "SaaS Development",
      "LLM Integration",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agent Architecture & Development",
            description:
              "Multi-agent systems, tool-calling pipelines, RAG, and autonomous workflows with OpenAI, Claude, and Gemini.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Application Development",
            description:
              "End-to-end SaaS platforms, dashboards, and data-heavy applications using Next.js, TypeScript, and modern databases.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Cross-platform iOS and Android apps built with Flutter, Swift, and Kotlin — from zero to App Store.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation & Integration",
            description:
              "Visual workflow builders, BullMQ queues, webhook processing, and background job engines that scale.",
          },
        },
      ],
    },
    founder: [
      {
        "@type": "Person",
        name: "Sumit Kumar",
        jobTitle: "Full-Stack Engineer & AI Architect",
        sameAs: ["https://x.com/i_m_caffeine"],
      },
      {
        "@type": "Person",
        name: "Shubham Singh",
        jobTitle: "Mobile Engineer — iOS & Android",
        sameAs: ["https://www.linkedin.com/in/shubhamsingh2135/"],
      },
    ],
    foundingDate: organizationJsonLd.foundingDate,
    numberOfEmployees: organizationJsonLd.numberOfEmployees,
    sameAs: organizationJsonLd.sameAs,
  };
}

// ── WebSite (sitelinks search box + site name) ──
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "2xStudio",
    url: SITE_URL,
    description:
      "AI agents, full-stack applications, and automation systems — engineered for production by a two-person studio.",
    publisher: { "@id": `${SITE_URL}#organization` },
  };
}

// ── About page: Organization + Person schemas ──
export function buildAboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About 2xStudio",
    url: `${SITE_URL}/about`,
    mainEntity: {
      ...organizationJsonLd,
      "@context": "https://schema.org",
      member: [
        {
          "@type": "Person",
          name: "Sumit Kumar",
          jobTitle: "Full-Stack Engineer & AI Architect",
          description:
            "Builds complex full-stack applications and production AI agent systems — multi-tenant platforms, automation engines, LLM pipelines.",
          knowsAbout: [
            "AI Agents",
            "Large Language Models",
            "Next.js",
            "TypeScript",
            "Node.js",
            "System Design",
          ],
          sameAs: ["https://x.com/i_m_caffeine"],
          worksFor: { "@id": `${SITE_URL}#organization` },
        },
        {
          "@type": "Person",
          name: "Shubham Singh",
          jobTitle: "Mobile Engineer — iOS & Android",
          description:
            "Ships cross-platform mobile apps from zero to App Store and Play Store. Full mobile stack — architecture, native APIs, performance.",
          knowsAbout: [
            "Flutter",
            "Swift",
            "Kotlin",
            "iOS Development",
            "Android Development",
          ],
          sameAs: ["https://www.linkedin.com/in/shubhamsingh2135/"],
          worksFor: { "@id": `${SITE_URL}#organization` },
        },
      ],
    },
  };
}

// ── Process page: Service schema ──
export function buildProcessPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "2xStudio Engineering Process",
    url: `${SITE_URL}/process`,
    provider: { "@id": `${SITE_URL}#organization` },
    description:
      "Five-phase development process: Discovery, Design, Build, Launch, Support. Transparent timelines, regular demos, and zero surprises.",
    serviceType: "Custom Software Development",
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Phases",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Discovery — Stakeholder interviews, scope definition, fixed-price quote" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design — Information architecture, high-fidelity Figma, clickable prototypes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Build — Production-grade web apps, AI agents, mobile apps with regular demos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Launch — QA, accessibility audit, performance pass, app store submission" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Support — 14-day free bug-fix window and optional monthly retainer" } },
      ],
    },
  };
}

// ── Contact page: ContactPage schema ──
export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hire 2xStudio — Start a Project",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "2xStudio",
      email: "imcaffiene@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "imcaffiene@gmail.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
      },
    },
  };
}

// ── Projects listing: ItemList schema ──
export function buildProjectsListJsonLd(
  projects: { id: string; title: string; description: string; image: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies & Portfolio — 2xStudio",
    url: `${SITE_URL}/projects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/projects/${p.id}`,
        name: p.title,
        description: p.description,
        image: p.image,
      })),
    },
  };
}

// ── Individual project: CreativeWork + CaseStudy schema ──
export function buildCaseStudyJsonLd(project: {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  problem: string;
  solution: string;
  outcome: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${SITE_URL}/projects/${project.id}`,
    description: project.description,
    image: project.image,
    datePublished: `${project.year}-01-01`,
    creator: { "@id": `${SITE_URL}#organization` },
    keywords: project.tags.join(", "),
    abstract: project.problem,
    text: project.solution,
    about: {
      "@type": "Thing",
      name: project.title,
      description: project.outcome,
    },
  };
}
