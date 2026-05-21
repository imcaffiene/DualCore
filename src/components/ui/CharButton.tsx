"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface CharLayerProps {
  chars: string[];
  isHoverLayer: boolean;
  hovered: boolean;
  staggerDelay: number;
}

function CharLayer({ chars, isHoverLayer, hovered, staggerDelay }: CharLayerProps) {
  return (
    <span
      aria-hidden={isHoverLayer}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
          animate={{
            y: isHoverLayer
              ? hovered ? "0%" : "105%"
              : hovered ? "-105%" : "0%",
          }}
          transition={{
            duration: 0.35,
            ease,
            delay: i * staggerDelay,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface CharButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
}

export function CharButton({
  children,
  onClick,
  type = "button",
  variant = "filled",
  size = "md",
  className = "",
  style,
  staggerDelay = 0.025,
}: CharButtonProps) {
  const [hovered, setHovered] = useState(false);

  const chars = children.split("");

  const sizeMap: Record<string, React.CSSProperties> = {
    sm: { padding: "8px 20px",  fontSize: "10px", letterSpacing: "0.18em" },
    md: { padding: "12px 28px", fontSize: "11px", letterSpacing: "0.16em" },
    lg: { padding: "14px 40px", fontSize: "11px", letterSpacing: "0.18em" },
  };

  const variantMap: Record<string, { base: React.CSSProperties; hov: React.CSSProperties }> = {
    filled: {
      base: { background: "#FF6B00", border: "1.5px solid #FF6B00", color: "#fff" },
      hov:  { background: "#D95A00", border: "1.5px solid #D95A00", color: "#fff" },
    },
    outline: {
      base: { background: "transparent", border: "1.5px solid #333", color: "#CCC" },
      hov:  { background: "#FF6B00",    border: "1.5px solid #FF6B00", color: "#fff" },
    },
    ghost: {
      base: { background: "transparent", border: "1.5px solid #2A2A2A", color: "#777" },
      hov:  { background: "transparent", border: "1.5px solid #FF6B00", color: "#FF6B00" },
    },
  };

  const v = variantMap[variant];
  const merged = hovered ? { ...v.base, ...v.hov } : v.base;

  return (
    <button
      type={type}
      className={`font-mono uppercase cursor-pointer ${className}`}
      style={{
        ...sizeMap[size],
        ...merged,
        transition: "background 0.25s ease, border-color 0.25s ease, color 0.2s ease",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <span style={{ visibility: "hidden", pointerEvents: "none" }}>{children}</span>

        <CharLayer
          chars={chars}
          isHoverLayer={false}
          hovered={hovered}
          staggerDelay={staggerDelay}
        />

        <CharLayer
          chars={chars}
          isHoverLayer={true}
          hovered={hovered}
          staggerDelay={staggerDelay}
        />
      </span>
    </button>
  );
}
