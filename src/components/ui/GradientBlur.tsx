"use client";

interface GradientBlurProps {
  className?: string;
}

export function GradientBlur({ className = "" }: GradientBlurProps) {
  return (
    <div
      className={`absolute pointer-events-none accent-glow ${className}`}
      aria-hidden
    />
  );
}
