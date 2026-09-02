import { motion } from "framer-motion";
import { PlayCircle, Eye, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const CoursePreviewSection = () => (
  <SectionWrapper id="curso-por-dentro" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><Eye className="h-4 w-4" /> Primeiro, veja o que está comprando</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Não imagine como é.<span className="block text-gradient">Veja por dentro.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Aqui você consegue conhecer a estrutura do treinamento antes de chegar à oferta: metodologia, plataforma e forma de apresentação das aulas.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-[0_20px_60px_hsl(192_95%_55%/0.10)]">
          <div className="border-b border-border p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">01 · METODOLOGIA</p>
            <h3 className="mt-2 font-display text-xl font-black sm:text-2xl">Entenda como o treinamento funciona</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Veja a proposta de ensino e como o conteúdo é organizado para você avançar de forma progressiva.</p>
          </div>
          <div className="relative aspect-video bg-black"><iframe src="https://www.youtube.com/embed/rbkPaEU9rJs?rel=0" title="Como funciona o treinamento Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-accent/25 bg-card shadow-[0_20px_60px_hsl(142_76%_46%/0.08)]">
          <div className="border-b border-border p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">02 · PLATAFORMA</p>
            <h3 className="mt-2 font-display text-xl font-black sm:text-2xl">Veja onde você vai estudar</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Conheça a plataforma, a organização dos módulos e a experiência de acesso ao conteúdo.</p>
          </div>
          <div className="relative aspect-video bg-black"><iframe src="https://www.youtube.com/embed/G7SnLMD1-JM?rel=0" title="Plataforma do Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Conteúdo organizado</span>
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Aulas em vídeo</span>
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Estudo online</span>
      </div>

      <div className="mt-9 text-center"><CtaButton href="#aulas-gratis">AGORA VEJA UMA AULA NA PRÁTICA →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default CoursePreviewSection;
