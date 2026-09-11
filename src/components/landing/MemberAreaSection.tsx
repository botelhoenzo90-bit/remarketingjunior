import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Eye, GraduationCap, Lock, Play, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

import capaFerramentas from "@/assets/modules/ferramentas.jpg";
import capaDiagnostico from "@/assets/modules/diagnostico.jpg";
import capaTelas from "@/assets/modules/telas.jpg";
import capaBateria from "@/assets/modules/bateria.jpg";
import capaConector from "@/assets/modules/conector.jpg";
import capaCameras from "@/assets/modules/cameras.jpg";
import capaVolume from "@/assets/modules/volume.jpg";
import capaSoftware from "@/assets/modules/software.jpg";
import capaDesoxidacao from "@/assets/modules/desoxidacao.jpg";
import capaPlacas from "@/assets/modules/placas.jpg";
import capaMicroSoldagem from "@/assets/board/micro-soldagem.jpg";
import capaConducao from "@/assets/board/conducao-reversa.jpg";
import capaEletronica from "@/assets/board/eletronica.jpg";
import capaMultimetro from "@/assets/board/multimetro.jpg";
import capaReballing from "@/assets/board/reballing.jpg";
import capaFonte from "@/assets/board/fonte.jpg";
import capaTrilhas from "@/assets/board/trilhas.jpg";
import capaIphonePlaca from "@/assets/board/iphone-placa.jpg";
import capaAndroidPlaca from "@/assets/board/android-placa.jpg";
import capaEsquema from "@/assets/board/esquema.jpg";

const rows = [
  { title: "Conheça o curso por dentro", subtitle: "Veja onde você vai estudar e como funciona o treinamento", type: "preview", items: [
    { title: "Entenda como o treinamento funciona", videoId: "rbkPaEU9rJs", label: "01 · METODOLOGIA" }, { title: "Veja onde você vai estudar", videoId: "G7SnLMD1-JM", label: "02 · PLATAFORMA" },
  ]},
  { title: "Reballing e reparo em placa", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como fazer reballing no c.i de Wi-Fi", videoId: "6czCuYSpe9A" },
    { title: "Diagnóstico de defeitos em placa", number: "02", cover: capaEsquema }, { title: "Microssoldagem na prática", number: "03", cover: capaMicroSoldagem }, { title: "Condução reversa", number: "04", cover: capaConducao }, { title: "Reparo em placa passo a passo", number: "05", cover: capaPlacas },
  ]},
  { title: "Memória, CPU e componentes críticos", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como fazer reballing na memória", videoId: "iVqEmnvEQdU" },
    { title: "Eletrônica aplicada", number: "02", cover: capaEletronica }, { title: "Reballing", number: "03", cover: capaReballing }, { title: "Análise com multímetro", number: "04", cover: capaMultimetro }, { title: "Fonte de alimentação", number: "05", cover: capaFonte },
  ]},
  { title: "Conectores e trocas do dia a dia", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como trocar um conector fpc da bateria", videoId: "tybLC_20JU8" },
    { title: "Troca de telas", number: "02", cover: capaTelas }, { title: "Troca de baterias", number: "03", cover: capaBateria }, { title: "Conector de carga", number: "04", cover: capaConector }, { title: "Câmeras e componentes", number: "05", cover: capaCameras },
  ]},
  { title: "Reparos avançados em iPhone", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como fazer reballing cpu de iphone", videoId: "OUq0zGplJjw" },
    { title: "Diagnóstico avançado", number: "02", cover: capaIphonePlaca }, { title: "Jumper e reparos avançados", number: "03", cover: capaTrilhas }, { title: "Reparos em Android e iPhone", number: "04", cover: capaAndroidPlaca }, { title: "Botões e periféricos", number: "05", cover: capaVolume },
  ]},
  { title: "Limpeza, desoxidação e recuperação", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como fazer limpeza cpu de iphone", videoId: "mXBJWQPgKg0" },
    { title: "Desoxidação", number: "02", cover: capaDesoxidacao }, { title: "Software e diagnóstico", number: "03", cover: capaSoftware }, { title: "Fundamentos da manutenção", number: "04", cover: capaDiagnostico }, { title: "Ferramentas e bancada", number: "05", cover: capaFerramentas },
  ]},
  { title: "Micro soldagem de precisão", subtitle: "Primeira aula liberada · demais no curso completo", type: "mixed", items: [
    { title: "Como fazer micro soldagem em componentes pequenos", videoId: "54Q-1wd18B0" },
    { title: "Microssoldagem na prática", number: "02", cover: capaMicroSoldagem }, { title: "Condução reversa", number: "03", cover: capaConducao }, { title: "Eletrônica aplicada", number: "04", cover: capaEletronica }, { title: "Reparo em placa passo a passo", number: "05", cover: capaPlacas },
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

const cardBase = "group relative w-[46vw] max-w-[200px] shrink-0 snap-start overflow-hidden rounded-2xl border text-left shadow-lg transition duration-300 hover:-translate-y-1 sm:w-[190px]";

const MemberAreaSection = () => {
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoId: string } | null>(null);
  const [lockedOpen, setLockedOpen] = useState(false);

  const scrollRow = (row: Row, direction: number) => {
    rowRefs.current[row.title]?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <SectionWrapper id="aulas-gratis" className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground"><GraduationCap className="h-4 w-4" /> Acesso liberado à prévia</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Espia aí: veja o curso <span className="text-gradient">por dentro antes de comprar.</span></h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Aulas gratuitas liberadas agora e todos os módulos do treinamento à mostra. Deslize pelas setas e veja exatamente o que você vai dominar.</p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {rows.map((row) => (
            <motion.section key={row.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}>
              <div className="mb-5 text-left">
                <h3 className="font-display text-xl font-black text-white sm:text-2xl">{row.title}</h3>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{row.subtitle}</p>
              </div>

              <div className="relative">
                <button type="button" aria-label={`Voltar em ${row.title}`} onClick={() => scrollRow(row, -1)} className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b1725]/90 text-white shadow-xl backdrop-blur transition hover:border-accent/50 hover:bg-accent/20 sm:-left-4 sm:h-11 sm:w-11"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" aria-label={`Avançar em ${row.title}`} onClick={() => scrollRow(row, 1)} className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b1725]/90 text-white shadow-xl backdrop-blur transition hover:border-accent/50 hover:bg-accent/20 sm:-right-4 sm:h-11 sm:w-11"><ChevronRight className="h-5 w-5" /></button>

                <div ref={(element) => { rowRefs.current[row.title] = element; }} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4">
                  {row.items.map((item) => {
                    if (row.type === "mixed" && "videoId" in item) return (
                      <button key={item.title} type="button" onClick={() => setSelectedVideo({ title: item.title, videoId: item.videoId })} className={`${cardBase} border-accent/25 bg-[#0b1725] hover:border-accent/60`}>
                        <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
                          <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Miniatura da aula ${item.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                          <span className="absolute left-2.5 top-2.5 rounded-full bg-accent px-2 py-1 text-[8px] font-black uppercase tracking-wider text-accent-foreground">Aula grátis</span>
                          <span className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-3.5 w-3.5" /> Liberada</div>
                            <h4 className="mt-1.5 line-clamp-3 text-sm font-black leading-snug text-white">{item.title}</h4>
                          </div>
                        </div>
                      </button>
                    );
                    if (row.type === "preview" && "videoId" in item) return (
                      <button key={item.title} type="button" onClick={() => setSelectedVideo({ title: item.title, videoId: item.videoId })} className={`${cardBase} border-primary/25 bg-[#0b1725] hover:border-primary/60`}>
                        <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
                          <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Prévia: ${item.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                          <span className="absolute left-2.5 top-2.5 rounded-full bg-primary px-2 py-1 text-[8px] font-black uppercase tracking-wider text-primary-foreground">{item.label}</span>
                          <span className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110"><PlayCircle className="h-4 w-4 fill-current" /></span>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-primary"><Eye className="h-3.5 w-3.5" /> Veja por dentro</div>
                            <h4 className="mt-1.5 line-clamp-3 text-sm font-black leading-snug text-white">{item.title}</h4>
                          </div>
                        </div>
                      </button>
                    );
                    return (
                      <button key={item.title} type="button" onClick={() => setLockedOpen(true)} className={`${cardBase} border-white/10 bg-[#0b1725] hover:border-primary/45`}>
                        <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
                          {"cover" in item && item.cover ? <img src={item.cover} alt={`Capa do módulo ${item.title}`} loading="lazy" className="h-full w-full object-cover opacity-60 grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0" /> : null}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
                          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/60 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-slate-300">Bloqueada</span>
                          <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-slate-200"><Lock className="h-4 w-4" /></span>
                          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-6xl font-black text-white/10 transition group-hover:text-primary/20">{item.number}</span>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">{row.title}</p>
                            <h4 className="mt-1.5 line-clamp-3 text-sm font-black leading-snug text-white">{item.title}</h4>
                            <p className="mt-2 flex items-center gap-1.5 text-[9px] font-bold text-slate-400"><Lock className="h-3 w-3" /> No curso completo</p>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center"><CtaButton href="#pricing">QUERO ACESSO TOTAL →</CtaButton><p className="text-xs font-semibold text-muted-foreground">Garantia de 7 dias !</p></div>
      </div>

      {selectedVideo && <VideoModal title={selectedVideo.title} videoId={selectedVideo.videoId} onClose={() => setSelectedVideo(null)} />}
      {lockedOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setLockedOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="locked-title" className="w-full max-w-md rounded-3xl border border-primary/25 bg-card p-7 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Lock className="h-7 w-7" /></div><h3 id="locked-title" className="mt-5 font-display text-2xl font-black">Essa aula está bloqueada.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Ela faz parte do conteúdo completo do Mestre da Manutenção. Faça sua inscrição para desbloquear os módulos e aulas.</p><div className="mt-6"><CtaButton href="#pricing">DESBLOQUEAR AGORA →</CtaButton></div><button type="button" onClick={() => setLockedOpen(false)} className="mt-3 text-xs font-bold text-muted-foreground hover:text-foreground">Voltar para a prévia</button></div></div>}
    </SectionWrapper>
  );
};

export default MemberAreaSection;
