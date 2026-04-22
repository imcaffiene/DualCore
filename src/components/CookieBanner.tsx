"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Consent = "granted" | "denied" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user already decided
    const stored = localStorage.getItem("dualdev:cookie-consent") as Consent;
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
      applyConsent(stored);
    } else {
      // Show banner after short delay so page loads first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function applyConsent(value: "granted" | "denied") {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: value,
      ad_storage: "denied",       // always deny ads
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  function handleAccept() {
    localStorage.setItem("dualdev:cookie-consent", "granted");
    setConsent("granted");
    applyConsent("granted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("dualdev:cookie-consent", "denied");
    setConsent("denied");
    applyConsent("denied");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          className="fixed bottom-6 left-4 right-4 z-50 mx-auto max-w-lg"
        >
          <div className="glass rounded-2xl border border-white/[0.1] bg-black/[0.5] backdrop-blur-3xl supports-[backdrop-filter]:bg-black/[0.42] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.48)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">
                  We use cookies 🍪
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  We use Google Analytics to understand how visitors use this
                  site — pages visited, time spent, and location (no personal
                  data). You can decline and nothing will be tracked.
                </p>
              </div>
              {/* Dismiss without deciding — treated as declined */}
              <button
                onClick={handleDecline}
                aria-label="Close cookie banner"
                className="shrink-0 rounded-lg p-1 text-foreground/40 transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 rounded-xl bg-foreground py-2.5 text-xs font-semibold text-background transition-all hover:opacity-90"
              >
                Accept analytics
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 rounded-xl border border-border py-2.5 text-xs font-semibold text-foreground/70 transition-all hover:border-foreground/30 hover:text-foreground"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
