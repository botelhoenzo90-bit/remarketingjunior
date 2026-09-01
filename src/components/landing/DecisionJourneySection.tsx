import { motion } from "framer-motion";
import { BadgeCheck, Brain, Clock, Coins, GraduationCap, ShieldCheck, Target, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const reasons = [
  { icon: Brain, title: "E se eu não conseguir?", text: "O caminho é apresentado de forma progressiva, para você acompanhar o conteúdo e praticar no seu ritmo." },
  { icon: GraduationCap, title: "Preciso saber muito antes?", text: "Você não precisa dominar manutenção para começar. O treinamento organiza o conhecimento para facilitar sua evolução." },
  { icon: Clock, title: "Não tenho tempo agora.", text: "Estude quando puder, reveja as aulas e avance sem depender de uma rotina fixa de sala de aula." },
  { icon: Coins, title: "Será que vale o investimento?", text: "O valor está em construir conhecimento prático que pode continuar útil muito depois da conclusão do curso." },
];

const steps = [
  ["01", "Conheça", "Veja as aulas gratuitas e entenda a forma como o conteúdo é apresentado."],
  ["02", "Aprenda", "Tenha acesso ao treinamento e percorra os conteúdos de maneira organizada."],
  ["03", "Pratique", "Transforme o que aprendeu em prática, repetição e experiência."],
  ["04", "Evolua", "Continue desenvolvendo uma habilidade que pode abrir novas possibilidades profissionais."],
];

const DecisionJourneySection = () => (
  <SectionWrapper id="decisao" className="relative overflow-hidden bg-background py-20 sm:py-28">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">Escolha com clareza</span>
        <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-5xl">Talvez você só precise <span className="text-primary">tirar algumas dúvidas</span> antes de começar.</h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">Não existe motivo para comprar por impulso. Entenda como o treinamento funciona, veja o conteúdo e descubra se ele faz sentido para o momento que você está vivendo.</p>
      </motion.div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_15px_50px_hsl(192_95%_55%/0.08)]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
            <h3 className="font-display text-xl font-black">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 rounded-3xl border border-primary/20 bg-card/80 p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Target className="h-6 w-6" /></div>
          <h3 className="mt-4 font-display text-2xl font-black sm:text-4xl">Do interesse à prática: um caminho simples</h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">Você não precisa resolver tudo hoje. Precisa apenas dar o próximo passo com informação suficiente para se sentir seguro.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="relative rounded-2xl border border-border bg-background p-5">
              <span className="text-3xl font-black text-primary/40">{number}</span>
              <h4 className="mt-2 font-display text-lg font-black">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-accent/40 bg-accent/5 p-7 text-center sm:p-10">
        <Wrench className="mx-auto h-8 w-8 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-black sm:text-4xl">Veja antes de decidir.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">As aulas gratuitas estão disponíveis para você conhecer a didática e entender o treinamento na prática.</p>
        <CtaButton href="#aulas-gratis" className="mt-6">QUERO VER AS AULAS GRATUITAS</CtaButton>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground"><span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" /> Compra segura</span><span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-accent" /> Garantia de 7 dias</span></div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default DecisionJourneySection;
