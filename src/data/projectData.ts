import type { Project } from "@/features/ProjectCard";

export interface CaseStudy extends Project {
  client: string;
  duration: string;
  role: string;
  liveUrl?: string;
  platforms?: ("android" | "ios")[];
  problem: string;
  approach: string[];
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  gallery?: string[];
}

export const projects: CaseStudy[] = [
  //-----------------------------------------//


{
    id: "dmflow-instagram-automation",
    title: "DMFlow — Instagram DM Automation SaaS",
    description:
      "A full ManyChat alternative built for the Indian creator market — keyword-triggered auto DMs, story reply flows, a visual automation builder, referral wallet system, and a BullMQ-powered async queue that handles 250+ DMs/hour per account.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "Prisma",
      "BullMQ",
      "Redis",
      "BetterAuth",
      "Recharts",
    ],
    image:
      "https://res.cloudinary.com/dzzuo1ivo/image/upload/v1776946807/07.jpg",
    category: "fullstack",
    year: "2025",
    client: "Pr Creations",
    duration: "8 weeks",
    role: "Architecture + Full-stack engineering",
    problem:
      "Indian Instagram creators were manually replying to hundreds of comments and DMs every day — losing leads and followers because they couldn't respond fast enough. Existing tools like ManyChat cost ₹3,700/month and were built for Western markets with no referral incentive for Indian growth loops.",
    approach: [
      "Zero-REST architecture: every client query goes through tRPC + TanStack Query for end-to-end type safety — if you rename a procedure, TypeScript breaks at the call site before you ship",
      "BullMQ + Redis async DM queue — DMs are never sent synchronously. Every Instagram trigger enqueues a job with retry, exponential backoff, and Instagram rate limiting (250 DMs/hour per token) built in",
      "Webhook idempotency table with @@unique([provider, messageId]) — Meta retries failed webhooks 3×. Without this, one comment triggers three identical DMs. The DB constraint makes duplicate processing physically impossible",
      "All monetary values stored in paise (₹1 = 100 paise) — floating point arithmetic on ₹24.75 gives 2474.9999 in JS. Integer paise is always exact",
      "Instagram OAuth long-lived token lifecycle: exchange short-lived (1hr) → long-lived (60 days) → auto-refresh cron at day 53. Missing any step silently breaks all automations at day 60",
      "Referral first-time enforcement via @unique constraint on referredUserId — no application-level check needed, the DB rejects the second insert even under race conditions",
      "Multi-tenant architecture supporting solo creators and agency teams under one codebase via userId/organizationId dual ownership on every resource",
    ],
    solution:
      "A production-grade Instagram DM automation SaaS with a visual automation builder (triggers → keywords → actions), an async BullMQ worker that processes webhooks and fires DMs via the Instagram Graph API, a full analytics dashboard with delivery rate tracking and hourly heatmaps, a referral wallet system where Creator Pro users earn ₹24.75 per referral, and a settings suite with billing, profile, and account deletion. Two pricing tiers: Free (₹0, 1,000 DMs/month) and Creator Pro (₹429/month, unlimited — or ₹99 first month via referral).",
    outcome:
      "Shipped as a fully functional SaaS product with Instagram OAuth, real-time webhook processing, multi-tenant billing, and a referral growth loop. The codebase is structured for horizontal scaling — the Next.js app and BullMQ worker run as separate deployable processes so DM throughput scales independently of the web tier.",
    metrics: [
      { label: "Dashboard sections", value: "7 pages" },
      { label: "tRPC procedures", value: "40+" },
      { label: "DM queue", value: "BullMQ + Redis" },
      { label: "Pricing", value: "₹429 vs $49" },
    ],
  },

  {
    id: "nodebase-automation",
    title: "Nodebase — Workflow Automation",
    description:
      "Internal Zapier/n8n-style automation platform built from scratch — visual drag-and-drop workflow builder with AI integrations, webhook triggers, background jobs, and a full SaaS billing layer.",
    tags: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Inngest",
      "React Flow",
      "OpenAI",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=1000&fit=crop",
    category: "fullstack",
    year: "2025",
    client: "Confidential — Internal Enterprise Tool",
    duration: "14 weeks",
    role: "Design + Full-stack engineering",
    problem:
      "The firm was manually connecting their tools — Google Forms feeding into spreadsheets, Stripe events handled by hand, Slack notifications copy-pasted from dashboards. Every new automation request went to the dev team. They needed a self-serve internal platform where non-engineers could wire up workflows visually, without writing a single line of code.",
    approach: [
      "Visual React Flow canvas — drag, drop, and connect trigger/action nodes with no-code",
      "Trigger nodes for Webhook, Google Form, Stripe events, and manual runs",
      "AI action nodes integrating OpenAI, Claude, and Gemini for in-workflow intelligence",
      "Discord and Slack messaging nodes for automated team notifications",
      "Inngest-powered background job execution with retries, queuing, and concurrency control",
      "Full SaaS layer: Better Auth authentication, Polar subscription plans, and usage paywalls",
      "Sentry error tracking with AI-assisted monitoring and CodeRabbit PR review workflow",
      "End-to-end type safety with TypeScript + tRPC across client and server",
    ],
    solution:
      "A production-grade internal automation platform where the firm's ops team visually builds workflows on a drag-and-drop canvas — connecting Stripe events to Slack alerts, Google Form submissions to AI summarisers, webhooks to HTTP endpoints — all executing reliably in the background via Inngest. Non-engineers ship automations in minutes instead of filing dev tickets.",
    outcome:
      "Replaced a backlog of recurring automation requests overnight. The ops team now builds and deploys workflows independently. Background job reliability hit 99.9% with Inngest's retry engine, and Sentry + AI monitoring catches workflow failures before anyone notices.",
    metrics: [
      { label: "Trigger types", value: "4+" },
      { label: "AI providers", value: "3" },
      { label: "Job reliability", value: "99.9%" },
      { label: "Shipped in", value: "14 weeks" },
    ],
  },
  //------------------------------------------//
  
  //-----------------------------------------//
  {
    id: "timespark-scheduler",
    title: "Timespark — Calendar Scheduler",
    description:
      "Smart scheduling platform that lets employees share availability and let others book slots instantly — no back-and-forth emails.",
    tags: ["Next.js", "TypeScript", "Prisma", "Nylas API", "NextAuth"],
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&h=1000&fit=crop",
    category: "web",
    year: "2025",
    client: "Confidential — Enterprise Client",
    duration: "8 weeks",
    role: "Design + Full-stack engineering",
    problem:
      "The client's internal teams were losing hours every week to scheduling meetings — endless reply-all email chains just to find a 30-minute slot that worked for everyone. With a growing employee headcount, the problem was only getting worse.",
    approach: [
      "Availability grid builder — employees set their open hours once, share a link",
      "One-click slot booking for the person requesting the meeting",
      "Instant push and email notifications on both sides at booking confirmation",
      "Calendar sync so booked slots block the employee's actual calendar",
      "Admin dashboard for managers to see team availability at a glance",
    ],
    solution:
      "A clean internal scheduling tool where every employee gets a personal booking link. Share it in Slack, email, or anywhere — the other person picks a slot from live availability and it's confirmed instantly. No logins required for the booker, no friction, no back-and-forth.",
    outcome:
      "Deployed internally across the client's organisation, cutting meeting-scheduling overhead dramatically. Employees now share a single link instead of 5 reply-all emails, and managers have full visibility into team availability.",
    metrics: [
      { label: "Scheduling emails", value: "~0" },
      { label: "Time to book", value: "<30 sec" },
      { label: "Notifications", value: "Instant" },
      { label: "Shipped in", value: "8 weeks" },
    ],
  },
  //-----------------------------------------//
  {
    id: "taskcalendar-pm",
    title: "TaskCalendar — Project Management",
    description:
      "All-in-one project management platform with Kanban boards, calendar, timeline, file storage, and team collaboration — built with a Stripe-powered subscription model.",
    tags: ["React", "TypeScript", "Supabase"],
    image:
      "https://res.cloudinary.com/dzzuo1ivo/image/upload/v1776958095/18.png",
    category: "fullstack",
    year: "2026",
    client: "Securovix LTD",
    duration: "4 weeks",
    role: "Design + Full-stack engineering",
    liveUrl: "https://taskcalendar.co.uk/",
    problem:
      "Teams managing projects across multiple tools — a Trello board here, a Google Calendar there, Slack for comments, Drive for files — were losing context constantly. The tab-switching and copy-pasting between tools was killing momentum and hiding blockers.",
    approach: [
      "Unified workspace architecture: projects, tasks, calendar, timeline and files under one roof",
      "Drag-and-drop Kanban with custom columns, priorities, and assignees",
      "Supabase PostgreSQL for relational data with real-time subscriptions for live updates",
      "Firebase Authentication for secure, low-friction team onboarding",
      "Stripe-powered subscription engine with a 28-day free trial and organization-level billing",
      "Recharts-driven reports dashboard for work insights and deadline tracking",
    ],
    solution:
      "A full-featured project management SaaS with Kanban boards, calendar, single-timeline view across all projects, file storage, @mention comments, and a notification engine. Teams get everything from task creation to shipping in one workspace — with a clean subscription flow so the product pays for itself.",
    outcome:
      "Shipped as a fully functional SaaS product with Stripe billing, multi-organization support, and a 28-day trial flow. Demonstrates end-to-end product thinking: from auth and data modelling through to payments and team management.",
    metrics: [
      { label: "Core modules", value: "10+" },
      { label: "Auth + Payments", value: "Firebase + Stripe" },
      { label: "Trial window", value: "28 days" },
      { label: "Shipped in", value: "12 weeks" },
    ],
  },
  //-----------------------------------------//
  {
    id: "clynox-school",
    title: "Clynox — School Management",
    description:
      "All-in-one school management app for students, teachers, and transport staff — attendance, assignments, bus tracking, and more.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "TypeScript"],
    image: "https://res.cloudinary.com/dzzuo1ivo/image/upload/v1776957447/769839a0-c20d-4591-b0ff-adaf0412b3dc_himy4q.jpg",
    category: "mobile",
    platforms: ["android", "ios"],
    year: "2025",
    client: "Clynox Solutions",
    duration: "12 weeks",
    role: "Design + Mobile + Backend",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.application.clynox",
    problem:
      "Schools were managing attendance on registers, assignments via WhatsApp groups, and bus tracking with phone calls. Students, teachers, and parents had no single source of truth — coordination was chaotic.",
    approach: [
      "Three separate role-based interfaces: student, teacher, and transport staff",
      "Live GPS bus monitoring with ETA push notifications for parents",
      "Digital attendance with instant absent alerts to parents",
      "Assignment and test management with submission tracking",
      "End-to-end data encryption for student privacy compliance",
    ],
    solution:
      "A unified school management platform where teachers post assignments, parents track the bus, and students see their timetable — all in one app, with encrypted data and role-specific views.",
    outcome:
      "Deployed across schools with immediate reduction in parent support calls. The transport staff module alone eliminated the daily flood of 'where is the bus?' messages.",
    metrics: [
      { label: "User roles", value: "3" },
      { label: "Core modules", value: "8+" },
      { label: "Data encryption", value: "In-transit" },
      { label: "Shipped in", value: "12 weeks" },
    ],
  },
  //-----------------------------------------//
  {
    id: "unikon-ai",
    title: "Unikon.ai — Expert Network",
    description:
      "AI-powered networking app connecting users with paid experts for career, mental health, and entrepreneurship guidance.",
    tags: ["Flutter", "GraphQL", "Node.js", "AI"],
    image: "https://res.cloudinary.com/dzzuo1ivo/image/upload/v1776957283/11e4ae74-6e39-4150-828f-c585cea9a714_kd13xu.jpg",
    category: "mobile",
    platforms: ["android", "ios"],
    year: "2024",
    client: "Unikon Innovations Pvt. Ltd.",
    duration: "16 weeks",
    role: "Design + Mobile + Backend",
    liveUrl:
      "https://play.google.com/store/apps/details?id=ai.unikon.app.unikon",
    problem:
      "Professionals with valuable knowledge had no easy way to monetize it, while people needing guidance were stuck with generic content. A real-time, paid 1:1 connection layer didn't exist in the Indian market.",
    approach: [
      "Socio-professional profile builder with video intro and rate-setting",
      "Real-time audio and video call infrastructure with per-minute billing",
      "UniShorts — a discoverable feed of recorded expert sessions",
      "UniPal AI — conversational expert-matching and content recommendations",
      "Availability calendar with session booking and automated payouts",
    ],
    solution:
      "A LinkedIn-meets-Cameo platform where experts set their own rates for calls and messages, and users get AI-matched to the right person for any query — career, wellness, business, or personal.",
    outcome:
      "Crossed 100k downloads with strong retention driven by the AI matching quality. The session marketplace grew organically as experts shared their Unikon profiles on existing social audiences.",
    metrics: [
      { label: "Downloads", value: "100K+" },
      { label: "Categories", value: "10+" },
      { label: "Call latency", value: "<100ms" },
      { label: "Shipped in", value: "16 weeks" },
    ],
  },
  //-----------------------------------------//
  {
    id: "fridge-ai",
    title: "Fridge AI: Food & Recipes",
    description:
      "AI-powered recipe app that identifies fridge ingredients from a photo and suggests personalized recipes instantly.",
    tags: ["Flutter", "Firebase", "TypeScript", "AI/ML"],
    image: "https://res.cloudinary.com/dzzuo1ivo/image/upload/v1776956634/d993806d-a305-40cb-8960-d54cfe2f4edb_qqu6xm.jpg",
    category: "mobile",
    platforms: ["android", "ios"],
    year: "2025",
    client: "DuckMa",
    duration: "6 weeks",
    role: "Design + Mobile engineering + Backend",
    liveUrl:
      "https://apps.apple.com/az/app/fridge-ai-food-recipes/id6739216407",
    problem:
      "People waste food because they don't know what to cook with what they already have. Existing recipe apps require typing ingredients manually — a friction that kills daily usage.",
    approach: [
      "AI ingredient recognition model trained on fridge and pantry photos",
      "Cross-platform build for iOS and Android from a single codebase",
      "Recipe matching engine ranked by ingredient availability and dietary preference",
      "Custom recipe collections with save, share, and meal plan features",
      "Offline-capable recipe storage so it works without internet mid-cook",
    ],
    solution:
      "Snap a photo of your fridge, get recipes instantly. The AI identifies ingredients in seconds and surfaces relevant recipes ranked by how many ingredients you already have — no typing, no friction.",
    outcome:
      "Live on both App Store and Google Play with a 4.4★ rating. Users report measurably less food waste and cite the photo-to-recipe flow as the feature they show friends first.",
    metrics: [
      { label: "Platform", value: "iOS + Android" },
      { label: "App Store rating", value: "4.4★" },
      { label: "Ingredient scan", value: "<3 sec" },
      { label: "Shipped in", value: "10 weeks" },
    ],
  },
  //-----------------------------------------//
  {
    id: "vetic-pet-app",
    title: "Vetic - Pet Clinic & Grooming",
    description:
      "All-in-one pet healthcare app with vet booking, doorstep grooming, 3-hour food delivery, and digital health records for pet parents.",
    tags: ["Flutter", "Firebass", "swift", "MixPanel"],
    image:
      "https://drive.google.com/uc?export=view&id=18uEB8w1wemTweU8wIYUzZ87h7NMmjfOm",
    category: "mobile",
    platforms: ["android"],
    year: "2024",
    client: "PETPAI TECHNOLOGIES PRIVATE LIMITED",
    duration: "8 weeks",
    role: "Design + Mobile engineering",
    liveUrl: "https://play.google.com/store/apps/details?id=com.vetic.vetic",
    problem:
      "Pet parents across India had no single platform to book vet appointments, schedule grooming, and order pet food — they were juggling multiple apps, WhatsApp groups, and phone calls just to care for their pets.",
    approach: [
      "User research with 30 pet parents across Delhi, Mumbai, and Bengaluru",
      "Unified 3-step booking flow for vet, grooming, and food delivery",
      "Multi-pet profile management with vaccination and prescription records",
      "3-hour doorstep delivery engine integrated with 45+ clinic inventory",
      "Push notification system for reminders, deworming, and order updates",
    ],
    solution:
      "A single Flutter app covering the entire pet care journey — from booking a vet in 3 taps to tracking a food order in real time. Medical records, invoices, and vaccination reminders are all in one place, across multiple pets.",
    outcome:
      "Scaled to 100k+ downloads with 1L+ active installs across 11 Indian cities. The app became Vetic's primary growth channel, onboarding new pet parents daily through organic store discovery.",
    metrics: [
      { label: "Downloads", value: "1L+" },
      { label: "Cities live", value: "11" },
      { label: "Clinics covered", value: "45+" },
      { label: "Delivery SLA", value: "3 hours" },
    ],
  },
];
