"use client";

import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { PRICING_FEATURES, COMPETITORS, SITE } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PricingSection() {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation(0.1);
  const compAnimation = useScrollAnimation(0.2);

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div {...headerAnimation} className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Free. Forever. No catch.
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Clio is open source and will always be free. The only cost is your own API keys for cloud services, and even those are optional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Free card */}
          <motion.div
            {...cardAnimation}
            className="md:col-span-3 glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 accent-glow opacity-30" />

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-muted text-sm">/month</span>
            </div>
            <p className="text-muted text-sm mb-6">Everything included. No limits.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRICING_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={SITE.download}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                           bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors
                           shadow-lg shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                Download for Free
              </a>
            </div>
          </motion.div>

          {/* Competitor comparison */}
          <motion.div
            {...compAnimation}
            className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-sm font-semibold mb-1 text-muted">Meanwhile, others charge...</h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 mt-4">
              {COMPETITORS.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center justify-between py-3 px-4
                             rounded-xl bg-foreground/[0.03] border border-border/50"
                >
                  <span className="text-sm font-medium">{comp.name}</span>
                  <span className="text-sm text-muted line-through">{comp.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4">
              Why pay for something that should be free? Clio gives you the same features without the subscription.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
