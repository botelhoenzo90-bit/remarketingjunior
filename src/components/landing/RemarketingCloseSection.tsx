import { motion } from "framer-motion";
import { ArrowRight, Check, CircleHelp, ShieldCheck, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const questions = [
  ["“Já conheço outros cursos. O que eu ganho escolhendo este?”", "Você não precisa escolher pela promessa. Compare a didática, veja a plataforma, assista às aulas gratuitas e avalie o conteúdo antes de decidir."],
  ["“E se eu começar e perceber que não é para mim?”", "Você conta com 7 dias de garantia. Assim, pode conhecer o treinamento e avaliar se ele faz sentido para o seu momento."],
  ["“Tenho medo de não conseguir fazer os reparos.”", "Começar com receio é normal. O objetivo é construir conhecimento e prática por etapas, em vez de esperar saber tudo para começar."],
  ["“Eu posso deixar para depois.”", "Pode. Mas se você continuar adiando sem mudar a forma de aprender, é possível que o próximo mês comece exatamente como este."],
];

const RemarketingCloseSection = () => (
  <SectionWrapper id="decisao-final" className="relative overflow-hidden border-y border-primary/15 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary"><CircleHelp className="h-4 w-4" /> Se ainda existe uma dúvida, ela provavelmente está aqui</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">Leia isso antes de tomar sua decisão.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Você já viu o treinamento, conheceu a proposta e sabe o que está sendo oferecido. Agora vamos eliminar os últimos pensamentos que costumam fazer alguém adiar uma decisão.</p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-5xl space-y-4">
        {questions.map(([question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="grid gap-4 rounded-2xl border border-border bg-background/75 p-5 sm:grid-cols-[1fr_1.15fr] sm:p-6">
            <div className="flex items-start gap-3"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><p className="font-display font-bold text-foreground sm:text-lg">{question}</p></div>
            <div className="flex items-start gap-3 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" /><p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-accent/30 bg-background p-7 text-center shadow-[0_0_55px_hsl(142_76%_46%/0.08)] sm:p-10">
        <div className="mb-3 flex items-center justify-center gap-2 text-accent"><ShieldCheck className="h-5 w-5" /><span className="text-xs font-black uppercase tracking-[0.14em]">Decida com informação, não com pressão</span></div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Você já sabe o suficiente para dar o próximo passo.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Se ainda não viu as aulas gratuitas, esse é o melhor próximo passo. Se já viu e o treinamento fez sentido para você, confira a condição atual da oferta.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"><CtaButton href="#aulas-gratis">VER AULAS GRATUITAS <ArrowRight className="h-4 w-4" /></CtaButton><a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-4 text-sm font-black text-foreground transition-colors hover:border-primary/50 hover:text-primary">VER A OFERTA</a></div>
      </motion.div>
    </div>
  </SectionWrapper>
);
export default RemarketingCloseSection;
