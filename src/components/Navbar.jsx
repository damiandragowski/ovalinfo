import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OvalinfoO from "./OvalinfoO";

const links = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Tech", id: "tech" },
  { label: "Clients", id: "clients" },
  { label: "Projects", id: "projects" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-bold tracking-tight">
          <OvalinfoO /><span className="text-cyan-400">val</span><span className="text-white">Info</span>
        </button>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Get in Touch
          </button>
        </div>
        <button
          className="md:hidden text-slate-400 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="text-slate-400 hover:text-cyan-400 transition-colors py-1 text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

