import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1A1A1A", background: "#0C0C0C" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(24px, 4vw, 56px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="font-heading text-2xl font-bold tracking-tight" style={{ color: "#FAFAF8" }}>
                2x<span style={{ color: "#666" }}>Studio</span>
              </span>
            </Link>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.8, color: "#444", marginTop: 16, maxWidth: 280 }}>
              A two-person studio of senior engineers. Complex apps, AI agents, automation — production-grade, always.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <a
                href="https://x.com/i_m_caffeine"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", padding: "6px 12px", border: "1px solid #222", borderRadius: 2, textDecoration: "none" }}
              >
                Twitter
              </a>
              <a
                href="mailto:imcaffiene@gmail.com"
                style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", padding: "6px 12px", border: "1px solid #222", borderRadius: 2, textDecoration: "none" }}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamsingh2135/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", padding: "6px 12px", border: "1px solid #222", borderRadius: 2, textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#333", marginBottom: 16 }}>
              Navigate
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: 8 }}>
                  <Link href={href} style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#555", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#333", marginBottom: 16 }}>
              Get in touch
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>
                <a href="mailto:imcaffiene@gmail.com" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#555", textDecoration: "none" }}>
                  imcaffiene@gmail.com
                </a>
              </li>
              <li>
                <Link href="/#contact" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#555", textDecoration: "none" }}>
                  Start a project →
                </Link>
              </li>
            </ul>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, padding: "6px 12px", border: "1px solid #1E3A1E", background: "rgba(74, 222, 128, 0.05)", borderRadius: 2 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4ADE80" }}>
                Available
              </span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #151515", paddingTop: 24, marginTop: 48, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#333" }}>
            © {new Date().getFullYear()} 2xStudio. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#333" }}>
            Designed & built by us.
          </p>
        </div>
      </div>
    </footer>
  );
}