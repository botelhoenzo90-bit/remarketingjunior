import { motion } from "framer-motion";
import { ArrowDown, Check, CircleHelp, Clock3, ShieldCheck, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  "E se eu não tiver experiência?",
  "E se eu não conseguir acompanhar as aulas?",
  "Será que realmente vale o investimento?",
  "Talvez seja melhor deixar para depois...",
];

const answers = [
  "Você encontra aulas passo a passo e pode estudar no seu ritmo.",
  "O treinamento foi estruturado para sair do básico e avançar gradualmente.",
  "Você recebe o curso completo, bônus, suporte e garantia de 7 dias.",
  "Adiar também é uma decisão — e pode manter você no mesmo ponto por mais tempo.",
];

const RemarketingCloseSection = () => (
  <SectionWrapper id="decisao" className="relative overflow-hidden border-y border-primary/15 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary">
          <CircleHelp className="h-4 w-4" /> Se você ainda está em dúvida...
        </span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
          Você não precisa confiar apenas no que eu estou dizendo.
          <span className="block text-primary">Veja, teste e tome sua decisão com segurança.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A proposta desta página é simples: tirar suas dúvidas, mostrar o treinamento por dentro e deixar claro o que acontece depois que você decide começar.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-background/70 p-6 sm:p-8">
          <p className="mb-5 text-sm font-black uppercase tracking-wider text-muted-foreground">As dúvidas que fazem você adiar</p>
          <div className="space-y-3">
            {objections.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
          <p className="mb-5 text-sm font-black uppercase tracking-wider text-primary">O que você precisa saber</p>
          <div className="space-y-4">
            {answers.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="font-medium leading-relaxed text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
            <ShieldCheck className="h-6 w-6 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Você tem 7 dias de garantia.</strong> Entre, conheça o conteúdo e avalie se o treinamento faz sentido para você.</p>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/30 bg-background p-6 text-center shadow-[0_0_50px_hsl(192_95%_55%/0.08)] sm:p-8">
        <div className="mb-3 flex items-center justify-center gap-2 text-accent"><Clock3 className="h-5 w-5" /><span className="text-xs font-black uppercase tracking-wider">Condição promocional por tempo limitado</span></div>
        <h3 className="font-display text-2xl font-black sm:text-3xl">Se você já estava pensando em aprender, pare de deixar para depois.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Assista às aulas gratuitas, veja a qualidade do treinamento e, se fizer sentido para você, aproveite a condição apresentada na oferta enquanto ela estiver disponível.</p>
        <CtaButton href="#aulas-gratis" className="mt-6 text-sm sm:text-base">VER AS AULAS GRATUITAS <ArrowDown className="ml-2 h-4 w-4" /></CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default RemarketingCloseSection;
