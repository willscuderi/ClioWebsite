"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "coming-soon";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default:
      "bg-foreground/5 text-muted border-border",
    accent:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "coming-soon":
      "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium
                   rounded-full border ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
