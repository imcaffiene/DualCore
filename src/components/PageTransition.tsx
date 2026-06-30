"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContext {
  navigateTo: (path: string) => void;
}

const TransitionCtx = createContext<TransitionContext>({ navigateTo: () => {} });

export const usePageTransition = () => useContext(TransitionCtx);

const ease = [0.76, 0, 0.24, 1] as const;
type Phase = "idle" | "covering" | "revealing";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingPath = useRef<string | null>(null);
  const pendingHash = useRef<string | null>(null);
  const navStart = useRef(0);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const MIN_COVER_MS = 350;

  const navigateTo = useCallback((path: string) => {
    if (phase !== "idle") return;
    const hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      pendingHash.current = path.slice(hashIndex + 1);
      pendingPath.current = path.slice(0, hashIndex);
    } else {
      pendingHash.current = null;
      pendingPath.current = path;
    }
    navStart.current = Date.now();
    setPhase("covering");
    router.push(path);
  }, [phase, router]);

  // Safety net: force reveal if cover has been showing too long
  useEffect(() => {
    if (phase !== "covering") return;
    const timer = setTimeout(() => {
      if (phase === "covering") {
        pendingPath.current = null;
        setPhase("revealing");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "covering" && pendingPath.current) {
      const target = pendingPath.current.replace(/\/$/, "");
      const current = pathname.replace(/\/$/, "");
      if (current === target) {
        pendingPath.current = null;
        const elapsed = Date.now() - navStart.current;
        const remaining = Math.max(0, MIN_COVER_MS - elapsed);
        revealTimer.current = setTimeout(() => setPhase("revealing"), remaining);
      }
    }
    return () => {
      if (revealTimer.current) clearTimeout(revealTimer.current);
    };
  }, [pathname, phase]);

  const onRevealComplete = useCallback(() => {
    setPhase("idle");
    if (pendingHash.current) {
      const el = document.getElementById(pendingHash.current);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      pendingHash.current = null;
    }
  }, []);

  return (
    <TransitionCtx.Provider value={{ navigateTo }}>
      {children}

      <AnimatePresence>
        {phase === "covering" && (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#0C0C0C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "all",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 600,
                height: 600,
                borderRadius: "50%",
                background: "radial-gradient(circle, hsl(24 95% 53% / 0.12) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.2 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 52px)",
                color: "#FAFAF8",
                letterSpacing: "0.04em",
                position: "relative",
              }}
            >
              2×<span style={{ color: "#FF6B00" }}>STUDIO</span>
            </motion.span>
          </motion.div>
        )}

        {phase === "revealing" && (
          <motion.div
            key="reveal"
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.45, ease }}
            onAnimationComplete={onRevealComplete}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#0C0C0C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "all",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 600,
                height: 600,
                borderRadius: "50%",
                background: "radial-gradient(circle, hsl(24 95% 53% / 0.12) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 52px)",
                color: "#FAFAF8",
                letterSpacing: "0.04em",
                position: "relative",
              }}
            >
              2×<span style={{ color: "#FF6B00" }}>STUDIO</span>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionCtx.Provider>
  );
}
