import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clio — AI Meeting Transcription & Notes for Mac",
  description:
    "Free, open-source meeting transcription and AI notes that run locally on your Mac. No subscriptions, no servers, no compromises.",
  metadataBase: new URL("https://clionotes.com"),
  openGraph: {
    title: "Clio — Every meeting, perfectly captured.",
    description:
      "AI-powered transcription and notes that run locally on your Mac. Free, private, and open source.",
    url: "https://clionotes.com",
    siteName: "Clio",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Clio — AI Meeting Transcription & Notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clio — Every meeting, perfectly captured.",
    description:
      "AI-powered transcription and notes that run locally on your Mac. Free, private, and open source.",
    images: ["/images/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
