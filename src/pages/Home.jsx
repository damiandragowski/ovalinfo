import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import TechChart from "../components/TechChart";
import Diagram from "../components/Diagram";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />

      <section id="tech" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Capabilities</span>
            <h2 className="text-4xl font-bold mt-2">
              Tech <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Two decades of hands-on experience across the full technology stack — from assembly to cloud-native.
            </p>
          </motion.div>
          <TechChart />
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Reference</span>
            <h2 className="text-4xl font-bold mt-2">
              System <span className="text-cyan-400">Architecture</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Typical enterprise microservices topology we design and implement.
            </p>
          </motion.div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-x-auto">
            <Diagram />
          </div>
        </div>
      </section>

      <Clients />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
