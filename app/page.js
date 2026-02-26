import PageTransition from "@/components/animations/PageTransition";
import Reveal from "@/components/animations/Reveal";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import BranchesSection from "@/components/home/BranchesSection";
import ServicesSection from "@/components/home/ServicesSection";
import OpticalShopSection from "@/components/home/OpticalShopSection";
import HMOSection from "@/components/home/HMOSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import MapSection from "@/components/home/MapSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <PageTransition>

      <HeroSection />

      <Reveal>
        <StatsSection />
      </Reveal>

      <Reveal>
        <BranchesSection />
      </Reveal>

      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <OpticalShopSection />
      </Reveal>

      <Reveal>
        <HMOSection />
      </Reveal>

      <Reveal>
        <TestimonialSection />
      </Reveal>

      <Reveal>
        <FAQSection />
      </Reveal>

      <Reveal>
        <MapSection />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

    </PageTransition>
  );
}