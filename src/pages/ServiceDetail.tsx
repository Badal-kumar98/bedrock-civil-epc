import { Link, useParams, Navigate } from "react-router-dom";
import { Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine, ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, projects } from "../data/site";

const iconMap: Record<string, any> = { Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine };

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find(x => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;
  const Icon = iconMap[s.icon] ?? Building2;
  const related = projects.slice(0, 3);
  const idx = services.indexOf(s);
  const next = services[(idx + 1) % services.length];

  return (
    <div>
      <section className="relative bg-[#0A1628] text-white overflow-hidden pt-[104px]">
        <img src="./images/team-site.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/40" />
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-orange-400 uppercase hover:gap-3.5 transition-all"><ArrowLeft size={15} /> All services</Link>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 grid place-items-center bg-orange-500 text-[#0A1628] rounded-sm"><Icon size={30} /></div>
            <p className="font-mono text-xs tracking-[0.3em] text-white/50">{s.code} / 08</p>
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl mt-4 max-w-3xl">{s.title}</h1>
          <p className="mt-5 max-w-xl text-white/70 text-lg">{s.short}</p>
          <p className="mt-3 font-display font-bold text-2xl uppercase text-orange-400">{s.stat}</p>
        </div>
        <div className="hazard h-2.5 relative" />
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#0A1628]/50 uppercase">// Capability statement</p>
            <p className="text-lg md:text-xl leading-relaxed text-[#0A1628]/85 mt-4">{s.description}</p>
            <h2 className="font-display font-bold uppercase text-3xl mt-10 mb-5">What's included</h2>
            <ul className="space-y-3">
              {s.points.map(p => (
                <li key={p} className="flex items-start gap-3 bg-[#F1F3F6] border border-[#E2E8F0] rounded-sm p-4 text-[15px]"><CheckCircle2 size={19} className="text-orange-500 shrink-0 mt-0.5" /> {p}</li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {["Fixed-price EPC", "FIDIC & NEC fluent", "5-yr defect liability"].map(b => (
                <div key={b} className="border-t-4 border-orange-500 pt-3 font-display font-bold text-xl uppercase leading-tight">{b}</div>
              ))}
            </div>
          </div>
          <aside className="space-y-5">
            <div className="bg-[#0A1628] text-white rounded-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid" />
              <div className="relative">
                <p className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase">// Get a scope & price</p>
                <h3 className="font-display font-bold uppercase text-3xl leading-none mt-3">Need {s.title.toLowerCase()}?</h3>
                <p className="text-white/60 text-sm mt-3">A licensed engineer replies within one business day.</p>
                <Link to="/contact" className="mt-6 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-sm uppercase tracking-widest px-5 py-4 rounded-sm transition">Request proposal <ArrowUpRight size={17} /></Link>
              </div>
            </div>
            <div className="border border-[#E2E8F0] rounded-sm p-6">
              <p className="font-mono text-xs tracking-[0.3em] text-[#0A1628]/50 uppercase mb-4">// Related work</p>
              <div className="space-y-3">
                {related.map(p => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="flex gap-3 group">
                    <img src={p.image} alt={p.name} className="w-20 h-16 object-cover rounded-sm shrink-0" />
                    <div>
                      <p className="font-display font-bold uppercase leading-tight group-hover:text-orange-600 transition">{p.name}</p>
                      <p className="font-mono text-[11px] text-[#0A1628]/50 tracking-widest uppercase">{p.category} · {p.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link to={`/services/${next.slug}`} className="flex items-center justify-between bg-[#F1F3F6] hover:bg-[#0A1628] hover:text-white border border-[#E2E8F0] rounded-sm p-5 transition group">
              <div>
                <p className="font-mono text-[11px] tracking-[0.25em] text-orange-500 uppercase">Next service</p>
                <p className="font-display font-bold uppercase text-xl">{next.title}</p>
              </div>
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
