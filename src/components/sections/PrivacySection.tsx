"use client";

import { motion } from "framer-motion";
import { Lock, Shield, UserX, Code, type LucideIcon } from "lucide-react";
import { PRIVACY_BADGES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const privacyIcons: Record<string, LucideIcon> = { Shield, UserX, Code };

export function PrivacySection() {
  const headerAnimation = useScrollAnimation();

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...headerAnimation}
          className="glass-card rounded-2xl p-8 sm:p-12 text-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20
                            flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-green-400" />
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Your data stays on your device.
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-10">
            Clio is designed with privacy at its core. No accounts, no telemetry, no cloud servers. Your meetings are yours alone.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {PRIVACY_BADGES.map((badge, i) => {
              const IconComponent = privacyIcons[badge.icon];

              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                    {IconComponent && <IconComponent className="w-5 h-5 text-green-400" />}
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{badge.title}</h3>
                  <p className="text-xs text-muted">{badge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
