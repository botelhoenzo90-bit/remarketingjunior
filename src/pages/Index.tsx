import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import RetargetingSection from "@/components/landing/RetargetingSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import CoursePreviewSection from "@/components/landing/CoursePreviewSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FreeLessonsSection from "@/components/landing/FreeLessonsSection";
import CertificateSection from "@/components/landing/CertificateSection";
import CourseContentSection from "@/components/landing/CourseContentSection";
import BoardRepairSection from "@/components/landing/BoardRepairSection";
import BonusSection from "@/components/landing/BonusSection";
import MentorSection from "@/components/landing/MentorSection";
import PricingSection from "@/components/landing/PricingSection";
import RecapSection from "@/components/landing/RecapSection";
import TwoChoicesSection from "@/components/landing/TwoChoicesSection";
import FAQSection from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import SalesNotification from "@/components/landing/SalesNotification";

const Index = () => {
  useEffect(() => {
    document.title = "Mestre da Manutenção | Aprenda Manutenção de Celulares";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <RetargetingSection />
      <BenefitsSection />
      <PainPointsSection />
      <CoursePreviewSection />
      <TestimonialsSection />
      <FreeLessonsSection />
      <CertificateSection />
      <CourseContentSection />
      <BoardRepairSection />
      <MentorSection />
      <BonusSection />
      <RecapSection />
      <PricingSection />
      <TwoChoicesSection />
      <FAQSection />
      <WhatsAppButton />
      <SalesNotification />
    </div>
  );
};

export default Index;
