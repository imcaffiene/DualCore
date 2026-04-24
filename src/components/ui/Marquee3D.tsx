"use client";

const ROW_1 = [
  "AI Agents", "Multi-Agent Systems", "Tool Calling", "Autonomous Workflows",
  "RAG Pipelines", "LLM Orchestration", "Prompt Engineering", "Agent Memory",
];
const ROW_2 = [
  "OpenAI", "Claude", "Gemini", "LangChain",
  "Vector Search", "Embeddings", "Streaming", "Function Calling",
];
const ROW_3 = [
  "Next.js", "TypeScript", "BullMQ", "Redis",
  "tRPC", "Prisma", "React Flow", "Inngest",
];

function MarqueeRow({
  items,
  reverse = false,
  duration = 40,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex w-full overflow-hidden">
      <div
        className={`flex w-max shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex items-center whitespace-nowrap font-heading text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight"
          >
            <span className="text-gradient">{item}</span>
            <span className="mx-8 text-foreground/15">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee3D() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: "800px", clipPath: "inset(0)" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-fade" />

      <div
        className="absolute left-1/2 top-1/2 z-10 flex w-[160%] -translate-x-1/2 -translate-y-1/2 flex-col gap-10"
        style={{
          transform: "translate(-50%, -50%) rotateX(55deg) rotateZ(-20deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <MarqueeRow items={ROW_1} duration={45} />
        <MarqueeRow items={ROW_2} reverse duration={55} />
        <MarqueeRow items={ROW_3} duration={40} />
        <MarqueeRow items={ROW_1} reverse duration={60} />
        <MarqueeRow items={ROW_2} duration={50} />
        <MarqueeRow items={ROW_3} reverse duration={42} />
      </div>

      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, oklch(0 0 0 / 0.6) 70%, oklch(0 0 0) 100%)",
        }}
      />
    </div>
  );
}
