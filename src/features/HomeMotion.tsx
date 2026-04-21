"use client";

import { motion } from "framer-motion";

export function HeroMotion({ children }: { children: React.ReactNode; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

// Services heading
export function ServicesMotion({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mx-auto max-w-2xl text-center"
    >
      {children}
    </motion.div>
  );
}

// CTA section
export function CtaMotion({ children }: { children: React.ReactNode; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}