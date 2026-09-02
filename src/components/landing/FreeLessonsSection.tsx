import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Gift, GraduationCap, PlayCircle, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const lessons = [
  { title: "Como trocar um C.I de Wi-Fi", desc: "Uma aula prática para você observar a explicação, o procedimento e o nível de detalhe do treinamento.", videoId: "SZLLDmMOiRA" },
  { title: "Como trocar um IF PMIC", desc: "Acompanhe o processo de substituição de um componente e veja como a técnica é demonstrada.", videoId: "FP5xYT-PFt0" },
  { title: "Como trocar um PMIC", desc: "Veja mais uma aplicação prática e entenda como as aulas conduzem você durante o reparo.", videoId: "MyxWlTqSn6k" },
];

const FreeLessonsSection = () => (
  <SectionWrapper id="aulas-gratis" className="relative bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-5 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground"><Gift className="h-4 w-4" /> 3 aulas gratuitas</span></div>
      <h2 className="text-center font-display text-3xl font-black leading-tight sm:text-5xl">Agora, veja o treinamento <span className="text-gradient">em ação.</span></h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">Não precisa confiar apenas no que está escrito nesta página. Assista às aulas abaixo e avalie por você mesmo a didática, a explicação e a prática.</p>

      <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-primary/20 bg-background/30 px-4 py-3 text-center text-sm font-bold text-primary"><PlayCircle className="h-5 w-5 shrink-0" /> Dê o play. A melhor prova é você assistir.</div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {lessons.map((lesson, i) => (
          <motion.article key={lesson.videoId} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="relative aspect-video bg-black"><iframe src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0`} title={lesson.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
            <div className="p-5"><div className="mb-2 flex items-center gap-2"><GraduationCap className="h-5 w-5 shrink-0 text-primary" /><h3 className="font-display text-base font-bold text-foreground">{lesson.title}</h3></div><p className="text-sm leading-relaxed text-muted-foreground">{lesson.desc}</p></div>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent/20 bg-card/80 p-6 text-center"><ShieldCheck className="mx-auto h-6 w-6 text-accent" /><h3 className="mt-3 font-display text-xl font-black sm:text-2xl">Gostou do que viu?</h3><p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Então agora faz sentido conhecer o restante do conteúdo, os bônus, o suporte e a condição atual.</p></div>
      <div className="mt-8 text-center"><CtaButton href="#beneficios">QUERO ENTENDER O QUE VOU APRENDER →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default FreeLessonsSection;
