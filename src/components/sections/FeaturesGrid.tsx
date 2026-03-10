"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FeaturesGrid() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...headerAnimation} className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to capture meetings
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Professional-grade transcription and AI notes with complete privacy. No subscriptions, no servers, no compromises.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
