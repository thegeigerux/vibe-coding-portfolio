import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  if (String(message).trim().length < 20) {
    return NextResponse.json(
      { message: "Message must be at least 20 characters." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Thanks for reaching out. This API route is ready for email or CRM wiring."
  });
}

export function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
