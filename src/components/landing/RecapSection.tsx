import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Check } from "lucide-react";
import CtaButton from "./CtaButton";

const items = [
  "Troca de Telas, Baterias, Câmeras e Conectores",
  "Tampa Traseira, Botões e Antenas",
  "Desoxidação e Software",
  "Microfones, Alto-falantes e Sensores Biométricos",
  "Placas, Circuitos e Diagnóstico Avançado",
  "Ferramentas Essenciais e Calibração",
  "Lista de Fornecedores Confiáveis",
  "Multímetro, Fonte e Eletrônica",
  "Micro Soldagem, Reballing e Jumper",
  "CPU, Memória NAND e Swap",
  "Reparos em Placa Android Completo",
  "Reparos em Placa iPhone Completo",
  "Face ID, Interpuser e Separação de Placas",
  "5 Bônus Exclusivos (valor +R$ 1.685)",
  "Certificado Profissional de Conclusão",
  "Comunidade VIP + Suporte Direto",
  "Atualizações Vitalícias Gratuitas",
];

const RecapSection = () => (
  <SectionWrapper className="py-20 bg-deep-blue relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(142 76% 46%), transparent 70%)" }} />
    </div>
    <div className="relative mx-auto max-w-3xl px-4">
      <h2 className="mb-3 text-center font-display text-3xl font-bold sm:text-4xl">
        Recapitulando: <span className="text-gradient-accent">tudo isso está incluso</span>
      </h2>
      <p className="mb-10 text-center text-muted-foreground">
        Veja o pacote completo que você vai receber ao se inscrever hoje:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-lg border border-border bg-card/50 px-4 py-3"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-sm text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-6 text-lg font-bold text-foreground">
          Tudo isso por apenas <span className="text-accent text-2xl">R$ 147</span>{" "}
          <span className="text-sm text-destructive line-through">R$ 697</span>
        </p>
        <CtaButton className="whitespace-nowrap">QUERO TUDO ISSO AGORA!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default RecapSection;
