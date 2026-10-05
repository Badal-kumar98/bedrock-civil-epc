import { useMemo, useState } from "react";
import { Boxes, Weight, MoveHorizontal, Mountain, Banknote, Info, RotateCcw } from "lucide-react";
import { Reveal, SectionTag, PageHero } from "../components/ui";

function Field({ label, unit, value, onChange, min = 0, step = 0.1 }: { label: string; unit: string; value: number; onChange: (v: number) => void; min?: number; step?: number }) {
  return (
    <label className="block">
      <span className="flex justify-between text-[13px] font-semibold text-[#0A1628]/70 mb-1.5"><span>{label}</span><span className="font-mono text-[#0A1628]/40">{unit}</span></span>
      <input type="number" min={min} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value) || 0)}
        className="w-full border border-[#E2E8F0] focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none rounded-sm px-3.5 py-2.5 font-mono font-bold text-[#0A1628] bg-white" />
    </label>
  );
}

function Result({ label, value, unit, accent = false }: { label: string; value: string; unit?: string; accent?: boolean }) {
  return (
    <div className={`rounded-sm px-4 py-3.5 ${accent ? "bg-[#0A1628] text-white" : "bg-[#F1F3F6]"}`}>
      <p className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accent ? "text-orange-400" : "text-[#0A1628]/45"}`}>{label}</p>
      <p className="font-display font-bold text-3xl leading-none mt-1">{value} {unit && <span className="text-base font-body font-semibold opacity-60">{unit}</span>}</p>
    </div>
  );
}

function Card({ icon: Icon, code, title, desc, children }: any) {
  return (
    <Reveal>
      <div className="bg-white border border-[#E2E8F0] hover:border-[#0A1628] transition rounded-sm overflow-hidden">
        <div className="flex items-center gap-3 p-5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="w-11 h-11 grid place-items-center bg-[#0A1628] text-orange-400 rounded-sm shrink-0"><Icon size={21} /></div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-orange-600 font-bold">{code}</p>
            <h3 className="font-display font-bold uppercase text-2xl leading-none">{title}</h3>
          </div>
        </div>
        <p className="px-5 pt-4 text-[13px] text-[#0A1628]/55 flex gap-1.5"><Info size={14} className="shrink-0 mt-0.5" /> {desc}</p>
        <div className="p-5 pt-4">{children}</div>
      </div>
    </Reveal>
  );
}

const REBAR_WT: Record<string, number> = { "8": 0.395, "10": 0.617, "12": 0.888, "16": 1.579, "20": 2.466, "25": 3.853, "28": 4.834, "32": 6.313 };

export default function Tools() {
  // concrete
  const [cl, setCl] = useState(10); const [cw, setCw] = useState(5); const [ct, setCt] = useState(0.15); const [waste, setWaste] = useState(5);
  const conc = useMemo(() => {
    const vol = cl * cw * ct; const withWaste = vol * (1 + waste / 100);
    return { vol, withWaste, cement: withWaste * 7.2, sand: withWaste * 0.45, agg: withWaste * 0.9, water: withWaste * 165 };
  }, [cl, cw, ct, waste]);

  // rebar
  const [dia, setDia] = useState("16"); const [bars, setBars] = useState(24); const [barLen, setBarLen] = useState(12);
  const rebar = useMemo(() => {
    const perM = REBAR_WT[dia] ?? 1.579;
    return { totalLen: bars * barLen, wt: bars * barLen * perM };
  }, [dia, bars, barLen]);

  // beam (simply supported UDL): M = wL²/8, R = wL/2, Δ = 5wL⁴/384EI
  const [span, setSpan] = useState(6); const [udl, setUdl] = useState(20);
  const beam = useMemo(() => {
    const M = (udl * span * span) / 8;
    const R = (udl * span) / 2;
    const V = R;
    return { M, R, V };
  }, [span, udl]);

  // earthwork (average end area)
  const [a1, setA1] = useState(45); const [a2, setA2] = useState(62); const [elen, setElen] = useState(100); const [swell, setSwell] = useState(25);
  const earth = useMemo(() => {
    const compacted = ((a1 + a2) / 2) * elen;
    return { compacted, loose: compacted * (1 + swell / 100), trucks: compacted * (1 + swell / 100) / 14 };
  }, [a1, a2, elen, swell]);

  // cost estimator
  const [area, setArea] = useState(2000); const [qLevel, setQLevel] = useState("standard");
  const rates: Record<string, { r: number; label: string }> = {
    economy: { r: 1650, label: "Economy — functional finishes" },
    standard: { r: 2350, label: "Standard — mid-range homes & offices" },
    premium: { r: 3400, label: "Premium — high-rise, hospitals, facades" },
    infrastructure: { r: 5100, label: "Heavy infra — bridges, dams /m² deck" },
  };
  const cost = useMemo(() => {
    const base = area * rates[qLevel].r;
    return { base, contingency: base * 0.07, total: base * 1.07, perSqft: (base * 1.07) / (area * 10.764) };
  }, [area, qLevel]);

  const reset = () => { setCl(10); setCw(5); setCt(0.15); setWaste(5); setDia("16"); setBars(24); setBarLen(12); setSpan(6); setUdl(20); setA1(45); setA2(62); setElen(100); setSwell(25); setArea(2000); setQLevel("standard"); };

  return (
    <div>
      <PageHero kicker="ENGINEERING TOOLBOX / FREE" title={<>Run the numbers<br /><span className="text-orange-500">in seconds.</span></>} sub="Five site-grade calculators our own engineers use for quick checks. For stamped design, talk to us." image="/images/survey.jpg" />
      <section className="py-14 md:py-20 bg-[#F1F3F6] blueprint-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <Reveal><SectionTag index="TB-01" label="Interactive — results update live" /></Reveal>
            <button onClick={reset} className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#0A1628]/60 hover:text-orange-600 transition"><RotateCcw size={15} /> Reset all</button>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <Card icon={Boxes} code="CALC-01" title="Concrete estimator" desc="Slab / footing volume with wastage + nominal M20 (1:1.5:3) material split.">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Length" unit="m" value={cl} onChange={setCl} />
                <Field label="Width" unit="m" value={cw} onChange={setCw} />
                <Field label="Thickness" unit="m" value={ct} onChange={setCt} step={0.01} />
                <Field label="Wastage" unit="%" value={waste} onChange={setWaste} step={1} />
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <Result label="Order volume" value={conc.withWaste.toFixed(2)} unit="m³" accent />
                <Result label="Net volume" value={conc.vol.toFixed(2)} unit="m³" />
                <Result label="Cement (50kg bags)" value={Math.ceil(conc.cement / 50).toLocaleString()} unit="bags" />
                <Result label="Sand" value={conc.sand.toFixed(1)} unit="m³" />
                <Result label="Coarse aggregate" value={conc.agg.toFixed(1)} unit="m³" />
                <Result label="Water" value={Math.round(conc.water).toLocaleString()} unit="L" />
              </div>
            </Card>

            <Card icon={Weight} code="CALC-02" title="Rebar weight" desc="Total steel from bar diameter (unit wt = d²/162.2), count and length.">
              <div className="grid grid-cols-3 gap-3">
                <label className="block">
                  <span className="text-[13px] font-semibold text-[#0A1628]/70 mb-1.5 block">Diameter</span>
                  <select value={dia} onChange={e => setDia(e.target.value)} className="w-full border border-[#E2E8F0] focus:border-orange-500 outline-none rounded-sm px-3.5 py-2.5 font-mono font-bold bg-white">
                    {Object.keys(REBAR_WT).map(d => <option key={d} value={d}>Ø {d} mm</option>)}
                  </select>
                </label>
                <Field label="No. of bars" unit="nos" value={bars} onChange={setBars} step={1} />
                <Field label="Bar length" unit="m" value={barLen} onChange={setBarLen} step={1} />
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <Result label="Total steel" value={(rebar.wt / 1000).toFixed(3)} unit="tonnes" accent />
                <Result label="In kilograms" value={Math.round(rebar.wt).toLocaleString()} unit="kg" />
                <Result label="Total bar length" value={rebar.totalLen.toLocaleString()} unit="m" />
                <Result label="Unit weight" value={(REBAR_WT[dia] ?? 0).toFixed(3)} unit="kg/m" />
              </div>
            </Card>

            <Card icon={MoveHorizontal} code="CALC-03" title="Beam quick-check" desc="Simply-supported beam under UDL: reactions, max moment & shear (preliminary only — not for construction).">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Span" unit="m" value={span} onChange={setSpan} />
                <Field label="UDL (w)" unit="kN/m" value={udl} onChange={setUdl} />
              </div>
              <div className="mt-4 border border-[#E2E8F0] rounded-sm p-4 bg-[#F8FAFC]">
                <svg viewBox="0 0 400 90" className="w-full h-20">
                  <line x1="30" y1="55" x2="370" y2="55" stroke="#0A1628" strokeWidth="5" />
                  <polygon points="30,70 18,55 42,55" fill="#0A1628" />
                  <polygon points="370,70 358,55 382,55" fill="#0A1628" />
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={i} x1={55 + i * 24} y1="20" x2={55 + i * 24} y2="52" stroke="#F97316" strokeWidth="2" markerEnd="" />
                  ))}
                  <line x1="40" y1="20" x2="360" y2="20" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="200" y="86" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#0A1628">L = {span} m · w = {udl} kN/m</text>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <Result label="Max moment" value={beam.M.toFixed(1)} unit="kN·m" accent />
                <Result label="Reaction / end" value={beam.R.toFixed(1)} unit="kN" />
                <Result label="Max shear" value={beam.V.toFixed(1)} unit="kN" />
              </div>
            </Card>

            <Card icon={Mountain} code="CALC-04" title="Earthwork volume" desc="Average end-area method between two chainages + bulking to loose truck measure.">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Area @ CH-1" unit="m²" value={a1} onChange={setA1} />
                <Field label="Area @ CH-2" unit="m²" value={a2} onChange={setA2} />
                <Field label="Distance" unit="m" value={elen} onChange={setElen} />
                <Field label="Swell factor" unit="%" value={swell} onChange={setSwell} step={1} />
              </div>
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <Result label="Compacted" value={Math.round(earth.compacted).toLocaleString()} unit="m³" accent />
                <Result label="Loose" value={Math.round(earth.loose).toLocaleString()} unit="m³" />
                <Result label="14 m³ tippers" value={Math.ceil(earth.trucks).toLocaleString()} unit="trips" />
              </div>
            </Card>
          </div>

          <Reveal>
            <div className="mt-5 bg-[#0A1628] text-white rounded-sm overflow-hidden grid lg:grid-cols-[1fr_1.2fr]">
              <div className="p-7 md:p-10 relative">
                <div className="absolute inset-0 blueprint-grid" />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 grid place-items-center bg-orange-500 text-[#0A1628] rounded-sm"><Banknote size={22} /></div>
                    <p className="font-mono text-[11px] tracking-[0.25em] text-orange-400 font-bold">CALC-05</p>
                  </div>
                  <h3 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95] mt-4">Budget<br />estimator.</h3>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">Ballpark EPC budget from built-up area and project class. Includes 7% contingency. Final pricing follows soil report + drawings.</p>
                  <label className="block mt-6">
                    <span className="text-[13px] font-semibold text-white/70 mb-1.5 block">Project class</span>
                    <select value={qLevel} onChange={e => setQLevel(e.target.value)} className="w-full bg-[#12263F] border border-white/15 focus:border-orange-500 outline-none rounded-sm px-4 py-3 font-semibold text-white">
                      {Object.entries(rates).map(([k, v]) => <option key={k} value={k}>{v.label} — ₹{v.r.toLocaleString()}/m²</option>)}
                    </select>
                  </label>
                  <label className="block mt-4">
                    <span className="flex justify-between text-[13px] font-semibold text-white/70 mb-2"><span>Built-up area</span><span className="font-mono text-orange-400">{area.toLocaleString()} m²</span></span>
                    <input type="range" min={200} max={50000} step={100} value={area} onChange={e => setArea(parseInt(e.target.value))} className="w-full accent-orange-500" />
                  </label>
                </div>
              </div>
              <div className="bg-orange-500 text-[#0A1628] p-7 md:p-10 flex flex-col justify-center">
                <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase">// Indicative EPC budget</p>
                <p className="font-display font-bold text-6xl md:text-7xl leading-none mt-3">₹{(cost.total / 10000000).toFixed(2)} Cr</p>
                <p className="font-mono font-bold text-sm mt-2">₹{Math.round(cost.total).toLocaleString()} total · ₹{Math.round(cost.perSqft).toLocaleString()}/sq.ft</p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-[#0A1628]/10 rounded-sm p-4"><p className="font-mono text-[11px] font-bold tracking-widest uppercase">Base cost</p><p className="font-display font-bold text-2xl">₹{(cost.base / 10000000).toFixed(2)} Cr</p></div>
                  <div className="bg-[#0A1628]/10 rounded-sm p-4"><p className="font-mono text-[11px] font-bold tracking-widest uppercase">Contingency 7%</p><p className="font-display font-bold text-2xl">₹{(cost.contingency / 10000000).toFixed(2)} Cr</p></div>
                </div>
                <a href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 bg-[#0A1628] text-white font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-sm hover:bg-[#1D3A5F] transition">Get a firm quote</a>
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-xs text-[#0A1628]/45 leading-relaxed max-w-3xl">Disclaimer: quick-check tools for preliminary sizing and teaching. They ignore load factors, soil variability, deflection limits, detailing rules and local codes — never use calculator output for construction. All stamped design by Bedrock carries PE sign-off, independent proof-check and PI insurance.</p>
        </div>
      </section>
    </div>
  );
}
