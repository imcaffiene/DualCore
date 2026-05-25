import type { MDXComponents } from "mdx/types";

type TableProps = {
  headers: string[];
  rows: string[][];
};

function Table({ headers, rows }: TableProps) {
  return (
    <div
      className="my-10 overflow-x-auto rounded-xl"
      style={{ border: "1px solid #1C1C1C", background: "#0A0A0A" }}
    >
      <table className="w-full border-collapse">
        <thead style={{ background: "#101010" }}>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-4 text-left font-semibold"
                style={{
                  color: "#FAFAF8",
                  borderBottom: "1px solid #1C1C1C",
                  fontSize: "14px",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className="px-6 py-4 align-top"
                  style={{
                    color: "#BBB",
                    borderBottom:
                      rowIndex === rows.length - 1 ? "none" : "1px solid #141414",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function useMdxComponents(): MDXComponents {
  return {
    Table,
    h1: ({ children, ...props }) => (
      <h1 className="font-display text-2xl font-bold leading-[1.2] sm:text-3xl mt-12 mb-6" style={{ color: "#FAFAF8" }} {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="font-display text-xl font-bold leading-[1.25] sm:text-2xl mt-10 mb-4" style={{ color: "#FAFAF8" }} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="font-display text-lg font-bold leading-[1.3] sm:text-xl mt-8 mb-3" style={{ color: "#FAFAF8" }} {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="font-sans leading-[1.8] mb-5" style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#888", fontWeight: 350 }} {...props}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="transition-colors duration-200"
        style={{ color: "#FF6B00", textDecoration: "underline", textUnderlineOffset: 2, textDecorationThickness: 1 }}
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul className="font-sans mb-5 space-y-1.5" style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#888", fontWeight: 350, lineHeight: 1.8, paddingLeft: "1.5em" }} {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="font-sans mb-5 space-y-1.5" style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#888", fontWeight: 350, lineHeight: 1.8, paddingLeft: "1.5em" }} {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="pl-1" {...props}>{children}</li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-[3px] pl-6 py-2 mb-6 italic font-sans"
        style={{ borderColor: "#FF6B00", color: "#999", fontSize: "clamp(14px, 1.1vw, 16px)", lineHeight: 1.8 }}
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"code">) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className="font-mono px-2 py-0.5 rounded"
            style={{ background: "#1A1A1A", color: "#FF6B00", fontSize: "0.85em" }}
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <pre
          className="overflow-x-auto rounded-xl mb-8 p-6 leading-[1.8]"
          style={{ background: "#0A0A0A", border: "1px solid #1C1C1C", fontSize: "14px" }}
        >
          <code className={`font-mono ${className || ""}`} style={{ color: "#DDD" }} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    pre: ({ children, ...props }) => <>{children}</>,
    hr: ({ ...props }) => <hr className="my-16 border-t" style={{ borderColor: "#1C1C1C" }} {...props} />,
    img: ({ src, alt, ...props }) => (
      <div className="my-10 overflow-hidden rounded-xl">
        <img
          src={src}
          alt={alt || ""}
          className="w-full object-cover"
          style={{ border: "1px solid #1C1C1C" }}
          loading="lazy"
          {...props}
        />
      </div>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-10 rounded-xl" style={{ border: "1px solid #1C1C1C" }}>
        <table className="w-full" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead style={{ background: "#0A0A0A" }} {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3.5 text-left font-semibold" style={{ color: "#888", borderBottom: "1px solid #1C1C1C" }} {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-6 py-3.5 font-sans" style={{ color: "#BBB", borderBottom: "1px solid #141414", fontSize: "14px" }} {...props}>
        {children}
      </td>
    ),
    strong: ({ children, ...props }) => <strong style={{ color: "#FAFAF8", fontWeight: 600 }} {...props}>{children}</strong>,
    em: ({ children, ...props }) => <em style={{ color: "#DDD" }} {...props}>{children}</em>,
  };
}
