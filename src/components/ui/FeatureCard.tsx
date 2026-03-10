"use client";

import { motion } from "framer-motion";
import {
  Cpu, AudioLines, Sparkles, Radio, Timer, Users, FileOutput, Globe,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featureIcons: Record<string, LucideIcon> = {
  Cpu, AudioLines, Sparkles, Radio, Timer, Users, FileOutput, Globe,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const animation = useScrollAnimation(index * 0.08);
  const IconComponent = featureIcons[icon];

  return (
    <motion.div
      {...animation}
      className="group glass-card rounded-2xl p-6 hover:border-blue-500/30
                 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4
                      group-hover:bg-blue-500/20 transition-colors">
        {IconComponent && <IconComponent className="w-5 h-5 text-blue-400" />}
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
