import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import t1 from "@/assets/testimonial-1.png";
import t2 from "@/assets/testimonial-2.png";
import t3 from "@/assets/testimonial-3.png";
import t4 from "@/assets/testimonial-4.png";
import t5 from "@/assets/testimonial-5.png";
import t6 from "@/assets/testimonial-6.png";
import t7 from "@/assets/testimonial-7.png";
import t8 from "@/assets/testimonial-8.png";
import t9 from "@/assets/testimonial-9.png";
import t10 from "@/assets/testimonial-10.png";
import tn1 from "@/assets/t-new-1.png.asset.json";
import tn2 from "@/assets/t-new-2.png.asset.json";
import tn3 from "@/assets/t-new-3.png.asset.json";
import tn4 from "@/assets/t-new-4.png.asset.json";
import tn5 from "@/assets/t-new-5.png.asset.json";
import tn6 from "@/assets/t-new-6.png.asset.json";
import tn7 from "@/assets/t-new-7.png.asset.json";
import tn8 from "@/assets/t-new-8.png.asset.json";
import tn9 from "@/assets/t-new-9.png.asset.json";
import tn10 from "@/assets/t-new-10.png.asset.json";

const screenshots = [tn1.url, tn2.url, tn3.url, tn4.url, tn5.url, tn6.url, tn7.url, tn8.url, tn9.url, tn10.url, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const go = useCallback((direction: number) => setIndex((current) => (current + direction + screenshots.length) % screenshots.length), []);

  useEffect(() => {
    const timer = window.setInterval(() => go(1), 4000);
    return () => window.clearInterval(timer);
  }, [go]);

  const visible = [0, 1, 2].map((offset) => screenshots[(index + offset) % screenshots.length]);

  return (
    <SectionWrapper id="depoimentos" className="bg-radial-top py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><MessageSquareQuote className="h-4 w-4" /> Experiências de alunos</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Antes de decidir, <span className="text-gradient">veja os relatos.</span></h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Depoimentos em formato de captura, organizados em um carrossel horizontal para você deslizar e conhecer as experiências.</p>

        <div className="relative mx-auto mt-10 max-w-6xl select-none" onPointerDown={(event) => { dragStart.current = event.clientX; }} onPointerUp={(event) => { if (dragStart.current === null) return; const diff = event.clientX - dragStart.current; if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1); dragStart.current = null; }}>
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {visible.map((src, i) => (
              <motion.article key={`${src}-${index}-${i}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }} className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card p-2 shadow-[0_22px_65px_rgba(0,0,0,0.2)] sm:min-h-[400px] sm:p-3">
                <img src={src} alt={`Depoimento de aluno ${((index + i) % screenshots.length) + 1}`} className="h-full max-h-[560px] w-full object-contain" loading={i === 0 ? "eager" : "lazy"} />
              </motion.article>
            ))}
          </div>
          <button type="button" aria-label="Depoimentos anteriores" onClick={() => go(-1)} className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-primary/50 sm:-left-5"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" aria-label="Próximos depoimentos" onClick={() => go(1)} className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-primary/50 sm:-right-5"><ChevronRight className="h-5 w-5" /></button>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">{Array.from({ length: Math.min(10, screenshots.length) }).map((_, i) => <button type="button" key={i} aria-label={`Ver depoimentos a partir de ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${index === i ? "w-7 bg-primary" : "w-2 bg-muted-foreground/30"}`} />)}</div>
        <p className="mx-auto mt-5 max-w-xl text-xs text-muted-foreground">Os relatos acima são apresentados como prova social visual. Não adicionamos números ou resultados que não estejam nos próprios depoimentos.</p>
        <CtaButton href="#pricing" className="mt-8">QUERO CONHECER A OFERTA →</CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
