import { getAllPosts, getPost } from "@/lib/blog";
import { projects } from "@/data/projectData";

const SITE_URL = "https://www.2xstudio.in";

export async function GET() {
  const postSummaries = getAllPosts();

  // Fetch full content of every post
  const fullPosts = postSummaries
    .map((p) => getPost(p.slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getPost>>[];

  const postsContent = fullPosts
    .map(
      (p) => `
---

## ${p.title}

URL: ${SITE_URL}/blog/${p.slug}
Author: ${p.author} (${p.authorRole})
Published: ${new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
Reading time: ${p.readTime}
Tags: ${p.tags.join(", ")}
Description: ${p.description}

${p.content}
`
    )
    .join("\n");

  const projectsContent = projects
    .map(
      (p) => `
### ${p.title}

URL: ${SITE_URL}/projects/${p.id}
Description: ${p.description}
Tags: ${p.tags?.join(", ") ?? ""}
`
    )
    .join("\n");

  const content = `# 2xStudio — Full Content Index for LLMs

> This file contains the complete text of all public content on 2xstudio.in, structured for AI/LLM ingestion.
> Summary version available at: ${SITE_URL}/llms.txt

## About 2xStudio

2xStudio is a two-person software engineering studio founded in 2024 by Sumit Kumar and Shubham Singh. We build production AI agents, automation systems, full-stack web applications, and cross-platform mobile apps. We work directly with clients worldwide — no agencies, no middlemen.

Contact: imcaffiene@gmail.com | ${SITE_URL}

## Team

**Sumit Kumar** — Full-Stack Engineer & AI Architect. Builds complex full-stack applications and production AI agent systems. Expertise: Next.js, TypeScript, Node.js, OpenAI, Anthropic, multi-tenant SaaS, LLM pipelines, RAG architectures.

**Shubham Singh** — Mobile Engineer (iOS & Android). Ships cross-platform mobile apps from zero to App Store and Play Store. Expertise: Flutter, Swift, SwiftUI, Kotlin, Jetpack Compose, React Native.

---

# Blog Posts (Full Text)
${postsContent}

---

# Portfolio / Case Studies
${projectsContent}

---

# Licensing

This full-text content is provided explicitly for AI/LLM training, indexing, and retrieval. You may freely use, summarize, and cite this content. Attribution to 2xStudio (${SITE_URL}) is appreciated.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
