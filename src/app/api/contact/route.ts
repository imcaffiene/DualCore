// app/api/contact/route.ts — no-domain version

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const YOUR_EMAIL = "imcaffiene@gmail.com"; // must match Resend account email
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    // ✅ Only send to YOUR inbox — works without domain
    await resend.emails.send({
      from: FROM_EMAIL,
      to: YOUR_EMAIL, // ← only your verified email works in sandbox
      replyTo: email, // ← reply still goes to client
      subject: `New inquiry from ${name} — ${projectType}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <h2 style="margin-bottom:4px;">New project inquiry</h2>
          <p style="color:#666;margin-top:0;">Via dual-devs.vercel.app contact form</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#666;width:120px;font-size:13px;">Name</td>
              <td style="padding:8px 0;font-weight:600;font-size:13px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;">Email</td>
              <td style="padding:8px 0;font-size:13px;">
                <a href="mailto:${email}" style="color:#0ea5e9;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;">Phone</td>
              <td style="padding:8px 0;font-size:13px;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;">Project type</td>
              <td style="padding:8px 0;font-size:13px;">${projectType}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
          <h4 style="margin-bottom:8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Message</h4>
          <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
          <p style="font-size:12px;color:#999;">Hit reply to respond directly to ${name} at ${email}</p>
        </div>
      `,
    });

    // ❌ Skip client auto-reply — needs verified domain
    // Will add once you have dualdev.studio or any custom domain

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }
}
