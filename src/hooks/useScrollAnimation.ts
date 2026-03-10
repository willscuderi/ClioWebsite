"use client";

import { useReducedMotion } from "framer-motion";

export function useScrollAnimation(delay = 0) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: {},
      whileInView: {},
      viewport: { once: true },
      transition: {},
    };
  }

  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  };
}
