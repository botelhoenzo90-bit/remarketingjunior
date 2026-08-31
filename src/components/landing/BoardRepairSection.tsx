import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

import imgMultimetro from "@/assets/board/multimetro.jpg";
import imgFonte from "@/assets/board/fonte.jpg";
import imgConducao from "@/assets/board/conducao-reversa.jpg";
import imgEletronica from "@/assets/board/eletronica.jpg";
import imgEsquema from "@/assets/board/esquema.jpg";
import imgMicroSoldagem from "@/assets/board/micro-soldagem.jpg";
import imgJumper from "@/assets/board/trilhas.jpg";
import imgReballing from "@/assets/board/reballing.jpg";
import imgCpu from "@/assets/board/baseband.jpg";
import imgMemoria from "@/assets/board/nand.jpg";
import imgSwap from "@/assets/board/swap.jpg";
import imgAndroid from "@/assets/board/android-placa.jpg";
import imgNaoLiga from "@/assets/board/nao-liga.jpg";
import imgInicializacao from "@/assets/board/inicializacao.jpg";
import imgCarga from "@/assets/board/ci-carga.jpg";
import imgImagem from "@/assets/board/sem-imagem.jpg";
import imgWifi from "@/assets/board/wifi.jpg";
import imgCameras from "@/assets/board/cameras.jpg";
import imgAudio from "@/assets/board/codec-audio.jpg";
import imgRadio from "@/assets/board/sem-servico.jpg";
import imgIphone from "@/assets/board/iphone-placa.jpg";
import imgTelasBateria from "@/assets/board/telas-bateria.jpg";
import imgSeparacao from "@/assets/board/separacao.jpg";
import imgInterpuser from "@/assets/board/interpuser.jpg";
import imgFaceid from "@/assets/board/faceid.jpg";

const modules = [
  { title: "Esquema Elétrico", image: imgEsquema },
  { title: "Micro Soldagem", image: imgMicroSoldagem },
  { title: "Jumper", image: imgJumper },
  { title: "Reballing", image: imgReballing },
  { title: "CPU", image: imgCpu },
  { title: "Memória", image: imgMemoria },
  { title: "Swap", image: imgSwap },
  { title: "Reparos em Placa Android", image: imgAndroid },
  { title: "Não Liga", image: imgNaoLiga },
  { title: "Falha de Inicialização", image: imgInicializacao },
  { title: "Setor de Carga", image: imgCarga },
  { title: "Setor de Imagem, Touch e Backlight", image: imgImagem },
  { title: "Setor de Wi-Fi e Bluetooth", image: imgWifi },
  { title: "Setor de Câmeras", image: imgCameras },
  { title: "Setor de Áudio", image: imgAudio },
  { title: "Setor de Rádio Frequência", image: imgRadio },
  { title: "Reparos em Placa iPhone", image: imgIphone },
  { title: "Micro Soldagem iPhone", image: imgMicroSoldagem },
  { title: "Não Liga iPhone", image: imgNaoLiga },
  { title: "Falha de Inicialização iPhone", image: imgInicializacao },
  { title: "Setor de Carga iPhone", image: imgCarga },
  { title: "Setor de Imagem, Touch e Backlight iPhone", image: imgImagem },
  { title: "Setor de Wi-Fi e Bluetooth iPhone", image: imgWifi },
  { title: "Setor de Câmeras iPhone", image: imgCameras },
  { title: "Setor de Áudio iPhone", image: imgAudio },
  { title: "Setor de Rádio Frequência iPhone", image: imgRadio },
  { title: "Troca de Telas e Bateria Sem Mensagem", image: imgTelasBateria },
  { title: "Separação e União das Placas", image: imgSeparacao },
  { title: "Reballing em Interposer", image: imgInterpuser },
  { title: "Memória iPhone", image: imgMemoria },
  { title: "Face ID", image: imgFaceid },
];

const CARD_WIDTH = 220; // px including gap
const GAP = 20;
const TOTAL_WIDTH = modules.length * (CARD_WIDTH + GAP);
const DURATION = modules.length * 3; // seconds for full loop

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

const BoardRepairSection = () => {
  // Duplicate list for seamless infinite loop
  const doubled = [...modules, ...modules];

  return (
    <SectionWrapper id="placas" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[140px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-primary/20 border border-primary/30 px-5 py-1.5 text-sm font-bold text-primary"
          >
            🔬 NÍVEL 2 — AVANÇADO
          </motion.span>
          <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Aprenda <span className="text-gradient">Reparos em Placas</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            iPhone, Android e Tablets — Domine as técnicas de micro soldagem e reparo de circuitos integrados. O diferencial que separa técnicos comuns de profissionais que faturam alto.
          </p>
        </div>
      </div>

      {/* Full-width marquee carousel */}
      <div className="w-full overflow-hidden">
        <div
          className="board-marquee flex gap-5"
          style={{
            width: `${TOTAL_WIDTH * 2}px`,
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
          <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-bold text-primary">
            🔥 {modules.length} módulos de reparo em placas
          </span>
        </div>
        <div className="mt-6 flex justify-center">
          <CtaButton className="whitespace-nowrap">QUERO DOMINAR REPAROS EM PLACAS!</CtaButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BoardRepairSection;
