"use client";

import { useId, useState } from "react";
import { faqs } from "@/content/faq";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  if (!faqs.length) return null;

  return (
    <section id="faq" className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <Badge variant="gold">FAQ</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AccordionList />
        </div>
      </Container>
    </section>
  );
}

function AccordionList() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <ul className="space-y-3">
      {faqs.map((item, i) => (
        <li key={i}>
          <AccordionItem
            question={item.q}
            answer={item.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        </li>
      ))}
    </ul>
  );
}

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="rounded-2xl border bg-card/50 p-4 md:p-5 shadow-sm">
      <button
        type="button"
        id={buttonId}
        className="flex w-full items-center justify-between gap-3 text-left cursor-pointer"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 text-sm text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
