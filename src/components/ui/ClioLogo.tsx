"use client";

import Image from "next/image";

interface ClioLogoProps {
  className?: string;
  size?: number;
}

export function ClioLogo({ className = "", size = 32 }: ClioLogoProps) {
  return (
    <Image
      src="/images/app-icon.png"
      alt="Clio"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
    />
  );
}
