import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine, ShieldCheck, ChevronRight, Quote, Calculator, Phone } from "lucide-react";
import { Reveal, SectionTag, Counter } from "../components/ui";
import { services, projects, testimonials, news, clients } from "../data/site";

const iconMap: Record<string, any> = { Building2, Route, Mountain, Waves, Milestone, Drill, HardHat, ScanLine };

const stats = [
  { v: 32, suffix: "+", label: "Years in operation", sub: "since 1994" },
  { v: 640, suffix: "+", label: "Projects delivered", sub: "across 14 states" },
  { v: 2.4, suffix: "B", decimals: 1, label: "Contract value managed", sub: "in USD" },
  { v: 14, suffix: "M", label: "Safe man-hours", sub: "zero-harm culture" },
];

const process = [
  { n: "01", t: "Survey & Investigate", d: "Drone LiDAR, boreholes, hydrology and traffic studies lock the real ground truth before a line is drawn." },
  { n: "02", t: "Design & Model", d: "LOD 400 BIM, FEM analysis and 4D sequencing — every clash resolved digitally, not on site." },
  { n: "03", t: "Build & Control", d: "GPS-guided plant, NABL labs and P6 controls keep quality, cost and schedule inside tolerance." },
  { n: "04", t: "Monitor & Hand Over", d: "SHM sensors, as-builts and a live digital twin — plus 5-year defect-liability support." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end bg-[#0A1628] text-white overflow-hidden">
        <img src="/images/hero-site.jpg" alt="Construction site at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-[#0A1628]/25" />
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 pt-[160px] pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-orange-500 text-[#0A1628] font-mono text-xs font-bold px-3 py-1.5 rounded-sm tracking-widest">EPC CONTRACTOR · LIC #CE-88412</span>
              <span className="font-mono text-xs tracking-[0.25em] text-white/70">BRIDGES — HIGHWAYS — DAMS — TUNNELS — TOWERS</span>
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.88] text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-5xl">
              We build what<br />cities <span className="text-orange-500">stand on.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
              Bedrock Civil is a full-service civil engineering & EPC contractor. 640+ bridges, expressways, dams, tunnels and towers delivered in 32 years — on spec, on schedule, zero-harm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm transition">Start your project <ArrowUpRight size={18} strokeWidth={2.5} /></Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border border-white/30 hover:border-orange-400 hover:text-orange-400 font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm transition">View 640+ projects <ArrowRight size={18} /></Link>
            </div>
            {/* stat strip */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-white/15 bg-[#0A1628]/70 backdrop-blur rounded-sm overflow-hidden">
              {stats.map((s, i) => (
                <div key={i} className={`p-5 ${i !== 0 ? "border-l border-white/15" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-white/15" : ""} ${i === 2 ? "max-lg:border-l-0" : ""}`}>
                  <p className="font-display font-bold text-4xl md:text-5xl text-white"><Counter to={s.v} suffix={s.suffix} decimals={(s as any).decimals ?? 0} /></p>
                  <p className="text-sm font-semibold text-white/85 mt-1">{s.label}</p>
                  <p className="font-mono text-[11px] tracking-widest text-orange-400/90 uppercase">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <div className="hazard h-2.5" />

      {/* CLIENT MARQUEE */}
      <div className="bg-white border-b border-[#E2E8F0] py-4 overflow-hidden">
        <div className="flex marquee-track gap-0 w-max">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="flex items-center gap-3 px-8 font-mono text-xs tracking-[0.2em] text-[#0A1628]/50 uppercase whitespace-nowrap">
              <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block" /> {c}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-[#F1F3F6] blueprint-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="01" label="What we do — 8 engineering disciplines" /></Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <Reveal><h2 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl">Full-stack civil<br />engineering<span className="text-orange-500">.</span></h2></Reveal>
            <Reveal delay={0.1}><Link to="/services" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#0A1628] border-b-2 border-orange-500 pb-1 hover:gap-3.5 transition-all">All services <ArrowRight size={18} /></Link></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Building2;
              return (
                <Reveal key={s.slug} delay={(i % 4) * 0.07}>
                  <Link to={`/services/${s.slug}`} className="group bg-white border border-[#E2E8F0] hover:border-[#0A1628] rounded-sm p-6 flex flex-col min-h-[280px] transition-all hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#0A1628]">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 grid place-items-center bg-[#0A1628] text-orange-400 rounded-sm group-hover:bg-orange-500 group-hover:text-[#0A1628] transition"><Icon size={22} /></div>
                      <span className="font-mono text-xs font-bold text-[#0A1628]/30">{s.code}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl uppercase leading-none mt-5">{s.title}</h3>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed mt-2 flex-1">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-orange-600">Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[#0A1628] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="02" label="Flagship projects" dark /></Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <Reveal><h2 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl">Landmarks in<br /><span className="text-stroke">concrete & steel.</span></h2></Reveal>
            <Reveal delay={0.1}><Link to="/projects" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-white border-b-2 border-orange-500 pb-1 hover:gap-3.5 transition-all">Full portfolio <ArrowRight size={18} /></Link></Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/projects/${p.slug}`} className="group block bg-[#12263F] border border-white/10 rounded-sm overflow-hidden hover:border-orange-500/60 transition">
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <span className={`absolute top-3 left-3 font-mono text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-sm ${p.status === "Completed" ? "bg-emerald-500 text-[#0A1628]" : "bg-orange-500 text-[#0A1628]"}`}>{p.status.toUpperCase()}</span>
                    <span className="absolute bottom-3 right-3 font-mono text-[11px] tracking-widest bg-[#0A1628]/80 backdrop-blur px-2.5 py-1 rounded-sm text-white/80">{p.value}</span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-orange-400 uppercase">{p.category} · {p.year}</p>
                    <h3 className="font-display font-bold text-2xl uppercase leading-none mt-2 group-hover:text-orange-400 transition">{p.name}</h3>
                    <p className="text-sm text-white/55 mt-2">{p.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="03" label="How we deliver — EPC under one roof" /></Reveal>
          <Reveal><h2 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl mb-12">From soil sample<br />to ribbon-cutting<span className="text-orange-500">.</span></h2></Reveal>
          <div className="grid md:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative border-t-4 border-[#0A1628] pt-6 pb-2 group hover:border-orange-500 transition">
                  <p className="font-display font-bold text-6xl text-[#0A1628]/10 group-hover:text-orange-500/30 transition leading-none">{p.n}</p>
                  <h3 className="font-display font-bold text-2xl uppercase mt-2">{p.t}</h3>
                  <p className="text-sm text-[#0A1628]/60 leading-relaxed mt-2">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* safety banner */}
          <Reveal>
            <div className="mt-14 bg-[#0A1628] text-white rounded-sm overflow-hidden grid lg:grid-cols-[1fr_1.2fr]">
              <img src="/images/team-site.jpg" alt="Engineers reviewing drawings" className="h-64 lg:h-full w-full object-cover" />
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 text-orange-400 font-mono text-xs tracking-[0.25em] uppercase"><ShieldCheck size={16} /> Zero-harm safety culture</div>
                <h3 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95] mt-4">14 million safe<br />man-hours & counting.</h3>
                <p className="text-white/65 mt-4 leading-relaxed text-sm md:text-base">Daily toolbox talks, permit-to-work for every lift, third-party HSE audits and a stop-work authority given to every worker — our TRIR runs 63% below industry average.</p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {["0 fatalities since 2016", "63% below avg TRIR", "100% staff HSE-trained"].map((t, i) => (
                    <div key={i} className="border-l-2 border-orange-500 pl-3 font-display font-semibold text-lg leading-tight uppercase">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOOLS CTA STRIP */}
      <section className="bg-orange-500 text-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-sm bg-[#0A1628] text-orange-400 grid place-items-center shrink-0"><Calculator size={26} /></div>
            <div>
              <h3 className="font-display font-bold uppercase text-3xl md:text-4xl leading-none">Free engineering calculators</h3>
              <p className="font-medium mt-1 text-[#0A1628]/75">Concrete volume, rebar weight, beam moments, earthwork & cost estimates — run numbers in seconds.</p>
            </div>
          </div>
          <Link to="/tools" className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm hover:bg-[#1D3A5F] transition shrink-0">Open the toolbox <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#F1F3F6] blueprint-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="04" label="Client voices" /></Reveal>
          <Reveal><h2 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-7xl mb-10">Trusted with<br />billions<span className="text-orange-500">.</span></h2></Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="bg-white border border-[#E2E8F0] rounded-sm p-7 flex flex-col h-full hover:shadow-[8px_8px_0_#0A1628] hover:-translate-y-1 transition">
                  <Quote size={28} className="text-orange-500" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-[#0A1628]/80 flex-1">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-[#E2E8F0]">
                    <p className="font-display font-bold text-xl uppercase leading-none">{t.name}</p>
                    <p className="text-xs text-[#0A1628]/55 mt-1">{t.role}</p>
                    <p className="font-mono text-[11px] tracking-widest text-orange-600 mt-2 uppercase">{t.project}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS + CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div>
            <Reveal><SectionTag index="05" label="Site diary — latest news" /></Reveal>
            <div className="space-y-4">
              {news.map((n, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <article className="border border-[#E2E8F0] rounded-sm p-5 hover:border-[#0A1628] transition group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0A1628] text-orange-400 font-mono text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase">{n.tag}</span>
                      <span className="font-mono text-xs text-[#0A1628]/45">{n.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl uppercase leading-tight mt-3 group-hover:text-orange-600 transition">{n.title}</h3>
                    <p className="text-sm text-[#0A1628]/60 mt-1.5">{n.excerpt}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="bg-[#0A1628] text-white rounded-sm p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute inset-0 blueprint-grid" />
              <div className="relative">
                <p className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase">// Free 45-min consultation</p>
                <h3 className="font-display font-bold uppercase text-5xl md:text-6xl leading-[0.9] mt-4">Have ground to break? Let's talk loads.</h3>
                <p className="text-white/65 mt-4">Send drawings, a survey, or just an idea. A licensed PE responds within one business day with next steps and a budget range.</p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm transition">Request a quote <ArrowUpRight size={18} /></Link>
                  <a href="tel:+18005550194" className="inline-flex items-center gap-2 border border-white/25 hover:border-orange-400 hover:text-orange-400 font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm transition"><Phone size={17} /> +1 (800) 555-0194</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
