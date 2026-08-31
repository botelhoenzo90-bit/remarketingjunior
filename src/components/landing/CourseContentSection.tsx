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
  { title: "Como Trocar Telas", image: imgTelas },
  { title: "Como Trocar Baterias", image: imgBateria },
  { title: "Como Trocar Conector de Carga", image: imgConector },
  { title: "Como Trocar Tampa Traseira", image: imgTampa },
  { title: "Como Trocar Câmeras", image: imgCameras },
  { title: "Como Trocar Botão Power", image: imgPower },
  { title: "Como Trocar Botões de Volume", image: imgVolume },
  { title: "Como Trocar Antena de Rede", image: imgAntenas },
  { title: "Como Fazer Desoxidação", image: imgDesoxidacao },
  { title: "Como Trocar o Vibra Call", image: imgVibracao },
  { title: "Como Trocar Microfone", image: imgMicrofone },
  { title: "Como Trocar Alto Falante", image: imgAltofalante },
  { title: "Como Trocar Biometria", image: imgBiometrico },
  { title: "Diagnóstico e Análise de Defeitos", image: imgDiagnostico },
  { title: "Como Usar a Fonte de Alimentação", image: imgFonte },
  { title: "Como Usar o Multímetro", image: imgMultimetro },
  { title: "Eletrônica", image: imgEletronica },
  { title: "Condução Reversa", image: imgConducao },
];

const CARD_W = 220;
const GAP = 20;
const TOTAL = modules.length * (CARD_W + GAP);
const DURATION = modules.length * 3;

const ModuleCard = ({ title, image }: { title: string; image: string }) => (
  <div className="flex-shrink-0 w-[200px] sm:w-[220px] group select-none">
    <div className="rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(192_95%_55%/0.15)]">
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className="px-3 py-4 text-center bg-card">
        <p className="text-sm font-bold text-foreground leading-tight min-h-[2.5rem] flex items-center justify-center">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const CourseContentSection = () => {
  const doubled = [...modules, ...modules];

  return (
    <SectionWrapper id="conteudo" className="py-20 relative bg-deep-blue">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 border border-primary/30 px-5 py-1.5 text-sm font-bold text-primary">
            📱 NÍVEL 1 — DO BÁSICO AO INTERMEDIÁRIO
          </span>
          <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Veja tudo que <span className="text-gradient">você vai dominar:</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Desde a troca de componentes básicos até o diagnóstico avançado de circuitos
          </p>
        </div>
      </div>

      {/* Marquee carousel */}
      <div className="w-full overflow-hidden">
        <div
          className="board-marquee flex gap-5"
          style={{
            width: `${TOTAL * 2}px`,
            animationDuration: `${DURATION}s`,
          }}
        >
          {doubled.map((m, i) => (
            <ModuleCard key={`${m.title}-${i}`} title={m.title} image={m.image} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mt-8 flex justify-center">
          <span className="inline-block rounded-full bg-primary/20 border border-primary/30 px-6 py-2.5 text-sm font-bold text-primary">
            🚀 E muito mais conteúdo exclusivo!
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <CtaButton className="whitespace-nowrap">QUERO APRENDER TUDO ISSO!</CtaButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CourseContentSection;
