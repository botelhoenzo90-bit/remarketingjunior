import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import TrustCarousel from "@/components/landing/TrustCarousel";
import MemberAreaSection from "@/components/landing/MemberAreaSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import MentorSection from "@/components/landing/MentorSection";
import FAQSection from "@/components/landing/FAQSection";
import SignupSection from "@/components/landing/SignupSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Mestre da Manutenção | Curso de Manutenção de Celulares";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <TrustCarousel />
      <MemberAreaSection />
      <PricingSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <MentorSection />
      <FAQSection />
      <SignupSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
