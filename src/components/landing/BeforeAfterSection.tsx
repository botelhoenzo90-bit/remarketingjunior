import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const before = [
  "Ficar inseguro diante de um aparelho com defeito",
  "Depender de vídeos soltos para tentar descobrir o que fazer",
  "Ter dificuldade para identificar a causa do problema",
  "Evitar reparos mais técnicos por falta de conhecimento",
  "Sentir que ainda falta uma base para evoluir na bancada",
];

const after = [
  "Ter uma base organizada para estudar manutenção",
  "Aprender a investigar e diagnosticar diferentes defeitos",
  "Estudar reparos de forma prática e passo a passo",
  "Conhecer procedimentos mais técnicos e eletrônica",
  "Ter mais segurança para continuar evoluindo na bancada",
];

const BeforeAfterSection = () => (
  <SectionWrapper id="antes-e-depois" className="relative overflow-hidden bg-background py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mx-auto inline-flex items-center justify-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
          A diferença está no conhecimento
        </span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">
          Veja o que pode mudar quando você decide <span className="text-gradient">aprender de verdade.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          O objetivo não é prometer resultados instantâneos. É mostrar a diferença entre continuar tentando descobrir sozinho e ter um caminho estruturado para estudar.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.article initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="relative overflow-hidden rounded-3xl border-2 border-red-500/50 bg-gradient-to-br from-red-600 via-red-600 to-red-700 p-6 shadow-[0_22px_70px_rgba(239,68,68,0.22)] sm:p-8">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <X className="h-6 w-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/75">Antes do curso</p>
                <h3 className="font-display text-2xl font-black text-white sm:text-3xl">Continuar no improviso</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-black/10 px-4 py-3 text-sm font-semibold leading-relaxed text-white sm:text-base">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-white/90" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="relative overflow-hidden rounded-3xl border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 p-6 shadow-[0_22px_70px_rgba(16,185,129,0.24)] sm:p-8">
          <div className="absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
                <Check className="h-6 w-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/80">Depois de estudar</p>
                <h3 className="font-display text-2xl font-black text-white sm:text-3xl">Ter um caminho para evoluir</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-black/10 px-4 py-3 text-sm font-semibold leading-relaxed text-white sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-white text-slate-900 shadow-xl">
            <ArrowRight className="h-6 w-6" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center text-center">
        <p className="max-w-2xl text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">
          Você não precisa saber tudo para começar. Precisa apenas de um primeiro passo e de um conteúdo que faça sentido para a sua evolução.
        </p>
        <div className="mt-6">
          <CtaButton href="#curso-por-dentro">QUERO VER O CURSO POR DENTRO →</CtaButton>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default BeforeAfterSection;
