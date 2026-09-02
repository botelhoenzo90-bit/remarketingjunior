import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import RetargetingSection from "@/components/landing/RetargetingSection";
import CoursePreviewSection from "@/components/landing/CoursePreviewSection";
import FreeLessonsSection from "@/components/landing/FreeLessonsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import CourseContentSection from "@/components/landing/CourseContentSection";
import BoardRepairSection from "@/components/landing/BoardRepairSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import MentorSection from "@/components/landing/MentorSection";
import CertificateSection from "@/components/landing/CertificateSection";
import RecapSection from "@/components/landing/RecapSection";
import RemarketingCloseSection from "@/components/landing/RemarketingCloseSection";
import PricingSection from "@/components/landing/PricingSection";
import TwoChoicesSection from "@/components/landing/TwoChoicesSection";
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
      <FreeLessonsSection />
      <BenefitsSection />
      <PainPointsSection />
      <CourseContentSection />
      <BoardRepairSection />
      <BonusSection />
      <TestimonialsSection />
      <MentorSection />
      <CertificateSection />
      <RecapSection />
      <RemarketingCloseSection />
      <PricingSection />
      <TwoChoicesSection />
      <FAQSection />
      <WhatsAppButton />
      <SalesNotification />
    </div>
  );
};

export default Index;
