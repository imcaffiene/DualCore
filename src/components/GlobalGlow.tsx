"use client";

import { useEffect, useState } from "react";

export function GlobalGlow() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed"
      style={{
        left: mouse.x - 400,
        top: mouse.y - 400,
        width: 800,
        height: 800,
        background: "radial-gradient(circle, hsl(var(--primary) / 0.055) 0%, transparent 60%)",
        transition: "left 0.25s ease, top 0.25s ease",
        borderRadius: "50%",
        zIndex: 0,
      }}
    />
  );
}
