"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GradientBlur } from "@/components/ui/GradientBlur";
import { SITE } from "@/lib/constants";
import Image from "next/image";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] },
        };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background glow */}
      <GradientBlur className="w-[800px] h-[600px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <Badge variant="accent">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Free &amp; Open Source
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Every meeting,{" "}
          <span className="gradient-text">perfectly captured.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          AI-powered transcription and notes that run locally on your Mac. Free, private, and open source.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={SITE.download}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium
                       bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all
                       shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download for Mac
          </a>
          <a
            href={SITE.github}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium
                       border border-border text-foreground rounded-xl transition-all
                       hover:bg-foreground/5 hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted
                             border border-border/50 rounded-xl">
              <Smartphone className="w-4 h-4" />
              iPhone
            </span>
            <Badge variant="coming-soon">Soon</Badge>
          </div>
        </motion.div>
      </div>

      {/* App screenshot */}
      <motion.div
        {...fadeUp(0.5)}
        className="relative z-10 mt-16 w-full max-w-4xl mx-auto"
      >
        <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl shadow-black/20">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-muted">Clio — Meeting Transcript</span>
          </div>
          <Image
            src="/images/screenshot-transcript.png"
            alt="Clio app showing a meeting transcript with speaker labels and timestamps"
            width={1200}
            height={750}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* Glow under screenshot */}
        <GradientBlur className="w-[600px] h-[300px] -bottom-32 left-1/2 -translate-x-1/2 opacity-40" />
      </motion.div>
    </section>
  );
}
