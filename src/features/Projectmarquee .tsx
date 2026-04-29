import { marqueeImages, type MarqueeImage } from "@/data/marqueeImages";

export function ProjectMarquee() {
  const webImages = marqueeImages.filter((i) => i.type === "web");
  const mobileImages = marqueeImages.filter((i) => i.type === "mobile");

  // Don't render a row if there are no real images for it
  const hasWeb = webImages.length > 0;
  const hasMobile = mobileImages.length > 0;

  return (
    <section
      aria-label="Project showcase"
      className="relative overflow-hidden py-20"
    >
      {hasWeb && (
        <MarqueeRow items={webImages} duration={50} cardType="web" />
      )}

      {hasMobile && (
        <div className={hasWeb ? "mt-6" : ""}>
          <MarqueeRow items={mobileImages} duration={40} cardType="mobile" reverse />
        </div>
      )}
    </section>
  );
}

// ─── Row ─────────────────────────────────────────────────────────────────────

function MarqueeRow({
  items,
  duration,
  cardType,
  reverse = false,
}: {
  items: MarqueeImage[];
  duration: number;
  cardType: "web" | "mobile";
  reverse?: boolean;
}) {
  const filled = fillToMin(items, 8);
  const doubled = [...filled, ...filled];

  return (
    <div
      className="relative flex w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex shrink-0 items-stretch gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <MarqueeCard key={`${item.id}-${i}`} item={item} type={cardType} />
        ))}
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function MarqueeCard({ item, type }: { item: MarqueeImage; type: "web" | "mobile"; }) {
  const isWeb = type === "web";

  const sizeClasses = isWeb
    ? "w-[400px] sm:w-[480px]"
    : "w-[180px] sm:w-[210px]";

  const aspectStyle = isWeb
    ? { aspectRatio: "16 / 9" }
    : { aspectRatio: "400 / 844" };

  return (
    <figure
      className={`group relative shrink-0 overflow-hidden rounded-2xl border border-border bg-card ${sizeClasses}`}
      style={aspectStyle}
    >
      {/* Image only — no chrome, no overlay tricks */}
      <img
        src={item.url}
        alt={`${item.title ?? "Project"} — UI preview`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Caption */}
      {(item.title || item.category) && (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div>
            {item.title && (
              <p className="font-heading text-sm font-semibold text-white">
                {item.title}
              </p>
            )}
            {item.category && (
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/60">
                {item.category}
              </p>
            )}
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
            {isWeb ? "Web" : "App"}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fillToMin<T>(arr: T[], min: number): T[] {
  if (arr.length === 0) return arr;
  const out = [...arr];
  while (out.length < min) out.push(...arr);
  return out;
}