import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
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
const loopedScreenshots = [...screenshots, ...screenshots];

const TestimonialsSection = () => (
  <SectionWrapper id="depoimentos" className="overflow-hidden bg-radial-top py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><MessageSquareQuote className="h-4 w-4" /> Experiências de alunos</span>
      <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Antes de decidir, <span className="text-gradient">veja os relatos.</span></h2>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Veja os depoimentos passando continuamente em uma única fileira, como um mural de experiências reais de alunos.</p>

      <div className="relative mx-auto mt-10 max-w-[1500px] overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
        <motion.div
          className="flex w-max gap-4 sm:gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        >
          {loopedScreenshots.map((src, index) => (
            <article key={`${index}-${src}`} className="flex h-[330px] w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card p-2 shadow-[0_20px_55px_rgba(0,0,0,0.22)] sm:h-[420px] sm:w-[310px] sm:p-3">
              <img src={src} alt={`Depoimento de aluno ${((index % screenshots.length) + 1)}`} className="h-full w-full object-contain" loading={index < 3 ? "eager" : "lazy"} />
            </article>
          ))}
        </motion.div>
      </div>

      <p className="mx-auto mt-5 max-w-xl text-xs text-muted-foreground">Os relatos acima são apresentados como prova social visual. Não adicionamos números ou resultados que não estejam nos próprios depoimentos.</p>
      <CtaButton href="#pricing" className="mt-8">QUERO CONHECER A OFERTA →</CtaButton>
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
