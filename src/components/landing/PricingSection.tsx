import { motion } from "framer-motion";
import { Check, Smartphone, Wrench, Cpu, Search, Settings, Users, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const learn = [
  [Search, "Análise e diagnóstico de defeitos"],
  [Wrench, "Ferramentas, bancada e manutenção do básico"],
  [Smartphone, "Trocas e reparos em iPhone e Android"],
  [Settings, "Testes, software e identificação de falhas"],
  [Cpu, "Eletrônica aplicada à manutenção"],
  [Wrench, "Microssoldagem e reparos em placa"],
  [Cpu, "Reparos avançados em placas de iPhone"],
  [Smartphone, "Reparos avançados em placas Android"],
  [Users, "Suporte e grupo de alunos"],
  [Award, "Certificado de conclusão"],
] as const;

const PricingSection = () => (
  <SectionWrapper id="oferta" className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="relative mx-auto max-w-5xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Recapitulando</span>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">Tudo que você vai aprender dentro do <span className="text-cyan-300">Mestre da Manutenção.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">Um treinamento pensado para organizar sua evolução: entender o defeito, encontrar a causa e avançar para reparos cada vez mais técnicos.</p>
      </motion.div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
        {learn.map(([Icon, text], index) => <motion.div key={text} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon className="h-5 w-5" /></div><span className="text-sm font-semibold leading-relaxed text-slate-200 sm:text-base">{text}</span><Check className="ml-auto h-4 w-4 shrink-0 text-emerald-400" /></motion.div>)}
      </div>
      <div className="mt-10 text-center"><CtaButton href="https://pay.kiwify.com.br/eOrXUxm">QUERO APRENDER TUDO ISSO →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default PricingSection;
