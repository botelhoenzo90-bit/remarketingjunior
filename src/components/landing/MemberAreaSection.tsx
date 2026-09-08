import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, Lock, Play, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const rows = [
  {
    title: "Aulas gratuitas",
    subtitle: "Comece por estas aulas e veja o treinamento na prática",
    free: true,
    items: [
      { title: "Como trocar um C.I de Wi-Fi", videoId: "SZLLDmMOiRA" },
      { title: "Como trocar um IF PMIC", videoId: "FP5xYT-PFt0" },
      { title: "Como trocar um PMIC", videoId: "MyxWlTqSn6k" },
    ],
  },
  {
    title: "Reparo em placa",
    subtitle: "Diagnóstico, microssoldagem e reparos técnicos",
    items: [
      { title: "Diagnóstico de defeitos em placa", number: "01" },
      { title: "Microssoldagem na prática", number: "02" },
      { title: "Condução reversa", number: "03" },
      { title: "Reparo em placa passo a passo", number: "04" },
      { title: "Eletrônica aplicada", number: "05" },
    ],
  },
  {
    title: "Trocas e componentes",
    subtitle: "Os reparos mais comuns do dia a dia",
    items: [
      { title: "Troca de telas", number: "01" },
      { title: "Troca de baterias", number: "02" },
      { title: "Conector de carga", number: "03" },
      { title: "Câmeras e componentes", number: "04" },
      { title: "Botões e periféricos", number: "05" },
    ],
  },
  {
    title: "Do básico ao avançado",
    subtitle: "Construa sua base e avance para reparos mais técnicos",
    items: [
      { title: "Ferramentas e bancada", number: "01" },
      { title: "Fundamentos da manutenção", number: "02" },
      { title: "Jumper e reparos avançados", number: "03" },
      { title: "Reballing", number: "04" },
      { title: "Análise com multímetro", number: "05" },
    ],
  },
  {
    title: "Eletrônica e diagnóstico",
    subtitle: "Conteúdos para aprofundar seu conhecimento",
    items: [
      { title: "Fonte de alimentação", number: "01" },
      { title: "Diagnóstico avançado", number: "02" },
      { title: "Desoxidação", number: "03" },
      { title: "Software e diagnóstico", number: "04" },
      { title: "Reparos em Android e iPhone", number: "05" },
    ],
  },
];

type Row = (typeof rows)[number];

type VideoModalProps = {
  title: string;
  videoId: string;
  onClose: () => void;
};

const VideoModal = ({ title, videoId, onClose }: VideoModalProps) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-video-title"
      className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">Aula gratuita</p>
          <h3 id="member-video-title" className="mt-1 truncate font-display text-lg font-black text-white sm:text-xl">{title}</h3>
        </div>
        <button type="button" onClick={onClose} aria-label="Fechar aula" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10">×</button>
      </div>
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  </div>
);

const MemberAreaSection = () => {
  const [offsets, setOffsets] = useState<Record<string, number>>({});
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoId: string } | null>(null);
  const [lockedOpen, setLockedOpen] = useState(false);

  const visibleCount = 4;

  const moveRow = (row: Row, direction: number) => {
    const maxOffset = Math.max(0, row.items.length - visibleCount);
    setOffsets((current) => {
      const next = (current[row.title] ?? 0) + direction;
      return { ...current, [row.title]: Math.min(maxOffset, Math.max(0, next)) };
    });
  };

  const getOffset = (row: Row) => offsets[row.title] ?? 0;

  const rowIndicators = useMemo(() => rows.map((row) => ({ title: row.title, pages: Math.max(1, row.items.length - visibleCount + 1) })), []);

  return (
    <SectionWrapper id="aulas-gratis" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground">
            <GraduationCap className="h-4 w-4" /> Área de membros • prévia do curso
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">
            Veja por dentro do <span className="text-gradient">Mestre da Manutenção.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Uma prévia inspirada nas áreas de membros modernas: módulos organizados por assunto, aulas em cards horizontais e navegação pelas setas — como uma plataforma de streaming.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#060d17] shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.025] px-5 py-5 sm:px-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Mestre da Manutenção</p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">Área de membros • meus cursos</p>
            </div>
            <div className="hidden items-center gap-2 text-xs font-bold text-slate-400 sm:flex">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Prévia liberada
            </div>
          </div>

          <div className="space-y-10 px-4 py-7 sm:px-8 sm:py-9">
            {rows.map((row, rowIndex) => {
              const offset = getOffset(row);
              const maxOffset = Math.max(0, row.items.length - visibleCount);
              const canPrev = offset > 0;
              const canNext = offset < maxOffset;
              const page = Math.min(offset + 1, rowIndicators[rowIndex].pages);

              return (
                <motion.section key={row.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-black text-white sm:text-2xl">{row.title}</h3>
                      <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{row.subtitle}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="hidden text-[10px] font-black uppercase tracking-wider text-slate-600 sm:block">{page}/{rowIndicators[rowIndex].pages}</span>
                      <button type="button" aria-label={`Voltar em ${row.title}`} disabled={!canPrev} onClick={() => moveRow(row, -1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-30">
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button type="button" aria-label={`Avançar em ${row.title}`} disabled={!canNext} onClick={() => moveRow(row, 1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-30">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-3 transition-transform duration-300 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4" style={{ transform: `translateX(calc(-${offset} * (100% / 4 + 12px)))` }}>
                      {row.items.map((item) => {
                        if (row.free && "videoId" in item) {
                          return (
                            <button key={item.title} type="button" onClick={() => setSelectedVideo({ title: item.title, videoId: item.videoId })} className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b1725] text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_45px_rgba(0,0,0,0.4)]">
                              <div className="relative aspect-video overflow-hidden bg-slate-900">
                                <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Miniatura da aula ${item.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                                <span className="absolute left-2.5 top-2.5 rounded-full bg-accent px-2 py-1 text-[8px] font-black uppercase tracking-wider text-accent-foreground">Aula grátis</span>
                                <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
                              </div>
                              <div className="p-3.5">
                                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-3.5 w-3.5" /> Liberada</div>
                                <h4 className="mt-1.5 line-clamp-2 text-sm font-black leading-snug text-white">{item.title}</h4>
                              </div>
                            </button>
                          );
                        }

                        return (
                          <button key={item.title} type="button" onClick={() => setLockedOpen(true)} className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b1725] text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_45px_rgba(0,0,0,0.4)]">
                            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#12263a] via-[#0a1727] to-[#040a12]">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.22),transparent_35%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.04))]" />
                              <span className="absolute left-2.5 top-2.5 rounded-full bg-black/55 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-slate-300">Conteúdo fechado</span>
                              <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-slate-300"><Lock className="h-3.5 w-3.5" /></span>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-display text-6xl font-black text-white/[0.07] transition duration-300 group-hover:text-primary/[0.12]">{item.number}</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
                            </div>
                            <div className="p-3.5">
                              <p className="text-[9px] font-black uppercase tracking-wider text-slate-600">{row.title}</p>
                              <h4 className="mt-1.5 line-clamp-2 text-sm font-black leading-snug text-white">{item.title}</h4>
                              <p className="mt-2 flex items-center gap-1.5 text-[9px] font-bold text-slate-500"><Lock className="h-3 w-3" /> Disponível no curso completo</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center gap-1.5 lg:hidden">
                    {Array.from({ length: rowIndicators[rowIndex].pages }).map((_, index) => (
                      <span key={index} className={`h-1.5 rounded-full transition-all ${index === offset ? "w-6 bg-accent" : "w-1.5 bg-white/15"}`} />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          <div className="border-t border-white/10 bg-white/[0.02] px-5 py-5 text-center sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <span><CheckCircle2 className="mr-1 inline h-4 w-4 text-accent" />3 aulas gratuitas</span>
              <span><Lock className="mr-1 inline h-4 w-4 text-slate-500" />Módulos completos bloqueados</span>
              <span><PlayCircle className="mr-1 inline h-4 w-4 text-primary" />Navegue pelas setas</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <CtaButton href="#pricing">DESBLOQUEAR O CURSO COMPLETO →</CtaButton>
          <p className="text-xs font-semibold text-muted-foreground">Veja as aulas gratuitas e conheça a estrutura antes de decidir.</p>
        </div>
      </div>

      {selectedVideo && <VideoModal title={selectedVideo.title} videoId={selectedVideo.videoId} onClose={() => setSelectedVideo(null)} />}

      {lockedOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setLockedOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="locked-title" className="w-full max-w-md rounded-3xl border border-primary/25 bg-card p-7 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Lock className="h-7 w-7" /></div>
            <h3 id="locked-title" className="mt-5 font-display text-2xl font-black">Essa aula está bloqueada.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Ela faz parte do conteúdo completo do Mestre da Manutenção. Faça sua inscrição para desbloquear os módulos e aulas.</p>
            <div className="mt-6"><CtaButton href="#pricing">DESBLOQUEAR AGORA →</CtaButton></div>
            <button type="button" onClick={() => setLockedOpen(false)} className="mt-3 text-xs font-bold text-muted-foreground hover:text-foreground">Voltar para a prévia</button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default MemberAreaSection;
