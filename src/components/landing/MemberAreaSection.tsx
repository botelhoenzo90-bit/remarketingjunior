import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Eye, GraduationCap, Lock, Play, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const rows = [
  { title: "Aulas gratuitas", subtitle: "Comece por estas aulas e veja o treinamento na prática", type: "free", items: [
    { title: "Como trocar um C.I de Wi-Fi", videoId: "SZLLDmMOiRA" }, { title: "Como trocar um IF PMIC", videoId: "FP5xYT-PFt0" }, { title: "Como trocar um PMIC", videoId: "MyxWlTqSn6k" },
  ]},
  { title: "Conheça o curso por dentro", subtitle: "Veja como funciona o treinamento e onde você vai estudar", type: "preview", items: [
    { title: "Entenda como o treinamento funciona", videoId: "rbkPaEU9rJs", label: "01 · METODOLOGIA" }, { title: "Veja onde você vai estudar", videoId: "G7SnLMD1-JM", label: "02 · PLATAFORMA" },
  ]},
  { title: "Reparo em placa", subtitle: "Diagnóstico, microssoldagem e reparos técnicos", type: "locked", items: [
    { title: "Diagnóstico de defeitos em placa", number: "01" }, { title: "Microssoldagem na prática", number: "02" }, { title: "Condução reversa", number: "03" }, { title: "Reparo em placa passo a passo", number: "04" }, { title: "Eletrônica aplicada", number: "05" },
  ]},
  { title: "Trocas e componentes", subtitle: "Os reparos mais comuns do dia a dia", type: "locked", items: [
    { title: "Troca de telas", number: "01" }, { title: "Troca de baterias", number: "02" }, { title: "Conector de carga", number: "03" }, { title: "Câmeras e componentes", number: "04" }, { title: "Botões e periféricos", number: "05" },
  ]},
  { title: "Do básico ao avançado", subtitle: "Construa sua base e avance para reparos mais técnicos", type: "locked", items: [
    { title: "Ferramentas e bancada", number: "01" }, { title: "Fundamentos da manutenção", number: "02" }, { title: "Jumper e reparos avançados", number: "03" }, { title: "Reballing", number: "04" }, { title: "Análise com multímetro", number: "05" },
  ]},
  { title: "Eletrônica e diagnóstico", subtitle: "Conteúdos para aprofundar seu conhecimento", type: "locked", items: [
    { title: "Fonte de alimentação", number: "01" }, { title: "Diagnóstico avançado", number: "02" }, { title: "Desoxidação", number: "03" }, { title: "Software e diagnóstico", number: "04" }, { title: "Reparos em Android e iPhone", number: "05" },
  ]},
];

type Row = (typeof rows)[number];

const VideoModal = ({ title, videoId, onClose }: { title: string; videoId: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
    <div role="dialog" aria-modal="true" aria-labelledby="member-video-title" className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] shadow-2xl" onClick={(event) => event.stopPropagation()}>
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4"><div className="min-w-0"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">Aula em destaque</p><h3 id="member-video-title" className="mt-1 truncate font-display text-lg font-black text-white sm:text-xl">{title}</h3></div><button type="button" onClick={onClose} aria-label="Fechar vídeo" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10">×</button></div>
      <div className="relative aspect-video bg-black"><iframe src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
    </div>
  </div>
);

const MemberAreaSection = () => {
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoId: string } | null>(null);
  const [lockedOpen, setLockedOpen] = useState(false);

  const scrollRow = (row: Row, direction: number) => {
    rowRefs.current[row.title]?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <SectionWrapper id="aulas-gratis" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground"><GraduationCap className="h-4 w-4" /> Área de membros • prévia do curso</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Veja como é estudar no <span className="text-gradient">Mestre da Manutenção.</span></h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Entre na prévia da área de membros e explore o treinamento por dentro. Cada assunto tem sua própria fileira de aulas, com navegação horizontal pelas setas, sem criar duas linhas de módulos no celular ou no computador.</p>
        </motion.div>

        <div className="mx-auto mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#060d17] shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.025] px-5 py-5 sm:px-8"><div><p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Mestre da Manutenção</p><p className="mt-1 text-sm font-bold text-white sm:text-base">Área de membros • meus cursos</p></div><div className="hidden items-center gap-2 text-xs font-bold text-slate-400 sm:flex"><span className="h-2 w-2 rounded-full bg-accent" /> Prévia liberada</div></div>

          <div className="space-y-11 px-4 py-7 sm:px-8 sm:py-9">
            {rows.map((row) => (
              <motion.section key={row.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}>
                <div className="mb-4 flex items-end justify-between gap-4"><div className="min-w-0"><h3 className="font-display text-xl font-black text-white sm:text-2xl">{row.title}</h3><p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{row.subtitle}</p></div><div className="flex shrink-0 items-center gap-2"><button type="button" aria-label={`Voltar em ${row.title}`} onClick={() => scrollRow(row, -1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:bg-accent/10"><ChevronLeft className="h-4 w-4" /></button><button type="button" aria-label={`Avançar em ${row.title}`} onClick={() => scrollRow(row, 1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:bg-accent/10"><ChevronRight className="h-4 w-4" /></button></div></div>

                <div ref={(element) => { rowRefs.current[row.title] = element; }} className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4">
                  {row.items.map((item) => {
                    if (row.type === "free" && "videoId" in item) return <button key={item.title} type="button" onClick={() => setSelectedVideo({ title: item.title, videoId: item.videoId })} className="group w-[76vw] max-w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b1725] text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:w-[230px] lg:w-[250px]"><div className="relative aspect-video overflow-hidden bg-slate-900"><img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Miniatura da aula ${item.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><span className="absolute left-2.5 top-2.5 rounded-full bg-accent px-2 py-1 text-[8px] font-black uppercase tracking-wider text-accent-foreground">Aula grátis</span><span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110"><Play className="ml-0.5 h-4 w-4 fill-current" /></span></div><div className="p-3.5"><div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-3.5 w-3.5" /> Liberada</div><h4 className="mt-1.5 line-clamp-2 text-sm font-black leading-snug text-white">{item.title}</h4></div></button>;
                    if (row.type === "preview" && "videoId" in item) return <button key={item.title} type="button" onClick={() => setSelectedVideo({ title: item.title, videoId: item.videoId })} className="group w-[76vw] max-w-[320px] shrink-0 overflow-hidden rounded-xl border border-primary/20 bg-[#0b1725] text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-primary/50 sm:w-[290px] lg:w-[330px]"><div className="relative aspect-video overflow-hidden bg-slate-900"><img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Prévia: ${item.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><span className="absolute left-2.5 top-2.5 rounded-full bg-primary px-2 py-1 text-[8px] font-black uppercase tracking-wider text-primary-foreground">{item.label}</span><span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110"><PlayCircle className="h-4 w-4 fill-current" /></span></div><div className="p-3.5"><div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-primary"><Eye className="h-3.5 w-3.5" /> Veja por dentro</div><h4 className="mt-1.5 line-clamp-2 text-sm font-black leading-snug text-white">{item.title}</h4></div></button>;
                    return <button key={item.title} type="button" onClick={() => setLockedOpen(true)} className="group w-[76vw] max-w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b1725] text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-primary/35 sm:w-[230px] lg:w-[250px]"><div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#12263a] via-[#0a1727] to-[#040a12]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.22),transparent_35%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.04))]" /><span className="absolute left-2.5 top-2.5 rounded-full bg-black/55 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-slate-300">Conteúdo fechado</span><span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-slate-300"><Lock className="h-3.5 w-3.5" /></span><div className="absolute inset-0 flex items-center justify-center"><span className="font-display text-6xl font-black text-white/[0.07] transition group-hover:text-primary/[0.12]">{item.number}</span></div><div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" /></div><div className="p-3.5"><p className="text-[9px] font-black uppercase tracking-wider text-slate-600">{row.title}</p><h4 className="mt-1.5 line-clamp-2 text-sm font-black leading-snug text-white">{item.title}</h4><p className="mt-2 flex items-center gap-1.5 text-[9px] font-bold text-slate-500"><Lock className="h-3 w-3" /> Disponível no curso completo</p></div></button>;
                  })}
                </div>
              </motion.section>
            ))}
          </div>

          <div className="border-t border-white/10 bg-white/[0.02] px-5 py-5 text-center sm:px-8"><div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400"><span><CheckCircle2 className="mr-1 inline h-4 w-4 text-accent" />3 aulas gratuitas</span><span><Lock className="mr-1 inline h-4 w-4 text-slate-500" />Módulos completos bloqueados</span><span><PlayCircle className="mr-1 inline h-4 w-4 text-primary" />Uma linha por assunto</span></div></div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center"><CtaButton href="#pricing">DESBLOQUEAR O CURSO COMPLETO →</CtaButton><p className="text-xs font-semibold text-muted-foreground">Veja as aulas gratuitas, conheça a plataforma e entenda a estrutura do curso antes de decidir.</p></div>
      </div>

      {selectedVideo && <VideoModal title={selectedVideo.title} videoId={selectedVideo.videoId} onClose={() => setSelectedVideo(null)} />}
      {lockedOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setLockedOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="locked-title" className="w-full max-w-md rounded-3xl border border-primary/25 bg-card p-7 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Lock className="h-7 w-7" /></div><h3 id="locked-title" className="mt-5 font-display text-2xl font-black">Essa aula está bloqueada.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Ela faz parte do conteúdo completo do Mestre da Manutenção. Faça sua inscrição para desbloquear os módulos e aulas.</p><div className="mt-6"><CtaButton href="#pricing">DESBLOQUEAR AGORA →</CtaButton></div><button type="button" onClick={() => setLockedOpen(false)} className="mt-3 text-xs font-bold text-muted-foreground hover:text-foreground">Voltar para a prévia</button></div></div>}
    </SectionWrapper>
  );
};

export default MemberAreaSection;
