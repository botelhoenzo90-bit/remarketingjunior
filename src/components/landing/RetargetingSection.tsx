import { motion } from "framer-motion";
import { Check, Clock3, ShieldCheck, XCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  "“Ainda não sei se consigo aprender.”",
  "“Talvez eu compre depois.”",
  "“Preciso pensar melhor.”",
  "“Não tenho experiência suficiente.”",
];

const benefits = [
  "Aulas passo a passo, do básico ao reparo em placa",
  "Acesso ao conteúdo para estudar no seu ritmo",
  "Conhecimento para transformar habilidade em novos serviços",
  "Suporte e materiais para acelerar sua evolução",
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-24">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    <div className="relative mx-auto max-w-5xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Clock3 className="h-4 w-4" /> Você chegou até aqui por um motivo
        </span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
          Talvez o que esteja faltando não seja vontade.
          <span className="block text-primary">Seja um caminho claro para começar.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Se você já viu o curso, ficou interessado e ainda está em dúvida, esta página é para você. Veja por dentro como o treinamento funciona, teste algumas aulas gratuitas e entenda exatamente o que você recebe antes de tomar sua decisão.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-background/70 p-6 sm:p-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-muted-foreground">As dúvidas que podem estar te travando</p>
          <div className="space-y-3">
            {objections.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3">
                <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                <span className="text-sm font-medium text-foreground sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-primary/25 bg-primary/5 p-6 shadow-[0_0_45px_hsl(192_95%_55%/0.08)] sm:p-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">O que você encontra no treinamento</p>
          <div className="space-y-3">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground sm:text-base">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 p-4 text-xs text-muted-foreground sm:text-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
            <span>Você ainda conta com a garantia de 7 dias para conhecer o treinamento por dentro.</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-sm font-semibold text-muted-foreground">Não precisa imaginar como é. Veja algumas aulas gratuitamente logo abaixo.</p>
        <CtaButton href="#aulas-gratis" className="text-sm sm:text-base">QUERO VER AS AULAS GRATUITAS →</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default RetargetingSection;
