import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Gift } from "lucide-react";
import CtaButton from "./CtaButton";

import imgAssistencia from "@/assets/bonus/assistencia.jpg";
import imgClientes from "@/assets/bonus/clientes.jpg";
import imgFornecedores from "@/assets/bonus/fornecedores.jpg";
import imgComunidade from "@/assets/bonus/comunidade.jpg";
import imgAtualizacoes from "@/assets/bonus/atualizacoes.jpg";

const bonuses = [
  { image: imgAssistencia, title: "Kit Primeira Assistência", oldPrice: "R$ 297", desc: "Guia completo para montar sua primeira assistência técnica em casa ou loja." },
  { image: imgClientes, title: "Método Turbinado de Clientes", oldPrice: "R$ 397", desc: "Estratégias testadas para atrair clientes via Instagram, WhatsApp e parcerias." },
  { image: imgFornecedores, title: "Mapa dos Fornecedores Secretos", oldPrice: "R$ 197", desc: "Lista pessoal dos melhores fornecedores. Economize até 50% em peças." },
  { image: imgComunidade, title: "Comunidade VIP WhatsApp", oldPrice: "R$ 497", desc: "Acesso vitalício ao grupo exclusivo de alunos. Networking e suporte." },
  { image: imgAtualizacoes, title: "Atualizações Vitalícias", oldPrice: "R$ 297", desc: "Novos módulos e técnicas sempre que o curso for atualizado." },
];

const BonusSection = () => (
  <SectionWrapper className="py-20 bg-radial-top">
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground uppercase tracking-wider">
          <Gift className="h-4 w-4" />
          Bônus exclusivos
        </span>
      </div>
      <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
        5 Bônus Especiais <span className="text-gradient">GRÁTIS</span>
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        Presentes que vão acelerar seus resultados • Valor total:{" "}
        <span className="font-bold text-foreground line-through">R$ 1.685</span>{" "}
        <span className="font-bold text-accent">GRÁTIS</span>
      </p>
      <div className="space-y-4">
        {bonuses.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover flex flex-col sm:flex-row items-center gap-5 rounded-xl border border-accent/30 bg-card p-4 text-center sm:text-left"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden">
              <img src={b.image} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base font-semibold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm text-destructive font-semibold line-through">{b.oldPrice}</p>
              <p className="font-display text-lg font-bold text-accent">GRÁTIS</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <span className="inline-block rounded-lg bg-destructive/20 border border-destructive/40 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-destructive whitespace-nowrap">
          ⚠️ ATENÇÃO: Bônus disponíveis apenas hoje!
        </span>
      </div>
      <div className="mt-8 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO GARANTIR MEUS BÔNUS!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default BonusSection;
