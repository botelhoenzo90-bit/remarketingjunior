import { motion } from "framer-motion";
import { XCircle, Clock3, WalletCards, Wrench, Brain, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const pains = [
  { icon: Wrench, title: "Você ainda trava quando o defeito está na placa", desc: "O cliente chega com um problema mais complexo e você fica sem segurança para diagnosticar e executar o reparo." },
  { icon: WalletCards, title: "Você acaba deixando dinheiro na mesa", desc: "Quando não domina reparos avançados, parte dos serviços precisa ser recusada ou terceirizada." },
  { icon: Brain, title: "Você pesquisa, salva conteúdo… mas continua sem um caminho", desc: "Vídeos soltos ajudam, mas não substituem uma sequência organizada para aprender, praticar e evoluir." },
  { icon: Clock3, title: "E o ‘depois eu faço’ continua se repetindo", desc: "Mais um curso é comparado, mais uma aba é aberta e a decisão fica para amanhã." },
];

const PainPointsSection = () => (
  <SectionWrapper className="py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-destructive">Antes de decidir, seja honesto com você</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">Quanto tempo você ainda vai passar <span className="text-gradient">no mesmo ponto?</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Você já conhece este mercado. Já viu outros cursos. Talvez até tenha comprado algum conteúdo. A questão não é encontrar mais uma promessa — é encontrar um método que você realmente consiga colocar em prática.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {pains.map((pain, i) => (
          <motion.div key={pain.title} initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-destructive/15 bg-destructive/[0.04] p-6 sm:p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10"><pain.icon className="h-5 w-5 text-destructive" /></div>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{pain.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{pain.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/25 bg-primary/5 p-6 text-center sm:p-8">
        <p className="font-display text-xl font-black sm:text-2xl">A solução não é assistir a mais um vídeo.</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">É sair da dúvida e entrar em um processo: aprender o diagnóstico, entender a técnica, praticar e ampliar o que você consegue oferecer na sua bancada.</p>
        <CtaButton className="mt-6 whitespace-nowrap">QUERO SAIR DA TEORIA → <ArrowRight className="ml-1 h-4 w-4" /></CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default PainPointsSection;
