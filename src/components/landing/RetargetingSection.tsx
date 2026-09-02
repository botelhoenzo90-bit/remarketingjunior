import { motion } from "framer-motion";
import { Check, ArrowDown, PlayCircle, XCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  ["COMPARAÇÃO", "“Como saber se este curso é diferente?”", "Não escolha só pela promessa. Veja a metodologia, a plataforma e as aulas antes de decidir."],
  ["INSEGURANÇA", "“E se eu estiver começando do zero?”", "Você não precisa chegar pronto. A proposta é seguir uma estrutura organizada e evoluir passo a passo."],
  ["INVESTIMENTO", "“E se eu comprar e me arrepender?”", "Você pode conhecer as aulas antes de comprar e ainda conta com 7 dias de garantia, conforme as condições da oferta."],
  ["TEMPO", "“E se minha rotina for corrida?”", "Você pode organizar seus estudos, rever as aulas e avançar de acordo com o tempo que tem disponível."],
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary">⚡ NÃO COMPRE NO ESCURO</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Você já pesquisou.<span className="block text-primary">Agora, tire o que ainda está travando você.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Em vez de continuar comparando promessas, veja evidências: conheça a plataforma, assista às aulas e responda suas principais dúvidas antes de decidir.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {objections.map(([label, question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl border border-border bg-background/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_hsl(192_95%_55%/0.10)] sm:p-7">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><XCircle className="h-6 w-6" /></div>
              <span className="text-[11px] font-black tracking-[0.2em] text-primary">{label}</span>
              <h3 className="mt-2 font-display text-xl font-black text-foreground sm:text-2xl">{question}</h3>
              <div className="mt-5 w-full border-t border-border pt-5"><div className="flex items-start justify-center gap-3 text-left"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">{answer}</p></div></div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div id="aulas-gratis" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-14 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_60px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><PlayCircle className="h-7 w-7" /></div>
        <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-accent">3 aulas completas liberadas gratuitamente</div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Antes de comprar, veja como é aprender na prática.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Assista às aulas, acompanhe a explicação e veja a didática do treinamento com seus próprios olhos.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO TESTAR AS AULAS →</CtaButton>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-accent/20 bg-accent/5 p-5 text-left"><p className="font-display text-lg font-black text-foreground">E se depois de começar você mudar de ideia?</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você conta com <strong className="text-foreground">7 dias de garantia</strong>, conforme as condições da oferta. Assim, a decisão fica muito mais segura.</p></div>
        <CtaButton href="#pricing" showIcon={false} className="mt-6">VER A CONDIÇÃO ATUAL</CtaButton>
      </motion.div>
      <div className="mt-10 flex justify-center text-primary"><ArrowDown className="h-6 w-6 animate-bounce" /></div>
    </div>
  </SectionWrapper>
);

export default RetargetingSection;
