import { motion } from "framer-motion";
import { ArrowRight, Check, CircleHelp, Clock3, ShieldCheck, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const questions = [
  ["“Já conheço outros cursos. O que eu ganho escolhendo este?”", "Não escolha pela promessa. Escolha depois de ver a didática, o conteúdo, a plataforma e a estrutura do treinamento."],
  ["“E se eu começar e perceber que não é para mim?”", "A oferta apresenta 7 dias de garantia. Você pode entrar, conhecer o treinamento e avaliar se ele faz sentido para o seu momento."],
  ["“Tenho medo de não conseguir fazer os reparos.”", "Medo de começar é diferente de incapacidade. O caminho é aprender por etapas, entender o diagnóstico e praticar com orientação."],
  ["“Eu posso deixar para o mês que vem.”", "Pode. Mas se nada mudar na sua rotina, o mês que vem pode começar exatamente igual ao mês de hoje."],
];

const RemarketingCloseSection = () => (
  <SectionWrapper id="decisao" className="relative overflow-hidden border-y border-primary/15 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary"><CircleHelp className="h-4 w-4" /> Agora, vamos tirar o peso da decisão</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">Você já conhece o mercado.<span className="block text-primary">Já viu cursos. Já pesquisou. Talvez só esteja esperando uma certeza que não existe.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">A decisão não precisa ser baseada em impulso. Ela pode ser baseada em evidências: <strong className="text-foreground">veja as aulas, confira o conteúdo, entenda a garantia e escolha conscientemente.</strong></p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-5xl space-y-4">
        {questions.map(([question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="grid gap-4 rounded-2xl border border-border bg-background/70 p-5 sm:grid-cols-[1fr_1.15fr] sm:p-6">
            <div className="flex items-start gap-3"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><p className="font-display font-bold text-foreground sm:text-lg">{question}</p></div>
            <div className="flex items-start gap-3 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" /><p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_50px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mb-3 flex items-center justify-center gap-2 text-accent"><ShieldCheck className="h-5 w-5" /><span className="text-xs font-black uppercase tracking-wider">Você pode reduzir o risco da decisão</span></div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Você não precisa ter certeza de tudo para começar.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Precisa apenas saber qual é o próximo passo. Primeiro, assista às aulas gratuitas. Depois, se o treinamento fizer sentido para você, veja a condição da oferta e decida.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">EU QUERO CONHECER POR DENTRO <ArrowRight className="ml-1 h-4 w-4" /></CtaButton>
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"><Clock3 className="h-4 w-4 text-primary" /> A condição promocional é limitada ao período apresentado na oferta.</div>
      </motion.div>
    </div>
  </SectionWrapper>
);
export default RemarketingCloseSection;
