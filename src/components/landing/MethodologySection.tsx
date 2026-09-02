import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BookOpen, Wrench, DollarSign, Home, TrendingUp, Rocket } from "lucide-react";
import CtaButton from "./CtaButton";

const steps = [
  { letter: "F", icon: BookOpen, title: "Fundamentos Lucrativos", desc: "Aprenda rápido e na prática os serviços com maior demanda e retorno no mercado" },
  { letter: "A", icon: Wrench, title: "Aprenda Fazendo", desc: "Passo a passo prático para ganhar segurança e confiança desde o início" },
  { letter: "T", icon: DollarSign, title: "Técnicas que Dão Dinheiro Rápido", desc: "Truques e segredos que colocam dinheiro no seu bolso já nos primeiros dias" },
  { letter: "U", icon: Home, title: "Use o que Você Tem", desc: "Como começar mesmo de casa, sem gastar muito no início" },
  { letter: "R", icon: TrendingUp, title: "Resultado e Escala", desc: "Como atrair clientes todos os dias e crescer de forma consistente" },
  { letter: "A", icon: Rocket, title: "Acelere seus Lucros", desc: "Estratégias para multiplicar seus ganhos e aumentar ticket médio" },
];

const MethodologySection = () => (
  <SectionWrapper id="metodologia" className="py-20 bg-radial-accent">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="mb-2 text-center font-display text-3xl font-bold sm:text-4xl">
        METODOLOGIA <span className="text-gradient-accent">F.A.T.U.R.A.</span>
      </h2>
      <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
        Um método de 6 passos para sair do zero e faturar seus primeiros R$ 5.000 a R$ 7.000 por mês consertando celulares
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.letter + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover relative rounded-xl border border-border bg-card p-6"
          >
            <span className="absolute -top-3 -left-2 font-display text-5xl font-black text-primary/10">
              {i + 1}
            </span>
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="font-display text-2xl font-bold text-primary">{s.letter}</span>
            </div>
            <h3 className="mb-2 font-display text-base font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO USAR O MÉTODO F.A.T.U.R.A.!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default MethodologySection;
