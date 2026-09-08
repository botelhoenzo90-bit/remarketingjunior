import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import mentorImg from "@/assets/mentor.png";
import CtaButton from "./CtaButton";

const highlights = ["Experiência prática com manutenção de celulares", "Conteúdo voltado para situações reais de bancada", "Explicações para acompanhar o raciocínio do reparo", "Suporte para dúvidas durante a jornada"];

const MentorSection = () => (
  <SectionWrapper id="quem-sou-eu" className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-4 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-cyan-300"><Award className="h-4 w-4" /> Quem sou eu</span></div>
      <h2 className="text-center font-display text-4xl font-black leading-tight sm:text-5xl">Conheça quem está por trás do <span className="text-cyan-300">treinamento.</span></h2>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
          <div className="relative"><div className="overflow-hidden rounded-3xl border-2 border-cyan-400/30 shadow-2xl"><img src={mentorImg} alt="Júnior Bezerra, responsável pelo treinamento" className="w-full max-w-md object-cover" /></div><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950">Júnior Bezerra</div></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">Meu objetivo é mostrar o processo de manutenção de forma prática e organizada, acompanhando você dos primeiros fundamentos até os reparos mais técnicos em placa.</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">Você poderá estudar no seu ritmo, pausar, revisar e voltar às aulas sempre que precisar.</p>
          <div className="mt-7 space-y-3">{highlights.map((highlight)=><div key={highlight} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"/><span className="text-sm font-semibold text-slate-200 sm:text-base">{highlight}</span></div>)}</div>
        </motion.div>
      </div>
      <div className="text-center"><CtaButton href="#faq" className="mt-10">TIRAR MINHAS DÚVIDAS →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default MentorSection;
