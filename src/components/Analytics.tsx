"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics({ id }: { id?: string }) {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!id) return;
    // @ts-expect-error - gtag is loaded externally via Google Analytics script
    window.gtag?.("config", id, {
      page_path: pathname + (search?.toString() ? `?${search}` : ""),
    });
  }, [id, pathname, search]);

  return null;
}
