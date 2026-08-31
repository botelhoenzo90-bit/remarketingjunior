import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { Check, Zap, Clock, Shield, Lock } from "lucide-react";
import garantiaSelo from "@/assets/garantia-selo.png";

const features = [
  "Acesso por 1 ano ao curso completo",
  "+100 aulas em vídeo HD passo a passo",
  "Todos os reparos: telas, baterias, câmeras, conectores...",
  "Técnicas de desoxidação e software",
  "BÔNUS: Kit Primeira Assistência",
  "BÔNUS: Método Turbinado de Clientes",
  "BÔNUS: Mapa dos Fornecedores Secretos",
  "BÔNUS: Comunidade VIP WhatsApp",
  "BÔNUS: Atualizações Gratuitas Vitalícias",
  "Certificado de conclusão profissional",
  "Suporte direto com Júnior Bezerra",
];

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 33 * 60 + 23);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);
  return {
    hours: String(Math.floor(timeLeft / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0"),
    seconds: String(timeLeft % 60).padStart(2, "0"),
  };
};

const PricingSection = () => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <SectionWrapper id="pricing" className="py-20 bg-radial-accent sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-7 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-destructive/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-destructive"><Zap className="h-4 w-4" /> Condição promocional por tempo limitado</span>
          <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">Chegou a hora de decidir.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Se as aulas gratuitas fizeram sentido para você, aqui está o acesso ao treinamento completo com todos os bônus e a garantia de 7 dias.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 rounded-xl bg-destructive/90 px-4 py-4 text-center">
          <p className="mb-1 font-display text-sm font-black uppercase tracking-wider text-destructive-foreground">🔥 A condição atual pode ser encerrada a qualquer momento</p>
          <p className="mb-2 text-xs text-destructive-foreground/85">Tempo restante da condição exibida nesta página:</p>
          <div className="flex items-center justify-center gap-1">
            {[{ v: hours, l: "HRS" }, { v: minutes, l: "MIN" }, { v: seconds, l: "SEG" }].map((t, i) => (
              <div key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-sm font-bold text-destructive-foreground">:</span>}
                <div className="rounded-md bg-destructive-foreground/20 px-2 py-0.5 text-center"><span className="font-display text-lg font-bold text-destructive-foreground">{t.v}</span><p className="text-[9px] text-destructive-foreground/70">{t.l}</p></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-visible rounded-2xl border-[3px] border-primary shadow-[0_0_40px_hsl(192_95%_55%/0.3),0_0_80px_hsl(192_95%_55%/0.15)]">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-10"><span className="rounded-full bg-accent px-5 py-2 font-display text-xs font-black text-accent-foreground shadow-lg sm:text-sm whitespace-nowrap">⚡ CONDIÇÃO ESPECIAL ATIVA</span></div>
          <div className="px-6 pt-6 pb-4 text-center rounded-t-2xl bg-card"><p className="font-display text-lg font-bold text-foreground">Mestre da Manutenção</p></div>
          <div className="bg-card p-8 text-center rounded-b-2xl">
            <p className="mb-1 text-sm text-destructive font-bold line-through">De R$ 697,00</p>
            <p className="mb-1 text-sm text-muted-foreground">Por apenas</p>
            <p className="font-display text-6xl font-black text-accent">R$ 147</p>
            <p className="mb-6 text-sm text-muted-foreground">ou 12x de <span className="font-semibold text-foreground">R$ 12,25</span></p>
            <p className="mb-6 rounded-md bg-accent/10 px-4 py-2 text-sm font-semibold text-accent inline-block">Economia de R$ 550,00</p>
            <div className="mb-8 space-y-3 text-left max-w-sm mx-auto">{features.map((f) => <div key={f} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span className="text-sm text-muted-foreground">{f}</span></div>)}</div>
            <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="w-full max-w-sm text-base py-5 whitespace-nowrap">QUERO COMEÇAR AGORA →</CtaButton>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3 w-3" /> Pagamento 100% seguro via cartão ou PIX</p>
            <div className="mt-6 border-t border-border pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground"><span className="flex flex-col items-center gap-1"><Shield className="h-5 w-5 text-primary" /> Compra Segura</span><span className="flex flex-col items-center gap-1"><Clock className="h-5 w-5 text-primary" /> 7 Dias Garantia</span><span className="flex flex-col items-center gap-1"><Zap className="h-5 w-5 text-primary" /> Acesso Imediato</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 rounded-xl border border-accent/20 bg-card p-6 flex flex-col sm:flex-row items-center gap-6">
          <img src={garantiaSelo} alt="Selo de Garantia 7 Dias" className="h-28 w-28 shrink-0" />
          <div className="text-center sm:text-left"><h3 className="mb-2 font-display text-xl font-bold text-foreground">Garantia Incondicional de 7 Dias</h3><p className="mb-3 text-sm text-muted-foreground">Se por qualquer motivo você achar que o curso não é pra você, basta enviar um email em até 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.</p><p className="text-sm text-primary">🤝 Você pode conhecer o treinamento e decidir com segurança.</p></div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
