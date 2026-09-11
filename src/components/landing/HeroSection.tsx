import { motion } from "framer-motion";
import { Check, PlayCircle, ShieldCheck, TicketPercent } from "lucide-react";
import CtaButton from "./CtaButton";
import vslCover from "@/assets/vsl-cover.png";

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden bg-[#050b12] py-5 text-white sm:py-10">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
    <div className="fixed left-0 right-0 top-0 z-50 bg-red-600 px-2 py-2 text-center shadow-[0_8px_30px_rgba(220,38,38,0.3)]">
      <p className="mx-auto max-w-6xl text-[9px] font-black uppercase leading-tight tracking-[0.04em] text-white sm:text-xs">
        ANÚNCIO PREMIADO <span className="mx-1 text-yellow-300">•</span> Se você caiu nessa página, vai ter a oportunidade de comprar meu treinamento com 30% de desconto. <span className="mx-1 text-yellow-300">•</span> Use o cupom (JRTEC30)
      </p>
    </div>

    <div className="relative mx-auto max-w-5xl px-3 pt-4 text-center sm:px-4 sm:pt-6">
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300 sm:text-xs">Mestre da Manutenção · Curso 2026</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-1.5 max-w-4xl font-display text-base font-black leading-[1.12] sm:text-3xl lg:text-4xl">Curso de manutenção em celulares do básico, até o avançado em reparos em placa em <span className="text-cyan-300">iPhone e Android.</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-1.5 max-w-2xl text-[10px] leading-snug text-slate-300 sm:text-sm">Pare de ficar perdido, sem saber por onde começar. Nesse treinamento você vai aprender como fazer análise, como encontrar o defeito e como fazer reparos em placa avançados.</motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.26 }} className="mx-auto mt-2.5 max-w-[280px] sm:max-w-lg">
        <div className="mb-1 flex items-center justify-center gap-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-primary"><PlayCircle className="h-3 w-3" /> Veja a apresentação</div>
        <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-primary/70 bg-card shadow-[0_0_50px_hsl(192_95%_55%/0.2)] sm:rounded-2xl">
          <img src={vslCover} alt="Apresentação do Mestre da Manutenção" className="absolute inset-0 h-full w-full object-cover" />
          <iframe src="https://www.youtube.com/embed/lFQ9qmtnVnA?rel=0" title="Apresentação do Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.32 }} className="mx-auto mt-2.5 max-w-md rounded-xl border border-cyan-400/30 bg-white/[0.04] p-3 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:p-4">
        <div className="inline-flex items-center gap-2 rounded-md bg-red-700 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(185,28,28,0.35)]">
          30% de desconto válido somente hoje às 23:59
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-left">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 sm:p-3">
            <p className="text-[10px] font-semibold text-slate-300">Acesso vitalício</p>
            <p className="mt-0.5 text-[10px] font-bold text-red-500 line-through">De R$ 297</p>
            <p className="font-display text-base font-black leading-tight text-white sm:text-2xl">por R$ 247</p>
          </div>
          <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 sm:p-3">
            <p className="text-[10px] font-semibold text-cyan-300">Acesso por 1 ano</p>
            <p className="mt-0.5 text-[10px] font-bold text-red-500 line-through">De R$ 147</p>
            <p className="font-display text-base font-black leading-tight text-cyan-300 sm:text-2xl">por R$ 102,90</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-black text-yellow-300"><TicketPercent className="h-3.5 w-3.5" /> CUPOM: JRTEC30</div>
        <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-2 w-full py-2.5 text-xs sm:text-sm">QUERO MEU ACESSO COM 30% OFF →</CtaButton>
        <div className="mt-2 grid grid-cols-3 gap-2 border-t border-white/10 pt-2 text-[8px] font-bold text-slate-400 sm:text-[9px]"><span className="flex flex-col items-center gap-0.5"><Check className="h-3 w-3 text-cyan-300" />Acesso imediato</span><span className="flex flex-col items-center gap-0.5"><ShieldCheck className="h-3 w-3 text-cyan-300" />7 dias de garantia</span><span className="flex flex-col items-center gap-0.5"><TicketPercent className="h-3 w-3 text-cyan-300" />Cupom 30%</span></div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
