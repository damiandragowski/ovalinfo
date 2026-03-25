import { motion } from "framer-motion";

const categories = [
  {
    category: "Telecommunications",
    color: "cyan",
    clients: ["Orange PL", "Vodafone UK", "Telenor Pakistan", "Telia Finland", "Telia Norway", "Telia Sweden", "Telia Danmark", "Polkomtel (Plus)", "Cyfrowy Polsat", "T-Mobile"],
  },
  {
    category: "Finance, Energy & Insurance",
    color: "indigo",
    clients: ["Nordea", "PZU", "Orlen", "PayDirect"],
  },
  {
    category: "Technology & Consulting",
    color: "violet",
    clients: ["Oracle", "Coforge", "Sabre", "Asseco Poland", "CarryWater", "Itconnect", "Axia Metrics", "Nextira"],
  },
  {
    category: "eHealth, Government & Media",
    color: "emerald",
    clients: ["eZdrowie", "ULC (Urząd Lotnictwa Cywilnego)", "CSIOZ", "TVN"],
  },
];

const colorMap = {
  cyan: { border: "border-cyan-500/30", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", header: "text-cyan-400" },
  indigo: { border: "border-indigo-500/30", tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20", header: "text-indigo-400" },
  violet: { border: "border-violet-500/30", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20", header: "text-violet-400" },
  emerald: { border: "border-emerald-500/30", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", header: "text-emerald-400" },
};

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Trusted By</span>
          <h2 className="text-4xl font-bold mt-2">
            Our <span className="text-cyan-400">Clients</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We have partnered with industry leaders across Europe and Asia, delivering critical systems that power millions of users.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-950 border rounded-xl p-6 ${c.border}`}
              >
                <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${c.header}`}>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.clients.map((client) => (
                    <span
                      key={client}
                      className={`border text-sm px-3 py-1.5 rounded-lg font-medium ${c.tag}`}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

