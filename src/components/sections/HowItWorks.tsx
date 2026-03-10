"use client";

import { motion } from "framer-motion";
import { Play, Headphones, FileText, type LucideIcon } from "lucide-react";
import { STEPS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stepIcons: Record<string, LucideIcon> = { Play, Headphones, FileText };

function StepItem({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const animation = useScrollAnimation(index * 0.1);
  const IconComponent = stepIcons[step.icon];

  return (
    <motion.div
      key={step.number}
      {...animation}
      className="flex items-start gap-6"
    >
      <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10
                      border border-blue-500/20 flex items-center justify-center">
        {IconComponent && <IconComponent className="w-6 h-6 text-blue-400" />}
      </div>
      <div className="pt-1">
        <span className="text-xs font-mono text-blue-400 tracking-wider">
          STEP {step.number}
        </span>
        <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
        <p className="text-muted mt-2 max-w-md">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div {...headerAnimation} className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Three steps to better meetings
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-12 bottom-12 w-px border-l-2 border-dashed border-border hidden md:block" />
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
