import Link from "next/link";
import { SITE } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href={SITE.social.linkedin}>LinkedIn</Link>
            <Link href={SITE.social.instagram}>Instagram</Link>
            <Link href={SITE.social.behance}>Behance</Link>
            <Link href={SITE.social.dribbble}>Dribbble</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
