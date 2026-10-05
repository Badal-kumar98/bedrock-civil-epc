import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="hazard h-2.5 w-full opacity-90" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-orange-500 grid place-items-center text-[#0A1628] font-bold text-2xl font-display">B</div>
              <div className="leading-none">
                <p className="font-display font-bold text-[22px] tracking-wide">BEDROCK<span className="text-orange-500">CIVIL</span></p>
                <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">EST. 1994</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">Full-service civil engineering & EPC contractor. Bridges, highways, dams, tunnels and towers — engineered for a 100-year life.</p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Linkedin, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded border border-white/15 text-white/60 hover:text-orange-400 hover:border-orange-400 transition"><I size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-orange-400 mb-5">SERVICES</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Structural Engineering", "Bridges & Transport", "Geotechnical & Foundations", "Water, Dams & Hydraulics", "Roads & Highways", "Tunnels & Underground"].map(s => (
                <li key={s}><Link to="/services" className="hover:text-orange-400 transition inline-flex items-center gap-1">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-orange-400 mb-5">COMPANY</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/projects" className="hover:text-orange-400 transition">Projects Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition">About & Leadership</Link></li>
              <li><Link to="/tools" className="hover:text-orange-400 transition">Engineering Calculators</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition">Contact & Offices</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition inline-flex items-center gap-1">Careers <ArrowUpRight size={13} /></a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Safety & ESG Report (PDF)</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-orange-400 mb-5">HEAD OFFICE</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5"><MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" /> 400 Meridian Parkway, Suite 1200<br />Houston, TX 77001</li>
              <li className="flex gap-2.5 items-center"><Phone size={16} className="text-orange-400 shrink-0" /> +1 (800) 555-0194</li>
              <li className="flex gap-2.5 items-center"><Mail size={16} className="text-orange-400 shrink-0" /> build@bedrockcivil.com</li>
              <li className="flex gap-2.5 items-center"><Clock size={16} className="text-orange-400 shrink-0" /> Mon–Sat · 8:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40 font-mono tracking-wide">
          <p>© 2026 BEDROCK CIVIL ENGINEERING CO. ALL RIGHTS RESERVED.</p>
          <p>LIC. #CE-88412 · ISO 9001 / 14001 / 45001 · C-CLASS CONTRACTOR</p>
        </div>
      </div>
    </footer>
  );
}
