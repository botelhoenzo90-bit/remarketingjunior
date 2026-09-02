import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, CheckCircle } from "lucide-react";
import certificateImg from "@/assets/certificate.png";
import CtaButton from "./CtaButton";

const CertificateSection = () => (
  <SectionWrapper className="relative py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0"><div className="absolute right-0 top-1/3 h-[400px] w-[600px] rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-5 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-primary"><Award className="h-4 w-4" /> Ao concluir o treinamento</span></div>
      <h2 className="text-center font-display text-3xl font-black leading-tight sm:text-5xl">Registre sua conclusão com <span className="text-gradient">um certificado.</span></h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">Depois de concluir o conteúdo, você recebe o certificado de conclusão do treinamento.</p>

      <div className="mt-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-card shadow-2xl shadow-primary/10 max-w-lg"><img src={certificateImg} alt="Exemplo de certificado do Mestre da Manutenção" className="w-full" /></motion.div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">{["Certificado de conclusão", "Documento para registrar sua formação", "Emitido pela JR TEC"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent"><CheckCircle className="h-4 w-4" /> {item}</span>)}</div>
        <CtaButton href="#pricing" className="mt-9">QUERO VER A OFERTA →</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default CertificateSection;
