import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ArrowUpRight, HardHat } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/tools", label: "Eng. Tools" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top utility bar */}
      <div className="bg-[#0A1628] text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <p className="font-mono tracking-wide">ISO 9001:2015 · ISO 14001 · OHSAS 45001 CERTIFIED</p>
          <div className="flex items-center gap-6">
            <a href="tel:1234567890" className="flex items-center gap-1.5 hover:text-orange-400 transition"><Phone size={12} /> +91 1234567890</a>
            <a href="mailto:testcivil@gmail.com" className="flex items-center gap-1.5 hover:text-orange-400 transition"><Mail size={12} /> testcivil@gmail.com</a>
          </div>
        </div>
      </div>
      {/* main nav */}
      <div className={`transition-all border-b ${scrolled ? "bg-[#0A1628]/95 backdrop-blur-md border-white/10 shadow-2xl" : "bg-[#0A1628] border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500 grid place-items-center font-display font-800 text-2xl text-[#0A1628] font-bold">C</div>
            <div className="leading-none">
              <p className="font-display font-bold text-white text-[22px] tracking-wide">CIVIL<span className="text-orange-500">ENGINEER</span></p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">EPC CONTRACTOR</p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `px-4 py-2 text-[13px] font-semibold uppercase tracking-widest transition rounded ${isActive ? "text-orange-400 bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="ml-3 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#0A1628] font-bold text-[13px] uppercase tracking-widest px-5 py-3 rounded-sm transition">
              Get a Quote <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {/* mobile */}
        {open && (
          <div className="lg:hidden bg-[#0A1628] border-t border-white/10 px-6 py-4 space-y-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `block px-3 py-3 font-display font-semibold text-xl tracking-wide ${isActive ? "text-orange-400" : "text-white"}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-orange-500 text-[#0A1628] font-bold uppercase tracking-widest text-sm px-5 py-4 rounded-sm mt-2">
              <HardHat size={18} /> Request a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
