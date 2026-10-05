import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-orange-500 text-[#0A1628] font-mono text-xs font-bold px-2.5 py-1 rounded-sm">{index}</span>
      <span className={`font-mono text-xs tracking-[0.3em] uppercase ${dark ? "text-white/60" : "text-[#0A1628]/60"}`}>{label}</span>
      <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-[#0A1628]/15"}`} />
    </div>
  );
}

export function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val.toFixed(decimals).toLocaleString()}{suffix}</span>;
}

export function PageHero({ kicker, title, sub, image }: { kicker: string; title: ReactNode; sub: string; image: string }) {
  return (
    <section className="relative bg-[#0A1628] text-white overflow-hidden pt-[104px]">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/30" />
      <div className="absolute inset-0 blueprint-grid" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs tracking-[0.35em] text-orange-400 mb-4">// {kicker}</p>
          <h1 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl max-w-3xl">{title}</h1>
          <p className="mt-5 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">{sub}</p>
        </motion.div>
      </div>
      <div className="hazard h-2.5 relative" />
    </section>
  );
}
