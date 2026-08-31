import { motion } from "framer-motion";
import { Smartphone, ArrowDown } from "lucide-react";
import CtaButton from "./CtaButton";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import vslCover from "@/assets/vsl-cover.png";

const marqueeItems = ["🔒 Compra Segura", "✅ 7 Dias de Garantia", "⚡ Acesso Imediato", "🎓 +1.000 Alunos Formados"];

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-background">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.4) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
    </div>
    <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] sm:w-[1200px] sm:h-[700px] rounded-full opacity-50 blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), hsl(192 95% 55% / 0.4) 40%, transparent 70%)" }} />
    <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

    <div className="relative z-10 mx-auto max-w-5xl px-4 pt-6 pb-8 text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-4 flex items-center justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10"><Smartphone className="h-5 w-5 text-primary" /></div>
        <div className="text-left"><p className="font-display text-sm font-bold uppercase tracking-wider text-foreground leading-tight">MESTRE DA</p><p className="font-display text-sm font-bold uppercase tracking-wider text-accent leading-tight">MANUTENÇÃO</p></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent">
        🔥 OFERTA ESPECIAL PARA QUEM AINDA ESTÁ DECIDINDO
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mb-5 text-xl font-extrabold leading-[1.12] tracking-tight sm:text-3xl md:text-5xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Você já pensou em aprender manutenção de celulares, mas ainda está adiando?
        <span className="block mt-2 text-primary">Veja como transformar conhecimento em serviços de alto valor.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Conheça o <span className="font-bold text-foreground">Mestre da Manutenção</span>, assista às aulas gratuitas e veja por dentro como funciona o treinamento de manutenção de celulares e reparo em placa.
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="mx-auto mb-7 max-w-3xl overflow-hidden rounded-2xl border-2 border-primary shadow-[0_0_40px_hsl(192_95%_55%/0.4),0_0_80px_hsl(192_95%_55%/0.2)]">
        <div className="relative aspect-video"><img src={vslCover} alt="Capa VSL" className="absolute inset-0 h-full w-full object-cover" /><iframe src="https://www.youtube.com/embed/3ONlCDPSsEY?rel=0" title="VSL Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-4">
        <CtaButton className="text-sm sm:text-lg px-6 sm:px-10 py-5 whitespace-nowrap">QUERO APRENDER MANUTENÇÃO →</CtaButton>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex items-center justify-center gap-3 mb-5">
        <div className="flex -space-x-2">{[avatar1, avatar2, avatar3, avatar4].map((src, i) => <img key={i} src={src} alt="Aluno" className="h-8 w-8 rounded-full border-2 border-primary/60 object-cover" />)}</div>
        <p className="text-xs sm:text-sm font-bold text-primary">+1.000 alunos formados</p>
      </motion.div>
      <a href="#aulas-gratis" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary">Quer ver antes de decidir? <ArrowDown className="h-4 w-4" /></a>
    </div>

    <div className="relative z-10 w-full bg-primary py-2.5 overflow-hidden"><div className="marquee-track flex whitespace-nowrap gap-8">{[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => <span key={i} className="text-sm font-bold text-primary-foreground px-4">{item}</span>)}</div></div>
  </section>
);

export default HeroSection;
