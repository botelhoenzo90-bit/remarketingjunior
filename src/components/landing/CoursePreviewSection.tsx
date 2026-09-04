import { motion } from "framer-motion";
import { PlayCircle, Eye, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const CoursePreviewSection = () => (
  <SectionWrapper id="curso-por-dentro" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><Eye className="h-4 w-4" /> Primeiro, veja o que está comprando</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Não imagine como é.<span className="block text-gradient">Veja por dentro.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Conheça a estrutura do treinamento, veja como as aulas são apresentadas e entenda a experiência de estudar o conteúdo antes de chegar à oferta.</p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-4xl space-y-14 sm:space-y-20">
        <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="rounded-3xl border border-primary/25 bg-card p-6 text-center shadow-[0_20px_60px_hsl(192_95%_55%/0.10)] sm:p-8">
            <div className="mx-auto mb-3 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
              <PlayCircle className="h-4 w-4" /> 01 · METODOLOGIA
            </div>
            <h3 className="font-display text-2xl font-black sm:text-3xl">Entenda como o treinamento funciona</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Veja a proposta de ensino e como o conteúdo é organizado para você avançar de forma progressiva.</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-primary/25 bg-black shadow-[0_20px_60px_hsl(192_95%_55%/0.10)]"><iframe src="https://www.youtube.com/embed/rbkPaEU9rJs?rel=0" title="Como funciona o treinamento Mestre da Manutenção" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="rounded-3xl border border-accent/25 bg-card p-6 text-center shadow-[0_20px_60px_hsl(142_76%_46%/0.08)] sm:p-8">
            <div className="mx-auto mb-3 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-accent">
              <PlayCircle className="h-4 w-4" /> 02 · PLATAFORMA
            </div>
            <h3 className="font-display text-2xl font-black sm:text-3xl">Veja onde você vai estudar</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Conheça a plataforma, a organização dos módulos e a experiência de acesso ao conteúdo.</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-accent/25 bg-black shadow-[0_20px_60px_hsl(142_76%_46%/0.08)]"><iframe src="https://www.youtube.com/embed/G7SnLMD1-JM?rel=0" title="Plataforma do Mestre da Manutenção" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.article>
      </div>

      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6 text-center text-sm font-semibold text-muted-foreground sm:gap-x-10">
        <span className="inline-flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Conteúdo organizado</span>
        <span className="inline-flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Aulas em vídeo</span>
        <span className="inline-flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Estudo online</span>
      </div>

      <div className="mt-9 flex justify-center"><CtaButton href="#aulas-gratis">AGORA VEJA UMA AULA NA PRÁTICA →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default CoursePreviewSection;
