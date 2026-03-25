import { motion } from "framer-motion";
import TechChart from "../components/TechChart";
import Diagram from "../components/Diagram";
import { Link } from "react-router-dom";

const projects = ["acse","brm","sale-portal"];

export default function Home(){
  return (
    <div className="p-6 space-y-12">
      <section className="text-center">
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-5xl font-bold">
          OvalInfo
        </motion.h1>
        <p className="mt-4 text-xl text-slate-400">
          Enterprise Architecture • Telecom • Banking • eHealth
        </p>
      </section>

      <section>
        <h2 className="text-3xl mb-4">Tech Stack</h2>
        <TechChart/>
      </section>

      <section>
        <h2 className="text-3xl mb-4">Architecture</h2>
        <Diagram/>
      </section>

      <section>
        <h2 className="text-3xl mb-4">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(p => (
            <Link key={p} to={"/project/"+p} className="p-4 bg-slate-800 rounded">
              {p.toUpperCase()}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
