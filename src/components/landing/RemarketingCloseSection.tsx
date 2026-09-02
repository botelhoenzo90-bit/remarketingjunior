import { motion } from "framer-motion";
import { ArrowRight, Check, CircleHelp, ShieldCheck, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const questions = [
  ["“Eu já vi outros cursos. Por que escolher este?”", "Porque você não precisa decidir pela promessa. Compare o conteúdo, veja a plataforma e assista às aulas gratuitas para avaliar a proposta por conta própria."],
  ["“E se eu perceber que não é para mim?”", "A oferta inclui 7 dias de garantia. Dentro desse prazo, você pode solicitar o reembolso conforme as condições da garantia."],
  ["“Tenho medo de não conseguir acompanhar.”", "Você pode estudar no seu ritmo, pausar as aulas e revisar o conteúdo. O objetivo é construir conhecimento por etapas, não exigir que você saiba tudo no primeiro dia."],
  ["“Talvez eu deixe para depois.”", "Essa é uma decisão sua. O importante é não comprar por impulso e também não adiar sem entender o que está impedindo você. Se ainda houver dúvida, volte às aulas gratuitas."],
];

const RemarketingCloseSection = () => (
  <SectionWrapper id="decisao-final" className="relative overflow-hidden border-y border-primary/15 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary"><CircleHelp className="h-4 w-4" /> Últimas dúvidas</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Se alguma coisa ainda está segurando você, <span className="text-gradient">vamos esclarecer.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Você já viu o curso por dentro. Agora, veja respostas objetivas para as dúvidas que mais pesam na hora de decidir.</p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-5xl space-y-4">
        {questions.map(([question, answer], i) => <motion.div key={question} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="grid gap-4 rounded-2xl border border-border bg-background/75 p-5 sm:grid-cols-[1fr_1.15fr] sm:p-6"><div className="flex items-start gap-3"><X className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="font-display font-bold text-foreground sm:text-lg">{question}</p></div><div className="flex items-start gap-3 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" /><p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div></motion.div>)}
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-accent/30 bg-background p-7 text-center shadow-[0_0_55px_hsl(142_76%_46%/0.08)] sm:p-10">
        <ShieldCheck className="mx-auto h-7 w-7 text-accent" />
        <h3 className="mt-3 font-display text-2xl font-black sm:text-4xl">Agora você pode decidir com calma.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Se o conteúdo fez sentido para você, veja a condição atual. Se ainda não fez, volte às aulas gratuitas e tire mais um momento para avaliar.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"><CtaButton href="#pricing">VER A CONDIÇÃO ATUAL <ArrowRight className="h-4 w-4" /></CtaButton><a href="#aulas-gratis" className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-4 text-sm font-black text-foreground transition hover:border-primary/50 hover:text-primary">REVER AS AULAS</a></div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default RemarketingCloseSection;
