import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, HardHat, FileUp } from "lucide-react";
import { Reveal, SectionTag, PageHero } from "../components/ui";

const offices = [
  { city: "Houston — HQ", addr: "400 Meridian Parkway, Suite 1200, Houston, TX 77001", ph: "+1 (800) 555-0194", tag: "EPC · Design hub · Labs" },
  { city: "Dallas Site Office", addr: "88 Corridor Rd, Industrial Estate, Dallas, TX 75201", ph: "+1 (800) 555-0195", tag: "Highways · TBM depot" },
  { city: "Phoenix Office", addr: "12 Reservoir View, Water Works Rd, Phoenix, AZ 85001", ph: "+1 (800) 555-0196", tag: "Dams · Geotech lab" },
];

const projectTypes = ["Bridge / Flyover", "Road / Expressway", "Dam / Water / STP", "Tunnel / Metro", "High-rise / Commercial", "Industrial / Warehouse", "Survey / Proof-check only", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "Bridge / Flyover", location: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 7) errs.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) errs.message = "Tell us a little more (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const inputCls = (bad?: string) => `w-full border ${bad ? "border-red-500" : "border-[#E2E8F0] focus:border-orange-500"} outline-none focus:ring-2 focus:ring-orange-500/20 rounded-sm px-4 py-3 text-[15px] bg-white transition`;

  return (
    <div>
      <PageHero kicker="CONTACT / RESPONSE < 24 HRS" title={<>Let's talk<br /><span className="text-orange-500">loads.</span></>} sub="Drawings, survey data or just an idea — a licensed PE replies within one business day." image="./images/hero-site.jpg" />

      <section className="py-14 md:py-20 bg-[#F1F3F6] blueprint-dark">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* form */}
          <Reveal>
            <div className="bg-white border border-[#E2E8F0] rounded-sm p-7 md:p-10">
              {sent ? (
                <div className="text-center py-14">
                  <CheckCircle2 size={64} className="text-emerald-500 mx-auto" />
                  <h2 className="font-display font-bold uppercase text-4xl mt-6">Request received.</h2>
                  <p className="text-[#0A1628]/60 mt-3 max-w-md mx-auto">Thanks, {form.name.split(" ")[0]}. A licensed engineer will call <span className="font-semibold text-[#0A1628]">{form.phone}</span> within one business day. Reference: <span className="font-mono font-bold text-orange-600">BR-2026-{Math.abs(form.name.length * 7919 + form.email.length * 104729) % 90000 + 10000}</span></p>
                  <div className="mt-6 bg-[#F1F3F6] border border-[#E2E8F0] rounded-sm p-4 text-left text-sm max-w-md mx-auto">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-[#0A1628]/45 uppercase mb-2">// What happens next</p>
                    <ol className="space-y-1.5 text-[#0A1628]/70 list-decimal list-inside">
                      <li>PE reviews your scope (today)</li>
                      <li>Site visit or video walkthrough scheduled</li>
                      <li>Budget range + timeline in 5 working days</li>
                    </ol>
                  </div>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", type: "Bridge / Flyover", location: "", message: "" }); }} className="mt-6 text-sm font-bold uppercase tracking-widest text-orange-600 hover:underline">Send another request</button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 grid place-items-center bg-[#0A1628] text-orange-400 rounded-sm"><HardHat size={21} /></div>
                    <div>
                      <h2 className="font-display font-bold uppercase text-3xl leading-none">Request a quote</h2>
                      <p className="text-[13px] text-[#0A1628]/55 mt-1">Free 45-min consultation · No spam, ever.</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input placeholder="Full name *" value={form.name} onChange={e => set("name", e.target.value)} className={inputCls(errors.name)} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input placeholder="Phone *" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputCls(errors.phone)} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <input placeholder="Email *" value={form.email} onChange={e => set("email", e.target.value)} className={inputCls(errors.email)} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <select value={form.type} onChange={e => set("type", e.target.value)} className={inputCls()}>
                      {projectTypes.map(t => <option key={t}>{t}</option>)}
                    </select>
                    <input placeholder="Site location (city)" value={form.location} onChange={e => set("location", e.target.value)} className={inputCls()} />
                  </div>
                  <div className="mt-4">
                    <textarea rows={5} placeholder="Scope: spans, floors, km, site area, timeline… *" value={form.message} onChange={e => set("message", e.target.value)} className={inputCls(errors.message) + " resize-none"} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[13px] text-[#0A1628]/55 border border-dashed border-[#E2E8F0] rounded-sm p-4">
                    <FileUp size={18} className="text-orange-500 shrink-0" /> Attach drawings / BOQ / soil reports after we reply — link sent by email.
                  </div>
                  <button type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-sm transition">
                    Send request <Send size={17} />
                  </button>
                  <p className="text-center text-xs text-[#0A1628]/40 mt-3">Typical reply time: 6 working hours · PE-signed response</p>
                </form>
              )}
            </div>
          </Reveal>

          {/* info */}
          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="bg-[#0A1628] text-white rounded-sm p-7 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid" />
                <div className="relative">
                  <SectionTag index="C-01" label="Direct lines" dark />
                  <ul className="space-y-4 text-[15px]">
                    <li className="flex gap-3"><Phone size={19} className="text-orange-400 shrink-0 mt-0.5" /><div><p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Tenders & new work</p><a href="tel:+18005550194" className="font-bold text-lg hover:text-orange-400 transition">+1 (800) 555-0194</a></div></li>
                    <li className="flex gap-3"><Mail size={19} className="text-orange-400 shrink-0 mt-0.5" /><div><p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Email</p><a href="mailto:build@bedrockcivil.com" className="font-bold hover:text-orange-400 transition">build@bedrockcivil.com</a></div></li>
                    <li className="flex gap-3"><Clock size={19} className="text-orange-400 shrink-0 mt-0.5" /><div><p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Hours</p><p className="font-semibold">Mon–Sat · 8:00–18:00 · 24/7 site emergency line</p></div></li>
                  </ul>
                </div>
              </div>
            </Reveal>
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={0.05 * i}>
                <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 flex gap-4 hover:border-[#0A1628] transition">
                  <MapPin size={22} className="text-orange-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-orange-600 font-bold uppercase">{o.tag}</p>
                    <h3 className="font-display font-bold uppercase text-2xl">{o.city}</h3>
                    <p className="text-sm text-[#0A1628]/60 mt-1">{o.addr}</p>
                    <p className="font-mono text-sm font-bold mt-2">{o.ph}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal><SectionTag index="C-02" label="Straight answers" /></Reveal>
          <Reveal><h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-8">Before you ask<span className="text-orange-500">.</span></h2></Reveal>
          {[
            { q: "What project sizes do you take?", a: "$500K proof-checks to $500M+ EPC. Sweet spot is $5M–$300M design-build where single-point responsibility saves clients the most." },
            { q: "Do you work outside Texas?", a: "Yes — licensed across 14 states with camp-ready crews. Remote survey + local partners model keeps mobilisation under 3 weeks." },
            { q: "Fixed price or remeasurement?", a: "Both. Fixed-price EPC where ground risk is characterised; FIDIC remeasurement where it isn't. We tell you honestly which fits — at tender, not halfway." },
            { q: "Who stamps the design?", a: "Every package is signed by a licensed PE, independently proof-checked, and covered by professional-indemnity insurance. Calculations and BIM models are handed over, not held hostage." },
          ].map((f, i) => (
            <Reveal key={i}>
              <details className="group border border-[#E2E8F0] rounded-sm mb-3 open:border-[#0A1628] transition">
                <summary className="cursor-pointer list-none flex justify-between items-center p-5 font-display font-bold uppercase text-xl">
                  {f.q}<span className="text-orange-500 text-2xl group-open:rotate-45 transition leading-none">+</span>
                </summary>
                <p className="px-5 pb-5 text-[15px] text-[#0A1628]/65 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
