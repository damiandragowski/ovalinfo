import { motion } from "framer-motion";

const services = [
  {
    icon: "🏗️",
    title: "Enterprise Architecture",
    desc: "End-to-end system design including HLD, LLD, and SDL documents. SOA, microservices, CQRS, event sourcing, and hexagonal architecture across complex enterprise environments.",
    tags: ["Enterprise Architect", "SOA", "Microservices", "CQRS", "DDD", "Hexagonal"],
  },
  {
    icon: "📡",
    title: "Telecom & Billing Systems",
    desc: "Oracle BRM customization using C++ opcodes and PLSQL, ECE/CNCP cloud-native configuration, pipeline (iscript/IFW) engineering, and performance tuning for 4G/5G OCS at world scale.",
    tags: ["Oracle BRM", "C++", "PLSQL", "ECE", "CNCP", "IFW", "OCS"],
  },
  {
    icon: "🏥",
    title: "eHealth Solutions",
    desc: "Patient, personnel, and organization portals with Angular and React microfrontends. Backend microservices secured with Keycloak, deployed on Docker Swarm with ELK observability.",
    tags: ["Angular", "ngrx", "Spring Boot", "Keycloak", "Kafka", "Docker Swarm"],
  },
  {
    icon: "💳",
    title: "Banking & Fintech",
    desc: "PSD2-compliant transaction and banking integration modules. KYC platforms on Nordea-scale deployments. Multi-tenant Azure AKS with Istio service mesh and ELK monitoring.",
    tags: ["PSD2", "KYC", "Azure AKS", "Istio", "Kafka", "PostgreSQL"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines on GitHub Actions, Azure DevOps, GitLab, and Bamboo. Container orchestration on Kubernetes, OpenShift, and Docker Swarm across Azure, GCP, OCI, and AWS.",
    tags: ["Azure", "GCP", "OCI", "ArgoCD", "Helm", "Terraform", "Istio"],
  },
  {
    icon: "⚛️",
    title: "Frontend Engineering",
    desc: "Microfrontend architectures with Angular and React. Advanced state management with ngrx, Redux, and RxJS. Module Federation, nx workspaces, and fully responsive design.",
    tags: ["React", "Angular", "ngrx", "RxJS", "TypeScript", "nx", "Microfrontends"],
  },
  {
    icon: "⚙️",
    title: "Backend Microservices",
    desc: "Event-driven microservices with Java and Spring Boot on Kafka/ActiveMQ. GraphQL APIs, Camunda workflows, Liquibase migrations, and OpenAPI-first design.",
    tags: ["Java", "Spring Boot", "Kafka", "GraphQL", "Camunda", "Liquibase", "openAPI"],
  },
  {
    icon: "📊",
    title: "Performance Engineering",
    desc: "Load testing with JMeter and Grinder, performance tuning for Oracle and cloud-native clusters, ELK/Prometheus observability stack setup, and Splunk integration.",
    tags: ["JMeter", "Grinder", "ELK", "Prometheus", "Splunk", "Oracle", "Rancher"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl font-bold mt-2">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From billing systems to cloud-native platforms — we cover the full technology spectrum of enterprise software.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-6 flex flex-col transition-colors"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-white text-lg mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((t) => (
                  <span key={t} className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded-md border border-slate-700">
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

