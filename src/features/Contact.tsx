"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30 border-t border-surface-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8 text-primary"
        >
          <Mail className="w-8 h-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Let&apos;s build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">amazing together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Have a project in mind or want to discuss a potential collaboration? We are currently accepting new freelance clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Simple Footer built into Contact section for brevity */}
        <div className="mt-24 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Freelance Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  );
}
