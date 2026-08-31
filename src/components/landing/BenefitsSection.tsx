import { Search, Zap, Cpu, TrendingUp, Award, Laptop } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const benefits = [
  { 
    icon: Search, 
    title: "DIAGNÓSTICO AVANÇADO", 
    desc: <>Aprenda a analisar a placa em nível profundo, interpretar medições e encontrar a <span className="text-accent font-semibold">causa real dos defeitos.</span></>
  },
  { 
    icon: Zap, 
    title: "MICROSSOLDAGEM DE VERDADE", 
    desc: <>Domine <span className="text-accent font-semibold">técnicas profissionais</span> de microssoldagem, retrabalho, remoção e substituição de componentes SMD.</>
  },
  { 
    icon: Cpu, 
    title: "REPAROS EM PLACAS", 
    desc: <>Repare <span className="text-accent font-semibold">falhas complexas</span> em Android e iPhone que outros técnicos não conseguem resolver.</>
  },
  { 
    icon: TrendingUp, 
    title: "SERVIÇOS DE ALTO VALOR", 
    desc: <>Execute serviços avançados, cobre mais por isso e <span className="text-accent font-semibold">aumente seu faturamento</span> de forma consistente.</>
  },
  { 
    icon: Award, 
    title: "TORNE-SE REFERÊNCIA", 
    desc: <>Seja reconhecido como especialista em reparos de placa e <span className="text-accent font-semibold">conquiste clientes que pagam o seu valor.</span></>
  },
  { 
    icon: Laptop, 
    title: "100% PRÁTICO E DIRETO AO PONTO", 
    desc: <>Aulas passo a passo, com casos reais, esquemas, medições e técnicas que você aplica <span className="text-accent font-semibold">desde o primeiro dia.</span></>
  },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" className="py-20 bg-deep-blue relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-25 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
    </div>
    <div className="relative mx-auto max-w-6xl px-4">
      <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
        Por que aprender <br className="sm:hidden" />
        <span className="text-gradient">Microssoldagem e Reparos Avançados?</span>
      </h2>
      <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
        Domine o diagnóstico eletrônico, aprenda a reparar placas com precisão e se destaque como <span className="text-accent font-semibold">um especialista altamente valorizado.</span>
      </p>
      <div className="mx-auto max-w-2xl space-y-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 rounded-xl border border-white/10 bg-card/30 p-5 backdrop-blur-sm"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <b.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground sm:text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base leading-snug">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO SER UM ESPECIALISTA!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default BenefitsSection;