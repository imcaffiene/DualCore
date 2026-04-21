"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Zap, Globe, Send, CheckCircle2 } from "lucide-react";
import { Header } from "@/features/Header";
import { Footer } from "@/features/Footer.tsx";

const CONTACT_EMAIL = "hello@dualdev.studio";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Website",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim().slice(0, 100);
    const email = form.email.trim().slice(0, 255);
    const message = form.message.trim().slice(0, 2000);
    if (!name || !email || !message) return;

    const subject = `New project inquiry — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project type: ${form.projectType}\n\n` +
      `About:\n${message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
            {/* Left column */}
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
                      <div className="text-sm text-muted-foreground">
                        Within 24 hours, every weekday
                      </div>
                    ),
                  },
                  {
                    icon: Globe,
                    title: "Working remotely",
                    body: (
                      <div className="text-sm text-muted-foreground">
                        Available worldwide — overlap with most timezones
                      </div>
                    ),
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{title}</div>
                      {body}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <div className="glass flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/10">
                    <CheckCircle2 className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                    Email opened
                  </h3>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    Your message is pre-filled in your email client — just hit
                    send and we&apos;ll reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground/60 transition-colors hover:text-foreground"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10">
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Project type */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                      >
                        Project type
                      </label>
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      >
                        <option>Website</option>
                        <option>Mobile app</option>
                        <option>Full-stack app</option>
                        <option>UI / UX design</option>
                        <option>Something else</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                      >
                        About your project
                      </label>
                      <textarea
                        id="message"
                        required
                        maxLength={2000}
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        placeholder="What are you building? Timeline, budget, links — anything helps."
                      />
                    </div>

                    <p className="text-xs text-muted-foreground/70">
                      Opens your email client with the message pre-filled.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                    >
                      Send via Email <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
