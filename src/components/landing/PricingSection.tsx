import { motion } from "framer-motion";
import { Check, Zap, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import garantiaSelo from "@/assets/garantia-selo.png";

const features = [
  "Acesso ao curso completo",
  "+100 aulas em vídeo HD passo a passo",
  "Reparos de telas, baterias, câmeras e conectores",
  "Desoxidação, software, diagnóstico e eletrônica",
  "Micro soldagem, reballing, jumper e reparos em placa",
  "Reparos em placa Android e iPhone",
  "5 bônus exclusivos",
  "Comunidade VIP + suporte direto",
  "Atualizações gratuitas vitalícias",
  "Certificado profissional de conclusão",
];

const PricingSection = () => (
  <SectionWrapper id="pricing" className="relative overflow-hidden bg-radial-accent py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="relative mx-auto max-w-4xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent"><Zap className="h-4 w-4" /> Agora você já sabe o que está recebendo</span>
        <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">Se o treinamento faz sentido para você,<span className="block text-accent">esta é a condição atual.</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Você viu por dentro, conheceu a proposta e pode assistir às aulas gratuitas. Agora veja o acesso completo.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-visible rounded-3xl border-2 border-primary/70 bg-card shadow-[0_0_55px_hsl(192_95%_55%/0.16)]">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"><span className="whitespace-nowrap rounded-full bg-accent px-5 py-2.5 font-display text-xs font-black text-accent-foreground shadow-lg sm:text-sm">⚡ CONDIÇÃO ESPECIAL</span></div>
        <div className="grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 pt-10 sm:p-9 sm:pt-12">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-primary">MESTRE DA MANUTENÇÃO</p>
            <h3 className="font-display text-2xl font-black sm:text-3xl">O treinamento completo para evoluir na manutenção de celulares.</h3>
            <div className="mt-7 space-y-3">{features.map((f) => <div key={f} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{f}</span></div>)}</div>
          </div>

          <div className="flex flex-col justify-center border-t border-border bg-background/60 p-6 text-center lg:border-l lg:border-t-0 sm:p-9">
            <p className="text-sm font-bold text-destructive line-through">De R$ 697,00</p>
            <p className="mt-2 text-sm text-muted-foreground">Hoje, por apenas</p>
            <p className="font-display text-6xl font-black leading-none text-accent sm:text-7xl">R$ 147</p>
            <p className="mt-2 text-sm text-muted-foreground">ou 12x de <strong className="text-foreground">R$ 12,25</strong></p>
            <p className="mx-auto mt-4 rounded-full bg-accent/10 px-4 py-2 text-sm font-black text-accent">Você economiza R$ 550,00</p>
            <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-7 w-full py-5 text-base sm:text-lg">QUERO COMEÇAR AGORA <ArrowRight className="h-5 w-5" /></CtaButton>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Pagamento seguro via cartão ou PIX</p>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 text-[11px] font-bold text-muted-foreground"><span className="flex flex-col items-center gap-1"><ShieldCheck className="h-5 w-5 text-primary" />7 dias</span><span className="flex flex-col items-center gap-1"><Zap className="h-5 w-5 text-primary" />Acesso imediato</span><span className="flex flex-col items-center gap-1"><Check className="h-5 w-5 text-primary" />Bônus</span></div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-accent/20 bg-card p-6 sm:flex-row sm:p-7">
        <img src={garantiaSelo} alt="Selo de Garantia de 7 Dias" className="h-24 w-24 shrink-0" />
        <div className="text-center sm:text-left"><h3 className="font-display text-xl font-black">Você pode conhecer e decidir com segurança.</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você conta com 7 dias de garantia. Se dentro desse prazo perceber que o treinamento não faz sentido para você, solicite o reembolso conforme as condições da garantia.</p></div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default PricingSection;
