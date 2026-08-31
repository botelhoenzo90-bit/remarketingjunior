import { motion } from "framer-motion";
import { Check, Clock3, ShieldCheck, XCircle, ArrowDown, PlayCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  ["MEDO", "“E se eu não conseguir aprender?”"],
  ["EXPERIÊNCIA", "“Nunca trabalhei com microssoldagem.”"],
  ["TEMPO", "“Não sei se vou conseguir acompanhar.”"],
  ["DECISÃO", "“Talvez eu compre depois.”"],
];

const answers = [
  "Você pode começar do básico e avançar gradualmente.",
  "As aulas mostram o processo na prática, passo a passo.",
  "Você estuda no seu ritmo e pode rever as aulas.",
  "Você ainda pode conhecer o treinamento com a garantia de 7 dias.",
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary">
          <Clock3 className="h-4 w-4" /> Para quem já viu a oferta e ainda não decidiu
        </span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Você não precisa de mais uma promessa.
          <span className="block text-primary">Precisa de segurança para tomar sua decisão.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Se você já viu o curso, ficou interessado e ainda está em dúvida, esta página é para você. Veja por dentro como o treinamento funciona, assista às aulas gratuitas e entenda exatamente o que recebe antes de decidir.
        </p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {objections.map(([label, text], i) => (
          <motion.div key={text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background/80 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3"><XCircle className="h-5 w-5 shrink-0 text-destructive" /><span className="text-xs font-black tracking-widest text-primary">{label}</span></div>
            <p className="font-display text-lg font-bold text-foreground sm:text-xl">{text}</p>
            <div className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{answers[i]}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-14 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_60px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><PlayCircle className="h-7 w-7" /></div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary">A melhor forma de decidir</p>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Antes de comprar, entre na sala de aula.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Você não precisa acreditar em uma promessa. Assista às aulas gratuitas e veja a didática, a prática e o nível de detalhe do treinamento.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">VER AS AULAS GRATUITAS →</CtaButton>
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"><ShieldCheck className="h-4 w-4 text-accent" /> Conheça primeiro. Decida depois.</div>
      </motion.div>

      <div className="mt-10 flex justify-center text-primary"><ArrowDown className="h-6 w-6 animate-bounce" /></div>
    </div>
  </SectionWrapper>
);

export default RetargetingSection;
