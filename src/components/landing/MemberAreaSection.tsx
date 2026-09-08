import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, Lock, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const tracks = [
  { title: "Primeiros passos", subtitle: "Do básico ao intermediário", lessons: [
    { title: "Como trocar um C.I de Wi-Fi", videoId: "SZLLDmMOiRA", free: true },
    { title: "Como trocar um IF PMIC", videoId: "FP5xYT-PFt0", free: true },
    { title: "Como trocar um PMIC", videoId: "MyxWlTqSn6k", free: true },
    { title: "Ferramentas e bancada", locked: true },
    { title: "Fundamentos da manutenção", locked: true },
  ]},
  { title: "Reparo em placa", subtitle: "Diagnóstico e reparos técnicos", lessons: [
    { title: "Diagnóstico de defeitos em placa", locked: true },
    { title: "Microssoldagem na prática", locked: true },
    { title: "Condução reversa", locked: true },
    { title: "Reparo em placa passo a passo", locked: true },
    { title: "Eletrônica aplicada", locked: true },
  ]},
  { title: "Trocas e componentes", subtitle: "Reparos do dia a dia", lessons: [
    { title: "Troca de telas", locked: true },
    { title: "Troca de baterias", locked: true },
    { title: "Conector de carga", locked: true },
    { title: "Câmeras e componentes", locked: true },
    { title: "Botões e periféricos", locked: true },
  ]},
  { title: "Avançado", subtitle: "Eletrônica e placa", lessons: [
    { title: "Jumper e reparos avançados", locked: true },
    { title: "Reballing", locked: true },
    { title: "Análise com multímetro", locked: true },
    { title: "Fonte de alimentação", locked: true },
    { title: "Diagnóstico avançado", locked: true },
  ]},
];

const MemberAreaSection = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [lockedOpen, setLockedOpen] = useState(false);
  const track = tracks[trackIndex];

  const changeTrack = (direction: number) => {
    setTrackIndex((current) => (current + direction + tracks.length) % tracks.length);
    setLessonIndex(0);
  };

  const changeLesson = (direction: number) => {
    setLessonIndex((current) => (current + direction + track.lessons.length) % track.lessons.length);
  };

  return (
    <SectionWrapper id="aulas-gratis" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground"><GraduationCap className="h-4 w-4" /> 3 aulas gratuitas + prévia do curso</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Agora, veja o treinamento <span className="text-gradient">em ação.</span></h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Uma prévia com visual de área de membros: navegue pelos módulos, veja as aulas liberadas e descubra como fica a estrutura do curso completo.</p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-[#07111f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-5 sm:px-7"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Mestre da Manutenção</p><p className="mt-1 text-sm font-bold text-white">Área de membros • meus cursos</p></div><span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-accent">Prévia liberada</span></div>

          <div className="border-b border-white/10 bg-black/10 px-4 py-4 sm:px-7">
            <div className="flex items-center justify-between gap-3"><button type="button" aria-label="Módulo anterior" onClick={() => changeTrack(-1)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/50 hover:bg-accent/10"><ChevronLeft className="h-5 w-5" /></button><div className="min-w-0 text-center"><p className="text-xs font-black uppercase tracking-[0.15em] text-primary">Módulo {trackIndex + 1} de {tracks.length}</p><h3 className="mt-1 truncate font-display text-xl font-black text-white sm:text-2xl">{track.title}</h3><p className="text-xs text-slate-400">{track.subtitle}</p></div><button type="button" aria-label="Próximo módulo" onClick={() => changeTrack(1)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/50 hover:bg-accent/10"><ChevronRight className="h-5 w-5" /></button></div>
          </div>

          <div className="relative px-10 py-6 sm:px-14 sm:py-8">
            <button type="button" aria-label="Aula anterior" onClick={() => changeLesson(-1)} className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#101d2d] text-white shadow-lg transition hover:border-accent/50 hover:text-accent sm:left-3"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" aria-label="Próxima aula" onClick={() => changeLesson(1)} className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#101d2d] text-white shadow-lg transition hover:border-accent/50 hover:text-accent sm:right-3"><ChevronRight className="h-5 w-5" /></button>

            <motion.div key={`${trackIndex}-${lessonIndex}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="mx-auto max-w-3xl">
              {track.lessons[lessonIndex].free ? <div className="overflow-hidden rounded-2xl border border-accent/25 bg-black shadow-2xl"><div className="relative aspect-video"><iframe src={`https://www.youtube.com/embed/${track.lessons[lessonIndex].videoId}?rel=0`} title={track.lessons[lessonIndex].title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div><div className="p-5 text-left"><div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-4 w-4" /> Aula gratuita • desbloqueada</div><h4 className="mt-2 font-display text-xl font-black text-white sm:text-2xl">{track.lessons[lessonIndex].title}</h4></div></div> : <button type="button" onClick={() => setLockedOpen(true)} className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1928] text-left shadow-2xl"><div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"><div className="absolute inset-0 bg-grid opacity-20" /><div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition group-hover:scale-110 group-hover:border-accent/50 group-hover:text-accent"><Lock className="h-7 w-7" /></div><span className="absolute left-4 top-4 rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">Conteúdo bloqueado</span></div><div className="p-5"><p className="text-[10px] font-black uppercase tracking-wider text-slate-500">{track.title}</p><h4 className="mt-2 font-display text-xl font-black text-white sm:text-2xl">{track.lessons[lessonIndex].title}</h4><p className="mt-2 flex items-center gap-2 text-xs font-bold text-accent"><Lock className="h-3.5 w-3.5" /> Clique para desbloquear no curso completo</p></div></button>}
            </motion.div>

            <div className="mt-5 flex justify-center gap-1.5">{track.lessons.map((lesson, i) => <button type="button" key={lesson.title} aria-label={`Ir para aula ${i + 1}`} onClick={() => setLessonIndex(i)} className={`h-1.5 rounded-full transition-all ${lessonIndex === i ? "w-8 bg-accent" : "w-2 bg-white/20"}`} />)}</div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.02] px-5 py-5 text-center sm:px-7"><div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400"><span><CheckCircle2 className="mr-1 inline h-4 w-4 text-accent" />3 aulas liberadas</span><span><Lock className="mr-1 inline h-4 w-4 text-slate-500" />Conteúdo completo bloqueado</span><span><PlayCircle className="mr-1 inline h-4 w-4 text-primary" />Navegação por módulos</span></div></div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center"><CtaButton href="#pricing">DESBLOQUEAR O CURSO COMPLETO →</CtaButton><p className="text-xs font-semibold text-muted-foreground">Veja as aulas gratuitas e conheça a estrutura antes de decidir.</p></div>
      </div>

      {lockedOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setLockedOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="locked-title" className="w-full max-w-md rounded-3xl border border-primary/25 bg-card p-7 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Lock className="h-7 w-7" /></div><h3 id="locked-title" className="mt-5 font-display text-2xl font-black">Essa aula está bloqueada.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Ela faz parte do conteúdo completo do Mestre da Manutenção. Faça sua inscrição para desbloquear os módulos e aulas.</p><div className="mt-6"><CtaButton href="#pricing">DESBLOQUEAR AGORA →</CtaButton></div><button type="button" onClick={() => setLockedOpen(false)} className="mt-3 text-xs font-bold text-muted-foreground hover:text-foreground">Voltar para a prévia</button></div></div>}
    </SectionWrapper>
  );
};

export default MemberAreaSection;
