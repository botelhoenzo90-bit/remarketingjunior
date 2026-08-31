import { motion } from "framer-motion";
import { Check, Clock3, ShieldCheck, XCircle, ArrowDown, PlayCircle, Scale, Target, BookOpen, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  ["COMPARAÇÃO", "“Já vi vários cursos. Por que escolher este?”", "Você não precisa decidir pela promessa. Compare a metodologia na prática: veja aulas, conteúdo, plataforma, suporte e o caminho de aprendizagem."],
  ["INSEGURANÇA", "“E se eu não tiver experiência suficiente?”", "O treinamento organiza o aprendizado em etapas para você avançar com mais clareza, em vez de depender de conteúdo solto."],
  ["INVESTIMENTO", "“E se eu gastar e não valer a pena?”", "Você pode conhecer o conteúdo gratuito antes e ainda conta com a garantia de 7 dias apresentada na oferta."],
  ["TEMPO", "“Minha rotina já é corrida.”", "O acesso permite estudar no seu ritmo. Você não precisa esperar ter uma semana perfeita para começar a construir uma nova habilidade."],
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary"><Clock3 className="h-4 w-4" /> Esta página é para quem já conhece a oferta</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Você já viu o curso.<span className="block text-primary">Agora vamos falar sobre o que realmente está travando sua decisão.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Talvez você esteja comparando cursos, pensando no investimento, esperando o momento certo ou com medo de começar. Tudo bem. <strong className="text-foreground">Vamos colocar cada objeção na mesa e responder uma por uma.</strong></p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {objections.map(([label, question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background/80 p-5 sm:p-7">
            <div className="mb-4 flex items-center gap-3"><XCircle className="h-5 w-5 shrink-0 text-destructive" /><span className="text-xs font-black tracking-widest text-primary">{label}</span></div>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{question}</h3>
            <div className="mt-4 border-t border-border pt-4"><div className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div></div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {[{ icon: Scale, title: "COMPARE", text: "Veja antes de decidir." }, { icon: BookOpen, title: "ENTENDA", text: "Saiba exatamente o que recebe." }, { icon: Target, title: "DECIDA", text: "Escolha pelo que faz sentido para você." }].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-primary/15 bg-primary/5 p-5 text-center"><item.icon className="mx-auto mb-3 h-6 w-6 text-primary" /><p className="text-xs font-black tracking-widest text-primary">{item.title}</p><p className="mt-1 text-sm font-semibold text-foreground">{item.text}</p></motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-14 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_60px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><PlayCircle className="h-7 w-7" /></div>
        <div className="mb-2 flex items-center justify-center gap-2 text-accent"><Sparkles className="h-4 w-4" /><span className="text-xs font-black uppercase tracking-[0.2em]">Tire a dúvida na prática</span></div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Antes de comprar, entre na sala de aula.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Você já conhece a oferta. Agora veja como o treinamento realmente é. Assista às aulas gratuitas, observe a didática e descubra se este é o caminho que você estava procurando.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">ASSISTIR ÀS AULAS GRATUITAS →</CtaButton>
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground"><ShieldCheck className="h-4 w-4 text-accent" /> Conheça primeiro. Decida depois.</div>
      </motion.div>
      <div className="mt-10 flex justify-center text-primary"><ArrowDown className="h-6 w-6 animate-bounce" /></div>
    </div>
  </SectionWrapper>
);
export default RetargetingSection;
