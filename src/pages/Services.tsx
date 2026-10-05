import { Link } from "react-router-dom";
import { Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/ui";
import { PageHero } from "../components/ui";
import { services } from "../data/site";

const iconMap: Record<string, any> = { Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine };

export default function Services() {
  return (
    <div>
      <PageHero kicker="SERVICES / 08 DISCIPLINES" title={<>One contractor.<br /><span className="text-orange-500">Every discipline.</span></>} sub="Survey to handover under one roof — no subcontractor roulette, one point of accountability, one P&L." image="./images/survey.jpg" />
      <section className="py-16 md:py-24 bg-[#F1F3F6] blueprint-dark">
        <div className="max-w-7xl mx-auto px-6 space-y-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Building2;
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <div className={`bg-white border border-[#E2E8F0] hover:border-[#0A1628] transition rounded-sm overflow-hidden grid md:grid-cols-[220px_1fr_auto] group`}>
                  <div className={`bg-[#0A1628] text-white p-8 flex flex-col justify-between gap-6 relative overflow-hidden ${flip ? "md:order-3" : ""}`}>
                    <div className="absolute inset-0 blueprint-grid" />
                    <Icon size={44} className="text-orange-500 relative" strokeWidth={1.5} />
                    <p className="font-mono text-xs tracking-[0.3em] text-white/50 relative">{s.code}</p>
                  </div>
                  <div className="p-7 md:p-9">
                    <h2 className="font-display font-bold uppercase text-3xl md:text-4xl leading-none">{s.title}</h2>
                    <p className="text-[#0A1628]/65 mt-3 leading-relaxed text-[15px]">{s.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
                      {s.points.map(pt => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-[#0A1628]/75"><CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" /> {pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-7 md:p-9 md:w-64 flex md:flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-[#E2E8F0] bg-[#F8FAFC]">
                    <p className="font-display font-bold text-2xl uppercase leading-tight text-orange-600">{s.stat}</p>
                    <Link to={`/services/${s.slug}`} className="inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-orange-500 hover:text-[#0A1628] text-white font-bold text-[13px] uppercase tracking-widest px-5 py-3.5 rounded-sm transition">Details <ArrowUpRight size={16} /></Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
