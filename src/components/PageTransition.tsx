"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface TransitionContext {
  navigateTo: (path: string) => void;
}

const TransitionCtx = createContext<TransitionContext>({ navigateTo: () => {} });

export const usePageTransition = () => useContext(TransitionCtx);

const ease = [0.76, 0, 0.24, 1] as const;
type Phase = "idle" | "covering" | "revealing";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingPath = useRef<string | null>(null);

  const navigateTo = useCallback((path: string) => {
    if (phase !== "idle") return;
    pendingPath.current = path;
    setPhase("covering");
    router.push(path);
  }, [phase, router]);

  const onCoverComplete = useCallback(() => {
    pendingPath.current = null;
    setPhase("revealing");
  }, []);

  const onRevealComplete = useCallback(() => {
    setPhase("idle");
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
            onAnimationComplete={onCoverComplete}
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
