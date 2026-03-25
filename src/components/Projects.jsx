import { motion } from "framer-motion";

const projects = [
  {
    title: "ACSE – Telco Transformation",
    client: "Polkomtel / Cyfrowy Polsat",
    role: "Chief Software Architect",
    desc: "Led 10 Scrum teams (~100 engineers) in transforming all legacy billing and sales systems using the strangler pattern. Infrastructure migration to cloud-native on OpenShift with full CI/CD, MongoDB, Camunda workflows, and complete observability stack.",
    tags: ["Java", "Kafka", "CQRS", "OpenShift", "MongoDB", "Camunda", "ArgoCD", "Istio"],
    accent: "cyan",
  },
  {
    title: "Oracle BRM – Billing Transformation",
    client: "Orange PL",
    role: "Architect, Designer, Programmer",
    desc: "Full Oracle BRM 7.5 implementation from PS7 to PS22. C++/PLSQL opcode customizations, IFW pipeline engineering, ECE PoC, and convergent evolution project integrating external rating and TV billing systems via ETL and custom MTA pipeline.",
    tags: ["Oracle BRM", "C++", "PLSQL", "ECE", "IFW", "Pipeline", "ETL"],
    accent: "orange",
  },
  {
    title: "PayDirect – Banking Platform",
    client: "PayDirect",
    role: "Full Stack Developer & DevOps",
    desc: "PSD2-compliant transaction and banking integration module built on Java and Spring Boot. Full CI/CD with GitHub Actions and Terraform on Azure. Multi-tenant AKS deployment with Istio and ELK monitoring.",
    tags: ["Java", "Spring Boot", "PSD2", "Azure AKS", "Terraform", "Istio", "ELK"],
    accent: "indigo",
  },
  {
    title: "eZdrowie / directPay – eHealth",
    client: "CSIOZ / eZdrowie",
    role: "Solutions Architect & Lead Developer",
    desc: "Patient, personnel, and organization portals built on Angular microfrontends with ngrx state management. Microservices in Java/Spring Boot secured via Keycloak, event-driven with Kafka, deployed on Docker Swarm with Portainer.",
    tags: ["Angular", "ngrx", "Microfrontends", "Spring Boot", "Keycloak", "Kafka", "Docker Swarm"],
    accent: "emerald",
  },
  {
    title: "KYC Applications – Nordea",
    client: "Nordea",
    role: "Senior Frontend & Backend Developer",
    desc: "KYC frontend applications using Angular and React with microfrontend architecture and Redux/ngrx. Backend in Java with Camunda BPM, GraphQL API, OAuth2, Elasticsearch, and MongoDB on Kubernetes (Mirantis ESP + AWS).",
    tags: ["Angular", "React", "GraphQL", "Camunda", "Kubernetes", "AWS", "MongoDB"],
    accent: "violet",
  },
  {
    title: "Sabre – Travel Tech Products",
    client: "Sabre",
    role: "Backend Developer & Solutions Designer",
    desc: "Microservices backend for new Sabre product lines on Google Cloud Platform. Event-driven architecture with Kafka, OpenAPI-first design. Frontend modules built with React and TypeScript.",
    tags: ["Java", "Spring Boot", "GCP", "Kafka", "React", "TypeScript", "openAPI"],
    accent: "blue",
  },
];

const accentMap = {
  cyan: "border-cyan-500/30 hover:border-cyan-400/60",
  orange: "border-orange-500/30 hover:border-orange-400/60",
  indigo: "border-indigo-500/30 hover:border-indigo-400/60",
  emerald: "border-emerald-500/30 hover:border-emerald-400/60",
  violet: "border-violet-500/30 hover:border-violet-400/60",
  blue: "border-blue-500/30 hover:border-blue-400/60",
};

const tagMap = {
  cyan: "bg-cyan-500/10 text-cyan-300",
  orange: "bg-orange-500/10 text-orange-300",
  indigo: "bg-indigo-500/10 text-indigo-300",
  emerald: "bg-emerald-500/10 text-emerald-300",
  violet: "bg-violet-500/10 text-violet-300",
  blue: "bg-blue-500/10 text-blue-300",
};

const roleMap = {
  cyan: "text-cyan-400",
  orange: "text-orange-400",
  indigo: "text-indigo-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
  blue: "text-blue-400",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h2 className="text-4xl font-bold mt-2">
            Key <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of enterprise engagements where we designed, built, and delivered transformative solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`bg-slate-900 border rounded-xl p-6 flex flex-col transition-colors ${accentMap[p.accent]}`}
            >
              <div className="mb-4">
                <span className="text-slate-500 text-xs uppercase tracking-widest">{p.client}</span>
                <h3 className="text-white font-bold text-lg mt-1">{p.title}</h3>
                <span className={`text-xs font-semibold ${roleMap[p.accent]}`}>{p.role}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className={`text-xs px-2 py-1 rounded-md ${tagMap[p.accent]}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

