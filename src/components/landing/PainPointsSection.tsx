import { motion } from "framer-motion";
import { Wrench, Search, BookOpen, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const pains = [
  { icon: Wrench, title: "Você domina o básico, mas trava nos casos mais difíceis", desc: "Troca de tela e bateria já não são suficientes quando aparece um defeito de placa e você não sabe por onde começar." },
  { icon: Search, title: "Você não quer mais trabalhar no ‘achismo’", desc: "Diagnóstico sem método pode virar tentativa, troca desnecessária de componentes e perda de tempo." },
  { icon: BookOpen, title: "Você encontra informação, mas não encontra uma sequência", desc: "Vídeos isolados podem ensinar uma técnica. Uma trilha organizada ajuda você a entender o que estudar primeiro e como avançar." },
];

const PainPointsSection = () => (
  <SectionWrapper className="py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">Talvez seja exatamente aqui que você esteja</span>
        <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">O problema não é falta de vontade.<span className="block text-gradient">É falta de um caminho.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Quando você sabe o que estudar e consegue acompanhar o processo, fica muito mais fácil transformar informação em habilidade.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {pains.map((pain, i) => (
          <motion.article key={pain.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl border border-border bg-card p-7 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><pain.icon className="h-6 w-6" /></div>
            <h3 className="font-display text-xl font-black sm:text-2xl">{pain.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{pain.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-accent/25 bg-accent/5 p-7 text-center sm:p-9">
        <h3 className="font-display text-2xl font-black sm:text-3xl">É isso que o Mestre da Manutenção busca organizar.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Do conteúdo básico aos reparos avançados, você encontra aulas para estudar, rever e evoluir no seu ritmo.</p>
        <CtaButton href="#placas" className="mt-6">QUERO VER OS REPAROS AVANÇADOS <ArrowRight className="h-4 w-4" /></CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default PainPointsSection;
