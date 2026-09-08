import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const GuaranteeSection = () => (
  <SectionWrapper id="garantia" className="relative overflow-hidden bg-[#07111f] py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-4xl px-4 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-[0_0_45px_hsl(45_100%_60%/0.12)]">
        <ShieldCheck className="h-10 w-10" />
      </div>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Compra protegida</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-tight text-white sm:text-5xl">7 dias para conhecer o treinamento.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Você pode acessar o conteúdo, conhecer a metodologia e avaliar se o treinamento faz sentido para você. Se decidir não continuar dentro do prazo, solicite o reembolso conforme as condições da garantia.</p>
      <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
        {["Acesso ao treinamento", "Conheça o conteúdo", "7 dias de garantia"].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />{item}</div>
        ))}
      </div>
      <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-8">QUERO APROVEITAR O DESCONTO →</CtaButton>
    </motion.div>
  </SectionWrapper>
);

export default GuaranteeSection;
