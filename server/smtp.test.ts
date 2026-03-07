import { describe, expect, it } from "vitest";
import nodemailer from "nodemailer";

describe("SMTP credentials validation", () => {
  it("should verify SMTP connection with provided credentials", async () => {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Ensure env vars are set
    expect(smtpUser).toBeTruthy();
    expect(smtpPass).toBeTruthy();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // verify() checks the connection and auth — throws on failure
    const result = await transporter.verify();
    expect(result).toBe(true);
  }, 15000);

  it("should have CONTACT_EMAILS configured", () => {
    const contactEmails = process.env.CONTACT_EMAILS;
    expect(contactEmails).toBeTruthy();
    expect(contactEmails).toContain("robbakerre@gmail.com");
    expect(contactEmails).toContain("7203636544@vtext.com");
  });
});
