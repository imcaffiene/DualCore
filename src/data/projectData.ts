import type { Project } from "@/features/ProjectCard";

export interface CaseStudy extends Project {
  client: string;
  duration: string;
  role: string;
  liveUrl?: string;
  problem: string;
  approach: string[];
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  gallery?: string[];
}

export const projects: CaseStudy[] = [
  {
    id: "lumen-saas",
    title: "Lumen — SaaS Dashboard",
    description:
      "Real-time analytics dashboard with custom charts, role-based access, and a fully themed design system.",
    tags: ["Next.js", "TypeScript", "Supabase", "Recharts"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop",
    category: "web",
    year: "2025",
    client: "Lumen Analytics, Inc.",
    duration: "10 weeks",
    role: "Design + Full-stack engineering",
    liveUrl: "https://example.com",
    problem:
      "Lumen's internal team was juggling four disconnected dashboards and exporting CSVs into spreadsheets to make sense of their pipeline. The legacy interface was clunky, slow, and made onboarding new team members painful.",
    approach: [
      "Discovery sprint with 6 stakeholder interviews to map daily workflows",
      "Information architecture rebuild — collapsed 4 tools into a single workspace",
      "Custom design system with 60+ tokenized components in Figma",
      "Real-time data pipeline using Supabase subscriptions and edge functions",
      "Role-based access control with audit logging",
    ],
    solution:
      "A single, real-time analytics workspace with custom charts, saved views, and granular role permissions. We rebuilt the front-end on Next.js with a typed Supabase client, shipped a Figma design system the team still uses, and migrated their data pipeline behind the scenes with zero downtime.",
    outcome:
      "Launched in 10 weeks, ahead of schedule. Lumen's team replaced four legacy tools with one. Onboarding time for new analysts dropped from days to hours, and the leadership team finally had one source of truth for board reporting.",
    metrics: [
      { label: "Tools consolidated", value: "4 → 1" },
      { label: "Onboarding time", value: "−85%" },
      { label: "Page load (p75)", value: "320ms" },
      { label: "Shipped in", value: "10 weeks" },
    ],
  },
  {
    id: "northwind-commerce",
    title: "Northwind Commerce",
    description:
      "Headless e-commerce platform with real-time inventory, Stripe payments, and a custom admin suite.",
    tags: ["React", "Node.js", "Stripe", "Postgres"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=1000&fit=crop",
    category: "fullstack",
    year: "2025",
    client: "Northwind Goods Co.",
    duration: "14 weeks",
    role: "Design + Full-stack engineering",
    problem:
      "Northwind was selling on Shopify but hitting hard limits — they needed multi-warehouse inventory, B2B pricing tiers, and a custom checkout. Off-the-shelf wasn't going to cut it.",
    approach: [
      "Mapped 32 existing storefront flows and rebuilt the critical 8",
      "Designed a headless architecture: React storefront + Node API + Postgres",
      "Built a custom admin suite with order routing and inventory sync",
      "Stripe Connect for B2B accounts with net-30 terms",
      "Migrated 12k SKUs and 5 years of order history with zero data loss",
    ],
    solution:
      "A fully custom commerce stack: a fast headless storefront, a Node API with row-level inventory locking, and an internal admin tool the warehouse team genuinely enjoys using. Built to scale from 12k SKUs to 100k.",
    outcome:
      "Northwind doubled their AOV in the first quarter post-launch and onboarded 40 new B2B accounts that the old platform couldn't support. The warehouse team's order-processing time dropped by half.",
    metrics: [
      { label: "AOV", value: "+102%" },
      { label: "B2B accounts", value: "+40" },
      { label: "Order processing", value: "−50%" },
      { label: "Conversion rate", value: "+38%" },
    ],
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness",
    description:
      "Cross-platform mobile app with workout plans, progress tracking, and a social community feed.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1600&h=1000&fit=crop",
    category: "mobile",
    year: "2024",
    client: "Pulse Fitness",
    duration: "12 weeks",
    role: "Design + Mobile engineering",
    problem:
      "Pulse had a loyal in-person community but no way to keep members engaged between sessions. They wanted a single app for workouts, progress, and community — without hiring an in-house dev team.",
    approach: [
      "User research with 20 active members to prioritize features",
      "Native-feeling React Native app shared across iOS + Android",
      "Firebase for auth, real-time feed, and push notifications",
      "Offline-first workout player so the gym's spotty wifi didn't matter",
      "Submitted to both stores with first-try approval",
    ],
    solution:
      "A polished cross-platform app that members can use offline mid-workout, with a community feed that drives daily engagement and a streak system that keeps people coming back.",
    outcome:
      "Pulse hit 8k installs in the first 3 months with 62% weekly active users — well above the 20% industry benchmark. Member retention is up 34% year-over-year.",
    metrics: [
      { label: "Installs (3 mo)", value: "8,000+" },
      { label: "WAU", value: "62%" },
      { label: "Member retention", value: "+34%" },
      { label: "App Store rating", value: "4.8★" },
    ],
  },
  {
    id: "atelier-portfolio",
    title: "Atelier — Studio Portfolio",
    description:
      "Editorial portfolio site for an architecture studio with a custom CMS and motion-rich case studies.",
    tags: ["Figma", "Framer Motion", "Sanity"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=1000&fit=crop",
    category: "design",
    year: "2024",
    client: "Atelier Architects",
    duration: "6 weeks",
    role: "Design + Front-end + CMS",
    problem:
      "Atelier had stunning work and a website that buried it in a generic template. They wanted something that felt as considered as the buildings they design.",
    approach: [
      "Editorial design direction inspired by print architecture monographs",
      "Custom Sanity CMS so the studio can publish new projects in 10 minutes",
      "Framer Motion choreography on hero, transitions, and case studies",
      "Image pipeline with smart cropping and AVIF/WebP delivery",
    ],
    solution:
      "A motion-rich editorial site with a CMS the studio actually uses. Every case study feels custom-made because the templates were designed for flexibility, not uniformity.",
    outcome:
      "Atelier's inbound inquiries tripled in the first 60 days, and the studio now publishes new projects weekly instead of waiting on a developer.",
    metrics: [
      { label: "Inbound inquiries", value: "3×" },
      { label: "Publish time", value: "10 min" },
      { label: "Lighthouse score", value: "98" },
      { label: "Shipped in", value: "6 weeks" },
    ],
  },
  {
    id: "orbit-booking",
    title: "Orbit Booking",
    description:
      "End-to-end booking platform with calendar sync, payments, and automated client notifications.",
    tags: ["Vue", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=1000&fit=crop",
    category: "fullstack",
    year: "2024",
    client: "Orbit Studios",
    duration: "9 weeks",
    role: "Design + Full-stack engineering",
    problem:
      "Orbit was booking 200+ appointments a month over email and DMs. Double-bookings and no-shows were eating margin. They needed a real system, fast.",
    approach: [
      "Mapped the booking funnel and identified 5 drop-off points",
      "Built a Vue front-end with a 3-step booking flow",
      "Two-way Google + Apple Calendar sync with conflict detection",
      "Stripe deposits at booking to cut no-shows",
      "Automated SMS + email reminder sequence",
    ],
    solution:
      "A self-serve booking platform with calendar sync, deposit-at-booking, and a notification engine that handles the back-and-forth so the team doesn't have to.",
    outcome:
      "No-shows dropped 70% in month one. The admin team reclaimed 15 hours a week from manual scheduling. Bookings grew 45% because the funnel finally converts.",
    metrics: [
      { label: "No-show rate", value: "−70%" },
      { label: "Admin hours saved", value: "15/wk" },
      { label: "Booking growth", value: "+45%" },
      { label: "Time-to-book", value: "<60s" },
    ],
  },
  {
    id: "halo-social",
    title: "Halo — Social App",
    description:
      "Feature-rich social platform with real-time messaging, stories, and a moderation toolkit.",
    tags: ["Flutter", "GraphQL", "AWS"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&h=1000&fit=crop",
    category: "mobile",
    year: "2023",
    client: "Halo Communities",
    duration: "16 weeks",
    role: "Design + Mobile + Backend",
    problem:
      "Halo wanted to launch a community-first social app — no algorithmic feed, no ads — and needed it cross-platform with serious moderation tools from day one.",
    approach: [
      "Flutter for true cross-platform parity",
      "GraphQL API on AWS Lambda + DynamoDB for sub-50ms reads",
      "Real-time messaging with end-to-end delivery receipts",
      "Built a moderator dashboard with report queues and ban tooling",
    ],
    solution:
      "A polished cross-platform social app with the moderation backbone of a much bigger product, launched in 16 weeks for both stores simultaneously.",
    outcome:
      "Halo crossed 25k MAU in the first six months with a 4.7★ average rating and an active mod team that stays ahead of issues thanks to purpose-built tooling.",
    metrics: [
      { label: "MAU (6 mo)", value: "25,000+" },
      { label: "Avg rating", value: "4.7★" },
      { label: "Message latency", value: "<50ms" },
      { label: "Mod response", value: "<5 min" },
    ],
  },
  {
    id: "fjord-brand",
    title: "Fjord — Brand & Site",
    description:
      "Identity refresh and marketing website for a Nordic furniture brand. Figma → ship in six weeks.",
    tags: ["Figma", "Webflow", "Branding"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=1000&fit=crop",
    category: "design",
    year: "2023",
    client: "Fjord Furniture",
    duration: "6 weeks",
    role: "Brand + Design + Webflow",
    problem:
      "Fjord's brand looked dated next to the Scandinavian competitors they were stocked alongside. They needed a refresh that read premium without losing the warmth of the original.",
    approach: [
      "Brand audit + 2 visual directions explored",
      "New wordmark, typography system, and photography direction",
      "Webflow build so the marketing team can edit copy without us",
      "Custom CMS for product collections and editorial content",
    ],
    solution:
      "A refreshed identity that pairs Nordic restraint with editorial warmth, plus a Webflow site the marketing team owns and updates daily.",
    outcome:
      "Fjord landed two new wholesale accounts in the first month attributable to the rebrand, and online sales grew 28% quarter-over-quarter.",
    metrics: [
      { label: "Online sales", value: "+28% QoQ" },
      { label: "New wholesale", value: "2 accounts" },
      { label: "Bounce rate", value: "−41%" },
      { label: "Shipped in", value: "6 weeks" },
    ],
  },
  {
    id: "vertex-fintech",
    title: "Vertex — Fintech App",
    description:
      "Investing app with portfolio analytics, secure auth, and bank integration. Built end-to-end.",
    tags: ["React Native", "Plaid", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=1000&fit=crop",
    category: "mobile",
    year: "2023",
    client: "Vertex Capital",
    duration: "14 weeks",
    role: "Design + Mobile + Backend",
    problem:
      "Vertex was a registered advisor with no client-facing app. Clients had to call in for portfolio updates. They needed a secure, regulator-friendly mobile app — and they needed it to feel premium.",
    approach: [
      "Compliance-first architecture: SOC 2 ready from day one",
      "Plaid integration for real-time account aggregation",
      "Biometric auth + device pairing for high-value accounts",
      "Custom charting library for portfolio analytics",
      "Penetration testing and audit before App Store submission",
    ],
    solution:
      "A polished, secure investing app that gives Vertex's clients real-time portfolio visibility, while giving the firm a compliant, audited backend they can trust.",
    outcome:
      "Vertex reduced client service calls by 60% within 90 days of launch and onboarded 15% more AUM in the first six months — the app became a sales tool, not just a utility.",
    metrics: [
      { label: "Client calls", value: "−60%" },
      { label: "AUM growth", value: "+15%" },
      { label: "App rating", value: "4.9★" },
      { label: "Audit findings", value: "0 critical" },
    ],
  },
];
