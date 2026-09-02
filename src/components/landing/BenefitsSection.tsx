import { Search, Zap, Cpu, Layers3, Wrench, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const benefits = [
  { icon: Search, title: "Diagnosticar antes de trocar", desc: "Entenda como analisar o defeito e buscar a causa do problema em vez de simplesmente trocar peças por tentativa." },
  { icon: Zap, title: "Aprender microssoldagem na prática", desc: "Conheça técnicas de retrabalho, remoção e substituição de componentes usadas nos reparos em placa." },
  { icon: Cpu, title: "Avançar para reparos em placa", desc: "Saia dos serviços mais básicos e conheça procedimentos de diagnóstico e reparo em placas Android e iPhone." },
  { icon: Layers3, title: "Ter uma trilha de aprendizado", desc: "Em vez de juntar vídeos aleatórios, siga uma estrutura de conteúdo que organiza o que estudar e revisar." },
  { icon: Wrench, title: "Ampliar o que você oferece", desc: "Quanto mais técnicas você domina, maior é a variedade de serviços que pode analisar e executar na sua bancada." },
  { icon: PlayCircle, title: "Aprender vendo o processo", desc: "As aulas mostram os procedimentos para que você consiga acompanhar a explicação e revisar cada etapa." },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" className="relative bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">O que muda quando você aprende de verdade</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Mais do que assistir aulas.<span className="block text-gradient">É saber o que fazer com o conhecimento.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">O objetivo do treinamento é dar contexto para a técnica: entender o defeito, acompanhar o procedimento e construir uma base para evoluir na manutenção.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <motion.article key={benefit.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-card/60 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10"><benefit.icon className="h-6 w-6 text-primary" /></div>
            <h3 className="font-display text-lg font-black sm:text-xl">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{benefit.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center"><CtaButton href="#conteudo">VER O CONTEÚDO COMPLETO →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default BenefitsSection;
