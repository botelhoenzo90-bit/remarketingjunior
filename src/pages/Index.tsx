import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import RetargetingSection from "@/components/landing/RetargetingSection";
import MemberAreaSection from "@/components/landing/MemberAreaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import PricingSection from "@/components/landing/PricingSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Mestre da Manutenção | Aprenda Manutenção de Celulares";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <RetargetingSection />
      <MemberAreaSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <PricingSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
