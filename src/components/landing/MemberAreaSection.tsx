import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, PlayCircle, GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const unlockedLessons = [
  { title: "Como trocar um C.I de Wi-Fi", category: "Aula gratuita", videoId: "SZLLDmMOiRA" },
  { title: "Como trocar um IF PMIC", category: "Aula gratuita", videoId: "FP5xYT-PFt0" },
  { title: "Como trocar um PMIC", category: "Aula gratuita", videoId: "MyxWlTqSn6k" },
  { title: "Entenda como o treinamento funciona", category: "Conheça o curso por dentro", videoId: "rbkPaEU9rJs" },
  { title: "Veja onde você vai estudar", category: "Conheça a plataforma", videoId: "G7SnLMD1-JM" },
];

const lockedLessons = [
  "Diagnóstico de defeitos em placa",
  "Microssoldagem na prática",
  "Reparo em placa e condução reversa",
  "Eletrônica aplicada à manutenção",
  "Troca de componentes avançada",
  "Conteúdo completo para Android e iPhone",
];

const MemberAreaSection = () => {
  const [lockedOpen, setLockedOpen] = useState(false);

  return (
    <SectionWrapper id="aulas-gratis" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground">
            <GraduationCap className="h-4 w-4" /> 3 aulas gratuitas + prévia do curso
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Agora, veja o treinamento <span className="text-gradient">em ação.</span></h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Uma experiência visual inspirada em uma área de membros: algumas aulas estão liberadas para você conhecer a didática e outras ficam bloqueadas para mostrar o que existe no acesso completo.</p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4 sm:px-7">
            <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Mestre da Manutenção</p><p className="mt-1 text-sm font-bold text-white">Área de membros • aulas demonstrativas</p></div>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-accent">Prévia liberada</span>
          </div>

          <div className="overflow-x-auto p-5 sm:p-7">
            <div className="flex min-w-max gap-5 pb-2">
              {unlockedLessons.map((lesson, index) => (
                <motion.article key={lesson.videoId} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="w-[280px] overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-xl sm:w-[310px]">
                  <div className="relative aspect-video bg-black"><iframe src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0`} title={lesson.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
                  <div className="p-4 text-left"><div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-4 w-4" /> {lesson.category}</div><h3 className="font-display text-lg font-black leading-tight text-foreground">{lesson.title}</h3><p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground"><PlayCircle className="h-3.5 w-3.5 text-primary" /> Aula desbloqueada</p></div>
                </motion.article>
              ))}

              {lockedLessons.map((title, index) => (
                <button type="button" key={title} onClick={() => setLockedOpen(true)} className="group relative w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-card text-left shadow-xl sm:w-[310px]">
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"><div className="absolute inset-0 bg-grid opacity-10" /><div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition group-hover:scale-105 group-hover:border-accent/50"><Lock className="h-6 w-6" /></div><span className="absolute left-4 top-4 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white/80">Aula {index + 6}</span></div>
                  <div className="p-4"><p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Curso completo</p><h3 className="mt-2 font-display text-lg font-black leading-tight text-foreground">{title}</h3><p className="mt-2 text-xs font-semibold text-muted-foreground">🔒 Clique para saber como desbloquear</p></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <CtaButton href="#pricing">DESBLOQUEAR O CURSO COMPLETO →</CtaButton>
          <span className="text-xs font-semibold text-muted-foreground">Aulas gratuitas liberadas • restante disponível no acesso completo</span>
        </div>
      </div>

      {lockedOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setLockedOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="locked-title" className="w-full max-w-md rounded-3xl border border-primary/25 bg-card p-7 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Lock className="h-7 w-7" /></div>
            <h3 id="locked-title" className="mt-5 font-display text-2xl font-black">Essa aula faz parte do curso completo.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Você já pode assistir às aulas liberadas. Para desbloquear todo o conteúdo, incluindo módulos, reparos e bônus, faça sua inscrição.</p>
            <div className="mt-6"><CtaButton href="#pricing">QUERO DESBLOQUEAR →</CtaButton></div>
            <button type="button" onClick={() => setLockedOpen(false)} className="mt-3 text-xs font-bold text-muted-foreground hover:text-foreground">Continuar vendo a prévia</button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default MemberAreaSection;
