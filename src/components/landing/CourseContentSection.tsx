import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

import imgTelas from "@/assets/modules/telas.jpg";
import imgBateria from "@/assets/modules/bateria.jpg";
import imgConector from "@/assets/modules/conector.jpg";
import imgTampa from "@/assets/modules/tampa.jpg";
import imgCameras from "@/assets/modules/cameras.jpg";
import imgPower from "@/assets/modules/power.jpg";
import imgVolume from "@/assets/modules/volume.jpg";
import imgAntenas from "@/assets/modules/antenas.jpg";
import imgDesoxidacao from "@/assets/modules/desoxidacao.jpg";
import imgVibracao from "@/assets/modules/vibracao.jpg";
import imgMicrofone from "@/assets/modules/microfone.jpg";
import imgAltofalante from "@/assets/modules/altofalante.jpg";
import imgBiometrico from "@/assets/modules/biometrico.jpg";
import imgDiagnostico from "@/assets/modules/diagnostico.jpg";
import imgFonte from "@/assets/board/fonte.jpg";
import imgMultimetro from "@/assets/board/multimetro.jpg";
import imgEletronica from "@/assets/board/eletronica.jpg";
import imgConducao from "@/assets/board/conducao-reversa.jpg";

const modules = [
  { title: "Troca de telas", image: imgTelas },
  { title: "Troca de baterias", image: imgBateria },
  { title: "Conector de carga", image: imgConector },
  { title: "Tampa traseira", image: imgTampa },
  { title: "Câmeras", image: imgCameras },
  { title: "Botão Power", image: imgPower },
  { title: "Botões de volume", image: imgVolume },
  { title: "Antena de rede", image: imgAntenas },
  { title: "Desoxidação", image: imgDesoxidacao },
  { title: "Vibra Call", image: imgVibracao },
  { title: "Microfone", image: imgMicrofone },
  { title: "Alto-falante", image: imgAltofalante },
  { title: "Biometria", image: imgBiometrico },
  { title: "Diagnóstico de defeitos", image: imgDiagnostico },
  { title: "Fonte de alimentação", image: imgFonte },
  { title: "Multímetro", image: imgMultimetro },
  { title: "Eletrônica", image: imgEletronica },
  { title: "Condução reversa", image: imgConducao },
];

const CARD_W = 220;
const GAP = 20;
const TOTAL = modules.length * (CARD_W + GAP);
const DURATION = modules.length * 3;

const ModuleCard = ({ title, image }: { title: string; image: string }) => (
  <div className="group w-[200px] flex-shrink-0 select-none sm:w-[220px]">
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(192_95%_55%/0.15)]">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className="bg-card px-3 py-4 text-center">
        <p className="flex min-h-[2.5rem] items-center justify-center text-sm font-bold leading-tight text-foreground">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const CourseContentSection = () => {
  const doubled = [...modules, ...modules];

  return (
    <SectionWrapper id="conteudo" className="relative bg-deep-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-primary">
            Do básico ao intermediário
          </span>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
            Uma base completa <span className="text-gradient">para a sua evolução.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Veja alguns dos temas que fazem parte do treinamento e entenda a variedade de situações que você pode estudar.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="board-marquee flex gap-5"
          style={{ width: `${TOTAL * 2}px`, animationDuration: `${DURATION}s` }}
        >
          {doubled.map((m, i) => (
            <ModuleCard key={`${m.title}-${i}`} title={m.title} image={m.image} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mt-9 max-w-2xl text-center">
          <p className="text-sm font-semibold text-muted-foreground">E isso é só uma parte do conteúdo.</p>
          <p className="mt-1 font-display text-xl font-black text-foreground sm:text-2xl">
            Agora veja o nível dos reparos em placa.
          </p>
        </div>
        <div className="mt-7 flex flex-col items-center justify-center">
          <CtaButton href="#pricing">QUERO CONHECER O CURSO →</CtaButton>
          <p className="mt-3 text-center text-sm font-semibold text-muted-foreground">
            🔒 Garantia de 7 dias para você conhecer o treinamento com tranquilidade.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CourseContentSection;
