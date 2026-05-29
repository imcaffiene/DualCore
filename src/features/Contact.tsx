"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CharButton } from "@/components/ui/CharButton";
import { ChevronDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectTypeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                    className="font-display text-2xl md:text-3xl tracking-wide transition-colors duration-200 inline-flex items-center gap-3"
                    style={{ color: "hsl(var(--foreground))" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                  >
                    {item.label === "WhatsApp" && (
                      <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7 shrink-0 fill-[#25D366]" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    )}
                    <span>{item.value.toUpperCase()}</span>
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
            {formState === "success" ? (
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
                  onClick={() => setFormState("idle")}
                  className="self-start mt-4"
                >
                  Send another →
                </CharButton>
              </div>
            ) : formState === "error" ? (
              <div
                className="flex flex-col gap-6 pt-10"
                style={{ borderTop: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(60px, 7vw, 96px)", color: "#FF4444" }}
                >
                  ERROR.
                </div>
                <p
                  className="text-base leading-relaxed font-sans max-w-sm"
                  style={{ color: "hsl(var(--text2))", fontWeight: 300 }}
                >
                  Something went wrong. Please try again or email us directly.
                </p>
                <CharButton
                  variant="ghost"
                  onClick={() => setFormState("idle")}
                  className="self-start mt-4"
                >
                  Try again →
                </CharButton>
              </div>
            ) : (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  if (formState === "submitting") return;
                  const name = form.name.trim();
                  const email = form.email.trim();
                  const message = form.message.trim();
                  if (!name || !email || !message) return;
                  setFormState("submitting");
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, email, phone: "", projectType: form.projectType || "Not specified", message }),
                    });
                    const data = await res.json();
                    if (res.ok && data.success) {
                      setFormState("success");
                      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
                    } else {
                      setFormState("error");
                    }
                  } catch {
                    setFormState("error");
                  }
                }}
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
                      placeholder="name"
                      style={inputStyle}
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
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
                      placeholder="email"
                      style={inputStyle}
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={focusOrange}
                      onBlur={blurGray}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "hsl(var(--text3))" }}
                    >
                      Phone <span style={{ color: "hsl(var(--text3))", opacity: 0.5 }}>(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 12345 67890"
                      style={inputStyle}
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      onFocus={focusOrange}
                      onBlur={blurGray}
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                    <label
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "hsl(var(--text3))" }}
                    >
                      Project type
                    </label>
                    <button
                      type="button"
                      onClick={() => setProjectTypeOpen(prev => !prev)}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: form.projectType ? "hsl(var(--foreground))" : "#888" }}>
                        {form.projectType || "Select type…"}
                      </span>
                      <ChevronDown
                        size={16}
                        style={{
                          transform: projectTypeOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          color: "hsl(var(--text3))",
                        }}
                      />
                    </button>
                    <input
                      type="hidden"
                      required
                      value={form.projectType}
                    />

                    {projectTypeOpen && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: "100%",
                          zIndex: 50,
                          marginTop: 4,
                          background: "#0C0C0C",
                          border: "1px solid hsl(var(--border2))",
                          borderRadius: 4,
                          overflow: "hidden",
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {["Web App / Platform", "AI Agent System", "Automation", "Mobile App", "Other"].map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setForm(f => ({ ...f, projectType: option }));
                              setProjectTypeOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-sm transition-colors duration-150"
                            style={{
                              background: form.projectType === option ? "hsl(var(--primary))" : "transparent",
                              color: form.projectType === option ? "#000" : "#FAFAF8",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onMouseEnter={e => {
                              if (form.projectType !== option) {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                              }
                            }}
                            onMouseLeave={e => {
                              if (form.projectType !== option) {
                                e.currentTarget.style.background = "transparent";
                              }
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={focusOrange}
                    onBlur={blurGray}
                  />
                </div>

                <CharButton
                  type="submit"
                  variant="filled"
                  size="lg"
                  className="self-start"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Sending..." : "Send message →"}
                </CharButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}