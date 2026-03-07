import nodemailer from "nodemailer";
import { notifyOwner } from "./_core/notification";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  interests: string[];
  message?: string;
}

/**
 * Build a nicely formatted email body from the contact form submission
 */
function buildEmailBody(data: ContactFormData): string {
  const lines: string[] = [
    `New Contact Form Submission — My Rock Realty`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.phone) {
    lines.push(`Phone: ${data.phone}`);
  }

  if (data.type) {
    lines.push(`Interested In: ${data.type}`);
  }

  if (data.interests.length > 0) {
    lines.push(`Topics: ${data.interests.join(", ")}`);
  }

  if (data.message) {
    lines.push(``, `Message:`, data.message);
  }

  lines.push(``, `---`, `Sent from MyRockRealty.com contact form`);

  return lines.join("\n");
}

function buildHtmlBody(data: ContactFormData): string {
  let html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #292524; border-bottom: 2px solid #C9A96E; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
          <td style="padding: 8px 12px; color: #292524;">${data.name}</td>
        </tr>
        <tr style="background: #f9f7f4;">
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
          <td style="padding: 8px 12px; color: #292524;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>`;

  if (data.phone) {
    html += `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
          <td style="padding: 8px 12px; color: #292524;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>`;
  }

  if (data.type) {
    html += `
        <tr style="background: #f9f7f4;">
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Interested In</td>
          <td style="padding: 8px 12px; color: #292524;">${data.type}</td>
        </tr>`;
  }

  if (data.interests.length > 0) {
    html += `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #555;">Topics</td>
          <td style="padding: 8px 12px; color: #292524;">${data.interests.join(", ")}</td>
        </tr>`;
  }

  html += `
      </table>`;

  if (data.message) {
    html += `
      <div style="margin-top: 20px; padding: 16px; background: #f9f7f4; border-left: 3px solid #C9A96E; border-radius: 4px;">
        <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">Message:</p>
        <p style="margin: 0; color: #292524; white-space: pre-wrap;">${data.message}</p>
      </div>`;
  }

  html += `
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Sent from MyRockRealty.com contact form
      </p>
    </div>`;

  return html;
}

/**
 * Send the contact form submission via email to both configured addresses.
 * Uses Gmail SMTP with an App Password.
 */
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmails = process.env.CONTACT_EMAILS || "robbakerre@gmail.com,7203636544@vtext.com";

  // Also send an in-app notification to the project owner
  try {
    await notifyOwner({
      title: `New Lead: ${data.name} — ${data.type || "General Inquiry"}`,
      content: buildEmailBody(data),
    });
  } catch (err) {
    console.warn("[Contact] Owner notification failed:", err);
  }

  // If SMTP credentials are configured, send actual emails
  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"My Rock Realty" <${smtpUser}>`,
        to: recipientEmails,
        replyTo: data.email,
        subject: `New Lead: ${data.name} — ${data.type || "General Inquiry"}`,
        text: buildEmailBody(data),
        html: buildHtmlBody(data),
      });

      console.log("[Contact] Email sent successfully to:", recipientEmails);
      return true;
    } catch (err) {
      console.error("[Contact] Email send failed:", err);
      return false;
    }
  } else {
    console.warn("[Contact] SMTP not configured — submission logged via notification only.");
    return true; // Still return true since notification was sent
  }
}
