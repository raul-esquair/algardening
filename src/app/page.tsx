import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <ServicesSection />
      <WhyChooseSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FinalCTASection />
    </>
  );
}
