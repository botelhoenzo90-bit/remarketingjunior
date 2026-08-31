import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Gift, GraduationCap } from "lucide-react";
import CtaButton from "./CtaButton";

const lessons = [
  {
    title: "Módulo Reparo em Placa - Como trocar um C.I de Wi-Fi",
    desc: "Aprenda a identificar e substituir o chip de Wi-Fi em placas de celulares com técnicas profissionais",
    videoId: "SZLLDmMOiRA",
    icon: GraduationCap,
  },
  {
    title: "Módulo Reparo em Placa - Como trocar um IF PMIC",
    desc: "Domine a substituição do circuito integrado IF PMIC com precisão e segurança",
    videoId: "FP5xYT-PFt0",
    icon: GraduationCap,
  },
  {
    title: "Módulo Reparo em Placa - Como trocar um PMIC",
    desc: "Veja na prática como realizar a troca do PMIC em placas de celular passo a passo",
    videoId: "MyxWlTqSn6k",
    icon: GraduationCap,
  },
];

const FreeLessonsSection = () => (
  <SectionWrapper className="py-20 relative bg-deep-blue">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-25 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
    </div>
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground uppercase tracking-wider">
          <Gift className="h-4 w-4" />
          Presente especial
        </span>
      </div>
      <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
        3 Aulas <span className="text-gradient">Gratuitas</span> pra Você
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        Assista agora e veja como é simples aprender manutenção de celulares
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {lessons.map((l, i) => (
          <motion.div
            key={l.videoId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-hover group overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${l.videoId}?rel=0`}
                title={l.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <l.icon className="h-5 w-5 text-primary shrink-0" />
                <h3 className="font-display text-sm font-semibold text-foreground">{l.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{l.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO TODAS AS AULAS!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default FreeLessonsSection;
