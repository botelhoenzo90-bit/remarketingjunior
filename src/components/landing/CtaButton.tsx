import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Zap, ShieldCheck } from "lucide-react";

interface CtaButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  showIcon?: boolean;
}

const CtaButton = ({ children, className = "", href = "#pricing", showIcon = true }: CtaButtonProps) => (
  <div className="inline-flex flex-col items-center gap-2">
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground animate-pulse-glow transition-colors hover:brightness-110 ${className}`}
    >
      {showIcon && <Zap className="h-5 w-5" />}
      {children}
    </motion.a>
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
      <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias !
    </span>
  </div>
);

export default CtaButton;
