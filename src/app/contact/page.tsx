"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/sections/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";
import { Mail, Phone, Linkedin, Instagram, Dribbble, Palette } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add reCAPTCHA token to the data
    const submitData = {
      ...data,
      recaptchaToken,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });

    if (res.ok) {
      setStatus("sent");
      if (form) {
        form.reset();
      }
      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
    } else {
      setStatus("error");
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
    }
  }

  return (
    <>
      <Header />
      <PageBanner title="Contact" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left: Form */}
            <div>
              <p className="text-muted-foreground">
                Ready to start your project? Tell us a bit about it.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4 max-w-3xl">
                <div>
                  <label className="mb-1 block text-sm text-muted-foreground">
                    Name
                  </label>
                  <Input name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-muted-foreground">
                    Email
                  </label>
                  <Input type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-muted-foreground">
                    Message
                  </label>
                  <Textarea name="message" placeholder="Tell us about your project" rows={5} required />
                </div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />

                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "sent" && (
                  <p className="text-green-600">
                    Thanks! We’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Right: Info & Social */}
            <aside>
              <div className="rounded-2xl border p-5 md:p-6 bg-card/50 backdrop-blur">
                <h3 className="text-xl font-semibold">Let’s connect</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer email or a quick call? Reach us directly, or follow us on social.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-start gap-3 rounded-xl border p-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-5" />
                    </span>
                    <div className="text-sm">
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-foreground">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border p-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <Phone className="size-5" />
                    </span>
                    <div className="text-sm">
                      <p className="font-medium">Phone</p>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium">Follow us</p>
                  <div className="mt-3 flex items-center gap-3">
                    <a href={SITE.social.linkedin} aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
                      <Linkedin className="size-4" />
                    </a>
                    <a href={SITE.social.instagram} aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
                      <Instagram className="size-4" />
                    </a>
                    <a href={SITE.social.behance} aria-label="Behance" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
                      <Palette className="size-4" />
                    </a>
                    <a href={SITE.social.dribbble} aria-label="Dribbble" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
                      <Dribbble className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
