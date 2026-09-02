import { motion } from "framer-motion";
import { Brain, Clock, Coins, GraduationCap, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const reasons = [
  { icon: Brain, number: "01", title: "“E se eu não conseguir?”", text: "Você não precisa dominar tudo antes de começar. O importante é ter uma sequência para aprender, praticar e evoluir." },
  { icon: GraduationCap, number: "02", title: "“Preciso saber muito antes?”", text: "Não. A proposta é acompanhar o conteúdo passo a passo e construir sua base antes de avançar para reparos mais complexos." },
  { icon: Clock, number: "03", title: "“E se eu tiver pouco tempo?”", text: "Você pode organizar os estudos de acordo com sua rotina, rever as aulas e avançar no seu próprio ritmo." },
  { icon: Coins, number: "04", title: "“Será que vale a pena?”", text: "Antes de decidir, veja as aulas gratuitas, conheça a didática e avalie o treinamento com seus próprios olhos." },
];

const DecisionJourneySection = () => (
  <SectionWrapper id="duvidas" className="relative overflow-hidden bg-background py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-primary">Talvez seja exatamente isso que está travando sua decisão</span>
        <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-5xl">Você não precisa de mais uma promessa.<span className="block text-primary">Precisa de respostas.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Se você chegou até aqui, provavelmente já pesquisou. Então vamos direto ao ponto e responder as dúvidas que normalmente aparecem antes da compra.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {reasons.map(({ icon: Icon, number, title, text }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_20px_55px_hsl(192_95%_55%/0.10)] sm:p-8">
            <span className="absolute right-5 top-4 font-display text-4xl font-black text-primary/10">{number}</span>
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
            <h3 className="font-display text-xl font-black sm:text-2xl">{title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-primary/25 bg-primary/5 p-7 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><Target className="h-7 w-7" /></div>
        <h3 className="mt-4 font-display text-2xl font-black sm:text-4xl">Não compre no escuro. Coloque o curso à prova.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Assista às aulas gratuitas, veja a didática e conheça o treinamento por dentro. Depois, decida com muito mais segurança.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO TESTAR AS AULAS GRATUITAS →</CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default DecisionJourneySection;
