import { Link } from "react-router-dom";
import { ShieldCheck, Leaf, Award, ArrowUpRight, Quote } from "lucide-react";
import { Reveal, SectionTag, Counter, PageHero } from "../components/ui";
import { team, testimonials } from "../data/site";

const timeline = [
  { y: "1994", t: "Two engineers, one theodolite", d: "Founded in Houston with 6 staff doing surveying and proof-checking for local builders." },
  { y: "2003", t: "First EPC contract — $18M river bridge", d: "Won our first design-build bridge. Delivered 3 months early; the EPC model stuck." },
  { y: "2011", t: "Geotech lab + dam division", d: "Opened NABL-accredited soils lab, drilling fleet and a dedicated water & dams studio." },
  { y: "2017", t: "Tunnelling & metro entry", d: "Acquired twin EPB-TBMs and a NATM crew — first metro tunnel delivered in 2019." },
  { y: "2022", t: "$2B order book, 900 staff", d: "Crossed 500 projects. Launched digital-twin handover and IoT monitoring on every asset." },
  { y: "2026", t: "640+ projects, 14M safe hours", d: "900+ engineers and builders across 4 offices. Zero fatalities since 2016." },
];

const values = [
  { icon: ShieldCheck, t: "Zero-harm first", d: "Stop-work authority for every worker. No deadline outranks a life — schedule pressure never overrides a safety call." },
  { icon: Award, t: "Engineered honesty", d: "We flag bad ground, optimistic budgets and risky details at tender — not as variation claims later." },
  { icon: Leaf, t: "Build light on land", d: "62% recycled aggregate, solar site offices, and settlement ponds on every project. IGBC & LEED delivery standard." },
];

const certs = ["ISO 9001:2015 Quality", "ISO 14001 Environment", "ISO 45001 Safety", "NABL-accredited labs", "FIDIC registered", "C-Class contractor LIC #CE-88412", "IGBC AP firm", "ACI & IRC member"];

export default function About() {
  return (
    <div>
      <PageHero kicker="ABOUT / SINCE 1994" title={<>Engineers who<br /><span className="text-orange-500">own the outcome.</span></>} sub="900+ engineers, surveyors and builders. One P&L, one safety record, one promise: assets that outlive us." image="/images/team-site.jpg" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTag index="01" label="Who we are" />
            <h2 className="font-display font-bold uppercase leading-[0.9] text-5xl md:text-6xl">A contractor that thinks like a consultant<span className="text-orange-500">.</span></h2>
            <p className="mt-5 text-[#0A1628]/70 leading-relaxed">Bedrock Civil began as a two-person surveying outfit in 1994. Today we're a full EPC contractor — but the consultant's DNA survived: investigate obsessively, model everything, document religiously. Then build it like we own it for 100 years. Because contractually, for 5 of them, we do.</p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {["900+ staff", "4 offices", "32 yrs"].map((s, i) => (
                <div key={i} className="bg-[#F1F3F6] border border-[#E2E8F0] rounded-sm p-4 text-center font-display font-bold text-2xl uppercase">{s}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/survey.jpg" alt="Survey crew" className="rounded-sm h-64 w-full object-cover" />
              <img src="/images/project-tower.jpg" alt="Tower steel" className="rounded-sm h-64 w-full object-cover mt-8" />
              <img src="/images/project-tunnel.jpg" alt="Tunnel" className="rounded-sm h-64 w-full object-cover -mt-8" />
              <img src="/images/project-dam.jpg" alt="Dam" className="rounded-sm h-64 w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0A1628] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="02" label="By the numbers" dark /></Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {[
              { v: 640, s: "+", l: "Projects delivered" },
              { v: 2350, s: " km", l: "Roads paved" },
              { v: 68, s: " km", l: "Tunnels bored" },
              { v: 9400, s: "+", l: "Boreholes logged" },
            ].map((x, i) => (
              <div key={i} className="bg-[#0A1628] p-8">
                <p className="font-display font-bold text-5xl md:text-6xl text-orange-400"><Counter to={x.v} suffix={x.s} /></p>
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/55 mt-2">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Reveal><h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-8">32 years, six chapters<span className="text-orange-500">.</span></h2></Reveal>
            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/15" />
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <Reveal key={t.y} delay={0.03 * i}>
                    <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "" : ""}`}>
                      <div className={`absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-1 w-5 h-5 rotate-45 bg-orange-500 border-4 border-[#0A1628]`} />
                      <div className={i % 2 ? "md:col-start-2" : "md:text-right"}>
                        <p className="font-display font-bold text-4xl text-orange-400">{t.y}</p>
                        <h3 className="font-display font-bold uppercase text-2xl mt-1">{t.t}</h3>
                        <p className="text-white/60 text-sm mt-2 max-w-md md:ml-auto md:mr-0" style={i % 2 ? {} : { marginLeft: "auto" }}>{t.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F1F3F6] blueprint-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionTag index="03" label="Leadership" /></Reveal>
          <Reveal><h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-10">Licensed. Published.<br />On site weekly<span className="text-orange-500">.</span></h2></Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="bg-white border border-[#E2E8F0] rounded-sm overflow-hidden hover:shadow-[8px_8px_0_#0A1628] hover:-translate-y-1 transition">
                  <img src={m.image} alt={m.name} className="w-full h-80 object-cover object-top" />
                  <div className="p-6">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-orange-600 uppercase">{m.creds}</p>
                    <h3 className="font-display font-bold uppercase text-2xl mt-1">{m.name}</h3>
                    <p className="text-sm font-semibold text-[#0A1628]/70">{m.role}</p>
                    <p className="text-sm text-[#0A1628]/55 mt-3 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <div className="bg-[#0A1628] text-white rounded-sm p-7 h-full">
                  <v.icon size={30} className="text-orange-400" />
                  <h3 className="font-display font-bold uppercase text-2xl mt-4">{v.t}</h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 bg-white border border-[#E2E8F0] rounded-sm p-7">
              <p className="font-mono text-xs tracking-[0.3em] text-[#0A1628]/50 uppercase mb-4">// Certifications & memberships</p>
              <div className="flex flex-wrap gap-2">
                {certs.map(c => <span key={c} className="px-4 py-2 bg-[#F1F3F6] border border-[#E2E8F0] rounded-sm text-[13px] font-semibold text-[#0A1628]/70">{c}</span>)}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {testimonials.slice(0, 2).map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="bg-white border-l-4 border-l-orange-500 border border-[#E2E8F0] rounded-sm p-7">
                  <Quote size={26} className="text-orange-500" />
                  <blockquote className="mt-3 text-[15px] text-[#0A1628]/80 leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 font-display font-bold uppercase text-lg">{t.name} <span className="text-[#0A1628]/45 text-sm font-body font-normal normal-case">— {t.role}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-5 bg-orange-500 rounded-sm p-8 md:p-10">
              <h3 className="font-display font-bold uppercase text-3xl md:text-4xl leading-none text-[#0A1628]">Work with engineers who answer the phone.</h3>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-sm hover:bg-[#1D3A5F] transition shrink-0">Meet us <ArrowUpRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
