import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "André Costa", "Maria Silva", "João Pedro", "Ana Clara", "Lucas Oliveira",
  "Fernanda Santos", "Rafael Lima", "Juliana Souza", "Carlos Eduardo", "Patrícia Mendes",
  "Bruno Almeida", "Camila Ferreira", "Diego Nascimento", "Isabela Rocha", "Thiago Martins",
];

const cities = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Belém - PA",
  "Fortaleza - CE", "Salvador - BA", "Curitiba - PR", "Recife - PE",
  "Manaus - AM", "Goiânia - GO", "Porto Alegre - RS", "Brasília - DF",
  "Campinas - SP", "Natal - RN", "Maceió - AL",
];

const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({ name: names[0], city: cities[0] });

  useEffect(() => {
    const show = () => {
      setCurrent({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const initial = setTimeout(show, 8000);
    const interval = setInterval(show, 20000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-6 left-4 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 shadow-lg max-w-[280px]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-foreground/20 text-sm font-bold text-accent-foreground">
              {current.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-accent-foreground">{current.name}</p>
              <p className="text-xs text-accent-foreground/80">de {current.city}</p>
              <p className="text-xs text-accent-foreground/80">Acabou de adquirir o curso!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SalesNotification;
