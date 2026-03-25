const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const links = {
  Company: [
    { label: "About Us", id: "about" },
    { label: "Our Team", id: "team" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
  ],
  Expertise: [
    { label: "Telecom & Billing", id: "services" },
    { label: "eHealth", id: "services" },
    { label: "Banking & Fintech", id: "services" },
    { label: "Cloud & DevOps", id: "services" },
  ],
};

const contactItems = [
  { label: "damiandragowski@gmail.com", href: "mailto:damiandragowski@gmail.com" },
  { label: "+48 509 277 939", href: "tel:+48509277939" },
  { label: "ul. Złota 59, Warsaw", href: "https://maps.google.com/?q=Zlota+59+Warsaw" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold mb-4 block"
            >
              <span className="text-cyan-400">Oval</span><span className="text-white">Info</span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Enterprise IT consultancy based in Warsaw, Poland. Specialists in Telecom, Banking, eHealth, and Cloud-native solutions.
            </p>
            <div className="flex gap-3">
              {["LI", "GH", "TW"].map((s) => (
                <div key={s} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} OvalInfo Sp. z o.o. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            NIP: PL 527-000-00-00 · REGON: 380000000 · Warsaw, Poland
          </p>
        </div>
      </div>
    </footer>
  );
}
