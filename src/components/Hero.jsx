import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "10", label: "Tech Domains" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 -z-10" />
      <div
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 70%, #06b6d4 0%, transparent 50%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-4 py-1 text-sm font-medium mb-6">
          Enterprise IT Solutions · Warsaw, Poland
        </span>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Oval</span>
          <span className="text-cyan-400">Info</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
          Delivering enterprise-grade software for Telecom, Banking, eHealth & Cloud.
        </p>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          20+ years building mission-critical systems for global leaders — from the world's largest 4G/5G OCS billing
          platforms to transformative digital health solutions across Europe.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#services"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold text-cyan-400">{s.value}</div>
            <div className="text-slate-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

