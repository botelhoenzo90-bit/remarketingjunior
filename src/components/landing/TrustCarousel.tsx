import { useEffect, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  "Curso 2026",
  "Aulas atualizadas com aparelhos novos",
  "Acesso por 1 ano",
  "Curso EAD em vídeo aulas",
  "Suporte pra tirar dúvidas",
  "Certificado",
  "Grupo de alunos",
];

const TrustCarousel = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setOffset((value) => (value + 1) % items.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden border-y border-blue-300/20 bg-[#0752a5] py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4">
        <button type="button" aria-label="Item anterior" onClick={() => setOffset((value) => (value - 1 + items.length) % items.length)} className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:flex"><ChevronLeft className="h-4 w-4" /></button>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex justify-center">
            <div className="flex w-max items-center gap-8 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(-${offset} * min(210px, 28vw)))` }}>
              {[...items, ...items].map((item, index) => (
                <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-wider sm:text-sm"><CheckCircle2 className="h-4 w-4 text-cyan-200" />{item}</span>
              ))}
            </div>
          </div>
        </div>
        <button type="button" aria-label="Próximo item" onClick={() => setOffset((value) => (value + 1) % items.length)} className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:flex"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </section>
  );
};

export default TrustCarousel;
