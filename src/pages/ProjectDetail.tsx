import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Banknote, Timer, ClipboardList, CheckCircle2 } from "lucide-react";
import { projects } from "../data/site";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find(x => x.slug === slug);
  if (!p) return <Navigate to="/projects" replace />;
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];
  const meta = [
    { icon: MapPin, label: "Location", value: p.location },
    { icon: Calendar, label: "Completed", value: p.year },
    { icon: Banknote, label: "Contract value", value: p.value },
    { icon: Timer, label: "Duration", value: p.duration },
    { icon: ClipboardList, label: "Scope", value: p.scope },
  ];

  return (
    <div>
      <section className="relative bg-[#0A1628] text-white pt-[104px] overflow-hidden">
        <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-[#0A1628]/30" />
        <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
          <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-orange-400 uppercase hover:gap-3.5 transition-all"><ArrowLeft size={15} /> Portfolio</Link>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="bg-orange-500 text-[#0A1628] font-mono text-xs font-bold px-3 py-1.5 rounded-sm tracking-widest uppercase">{p.category}</span>
            <span className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm tracking-widest uppercase ${p.status === "Completed" ? "bg-emerald-500 text-[#0A1628]" : "bg-white text-[#0A1628]"}`}>{p.status}</span>
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl mt-4 max-w-4xl">{p.name}</h1>
        </div>
        <div className="hazard h-2.5 relative" />
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 border border-[#E2E8F0] rounded-sm overflow-hidden divide-x divide-[#E2E8F0] max-md:divide-y max-md:grid-cols-2 bg-[#F8FAFC]">
            {meta.map((m, i) => (
              <div key={i} className="p-5">
                <m.icon size={18} className="text-orange-500" />
                <p className="font-mono text-[11px] tracking-[0.2em] text-[#0A1628]/45 uppercase mt-3">{m.label}</p>
                <p className="font-display font-bold text-lg uppercase leading-tight mt-1">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 mt-10">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-[#0A1628]/50 uppercase">// Project story</p>
              <p className="text-lg md:text-xl leading-relaxed text-[#0A1628]/85 mt-4">{p.description}</p>
              <h2 className="font-display font-bold uppercase text-3xl mt-10 mb-5">Engineering highlights</h2>
              <ul className="space-y-3">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-3 bg-[#F1F3F6] border border-[#E2E8F0] rounded-sm p-4 text-[15px]"><CheckCircle2 size={19} className="text-orange-500 shrink-0 mt-0.5" /> {h}</li>
                ))}
              </ul>
              <h2 className="font-display font-bold uppercase text-3xl mt-10 mb-5">Measurement sheet</h2>
              <div className="border border-[#0A1628] rounded-sm overflow-hidden">
                <div className="bg-[#0A1628] text-white px-5 py-3 flex justify-between font-mono text-xs tracking-[0.25em] uppercase"><span>Item</span><span>Final qty</span></div>
                {p.specs.map((s, i) => (
                  <div key={s.label} className={`px-5 py-3.5 flex justify-between text-[15px] ${i % 2 ? "bg-[#F1F3F6]" : "bg-white"}`}>
                    <span className="text-[#0A1628]/60">{s.label}</span>
                    <span className="font-mono font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="space-y-5">
              <div className="rounded-sm overflow-hidden border border-[#E2E8F0]">
                <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
              </div>
              <div className="bg-[#0A1628] text-white rounded-sm p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid" />
                <div className="relative">
                  <p className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase">// Build something like this</p>
                  <h3 className="font-display font-bold uppercase text-3xl leading-none mt-3">Get a budget & timeline.</h3>
                  <Link to="/contact" className="mt-6 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-sm uppercase tracking-widest px-5 py-4 rounded-sm transition">Start a project <ArrowUpRight size={17} /></Link>
                </div>
              </div>
              <Link to={`/projects/${next.slug}`} className="block border border-[#E2E8F0] hover:border-[#0A1628] rounded-sm overflow-hidden group transition">
                <img src={next.image} alt={next.name} className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-orange-600 uppercase">Next project</p>
                  <p className="font-display font-bold uppercase text-xl mt-1">{next.name}</p>
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
