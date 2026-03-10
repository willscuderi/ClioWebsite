// Simple cn helper without tailwind-merge to avoid extra deps
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
