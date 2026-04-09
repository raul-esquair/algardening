import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, propertyType, message } =
      await request.json();

    // Basic server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Email to Alex
    await resend.emails.send({
      from: "AL Gardening <onboarding@resend.dev>",
      to: "alex@algardening.com",
      replyTo: email,
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Name</td><td style="padding:8px 12px">${name}</td></tr>
          <tr style="background:#f9f9f7"><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Email</td><td style="padding:8px 12px">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Phone</td><td style="padding:8px 12px">${phone}</td></tr>
          <tr style="background:#f9f9f7"><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Service</td><td style="padding:8px 12px">${service || "Not specified"}</td></tr>
          ${propertyType ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Property</td><td style="padding:8px 12px">${propertyType}</td></tr>` : ""}
          ${message ? `<tr style="background:#f9f9f7"><td style="padding:8px 12px;font-weight:bold;color:#2D5A3D">Message</td><td style="padding:8px 12px">${message}</td></tr>` : ""}
        </table>
      `,
    });

    // Push notification via Ntfy
    await fetch("https://ntfy.sh/algardening-leads", {
      method: "POST",
      headers: { Title: "New Estimate Request" },
      body: `${name} - ${phone}${service ? `\n${service}` : ""}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
