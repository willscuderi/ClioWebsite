"use client";

import { motion } from "framer-motion";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FAQSection() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div {...headerAnimation} className="text-center mb-12">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-border"
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
