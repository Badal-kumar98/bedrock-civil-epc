import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, PageHero } from "../components/ui";
import { projects, categories } from "../data/site";

export default function Projects() {
  const [cat, setCat] = useState("All");
  const [status, setStatus] = useState("All");
  const list = projects.filter(p => (cat === "All" || p.category === cat) && (status === "All" || p.status === status));

  return (
    <div>
      <PageHero kicker="PORTFOLIO / 640+ DELIVERED" title={<>Proof, not<br /><span className="text-orange-500">promises.</span></>} sub="A sample of flagship EPC work — every figure below is from final measurement sheets, not renders." image="/images/project-bridge.jpg" />
      <section className="py-14 md:py-20 bg-[#F1F3F6] blueprint-dark min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2.5 rounded-sm font-bold text-[13px] uppercase tracking-widest transition ${cat === c ? "bg-[#0A1628] text-orange-400" : "bg-white text-[#0A1628]/60 border border-[#E2E8F0] hover:border-[#0A1628]"}`}>{c}</button>
              ))}
            </div>
            <div className="flex gap-2">
              {["All", "Completed", "Ongoing"].map(s => (
                <button key={s} onClick={() => setStatus(s)} className={`px-4 py-2.5 rounded-sm font-mono text-xs font-bold tracking-widest uppercase transition ${status === s ? "bg-orange-500 text-[#0A1628]" : "bg-white text-[#0A1628]/60 border border-[#E2E8F0] hover:border-[#0A1628]"}`}>{s}</button>
              ))}
            </div>
          </div>
          <p className="font-mono text-xs tracking-[0.25em] text-[#0A1628]/45 uppercase mb-6">Showing {list.length} flagship projects · $2.4B combined value</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                <Link to={`/projects/${p.slug}`} className="group block bg-white border border-[#E2E8F0] hover:border-[#0A1628] rounded-sm overflow-hidden hover:shadow-[8px_8px_0_#0A1628] hover:-translate-y-1 transition">
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <span className={`absolute top-3 left-3 font-mono text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-sm ${p.status === "Completed" ? "bg-emerald-500 text-[#0A1628]" : "bg-orange-500 text-[#0A1628]"}`}>{p.status.toUpperCase()}</span>
                    <span className="absolute bottom-3 right-3 font-mono text-[11px] tracking-widest bg-[#0A1628]/85 px-2.5 py-1 rounded-sm text-white">{p.value}</span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-orange-600 uppercase">{p.category} · {p.year}</p>
                    <h3 className="font-display font-bold text-2xl uppercase leading-none mt-2">{p.name}</h3>
                    <p className="text-sm text-[#0A1628]/55 mt-2 flex items-center gap-1.5"><MapPin size={14} /> {p.location}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-[#0A1628]">Case study <ArrowUpRight size={15} className="text-orange-500" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && <p className="text-center py-20 font-display text-3xl uppercase text-[#0A1628]/40">No projects in this filter.</p>}
        </div>
      </section>
    </div>
  );
}
