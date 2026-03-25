import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tech", href: "#tech" },
  { label: "Clients", href: "#clients" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

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
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-cyan-400">Oval</span><span className="text-white">Info</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
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
            <a
              key={l.label}
              href={l.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

