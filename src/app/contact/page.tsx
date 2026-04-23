"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Zap, Globe, Send,
  CheckCircle2, ChevronDown, Phone, MessageCircle,
} from "lucide-react";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer";

const CONTACT_EMAIL = "imcaffiene@gmail.com";
const WHATSAPP_NUMBER = "918434262589"; // ← replace with your number
const PROJECT_TYPES = [
  "AI agent / Automation",
  "Full-stack app",
  "Website",
  "Mobile app",
  "UI / UX design",
  "Something else",
] as const;

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const projectTypeRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "AI agent / Automation" as (typeof PROJECT_TYPES)[number],
    message: "",
  });

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (!projectTypeRef.current?.contains(e.target as Node))
        setProjectTypeOpen(false);
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setProjectTypeOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ✅ Now calls /api/contact — no mailto, no mail client
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim().slice(0, 100);
    const email = form.email.trim().slice(0, 255);
    const phone = form.phone.trim().slice(0, 20);
    const message = form.message.trim().slice(0, 2000);
    if (!name || !email || !message) return;

    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          projectType: form.projectType,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormState("success");
        setForm({ name: "", email: "", phone: "", projectType: "AI agent / Automation", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I found your portfolio and I'd like to discuss a project."
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden pb-24 pt-40">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.2 0 0) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Hire Us
              </span>
              <h1 className="mt-4 font-heading text-5xl font-bold sm:text-6xl">
                <span className="text-gradient">Let&apos;s build</span>
                <br />
                <span className="text-foreground">something good.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Tell us about your project — what you&apos;re building, who it&apos;s for,
                and where you are in the process. We&apos;ll respond within 24 hours.
              </p>

              <div className="mt-12 space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Email us directly",
                    body: (
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    ),
                  },
                  {
                    icon: Zap,
                    title: "Response time",
                    body: (
                      <p className="text-sm text-muted-foreground">
                        Within 24 hours, every weekday
                      </p>
                    ),
                  },
                  {
                    icon: Globe,
                    title: "Working remotely",
                    body: (
                      <p className="text-sm text-muted-foreground">
                        Available worldwide — overlap with most timezones
                      </p>
                    ),
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{title}</div>
                      {body}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Prefer instant chat?
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-card/80"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-[#25D366]" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                  <span className="ml-auto rounded-full bg-[#25D366]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#25D366]">
                    Fast reply
                  </span>
                </a>
              </div>
            </motion.div>

            {/* ── Right column — form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="glass flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/10">
                      <CheckCircle2 className="h-7 w-7 text-foreground" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                      Message sent!
                    </h3>
                    <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                      Your message landed in our inbox. We&apos;ll reply within 24 hours.
                    </p>
                    {/* WhatsApp nudge on success */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#25D366] transition-opacity hover:opacity-80"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Want a faster reply? Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground/40 transition-colors hover:text-foreground"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="glass rounded-3xl p-8 sm:p-10"
                  >
                    <div className="space-y-5">

                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                          Name
                        </label>
                        <input
                          id="name" required type="text" maxLength={100}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email + Phone side by side */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                            Email
                          </label>
                          <input
                            id="email" required type="email" maxLength={255}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                            placeholder="you@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                            <Phone className="h-3 w-3" />
                            Phone
                            <span className="font-normal normal-case tracking-normal text-foreground/30">
                              (optional)
                            </span>
                          </label>
                          <input
                            id="phone" type="tel" maxLength={20}
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Project type dropdown — unchanged */}
                      <div>
                        <label htmlFor="projectType" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                          Project type
                        </label>
                        <div ref={projectTypeRef} className="relative">
                          <button
                            id="projectType" type="button"
                            aria-haspopup="listbox" aria-expanded={projectTypeOpen}
                            aria-label="Project type"
                            onClick={() => setProjectTypeOpen((o) => !o)}
                            className="flex w-full items-center justify-between rounded-xl border border-border bg-input px-4 py-3 text-left text-sm text-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                          >
                            <span>{form.projectType}</span>
                            <ChevronDown className={`h-4 w-4 text-foreground/60 transition-transform ${projectTypeOpen ? "rotate-180" : ""}`} />
                          </button>
                          {projectTypeOpen && (
                            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                              <div role="listbox" aria-labelledby="projectType" className="space-y-1">
                                {PROJECT_TYPES.map((option) => (
                                  <button
                                    key={option} type="button"
                                    role="option" aria-selected={form.projectType === option}
                                    onClick={() => { setForm({ ...form, projectType: option }); setProjectTypeOpen(false); }}
                                    className={`flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${form.projectType === option ? "bg-white/[0.08] text-foreground" : "text-foreground/70 hover:bg-white/[0.05] hover:text-foreground"}`}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                          About your project
                        </label>
                        <textarea
                          id="message" required maxLength={2000} rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                          placeholder="What are you building? AI agent, automation system, complex app? Timeline, budget, links — anything helps."
                        />
                      </div>

                      {/* Error banner */}
                      {formState === "error" && (
                        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-400">
                          Something went wrong. Email us directly at{" "}
                          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                            {CONTACT_EMAIL}
                          </a>
                        </p>
                      )}

                      <p className="text-xs text-muted-foreground/70">
                        We read every message and reply within 24 hours on weekdays.
                      </p>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3.5 text-sm font-semibold text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {formState === "submitting" ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>

                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}