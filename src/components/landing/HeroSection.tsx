import { motion } from "framer-motion";
import { Smartphone, ArrowDown, PlayCircle } from "lucide-react";
import CtaButton from "./CtaButton";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import vslCover from "@/assets/vsl-cover.png";

const marqueeItems = ["🔒 COMPRA SEGURA", "✅ 7 DIAS DE GARANTIA", "⚡ ACESSO IMEDIATO", "🎓 +1.000 ALUNOS FORMADOS"];

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-background">
      <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/65 to-background" />
    </div>
    <div className="pointer-events-none absolute left-1/2 top-[58%] h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[120px] sm:h-[680px] sm:w-[1200px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55% / 0.8), hsl(192 95% 55% / 0.22) 42%, transparent 72%)" }} />
    <div className="absolute left-0 right-0 top-0 h-1 bg-primary" />

    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-7 text-center sm:pt-10">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-5 flex items-center justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10"><Smartphone className="h-5 w-5 text-primary" /></div>
        <div className="text-left"><p className="font-display text-sm font-black uppercase leading-tight tracking-wider text-foreground">MESTRE DA</p><p className="font-display text-sm font-black uppercase leading-tight tracking-wider text-accent">MANUTENÇÃO</p></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-accent sm:px-5 sm:text-sm">⚡ VOCÊ JÁ VIU O MESTRE DA MANUTENÇÃO. AGORA VEJA SE ELE É PARA VOCÊ.</motion.div>

      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }} className="mx-auto mb-5 max-w-5xl font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        Antes de decidir, <span className="text-gradient">veja o treinamento por dentro.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Você já pesquisou, comparou ou simplesmente ficou pensando se vale a pena. <strong className="text-foreground">Não precisa comprar no escuro.</strong> Assista à apresentação, conheça a plataforma e tire suas dúvidas antes de tomar sua decisão.
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55, duration: 0.5 }} className="mx-auto mb-7 max-w-4xl">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary sm:text-sm"><PlayCircle className="h-4 w-4" /> ASSISTA ANTES DE DECIDIR</div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-primary/80 bg-card shadow-[0_0_45px_hsl(192_95%_55%/0.28),0_0_100px_hsl(192_95%_55%/0.12)] sm:rounded-3xl">
          <img src={vslCover} alt="Apresentação Mestre da Manutenção" className="absolute inset-0 h-full w-full object-cover" />
          <iframe src="https://www.youtube.com/embed/3ONlCDPSsEY?rel=0" title="Apresentação Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }} className="mb-5"><CtaButton href="#aulas-gratis" className="w-full max-w-md px-6 py-5 text-base sm:text-lg">QUERO CONHECER POR DENTRO →</CtaButton></motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mb-5 flex items-center justify-center gap-3">
        <div className="flex -space-x-2">{[avatar1, avatar2, avatar3, avatar4].map((src, i) => <img key={i} src={src} alt="Aluno" className="h-8 w-8 rounded-full border-2 border-background object-cover ring-1 ring-primary/40" />)}</div>
        <p className="text-xs font-bold text-primary sm:text-sm">+1.000 alunos formados</p>
      </motion.div>

      <a href="#aulas-gratis" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary sm:text-sm">Prefere testar antes? Veja as aulas gratuitas <ArrowDown className="h-4 w-4" /></a>
    </div>

    <div className="relative z-10 w-full overflow-hidden bg-primary py-2.5"><div className="marquee-track flex whitespace-nowrap gap-8">{[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => <span key={i} className="px-4 text-xs font-black tracking-wide text-primary-foreground sm:text-sm">{item}</span>)}</div></div>
  </section>
);

export default HeroSection;
