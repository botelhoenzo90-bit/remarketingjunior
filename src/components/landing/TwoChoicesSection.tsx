import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { CheckCircle2, XCircle, X } from "lucide-react";

const TwoChoicesSection = () => (
  <SectionWrapper className="py-20">
    <div className="mx-auto max-w-4xl px-4">
      <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
        Você tem <span className="text-gradient">2 escolhas</span> agora
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        O que você vai fazer com essa oportunidade?
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Red - Bad Choice */}
        <div className="rounded-2xl border-2 border-destructive/50 bg-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-destructive/5 pointer-events-none" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="mb-4 font-display text-xl font-bold text-destructive">Não fazer nada</h3>
            <ul className="space-y-3 text-sm text-muted-foreground w-full text-left">
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Continuar recusando serviços lucrativos por medo</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Perder dinheiro terceirizando reparos em placa</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Ficar limitado a trocar telas e baterias</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Ver a concorrência dominar os reparos avançados</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Continuar sem saber diagnosticar falhas reais</li>
            </ul>
          </div>
        </div>

        {/* Green - Good Choice */}
        <div className="rounded-2xl border-2 border-accent/50 bg-card p-8 relative overflow-hidden glow-accent">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <CheckCircle2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-4 font-display text-xl font-bold text-accent">Começar agora</h3>
            <ul className="space-y-3 text-sm text-muted-foreground w-full text-left">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Dominar micro soldagem e reparo em placa do zero</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Cobrar de R$ 200 a R$ 800 por um único reparo</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Ser reconhecido como um técnico especialista</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Aumentar drasticamente o lucro da sua bancada</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Resolver falhas de inicialização e curtos complexos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">EU ESCOLHO COMEÇAR AGORA!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default TwoChoicesSection;
