"use client";

import { motion } from "framer-motion";
import { Check, Download, Crown, Sparkles } from "lucide-react";
import { FREE_FEATURES, PRO_FEATURES, COMPETITORS, SITE } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PricingSection() {
  const headerAnimation = useScrollAnimation();
  const freeAnimation = useScrollAnimation(0.1);
  const proAnimation = useScrollAnimation(0.15);
  const compAnimation = useScrollAnimation(0.2);

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div {...headerAnimation} className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Free to start. Pro when you&apos;re ready.
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Get started with the free Mac app using your own API keys. Upgrade to Clio Pro for hassle-free AI summaries and the iPhone app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Free card */}
          <motion.div
            {...freeAnimation}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted text-sm">/forever</span>
            </div>
            <p className="text-muted text-sm mb-6">Mac app with BYO API keys</p>

            <div className="space-y-2.5">
              {FREE_FEATURES.map((feature) => (
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
                           border border-border hover:border-blue-400/50 rounded-xl transition-colors"
              >
                <Download className="w-4 h-4" />
                Download for Free
              </a>
            </div>
          </motion.div>

          {/* Pro card */}
          <motion.div
            {...proAnimation}
            className="glass-card rounded-2xl p-8 relative overflow-hidden border-blue-500/30"
          >
            <div className="absolute top-0 right-0 w-40 h-40 accent-glow opacity-40" />

            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-orange-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Most Popular
              </span>
            </div>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">$4.99</span>
              <span className="text-muted text-sm">/month</span>
            </div>
            <p className="text-muted text-sm mb-1">
              or <span className="font-medium text-foreground">$30/year</span>{" "}
              <span className="text-green-400 text-xs">(save 50%)</span>
            </p>
            <p className="text-muted text-sm mb-6">Mac + iPhone with built-in AI</p>

            <div className="space-y-2.5">
              {PRO_FEATURES.map((feature, i) => (
                <div key={feature} className="flex items-center gap-2.5 text-sm">
                  {i === 0 ? (
                    <Sparkles className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  ) : (
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  )}
                  <span className={i === 0 ? "font-medium" : ""}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                           bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors
                           shadow-lg shadow-blue-500/20"
              >
                <Crown className="w-4 h-4" />
                Get Clio Pro
              </a>
            </div>
          </motion.div>
        </div>

        {/* Competitor comparison */}
        <motion.div
          {...compAnimation}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-sm font-semibold mb-4 text-muted text-center">
            Still cheaper than everyone else
          </h3>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {COMPETITORS.map((comp) => (
              <div
                key={comp.name}
                className="text-center py-3 px-4 rounded-xl bg-foreground/[0.03] border border-border/50"
              >
                <span className="text-sm font-medium block">{comp.name}</span>
                <span className="text-sm text-muted line-through">{comp.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4 text-center">
            Clio Pro is less than half the price of competitors. And the free tier gives you everything they charge for.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
