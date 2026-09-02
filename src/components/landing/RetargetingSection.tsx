import { motion } from "framer-motion";
import { Check, Clock3, ArrowDown, PlayCircle, Scale, Target, BookOpen, Sparkles, XCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  ["COMPARAÇÃO", "O que realmente importa na hora de escolher?", "Uma metodologia clara, aulas bem organizadas e prática de verdade para transformar conhecimento em habilidade."],
  ["INSEGURANÇA", "E se eu estiver começando do zero?", "Você não precisa chegar pronto. O treinamento apresenta o conteúdo de forma estruturada para facilitar sua evolução."],
  ["INVESTIMENTO", "E se eu perceber que não é para mim?", "Você pode conhecer as aulas antes de decidir e ainda conta com 7 dias de garantia, conforme as condições da oferta."],
  ["TEMPO", "E se minha rotina for corrida?", "Estude no seu ritmo, reveja as aulas e organize o aprendizado de acordo com o seu tempo."],
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary"><Clock3 className="h-4 w-4" /> ⚡ NÃO DEIXE ESSA OPORTUNIDADE PASSAR</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">O próximo nível da sua manutenção começa quando você <span className="text-primary">decide agir.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Em vez de continuar na dúvida, entenda como funciona, tire suas objeções e veja se esse treinamento faz sentido para você.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {objections.map(([label, question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl border border-border bg-background/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_hsl(192_95%_55%/0.10)] sm:p-7">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105"><XCircle className="h-6 w-6" /></div>
              <span className="text-[11px] font-black tracking-[0.2em] text-primary">{label}</span>
              <h3 className="mt-2 font-display text-xl font-black text-foreground sm:text-2xl">{question}</h3>
              <div className="mt-5 w-full border-t border-border pt-5">
                <div className="flex items-start justify-center gap-3 text-left"><Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[{ icon: Scale, title: "COMPARE", text: "Veja o que realmente importa." }, { icon: BookOpen, title: "ENTENDA", text: "Conheça o treinamento por dentro." }, { icon: Target, title: "DECIDA", text: "Escolha com mais segurança." }].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center transition-all hover:border-primary/30 hover:bg-primary/10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><item.icon className="h-6 w-6" /></div>
            <p className="text-xs font-black tracking-widest text-primary">{item.title}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div id="aulas-gratis" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-14 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_60px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><PlayCircle className="h-7 w-7" /></div>
        <div className="mb-2 flex items-center justify-center gap-2 text-accent"><Sparkles className="h-4 w-4" /><span className="text-xs font-black uppercase tracking-[0.2em]">Aulas completas liberadas gratuitamente</span></div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Veja como é aprender na prática.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Assista às aulas completas liberadas gratuitamente, acompanhe a explicação e a prática e veja por dentro como o treinamento funciona.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO ASSISTIR ÀS AULAS GRATUITAS →</CtaButton>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-accent/20 bg-accent/5 p-5 text-left">
          <p className="font-display text-lg font-black text-foreground">E se depois de começar você não gostar?</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você conta com <strong className="text-foreground">7 dias de garantia</strong>, conforme as condições da oferta. Se perceber dentro desse prazo que o treinamento não faz sentido para você, poderá solicitar o cancelamento dentro do período da garantia.</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground"><span>✓ Compra segura</span><span>✓ 7 dias de garantia</span></div>
        <CtaButton href="#pricing" showIcon={false} className="mt-6">QUERO APROVEITAR A OFERTA</CtaButton>
      </motion.div>
      <div className="mt-10 flex justify-center text-primary"><ArrowDown className="h-6 w-6 animate-bounce" /></div>
    </div>
  </SectionWrapper>
);

export default RetargetingSection;
