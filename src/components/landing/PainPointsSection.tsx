import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { XCircle } from "lucide-react";
import CtaButton from "./CtaButton";

const pains = [
  "❌ Ainda troca componentes sem saber onde está o defeito?",
  "❌ Tem medo de fazer microssoldagem e danificar a placa?",
  "❌ Precisa terceirizar reparos em placa e perder lucro?",
  "❌ Não consegue encontrar curtos, consumos ou falhas complexas?",
  "❌ Seus serviços estão limitados a tela, bateria e conector?",
  "❌ Quer se tornar um especialista, mas não sabe por onde começar?",
];

const PainPointsSection = () => (
  <SectionWrapper className="py-20">
    <div className="mx-auto max-w-4xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
          Você se identifica com <span className="text-gradient">alguma dessas situações?</span>
        </h2>
        <p className="text-muted-foreground">
          Você acaba perdendo tempo, dinheiro e a confiança do cliente por não dominar o diagnóstico eletrônico.
        </p>
      </motion.div>

      <div className="space-y-4 mb-12">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4 sm:p-5"
          >
            <XCircle className="h-6 w-6 shrink-0 text-destructive" />
            <p className="text-sm sm:text-base font-medium text-foreground">{pain}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 sm:p-8 text-center"
      >
        <p className="text-lg sm:text-xl font-bold text-accent mb-2">
          💪 A mudança começa agora!
        </p>
        <p className="text-muted-foreground">
          Milhares de pessoas já transformaram suas vidas com manutenção de celulares. Você pode ser o próximo.
        </p>
      </motion.div>
      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO DOMINAR REPAROS EM PLACA!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default PainPointsSection;
