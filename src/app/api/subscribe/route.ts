import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(async () => {
      // Support form POST (application/x-www-form-urlencoded)
      const form = await req.formData();
      return Object.fromEntries(form.entries());
    });
    const email = body?.email as string | undefined;
    if (!email) {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }
    // No-op subscription placeholder. Integrate your ESP here.
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

