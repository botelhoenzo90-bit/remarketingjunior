import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Gift, CheckCircle2 } from "lucide-react";
import CtaButton from "./CtaButton";

import imgAssistencia from "@/assets/bonus/assistencia.jpg";
import imgClientes from "@/assets/bonus/clientes.jpg";
import imgFornecedores from "@/assets/bonus/fornecedores.jpg";
import imgComunidade from "@/assets/bonus/comunidade.jpg";
import imgAtualizacoes from "@/assets/bonus/atualizacoes.jpg";

const bonuses = [
  { image: imgAssistencia, title: "Kit Primeira Assistência", desc: "Material para ajudar você a estruturar os primeiros passos de uma assistência técnica." },
  { image: imgClientes, title: "Método Turbinado de Clientes", desc: "Conteúdo com estratégias para divulgar seus serviços e buscar novos clientes." },
  { image: imgFornecedores, title: "Mapa dos Fornecedores", desc: "Uma referência para facilitar sua pesquisa por peças e fornecedores." },
  { image: imgComunidade, title: "Comunidade VIP WhatsApp", desc: "Um espaço para acompanhar outros alunos e ter suporte durante a jornada." },
  { image: imgAtualizacoes, title: "Atualizações do Conteúdo", desc: "Acompanhe novas aulas e atualizações disponibilizadas para o treinamento." },
];

const BonusSection = () => (
  <SectionWrapper id="bonus" className="bg-radial-top py-20 sm:py-28">
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-5 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black uppercase tracking-wider text-accent-foreground"><Gift className="h-4 w-4" /> E ainda tem mais</span></div>
      <h2 className="text-center font-display text-3xl font-black leading-tight sm:text-5xl">Além do curso, você recebe <span className="text-gradient">5 bônus.</span></h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">Materiais complementares para ajudar você a organizar a bancada, buscar clientes, encontrar fornecedores e continuar evoluindo.</p>

      <div className="mt-10 space-y-4">
        {bonuses.map((bonus, i) => (
          <motion.article key={bonus.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex flex-col items-center gap-5 rounded-2xl border border-accent/20 bg-card p-5 text-center sm:flex-row sm:text-left sm:p-6">
            <img src={bonus.image} alt={bonus.title} className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24" loading="lazy" />
            <div className="min-w-0 flex-1"><p className="mb-1 text-xs font-black uppercase tracking-wider text-accent">BÔNUS {String(i + 1).padStart(2, "0")}</p><h3 className="font-display text-lg font-black sm:text-xl">{bonus.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{bonus.desc}</p></div>
            <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-black text-accent"><CheckCircle2 className="h-4 w-4" /> INCLUSO</div>
          </motion.article>
        ))}
      </div>

      <div className="mt-9 text-center"><p className="text-sm font-semibold text-muted-foreground">Os bônus entram junto com o acesso ao treinamento, conforme a oferta atual.</p><CtaButton href="#pricing" className="mt-6">QUERO VER A OFERTA COMPLETA →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default BonusSection;
