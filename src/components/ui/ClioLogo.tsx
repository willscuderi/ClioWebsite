"use client";

interface ClioLogoProps {
  className?: string;
  size?: number;
}

export function ClioLogo({ className = "", size = 32 }: ClioLogoProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="currentColor"
      width={size}
      height={size * 1.1}
      className={className}
    >
      <path d="M26 8C26 8 22 20 22 34c0 10 4 18 10 24l0 0c-1 2-2 4-2 6v10h4V68c0-1 0.5-2.5 1.5-4C38 66 40.5 68 44 69v5h4v-5.5c1 0.2 2 0.3 2 0.3s1-0.1 2-0.3V74h4v-5c3.5-1 6-3 8.5-5c1 1.5 1.5 3 1.5 4v6h4V64c0-2-1-4-2-6c6-6 10-14 10-24C78 20 74 8 74 8c-2 8-6 14-10 18V62c-2 2-5 3.5-8 4.5V30h-4v37c-1 0.2-2 0.3-2 0.3s-1-0.1-2-0.3V30h-4v36.5C40.5 65.5 38 64 36 62V26c-4-4-8-10-10-18z" />
      <path d="M40 80h20v4H40z" />
      <path d="M42 86h16v3H42z" />
      <path d="M45 91h10v3H45z" />
      <path d="M48 96h4v4h-4z" />
    </svg>
  );
}
