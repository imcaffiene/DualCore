"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CharButton } from "@/components/ui/CharButton";

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const inputStyle = {
    background: "transparent",
    borderBottom: "1px solid hsl(var(--border2))",
    color: "hsl(var(--foreground))",
    caretColor: "hsl(var(--primary))",
    width: "100%",
    padding: "10px 0",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
  } as const;

  const focusOrange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderBottomColor = "hsl(var(--primary))");
  const blurGray = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderBottomColor = "hsl(var(--border2))");

  return (
    <section id="contact" className="bg-background border-t border-border">
      <div ref={ref} className="px-6 md:px-10 lg:px-14 py-24 md:py-32 max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <div
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span>◆</span> Start a project
          </div>
          <h2
            className="font-display leading-[0.88]"
            style={{ fontSize: "clamp(52px, 8vw, 120px)", color: "hsl(var(--foreground))" }}
          >
            READY TO BUILD<br />SOMETHING{" "}
            <span style={{ color: "hsl(var(--primary))", fontStyle: "italic" }}>HARD?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex flex-col gap-0"
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            {[
              {
                label: "Direct email",
                value: "imcaffiene@gmail.com",
                href: "mailto:imcaffiene@gmail.com",
              },
              {
                label: "Response time",
                value: "Within 24 hours",
                href: null,
              },
              {
                label: "WhatsApp",
                value: "Chat directly →",
                href: "https://wa.me/918434262589",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="py-8"
                style={{ borderBottom: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "hsl(var(--text3))" }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl tracking-wide transition-colors duration-200"
                    style={{ color: "hsl(var(--foreground))" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                  >
                    {item.value.toUpperCase()}
                  </a>
                ) : (
                  <div
                    className="font-display text-2xl md:text-3xl tracking-wide"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {item.value.toUpperCase()}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-10">
              <p
                className="text-sm leading-[1.8] font-sans max-w-sm"
                style={{ color: "hsl(var(--text3))", fontWeight: 300 }}
              >
                We don't take every project. We take the right ones — complex,
                ambitious, worth building well. If that's yours, reach out.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="flex flex-col gap-6 pt-10"
                style={{ borderTop: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(60px, 7vw, 96px)", color: "hsl(var(--primary))" }}
                >
                  RECEIVED.
                </div>
                <p
                  className="text-base leading-relaxed font-sans max-w-sm"
                  style={{ color: "hsl(var(--text2))", fontWeight: 300 }}
                >
                  We'll review and respond within 24 hours.
                </p>
                <CharButton
                  variant="ghost"
                  onClick={() => setSubmitted(false)}
                  className="self-start mt-4"
                >
                  Send another →
                </CharButton>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                className="flex flex-col gap-10 pt-0"
                style={{ borderTop: "1px solid hsl(var(--border))" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "hsl(var(--text3))" }}
                    >
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      style={inputStyle}
                      onFocus={focusOrange}
                      onBlur={blurGray}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "hsl(var(--text3))" }}
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      style={inputStyle}
                      onFocus={focusOrange}
                      onBlur={blurGray}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-mono text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "hsl(var(--text3))" }}
                  >
                    Project type
                  </label>
                  <select
                    required
                    defaultValue=""
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none", background: "transparent" }}
                    onFocus={focusOrange}
                    onBlur={blurGray}
                  >
                    <option value="" disabled style={{ background: "hsl(var(--background))" }}>
                      Select type…
                    </option>
                    {["Web App / Platform", "AI Agent System", "Automation", "Mobile App", "Other"].map(o => (
                      <option key={o} value={o} style={{ background: "hsl(var(--background))" }}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-mono text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "hsl(var(--text3))" }}
                  >
                    Tell us about it
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you building, and why is it hard?"
                    style={{ ...inputStyle, resize: "none", paddingTop: 10 }}
                    onFocus={focusOrange}
                    onBlur={blurGray}
                  />
                </div>

                <CharButton
                  type="submit"
                  variant="filled"
                  size="lg"
                  className="self-start"
                >
                  Send message →
                </CharButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}