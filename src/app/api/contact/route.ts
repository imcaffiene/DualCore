import { NextResponse } from "next/server";

const CONTACT_RECIPIENT_EMAIL = "imcaffiene@gmail.com";
const DEFAULT_FROM_EMAIL = "hello@2xstudio.in";
const DEFAULT_FROM_NAME = "2xStudio Contact";
const BREVO_SEND_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME || DEFAULT_FROM_NAME;
  const recipientEmail =
    process.env.CONTACT_RECIPIENT_EMAIL || CONTACT_RECIPIENT_EMAIL;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  return { apiKey, fromEmail, fromName, recipientEmail };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const { apiKey, fromEmail, fromName, recipientEmail } = getBrevoConfig();
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    const safeName = String(name || "").trim();
    const safeEmail = String(email || "").trim();
    const safePhone = String(phone || "").trim();
    const safeProjectType = String(projectType || "").trim() || "Not specified";
    const safeMessage = String(message || "").trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <h2 style="margin-bottom:4px;">New project inquiry</h2>
        <p style="color:#666;margin-top:0;">Via 2xstudio.in contact form</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#666;width:120px;font-size:13px;">Name</td>
            <td style="padding:8px 0;font-weight:600;font-size:13px;">${escapeHtml(safeName)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;font-size:13px;">Email</td>
            <td style="padding:8px 0;font-size:13px;">
              <a href="mailto:${escapeHtml(safeEmail)}" style="color:#0ea5e9;">${escapeHtml(safeEmail)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;font-size:13px;">Phone</td>
            <td style="padding:8px 0;font-size:13px;">${escapeHtml(safePhone || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666;font-size:13px;">Project type</td>
            <td style="padding:8px 0;font-size:13px;">${escapeHtml(safeProjectType)}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
        <h4 style="margin-bottom:8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Message</h4>
        <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(safeMessage)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
        <p style="font-size:12px;color:#999;">Hit reply to respond directly to ${escapeHtml(safeName)} at ${escapeHtml(safeEmail)}</p>
      </div>
    `;

    const text = [
      "New project inquiry",
      "Via 2xstudio.in contact form",
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone || "Not provided"}`,
      `Project type: ${safeProjectType}`,
      "",
      "Message:",
      safeMessage,
    ].join("\n");

    const response = await fetch(BREVO_SEND_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: fromEmail,
          name: fromName,
        },
        to: [{ email: recipientEmail }],
        replyTo: {
          email: safeEmail,
          name: safeName,
        },
        subject: `New inquiry from ${safeName} - ${safeProjectType}`,
        textContent: text,
        htmlContent: html,
        tags: ["portfolio-contact"],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[contact] Brevo error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Brevo error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }
}
