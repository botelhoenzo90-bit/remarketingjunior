import { motion } from "framer-motion";
import { Check, ShieldCheck, TicketPercent } from "lucide-react";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden bg-[#050b12] py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
    <div className="fixed left-0 right-0 top-0 z-50 bg-red-600 px-3 py-3 text-center shadow-[0_8px_30px_rgba(220,38,38,0.3)]">
      <p className="mx-auto max-w-6xl text-[10px] font-black uppercase leading-tight tracking-[0.06em] text-white sm:text-xs">
        ANÚNCIO PREMIADO <span className="mx-1 text-yellow-300">•</span> Se você caiu nessa página, vai ter a oportunidade de comprar meu treinamento com 30% de desconto. <span className="mx-1 text-yellow-300">•</span> Use o cupom (JRTEC30)
      </p>
    </div>

    <div className="relative mx-auto max-w-6xl px-4 pt-8 text-center sm:pt-6">
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Mestre da Manutenção · Curso 2026</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-5 max-w-5xl font-display text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">Curso de manutenção em celulares do básico, até o avançado em reparos em placa em <span className="text-cyan-300">iPhone e Android.</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">Pare de ficar perdido, sem saber por onde começar. Nesse treinamento você vai aprender como fazer análise, como encontrar o defeito e como fazer reparos em placa avançados.</motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28 }} className="mx-auto mt-9 max-w-xl rounded-3xl border border-cyan-400/30 bg-white/[0.04] p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-4 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(185,28,28,0.35)]">
          30% de desconto válido somente hoje às 23:59
        </div>
        <p className="mt-6 text-sm font-bold text-slate-400 line-through">De R$ 147,00</p>
        <p className="mt-1 text-sm font-semibold text-slate-300">por apenas</p>
        <p className="mt-1 font-display text-6xl font-black leading-none text-cyan-300 sm:text-7xl">R$ 102,90</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-black text-yellow-300"><TicketPercent className="h-5 w-5" /> CUPOM: JRTEC30</div>
        <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-6 w-full py-5 text-base sm:text-lg">QUERO MEU ACESSO COM 30% OFF →</CtaButton>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-[10px] font-bold text-slate-400"><span className="flex flex-col items-center gap-1"><Check className="h-4 w-4 text-cyan-300" />Acesso imediato</span><span className="flex flex-col items-center gap-1"><ShieldCheck className="h-4 w-4 text-cyan-300" />7 dias de garantia</span><span className="flex flex-col items-center gap-1"><TicketPercent className="h-4 w-4 text-cyan-300" />Cupom 30%</span></div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
