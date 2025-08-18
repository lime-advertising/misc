"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      if (form) {
        form.reset();
      }
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Ready to start your project? Tell us a bit about it.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-md border px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-md border px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full rounded-md border px-4 py-2"
            />
            <button
              className="rounded-md bg-black px-5 py-2 text-white disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

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

          <div className="mt-8 text-sm text-gray-600">
            <p>
              Email: <b>connect@rtr-technologies.com</b>
            </p>
            <p>Social: LinkedIn · Instagram · Behance · Dribbble</p>
          </div>
        </div>
      </section>
    </>
  );
}
