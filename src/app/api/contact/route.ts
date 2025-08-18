import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: [process.env.CONTACT_TO!],
      reply_to: email,
      subject: `New Inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Send failed" },
      { status: 500 }
    );
  }
}
