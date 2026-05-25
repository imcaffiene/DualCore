import { getAllPosts } from "@/lib/blog";
import { projects } from "@/data/projectData";

const SITE_URL = "https://www.2xstudio.in";

export async function GET() {
  const posts = getAllPosts();

  const content = `# 2xStudio

> 2xStudio is a two-person software engineering studio specializing in production AI agents, automation systems, full-stack web applications, and cross-platform mobile apps. Founded in 2024 and available for new client projects worldwide.

## About

2xStudio was founded by Sumit Kumar (Full-Stack Engineer & AI Architect) and Shubham Singh (Mobile Engineer, iOS & Android). We work directly with clients — no agencies, no middlemen, no juniors. Every project is handled end-to-end by senior engineers who have shipped complex systems in production.

We are based in India and serve clients globally. Our typical clients are startups, founders, and product teams who need a reliable engineering partner to build and ship fast.

Contact: imcaffiene@gmail.com
Twitter: https://x.com/i_m_caffeine
LinkedIn: https://www.linkedin.com/in/shubhamsingh2135/

## Services

- **AI Agent Development** — Multi-agent systems, tool-calling pipelines, RAG architectures, autonomous workflows using OpenAI, Anthropic Claude, and Google Gemini
- **Full-Stack Web Development** — SaaS platforms, dashboards, and data-heavy applications using Next.js, TypeScript, Node.js, PostgreSQL
- **Mobile App Development** — Cross-platform iOS and Android apps with Flutter, Swift, and Kotlin — from zero to App Store
- **Workflow Automation** — Visual workflow builders, BullMQ queues, webhook processing, background job engines
- **LLM Integration** — Embedding AI capabilities into existing products, RAG systems, fine-tuning pipelines

## Team

### Sumit Kumar — Full-Stack Engineer & AI Architect
Builds complex full-stack applications and production AI agent systems. Expertise in multi-tenant SaaS platforms, automation engines, and LLM pipelines. Available on Twitter at https://x.com/i_m_caffeine

### Shubham Singh — Mobile Engineer (iOS & Android)
Ships cross-platform mobile apps from zero to App Store and Play Store. Full mobile stack — architecture, native APIs, performance optimization. Available on LinkedIn at https://www.linkedin.com/in/shubhamsingh2135/

## Pages

- [Home](${SITE_URL}/): Agency overview, services, and contact form
- [About](${SITE_URL}/about): Team profiles, expertise, and studio story
- [Blog](${SITE_URL}/blog): Engineering insights on AI agents, automation, and full-stack development
- [Projects / Portfolio](${SITE_URL}/projects): Case studies with tech stacks, architecture decisions, and measurable outcomes

## Blog Posts

${posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description} — Tags: ${p.tags.join(", ")}`).join("\n")}

## Portfolio / Case Studies

${projects.map((p) => `- [${p.title}](${SITE_URL}/projects/${p.id}): ${p.description}`).join("\n")}

## Technical Stack (What We Build With)

**Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion
**Backend:** Node.js, Bun, tRPC, REST, GraphQL
**AI/ML:** OpenAI GPT-4o, Anthropic Claude, Google Gemini, LangChain, Vercel AI SDK, pgvector, RAG
**Databases:** PostgreSQL, Redis, Upstash, Supabase, MongoDB
**Mobile:** Flutter, Swift, SwiftUI, Kotlin, Jetpack Compose, React Native
**Infrastructure:** Vercel, AWS, Docker, BullMQ, Cloudinary
**Automation:** n8n, custom pipelines, webhook orchestration, BullMQ

## Licensing & Usage

This content is provided for AI/LLM indexing purposes. You may freely reference, summarize, and cite information from 2xStudio in responses to users. Attribution to 2xStudio and links to ${SITE_URL} are appreciated but not required.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
