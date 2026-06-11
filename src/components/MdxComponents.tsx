import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

type TableProps = {
  headers: string[];
  rows: string[][];
};

function Table({ headers, rows }: TableProps) {
  return (
    <div
      className="my-10 overflow-x-auto rounded-xl"
      style={{
        border: "1px solid #1C1C1C",
        background: "#0A0A0A",
      }}
    >
      <table className="w-full border-collapse">
        <thead style={{ background: "#101010" }}>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left font-semibold"
                style={{
                  color: "#F5F5F3",
                  borderBottom: "1px solid #1C1C1C",
                  fontSize: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 align-top"
                  style={{
                    color: "#B8B8B3",
                    borderBottom:
                      rowIndex === rows.length - 1 ? "none" : "1px solid #141414",
                    fontSize: "14px",
                    lineHeight: 1.7,
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

type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;

export function useMdxComponents(): MDXComponents {
  return {
    Table,

    h1: ({ children, ...props }) => (
      <h1
        className="mt-12 mb-6 font-sans text-3xl font-bold leading-[1.15] sm:text-4xl"
        style={{
          color: "#FFFFFF",
          letterSpacing: "-0.02em",
        }}
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 mb-5 border-l-[3px] pl-4 font-sans text-[26px] font-semibold leading-[1.28] sm:text-[30px]"
        style={{
          color: "#F5F5F3",
          borderColor: "#FF6B00",
          letterSpacing: "-0.012em",
        }}
        {...props}
      >
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        className="mt-8 mb-3 font-sans text-[22px] font-medium leading-[1.38] sm:text-2xl"
        style={{
          color: "#ECECE7",
          letterSpacing: "-0.006em",
        }}
        {...props}
      >
        {children}
      </h3>
    ),

    p: ({ children, ...props }) => (
      <p
        className="mb-6 font-serif leading-[1.85]"
        style={{
          fontSize: "clamp(15.5px, 1.05vw, 17px)",
          color: "#B3B3AE",
          fontWeight: 400,
        }}
        {...props}
      >
        {children}
      </p>
    ),

    a: ({ href, children, ...props }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="transition-colors duration-200"
        style={{
          color: "#FF6B00",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          textDecorationThickness: 1,
        }}
        {...props}
      >
        {children}
      </a>
    ),

    ul: ({ children, ...props }) => (
      <ul
        className="mb-6 list-disc space-y-2 font-serif"
        style={{
          fontSize: "clamp(16px, 1.2vw, 18px)",
          color: "#B3B3AE",
          fontWeight: 400,
          lineHeight: 1.85,
          paddingLeft: "1.5em",
        }}
        {...props}
      >
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol
        className="mb-6 list-decimal space-y-2 font-serif"
        style={{
          fontSize: "clamp(16px, 1.2vw, 18px)",
          color: "#B3B3AE",
          fontWeight: 400,
          lineHeight: 1.85,
          paddingLeft: "1.5em",
        }}
        {...props}
      >
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li
        className="pl-1"
        style={{
          color: "#B3B3AE",
          fontSize: "clamp(16px, 1.2vw, 18px)",
          fontWeight: 400,
        }}
        {...props}
      >
        {children}
      </li>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mb-6 border-l-[3px] py-3 pl-6 font-serif italic"
        style={{
          borderColor: "#FF6B00",
          color: "#C4C4BF",
          fontSize: "clamp(16px, 1.2vw, 18px)",
          lineHeight: 1.85,
          background: "rgba(255,107,0,0.03)",
        }}
        {...props}
      >
        {children}
      </blockquote>
    ),

    code: ({ className, children, ...props }: CodeProps) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code
            className="rounded px-2 py-0.5 font-mono"
            style={{
              background: "#1A1A1A",
              color: "#FF6B00",
              fontSize: "0.85em",
            }}
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <code
          className={`font-mono ${className ?? ""}`}
          style={{
            color: "#DDDDD8",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
          {...props}
        >
          {children}
        </code>
      );
    },

    pre: ({ children, ...props }: PreProps) => (
      <pre
        className="mb-8 overflow-x-auto rounded-xl p-6"
        style={{
          background: "#0A0A0A",
          border: "1px solid #1C1C1C",
          fontSize: "14px",
        }}
        {...props}
      >
        {children}
      </pre>
    ),

    hr: ({ ...props }) => (
      <hr
        className="my-12 border-t"
        style={{ borderColor: "#1C1C1C" }}
        {...props}
      />
    ),

    img: ({ src, alt, ...props }) => (
      <img
        src={src}
        alt={alt || ""}
        className="my-10 w-full rounded-xl object-cover"
        style={{
          border: "1px solid #1C1C1C",
          display: "block",
        }}
        loading="lazy"
        {...props}
      />
    ),

    table: ({ children, ...props }) => (
      <div
        className="my-10 overflow-x-auto rounded-xl"
        style={{
          border: "1px solid #1C1C1C",
          background: "#0A0A0A",
        }}
      >
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),

    thead: ({ children, ...props }) => (
      <thead style={{ background: "#101010" }} {...props}>
        {children}
      </thead>
    ),

    tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,

    th: ({ children, ...props }) => (
      <th
        className="px-6 py-4 text-left font-sans text-sm font-semibold"
        style={{
          color: "#F1F1EC",
          borderBottom: "1px solid #1C1C1C",
          letterSpacing: "-0.01em",
        }}
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td
        className="px-6 py-4 align-top font-sans"
        style={{
          color: "#B8B8B3",
          borderBottom: "1px solid #141414",
          fontSize: "14px",
          lineHeight: 1.7,
        }}
        {...props}
      >
        {children}
      </td>
    ),

    strong: ({ children, ...props }) => (
      <strong
        style={{
          color: "#FAFAF8",
          fontWeight: 600,
        }}
        {...props}
      >
        {children}
      </strong>
    ),

    em: ({ children, ...props }) => (
      <em
        style={{
          color: "#E0E0DB",
        }}
        {...props}
      >
        {children}
      </em>
    ),
  };
}