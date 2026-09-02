import { motion } from "framer-motion";
import { PlayCircle, Eye, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const CoursePreviewSection = () => (
  <SectionWrapper id="curso-por-dentro" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><Eye className="h-4 w-4" /> Veja antes de decidir</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Conheça o <span className="text-gradient">Mestre da Manutenção por dentro.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Você já viu a promessa. Agora veja a plataforma, a didática e a forma como o treinamento é apresentado na prática.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-[0_20px_60px_hsl(192_95%_55%/0.10)]">
          <div className="border-b border-border p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><PlayCircle className="h-6 w-6" /></div><div><p className="text-xs font-black uppercase tracking-wider text-primary">METODOLOGIA</p><h3 className="font-display text-xl font-black sm:text-2xl">Como funciona o curso por dentro</h3></div></div>
            <p className="text-sm leading-relaxed text-muted-foreground">Entenda a metodologia e como o conteúdo é organizado para você avançar nos reparos.</p>
          </div>
          <div className="relative aspect-video bg-black"><iframe src="https://www.youtube.com/embed/rbkPaEU9rJs?rel=0" title="Como funciona o curso" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-accent/25 bg-card shadow-[0_20px_60px_hsl(142_76%_46%/0.08)]">
          <div className="border-b border-border p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><Eye className="h-6 w-6" /></div><div><p className="text-xs font-black uppercase tracking-wider text-accent">PLATAFORMA</p><h3 className="font-display text-xl font-black sm:text-2xl">Dê uma espiada por dentro</h3></div></div>
            <p className="text-sm leading-relaxed text-muted-foreground">Veja a plataforma exclusiva, a organização dos módulos e a experiência de acesso.</p>
          </div>
          <div className="relative aspect-video bg-black"><iframe src="https://www.youtube.com/embed/G7SnLMD1-JM?rel=0" title="Plataforma Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Conteúdo organizado</span>
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Aulas em vídeo</span>
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Acesso online</span>
      </motion.div>

      <div className="mt-9 text-center"><CtaButton href="#aulas-gratis">QUERO VER AS AULAS GRATUITAS →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default CoursePreviewSection;
