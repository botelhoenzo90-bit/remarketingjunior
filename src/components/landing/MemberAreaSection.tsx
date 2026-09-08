import { motion } from "framer-motion";
import { CheckCircle2, Lock, Play, Smartphone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const modules = [
  { n: "01", title: "Fundamentos da manutenção de celulares", free: true, videoId: "SZLLDmMOiRA" },
  { n: "02", title: "Ferramentas, bancada e primeiros reparos" },
  { n: "03", title: "Análise e diagnóstico de defeitos" },
  { n: "04", title: "Troca de telas, baterias e componentes" },
  { n: "05", title: "Conectores, câmeras, áudio e periféricos" },
  { n: "06", title: "Software, testes e identificação de falhas" },
  { n: "07", title: "Eletrônica aplicada à manutenção" },
  { n: "08", title: "Microssoldagem e reparos em placa" },
  { n: "09", title: "Reparos avançados em placas de iPhone" },
  { n: "10", title: "Reparos avançados em placas Android" },
];

const MemberAreaSection = () => (
  <SectionWrapper id="modulos" className="relative overflow-hidden bg-deep-blue py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">Acesso liberado à prévia</span>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">Espia aí: veja o curso <span className="text-gradient">por dentro</span> antes de comprar.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">Aulas gratuitas liberadas agora e todos os módulos do treinamento à mostra. Deslize pelas setas e veja exatamente o que você vai dominar.</p>
      </motion.div>

      <div className="mt-12 w-full overflow-hidden">
        <div className="board-marquee flex w-max gap-5" style={{ animationDuration: "30s" }}>
          {[...modules, ...modules].map((module, index) => (
            <motion.article key={`${module.n}-${index}`} className="group w-[250px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all duration-300 hover:border-primary/40 sm:w-[280px]">
              <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-[#050b12] p-5 text-center">
                <div>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 font-display text-lg font-black text-primary">{module.n}</div>
                  <h3 className="font-display text-lg font-black leading-tight text-white">{module.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 bg-card px-4 py-4">
                {module.free ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-accent"><CheckCircle2 className="h-4 w-4" /> Aula liberada</span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Conteúdo exclusivo</span>
                )}
                {module.free && <a href={`https://www.youtube.com/watch?v=${module.videoId}`} target="_blank" rel="noreferrer" aria-label={`Assistir aula ${module.n}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:scale-105"><Play className="h-4 w-4 fill-current" /></a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center"><p className="flex items-center justify-center gap-2 text-sm font-black text-primary"><Smartphone className="h-5 w-5" /> Conteúdo para iPhone e Android</p><p className="mt-1 text-xs text-muted-foreground">Do aprendizado inicial aos reparos técnicos em placa.</p></div>
      <div className="text-center"><CtaButton href="#oferta" className="mt-8">QUERO VER O QUE VOU APRENDER →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default MemberAreaSection;
