import PageTransition from "@/components/animations/PageTransition";
import Reveal from "@/components/animations/Reveal";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import BranchesSection from "@/components/home/BranchesSection";
import Services3DSection from "@/components/home/Services3DSection";
import OpticalShopSection from "@/components/home/OpticalShopSection";
import HMOSection from "@/components/home/HMOSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import MapSection from "@/components/home/MapSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <PageTransition>

      <HeroSection />

      <Reveal>
        <AboutSection />
      </Reveal>

      <Reveal>
        <StatsSection />
      </Reveal>

      <Reveal>
        <BranchesSection />
      </Reveal>

      <Reveal>
        <Services3DSection />
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

      <Reveal>
        <ContactSection />
      </Reveal>

    </PageTransition>
  );
}