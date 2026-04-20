import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_LINK_COUNT = 2;
const spamPhrases = [
  "crypto",
  "bitcoin",
  "forex",
  "casino",
  "seo service",
  "buy now",
  "work from home",
  "viagra"
];

function looksSpammy(message) {
  const normalizedMessage = String(message || "").toLowerCase();
  const linkCount = (normalizedMessage.match(/https?:\/\//g) || []).length;

  return (
    linkCount > MAX_LINK_COUNT ||
    spamPhrases.some((phrase) => normalizedMessage.includes(phrase))
  );
}

function badRequest(message, reason) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("Contact form rejected:", reason);
  }

  return NextResponse.json({ message }, { status: 400 });
}

function getTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error("Email delivery is not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword
    }
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const { name, email, message, website } = body || {};

  if (website) {
    return badRequest("Your message could not be sent right now.", "honeypot field was filled");
  }

  if (!name || !email || !message) {
    return badRequest("Please complete each field before sending.", "missing required field");
  }

  if (String(message).trim().length < 20) {
    return badRequest("Please share a bit more detail so I have enough context.", "message too short");
  }

  if (looksSpammy(message)) {
    return badRequest("Your message could not be sent right now.", "spam phrase or link count");
  }

  try {
    const transporter = getTransporter();
    const to = process.env.CONTACT_TO || "thegeigerux@gmail.com";
    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeMessage = String(message).trim();

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      replyTo: safeEmail,
      subject: `Portfolio contact form: ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        "",
        "Message:",
        safeMessage
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br />")}</p>
      `
    });

    return NextResponse.json({
      message: "Thanks for reaching out. I will get back to you soon."
    });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      { message: "Your message could not be sent right now. Please try again in a bit." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
