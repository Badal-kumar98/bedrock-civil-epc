import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, HardHat, FileUp } from "lucide-react";
import { Reveal, SectionTag, PageHero } from "../components/ui";

const offices = [
  { city: "Corporate HQ — Noida", addr: "Sector 62, Noida, Delhi NCR, India - 201301", ph: "+91 1234567890", tag: "EPC · Design hub · Labs" },
  { city: "Regional Office — Delhi NCR", addr: "Connaught Place, New Delhi, India - 110001", ph: "+91 1234567890", tag: "Highways & Infrastructure" },
  { city: "Operations & Geotech Hub", addr: "Industrial Area, Sector 62, Noida, UP, India", ph: "+91 1234567890", tag: "Site Fleet · Geotech lab" },
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
                <div className="text-center py-16 px-4">
                  <CheckCircle2 size={64} className="text-emerald-500 mx-auto" />
                  <h2 className="font-display font-bold uppercase text-3xl md:text-4xl mt-6">Thank You! Message Sent.</h2>
                  <p className="text-[#0A1628]/75 mt-3 text-base md:text-lg max-w-md mx-auto leading-relaxed">Your message has been received successfully. Our engineering team will get in touch with you shortly.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", type: "Bridge / Flyover", location: "", message: "" }); }} className="mt-8 inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-orange-500 hover:text-[#0A1628] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition">Send another message</button>
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
                    <li className="flex gap-3"><Phone size={19} className="text-orange-400 shrink-0 mt-0.5" /><div><p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Tenders & new work</p><a href="tel:1234567890" className="font-bold text-lg hover:text-orange-400 transition">+91 1234567890</a></div></li>
                    <li className="flex gap-3"><Mail size={19} className="text-orange-400 shrink-0 mt-0.5" /><div><p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Email</p><a href="mailto:testcivil@gmail.com" className="font-bold hover:text-orange-400 transition">testcivil@gmail.com</a></div></li>
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
