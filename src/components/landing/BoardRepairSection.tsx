import { motion } from "framer-motion";
import { TrendingUp, Cpu, Wrench, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

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
  { title: "Esquema elétrico", image: imgEsquema },
  { title: "Microssoldagem", image: imgMicroSoldagem },
  { title: "Jumper e recuperação de trilhas", image: imgJumper },
  { title: "Reballing", image: imgReballing },
  { title: "CPU", image: imgCpu },
  { title: "Memória", image: imgMemoria },
  { title: "Swap", image: imgSwap },
  { title: "Reparos em placa Android", image: imgAndroid },
  { title: "Aparelho que não liga", image: imgNaoLiga },
  { title: "Falha de inicialização", image: imgInicializacao },
  { title: "Setor de carga", image: imgCarga },
  { title: "Imagem, touch e backlight", image: imgImagem },
  { title: "Wi-Fi e Bluetooth", image: imgWifi },
  { title: "Setor de câmeras", image: imgCameras },
  { title: "Setor de áudio", image: imgAudio },
  { title: "Rádio frequência", image: imgRadio },
  { title: "Reparos em placa iPhone", image: imgIphone },
  { title: "Troca de tela e bateria", image: imgTelasBateria },
  { title: "Separação e união de placas", image: imgSeparacao },
  { title: "Reballing em interposer", image: imgInterpuser },
  { title: "Face ID", image: imgFaceid },
];

const advantages = [
  { icon: TrendingUp, title: "Serviços de alto valor", text: "Reparos em placa são os mais bem pagos da assistência técnica." },
  { icon: Cpu, title: "Aparelhos condenados", text: "Recupere celulares que outros técnicos devolvem sem solução." },
  { icon: Wrench, title: "Menos dependência de peças", text: "Resolva o problema na origem em vez de só trocar componentes caros." },
  { icon: Award, title: "Pouca concorrência", text: "Poucos técnicos dominam micro soldagem — seja a referência da sua região." },
];

const CARD_WIDTH = 220;
const GAP = 20;
const TOTAL_WIDTH = modules.length * (CARD_WIDTH + GAP);
const DURATION = modules.length * 3;

const ModuleCard = ({ title, image }: { title: string; image: string }) => (
  <div className="group w-[200px] flex-shrink-0 select-none sm:w-[220px]">
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(192_95%_55%/0.15)]">
      <div className="aspect-[3/4] w-full overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" draggable={false} /></div>
      <div className="bg-card px-3 py-4 text-center"><p className="flex min-h-[2.5rem] items-center justify-center text-sm font-bold leading-tight text-foreground">{title}</p></div>
    </div>
  </div>
);

const BoardRepairSection = () => {
  const doubled = [...modules, ...modules];
  return (
    <SectionWrapper id="placas" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0"><div className="absolute inset-0 bg-grid opacity-30" /><div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-primary">Micro soldagem e reparo em placa</motion.span>
          <h2 className="mt-4 font-display text-3xl font-black sm:text-5xl">O <span className="text-gradient">diferencial que poucos técnicos têm</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Domine micro soldagem e reparo em placa para faturar alto com serviços que a maioria dos técnicos não consegue fazer.</p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
              <p className="font-display text-base font-black">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-8 text-center">
          <h3 className="font-display text-2xl font-black sm:text-3xl">Aprenda Reparos em Placas <span className="text-gradient">iPhone, Android e Tablets</span></h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">Domine as técnicas de micro soldagem e reparo de circuitos integrados. O diferencial que separa técnicos comuns de profissionais que faturam alto.</p>
        </div>
      </div>

      <div className="w-full overflow-hidden"><div className="board-marquee flex gap-5" style={{ width: `${TOTAL_WIDTH * 2}px`, animationDuration: `${DURATION}s` }}>{doubled.map((m, i) => <ModuleCard key={`${m.title}-${i}`} title={m.title} image={m.image} />)}</div></div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"><p className="font-display text-xl font-black sm:text-2xl">Não é só trocar peça. É entender o que está acontecendo na placa.</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">Essa é a diferença entre acompanhar um reparo e começar a construir raciocínio técnico.</p></div>
        <div className="mt-7 flex justify-center"><CtaButton href="#bonus">VER O QUE MAIS ESTÁ INCLUSO →</CtaButton></div>
      </div>
    </SectionWrapper>
  );
};

export default BoardRepairSection;
