import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import RetargetingSection from "@/components/landing/RetargetingSection";
import CoursePreviewSection from "@/components/landing/CoursePreviewSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import FreeLessonsSection from "@/components/landing/FreeLessonsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CourseContentSection from "@/components/landing/CourseContentSection";
import BoardRepairSection from "@/components/landing/BoardRepairSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import SalesNotification from "@/components/landing/SalesNotification";

const Index = () => {
  useEffect(() => {
    document.title = "Mestre da Manutenção | Aprenda Manutenção de Celulares";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <RetargetingSection />
      <CoursePreviewSection />
      <BeforeAfterSection />
      <FreeLessonsSection />
      <BenefitsSection />
      <CourseContentSection />
      <BoardRepairSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <WhatsAppButton />
      <SalesNotification />
    </div>
  );
};

export default Index;
