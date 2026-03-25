import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🏗️",
    title: "Architecture First",
    desc: "HLD, LLD, SDL documentation. SOA to microservices. CQRS, event sourcing, hexagonal patterns.",
  },
  {
    icon: "⚡",
    title: "Performance at Scale",
    desc: "4G/5G billing at world scale. Oracle ECE/CNCP/BRM tuning on cloud-native Rancher clusters.",
  },
  {
    icon: "☁️",
    title: "Cloud Native",
    desc: "Azure, GCP, OCI, AWS. Kubernetes, Istio, ArgoCD, Helm — multi-cloud, multi-tenant.",
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    desc: "Keycloak, OAuth2, PSD2 banking compliance, KYC, multi-tenant isolation and GDPR.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Your Strategic <span className="text-cyan-400">Technology Partner</span>
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              OvalInfo is a boutique IT consultancy and software house based in Warsaw, Poland, specializing in
              enterprise-grade software architecture and development for the most demanding industries.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              We bring deep expertise in telecom billing systems, eHealth platforms, banking integrations, and
              cloud-native microservices — working with world-class clients including Orange, Vodafone, Telenor,
              Nordea, Sabre, and Oracle.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our architects, engineers, and DevOps specialists have delivered systems operating at massive scale —
              from transformative digital platforms across Europe to the biggest OCS billing systems in Asia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Prince2", "SAFe", "ISO 27001 Ready", "Agile / Scrum"].map((b) => (
                <span key={b} className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {pillars.map((item) => (
              <div key={item.title} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

