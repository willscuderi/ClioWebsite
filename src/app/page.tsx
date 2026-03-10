"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <PlatformShowcase />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
