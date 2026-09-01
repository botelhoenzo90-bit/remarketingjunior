import { motion } from "framer-motion";
import { Brain, Clock, Coins, GraduationCap, ShieldCheck, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const reasons = [
  { icon: Brain, title: "E se eu não conseguir?", text: "O conteúdo é apresentado de forma progressiva, para você acompanhar, praticar e evoluir no seu ritmo." },
  { icon: GraduationCap, title: "Preciso saber muito antes?", text: "Não. Você pode começar mesmo sem dominar manutenção e construir seu conhecimento passo a passo." },
  { icon: Clock, title: "E se eu tiver pouco tempo?", text: "Organize seus estudos de acordo com a sua rotina, reveja as aulas e avance no seu próprio ritmo." },
  { icon: Coins, title: "Será que vale a pena?", text: "O objetivo é desenvolver uma habilidade prática que você pode continuar aprimorando mesmo depois do curso." },
];

const DecisionJourneySection = () => (
  <SectionWrapper id="decisao" className="relative overflow-hidden bg-background py-20 sm:py-28">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">Antes de decidir, seja honesto com você</span>
        <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-5xl">Quanto tempo você ainda vai passar <span className="text-primary">no mesmo ponto?</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Você já viu outras opções e talvez até tenha consumido outros conteúdos. A questão não é encontrar mais uma promessa — é encontrar um método que você realmente consiga colocar em prática.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="group rounded-3xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_hsl(192_95%_55%/0.10)] sm:p-8">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105"><Icon className="h-7 w-7" /></div>
            <h3 className="font-display text-xl font-black sm:text-2xl">{title}</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-primary/25 bg-primary/5 p-7 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><Target className="h-7 w-7" /></div>
        <h3 className="mt-4 font-display text-2xl font-black sm:text-4xl">Dê uma chance à prática.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Assista às aulas gratuitas, veja a didática e entenda o treinamento antes de tomar sua decisão.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO ASSISTIR ÀS AULAS GRATUITAS →</CtaButton>
        <div className="mt-5 flex items-center justify-center gap-4 text-xs font-semibold text-muted-foreground"><span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> Compra segura</span><span>✓ Garantia de 7 dias</span></div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default DecisionJourneySection;
