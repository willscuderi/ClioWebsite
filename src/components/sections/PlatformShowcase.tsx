"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Apple, Check, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SITE, MACOS_FEATURES, IOS_FEATURES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export function PlatformShowcase() {
  const headerAnimation = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();

  const slideIn = (direction: "left" | "right", delay = 0) =>
    prefersReducedMotion
      ? { initial: {}, whileInView: {}, viewport: { once: true }, transition: {} }
      : {
          initial: { opacity: 0, x: direction === "left" ? -40 : 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
        };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...headerAnimation} className="text-center mb-20">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Platforms
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Your Mac today, your iPhone soon
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Clio works seamlessly across Apple&apos;s ecosystem, with the macOS app available now and the iOS app in development.
          </p>
        </motion.div>

        {/* macOS */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div {...slideIn("left")}>
            <div className="relative rounded-xl overflow-hidden border border-border shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted">Clio — Summary</span>
              </div>
              <Image
                src="/images/screenshot-summary.png"
                alt="Clio macOS app showing an AI-generated meeting summary"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div {...slideIn("right", 0.15)}>
            <div className="flex items-center gap-2 mb-4">
              <Apple className="w-6 h-6" />
              <h3 className="text-2xl font-bold">macOS</h3>
              <Badge variant="accent">Available Now</Badge>
            </div>
            <p className="text-muted mb-6">
              A native macOS app that captures system audio and your microphone, with local transcription and AI-powered notes.
            </p>
            <ul className="space-y-2.5 mb-8">
              {MACOS_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={SITE.download}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                         bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
            >
              <Download className="w-4 h-4" />
              Download for Mac
            </a>
          </motion.div>
        </div>

        {/* iOS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...slideIn("left")} className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6" />
              <h3 className="text-2xl font-bold">iPhone</h3>
              <Badge variant="coming-soon">Coming Soon</Badge>
            </div>
            <p className="text-muted mb-6">
              Record in-person meetings and speakerphone calls with on-device transcription. Quick-start from the Action Button.
            </p>
            <ul className="space-y-2.5 mb-8">
              {IOS_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                            border border-border text-muted rounded-xl">
              Notify me at launch
            </div>
          </motion.div>

          <motion.div {...slideIn("right", 0.15)} className="order-1 md:order-2">
            {/* iOS phone mockup */}
            <div className="relative mx-auto w-64">
              <div className="relative bg-card rounded-[2.5rem] border-2 border-border p-3 shadow-xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl" />
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden bg-background aspect-[9/19.5] flex flex-col items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-sm font-semibold">Clio for iPhone</p>
                    <p className="text-xs text-muted mt-1">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
