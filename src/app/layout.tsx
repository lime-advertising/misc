import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/PageTransition";

const GA_ID = process.env.GA_TRACKING_ID;

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RTR Technologies – WordPress Growth Partner",
  description:
    "We design, build, and optimize WordPress websites powered by SEO and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="ga-init"
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `,
              }}
            />
            <Suspense fallback={null}>
              <Analytics id={GA_ID} />
            </Suspense>
          </>
        )}
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
