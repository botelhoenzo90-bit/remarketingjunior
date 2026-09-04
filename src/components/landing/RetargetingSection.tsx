import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const doubts = [
  { title: "“Será que eu vou conseguir?”", text: "Você não precisa chegar sabendo. O treinamento organiza o aprendizado para você entender a base, praticar e avançar aos poucos." },
  { title: "“Já vi vários cursos. Qual é a diferença?”", text: "Em vez de escolher só pela promessa, você pode ver a plataforma e assistir às aulas gratuitas antes de decidir." },
  { title: "“E se eu comprar e me arrepender?”", text: "A compra conta com 7 dias de garantia, conforme as condições da oferta. Isso reduz o risco de tomar uma decisão sem conhecer o conteúdo." },
  { title: "“Minha rotina é corrida. Vou conseguir acompanhar?”", text: "As aulas ficam online para você organizar os estudos de acordo com a sua disponibilidade e rever o conteúdo quando precisar." },
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary">A dúvida faz parte da decisão</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Se você ainda não comprou,<span className="block text-primary">provavelmente existe uma pergunta sem resposta.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Se ainda existe alguma insegurança, vamos colocar as principais dúvidas na mesa e mostrar o que você encontra dentro do treinamento.</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {doubts.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="rounded-3xl border border-border bg-background p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_hsl(192_95%_55%/0.08)] sm:p-8">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
            <h3 className="font-display text-xl font-black text-foreground sm:text-2xl">{item.title}</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-4xl rounded-3xl border border-accent/25 bg-accent/5 p-7 text-center sm:p-9">
        <ShieldCheck className="mx-auto h-8 w-8 text-accent" />
        <h3 className="mt-3 font-display text-2xl font-black sm:text-3xl">A melhor forma de decidir é conhecer.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Por isso, você pode assistir às aulas gratuitas e ver a proposta do treinamento antes de chegar à oferta.</p>
        <CtaButton href="#aulas-gratis" className="mt-6">ASSISTIR AULAS GRÁTIS →</CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default RetargetingSection;
