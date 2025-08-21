"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { testimonials } from "@/content/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Testimonials() {
  if (!testimonials.length) return null;

  const [isMd, setIsMd] = useState(false);
  const perView = isMd ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - perView);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dragOffsetPct, setDragOffsetPct] = useState(0);
  const draggingRef = useRef<{ active: boolean; startX: number; lastX: number } | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex]);

  const translatePct = useMemo(() => (100 / perView) * index, [index, perView]);
  const combinedTranslate = Math.max(0, Math.min((100 / perView) * maxIndex, translatePct - dragOffsetPct));

  function prev() {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }
  function next() {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }

  // Autoplay handling
  useEffect(() => {
    function clearTimer() {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    }
    function startTimer() {
      if (pausedRef.current) return;
      if (autoplayRef.current) return;
      autoplayRef.current = window.setInterval(() => {
        next();
      }, 4500);
    }
    startTimer();

    const onVisibility = () => {
      pausedRef.current = document.hidden;
      if (pausedRef.current) clearTimer();
      else startTimer();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimer();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [maxIndex, perView]);

  // Pointer swipe (mouse/touch)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      pausedRef.current = true; // pause autoplay while interacting
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      draggingRef.current = { active: true, startX: e.clientX, lastX: e.clientX };
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      const st = draggingRef.current;
      if (!st?.active) return;
      st.lastX = e.clientX;
      const containerW = el.clientWidth || 1;
      const deltaX = st.lastX - st.startX; // right is positive
      const pct = (deltaX / containerW) * 100;
      setDragOffsetPct(pct);
    };
    const onPointerUp = (_e: PointerEvent) => {
      const st = draggingRef.current;
      draggingRef.current = null;
      const containerW = el.clientWidth || 1;
      const deltaX = st ? st.lastX - st.startX : 0;
      const threshold = containerW * 0.12; // 12% swipe
      setDragOffsetPct(0);
      if (Math.abs(deltaX) > threshold) {
        if (deltaX < 0) next();
        else prev();
      }
      // resume autoplay after a short delay
      setTimeout(() => {
        pausedRef.current = false;
      }, 800);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
    };
  }, [maxIndex, perView]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-silver-soft">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <Badge variant="silver">Testimonials</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">What Clients Say</h2>
        </div>

        <div
          className="relative mt-8 select-none"
          role="region"
          aria-label="Client testimonials carousel"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          ref={containerRef}
          style={{ touchAction: "pan-y" }}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${combinedTranslate}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full md:w-1/2 flex-none px-2 md:px-3">
                  <figure className="rounded-2xl border p-6 text-left shadow-sm hover-glare">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Quote className="size-4" />
                      </span>
                    </div>
                    <blockquote className="leading-relaxed text-foreground">“{t.quote}”</blockquote>
                    <figcaption className="mt-3 text-sm font-medium text-muted-foreground">— {t.author}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button aria-label="Previous" onClick={prev} className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <ChevronLeft className="size-4" />
            </button>
            <button aria-label="Next" onClick={next} className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
