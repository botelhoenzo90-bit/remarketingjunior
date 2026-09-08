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
  <SectionWrapper id="modulos" className="relative overflow-hidden bg-[#f4f7fa] py-20 text-slate-900 sm:py-28">
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-[#07111f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Por dentro do treinamento</span>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">10 módulos para sair do básico e avançar nos <span className="text-blue-600">reparos em placa.</span></h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Aqui você vê somente os módulos. Uma aula está liberada para você conhecer a didática antes de comprar.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2">
        {modules.map((module, index) => (
          <motion.article key={module.n} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07111f] font-display text-lg font-black text-cyan-300">{module.n}</div>
            <div className="min-w-0 flex-1"><h3 className="font-display text-lg font-black leading-tight sm:text-xl">{module.title}</h3>{module.free && <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-600"><CheckCircle2 className="h-3.5 w-3.5" /> Aula liberada</span>}</div>
            {module.free ? <a href={`https://www.youtube.com/watch?v=${module.videoId}`} target="_blank" rel="noreferrer" aria-label={`Assistir aula ${module.n}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white transition hover:bg-cyan-600"><Play className="h-4 w-4 fill-current" /></a> : <Lock className="h-4 w-4 shrink-0 text-slate-400" />}
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center"><p className="flex items-center justify-center gap-2 text-sm font-black text-blue-900"><Smartphone className="h-5 w-5" /> Conteúdo para iPhone e Android</p><p className="mt-1 text-xs text-blue-700">Do aprendizado inicial aos reparos técnicos em placa.</p></div>
      <div className="text-center"><CtaButton href="#oferta" className="mt-8">QUERO VER O QUE VOU APRENDER →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default MemberAreaSection;
