import { motion } from "framer-motion";
import { Check, Clock3, ShieldCheck, XCircle, ArrowDown, PlayCircle, Scale, Target, BookOpen, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const objections = [
  ["COMPARAÇÃO", "“Já vi vários cursos. O que realmente importa na escolha?”", "Não escolha apenas pelo que é prometido. Observe a didática, a organização das aulas, a prática e o suporte. É isso que transforma informação em aprendizado."],
  ["INSEGURANÇA", "“E se eu começar sem saber praticamente nada?”", "Você não precisa chegar pronto. O treinamento apresenta o conhecimento de forma estruturada para que você entenda cada etapa e avance com mais confiança."],
  ["INVESTIMENTO", "“E se eu investir e perceber que não era para mim?”", "Antes de decidir, você pode assistir às aulas gratuitas. E, conforme as condições da oferta, ainda existe garantia de 7 dias para conhecer o treinamento com tranquilidade."],
  ["TEMPO", "“Minha rotina não deixa espaço para mais uma coisa.”", "Você pode estudar no seu ritmo, voltar às aulas e organizar seu aprendizado de acordo com a sua rotina. O momento perfeito quase nunca chega — o importante é começar de forma possível."],
];

const RetargetingSection = () => (
  <SectionWrapper id="decida" className="relative overflow-hidden border-y border-primary/10 bg-card py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary"><Clock3 className="h-4 w-4" /> Uma decisão importante merece clareza</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Enquanto você continua pensando,<span className="block text-primary">outras pessoas já estão aprendendo e colocando a mão na prática.</span></h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Talvez você esteja esperando o momento certo, comparando opções ou tentando entender se este é realmente o caminho. Então não decida pela dúvida. <strong className="text-foreground">Veja, compare e tire suas próprias conclusões.</strong></p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO VER POR DENTRO</CtaButton>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {objections.map(([label, question, answer], i) => (
          <motion.div key={question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background/90 p-5 sm:p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3"><XCircle className="h-5 w-5 shrink-0 text-red-500" /><span className="text-xs font-black tracking-widest text-red-500">{label}</span></div>
            <h3 className="font-display text-lg font-black text-foreground sm:text-xl">{question}</h3>
            <div className="mt-5 border-t border-border pt-5"><div className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><p className="text-sm font-medium leading-relaxed text-green-500 sm:text-base">{answer}</p></div></div>
            <CtaButton href="#aulas-gratis" showIcon={false} className="mt-5 w-full py-3 text-sm">VER COMO FUNCIONA →</CtaButton>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {[{ icon: Scale, title: "COMPARE", text: "Não escolha no escuro." }, { icon: BookOpen, title: "ENTENDA", text: "Veja o treinamento por dentro." }, { icon: Target, title: "DECIDA", text: "Escolha com segurança." }].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-primary/15 bg-primary/5 p-5 text-center"><item.icon className="mx-auto mb-3 h-6 w-6 text-primary" /><p className="text-xs font-black tracking-widest text-primary">{item.title}</p><p className="mt-1 text-sm font-semibold text-foreground">{item.text}</p></motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-14 max-w-4xl rounded-3xl border-2 border-primary/30 bg-background p-7 text-center shadow-[0_0_60px_hsl(192_95%_55%/0.08)] sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><PlayCircle className="h-7 w-7" /></div>
        <div className="mb-2 flex items-center justify-center gap-2 text-accent"><Sparkles className="h-4 w-4" /><span className="text-xs font-black uppercase tracking-[0.2em]">Aulas completas liberadas gratuitamente</span></div>
        <h3 className="font-display text-2xl font-black sm:text-4xl">Não fique apenas imaginando como é. Veja por dentro.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Eu liberei aulas completas gratuitamente para você entender como o curso funciona de verdade. Assista, acompanhe a explicação e a prática e veja se a metodologia faz sentido para você.</p>
        <CtaButton href="#aulas-gratis" className="mt-7">QUERO ASSISTIR ÀS AULAS GRATUITAS →</CtaButton>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-accent/20 bg-accent/5 p-5 text-left">
          <p className="font-display text-lg font-black text-foreground">E se depois de começar você não gostar?</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você conta com <strong className="text-foreground">7 dias de garantia</strong>, conforme as condições da oferta. Se dentro desse prazo você perceber que o treinamento não faz sentido para você, não gostou da experiência ou não conseguiu acompanhar como esperava, poderá solicitar o cancelamento dentro do período da garantia.</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground"><span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-green-500" /> Compra segura</span><span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> 7 dias de garantia</span></div>
        <CtaButton href="#pricing" showIcon={false} className="mt-6">QUERO APROVEITAR A OFERTA</CtaButton>
      </motion.div>
      <div className="mt-10 flex justify-center text-primary"><ArrowDown className="h-6 w-6 animate-bounce" /></div>
    </div>
  </SectionWrapper>
);
export default RetargetingSection;
