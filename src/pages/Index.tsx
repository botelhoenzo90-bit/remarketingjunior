import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import RetargetingSection from "@/components/landing/RetargetingSection";
import FreeLessonsSection from "@/components/landing/FreeLessonsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Mestre da Manutenção | Aprenda Manutenção de Celulares";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <RetargetingSection />
      <FreeLessonsSection />
      <BenefitsSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
