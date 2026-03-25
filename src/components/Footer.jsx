const links = {
  Company: ["About Us", "Our Team", "Services", "Projects"],
  Expertise: ["Telecom & Billing", "eHealth", "Banking & Fintech", "Cloud & DevOps"],
  Contact: ["contact@ovalinfo.com", "+48 22 307 50 00", "ul. Złota 59, Warsaw"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">Oval</span><span className="text-white">Info</span>
            </div>
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
                  <li key={item}>
                    <span className="text-slate-400 hover:text-cyan-400 text-sm cursor-pointer transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

