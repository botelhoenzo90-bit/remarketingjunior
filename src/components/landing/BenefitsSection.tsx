import { Search, Zap, Cpu, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const benefits = [
  { icon: Search, title: "Aprenda a diagnosticar", desc: "Entenda como analisar o defeito antes de sair trocando peças por tentativa." },
  { icon: Zap, title: "Evolua para reparos mais técnicos", desc: "Tenha contato com microssoldagem, componentes e procedimentos de reparo em placa." },
  { icon: Cpu, title: "Estude Android e iPhone", desc: "Amplie sua base de conhecimento com conteúdos para diferentes aparelhos e situações." },
  { icon: Wrench, title: "Construa uma base prática", desc: "Acompanhe os procedimentos em vídeo, revise as aulas e avance no seu ritmo." },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" className="relative bg-deep-blue py-16 sm:py-20">
    <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-5xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">O que você vai desenvolver</span>
        <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">Mais segurança para <span className="text-gradient">resolver problemas na bancada.</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Um resumo do que importa: conhecimento técnico, diagnóstico e prática para você evoluir sem precisar juntar informações aleatórias.</p>
      </motion.div>

      <div className="mx-auto mt-9 grid max-w-4xl gap-4 md:grid-cols-2">
        {benefits.map((benefit, i) => (
          <motion.article key={benefit.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-card/70 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10"><benefit.icon className="h-5 w-5 text-primary" /></div>
            <h3 className="font-display text-lg font-black sm:text-xl">{benefit.title}</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{benefit.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 flex justify-center"><CtaButton href="#bonus">VER BÔNUS EXCLUSIVOS →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default BenefitsSection;
