import { motion } from "framer-motion";
import { Award, Smartphone, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import mentorImg from "@/assets/mentor.png";
import CtaButton from "./CtaButton";

const highlights = [
  "Experiência prática com manutenção de celulares",
  "Conteúdo voltado para situações reais de bancada",
  "Explicações para acompanhar o raciocínio do reparo",
  "Suporte para dúvidas durante a jornada",
];

const MentorSection = () => (
  <SectionWrapper id="mentor" className="relative bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-4 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-black uppercase tracking-wider text-primary-foreground"><Award className="h-4 w-4" /> Quem ensina</span></div>
      <h2 className="text-center font-display text-3xl font-black leading-tight sm:text-5xl">Aprenda com quem conhece <span className="text-gradient">a bancada.</span></h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">Conheça o profissional responsável pelo treinamento e entenda a proposta por trás das aulas.</p>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
          <div className="relative"><div className="overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/10"><img src={mentorImg} alt="Júnior Bezerra, mentor do Mestre da Manutenção" className="w-full max-w-md object-cover" /></div><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-2 text-sm font-black text-accent-foreground whitespace-nowrap">Júnior Bezerra</div></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl font-black sm:text-3xl">O foco é mostrar o processo, não apenas o resultado.</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">O Mestre da Manutenção foi estruturado para acompanhar você desde os fundamentos da manutenção até conteúdos de diagnóstico, eletrônica e reparos em placa.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">A ideia é que você consiga assistir, pausar, revisar e estudar no seu ritmo, entendendo o que está sendo feito em cada etapa.</p>
          <div className="mt-7 space-y-3">{highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span className="text-sm font-semibold text-foreground sm:text-base">{highlight}</span></div>)}</div>
        </motion.div>
      </div>

      <div className="mt-10 text-center"><CtaButton href="#conteudo">QUERO VER O CONTEÚDO →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default MentorSection;
