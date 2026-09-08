import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, User, Mail, Phone, X } from "lucide-react";

interface CtaButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  showIcon?: boolean;
}

const CHECKOUT_URL = "https://pay.kiwify.com.br/eOrXUxm";
const LEADS_KEY = "jrtec_leads";

const CtaButton = ({ children, className = "", showIcon = true }: CtaButtonProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const lead = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
    localStorage.setItem(LEADS_KEY, JSON.stringify([lead, ...existing]));
    window.location.href = CHECKOUT_URL;
  };

  return (
    <>
      <div className="inline-flex flex-col items-center gap-2">
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent px-4 py-4 text-sm font-bold text-accent-foreground animate-pulse-glow transition-colors hover:brightness-110 sm:px-6 sm:text-base lg:px-8 lg:text-lg ${className}`}
        >
          {showIcon && <ArrowRight className="h-5 w-5" />}
          {children}
        </motion.button>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
          <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias !
        </span>
      </div>

      {open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="inscricao-title" className="relative w-full max-w-md rounded-3xl border border-primary/25 bg-card p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar formulário" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:text-foreground"><X className="h-5 w-5" /></button>
            <div className="pr-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Inscrição</p><h2 id="inscricao-title" className="mt-2 font-display text-2xl font-black sm:text-3xl">Crie sua conta para continuar</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Preencha seus dados. Ao continuar, você será direcionado para o checkout.</p></div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <label className="block text-left"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Seu nome</span><div className="relative"><User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-primary" /></div></label>
              <label className="block text-left"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Seu melhor e-mail</span><div className="relative"><Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@email.com" className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-primary" /></div></label>
              <label className="block text-left"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Número de telefone</span><div className="relative"><Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-primary" /></div></label>
              <button disabled={loading} type="submit" className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-sm font-black text-accent-foreground transition hover:brightness-110 disabled:opacity-60 sm:text-base">{loading ? "CONTINUANDO..." : "CONTINUAR INSCRIÇÃO →"}</button>
              <p className="text-center text-[11px] leading-relaxed text-muted-foreground">Seus dados serão usados para registrar sua inscrição e seguir para o checkout.</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CtaButton;
