"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // ms
  suffix?: string;
  prefix?: string;
  start?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({
  value,
  duration = 1200,
  suffix = "",
  prefix = "",
  start = 0,
}: Props) {
  const [display, setDisplay] = useState(start);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const startAnim = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      const t0 = performance.now();
      const frame = () => {
        const now = performance.now();
        const elapsed = Math.min(1, (now - t0) / duration);
        const eased = easeOutCubic(elapsed);
        const next = Math.round(start + (value - start) * eased);
        setDisplay(next);
        if (elapsed < 1) {
          rafRef.current = requestAnimationFrame(frame);
        }
      };
      rafRef.current = requestAnimationFrame(frame);
    };

    const node = rootRef.current;
    if (!node) return;

    // Use IntersectionObserver to trigger animation on view
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            startAnim();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );
    io.observe(node);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, start]);

  return (
    <span ref={rootRef} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

