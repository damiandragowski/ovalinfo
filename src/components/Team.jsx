import { motion } from "framer-motion";

const team = [
  {
    name: "Krzysztof Owalski",
    title: "CEO & Co-Founder",
    email: "k.owalski@ovalinfo.com",
    bio: "20+ years leading enterprise IT programs. Chief Software Architect for the ACSE transformation program managing ~100 engineers across 10 Scrum teams.",
    color: "bg-cyan-600",
    skills: ["Architecture", "Leadership", "Java", "C++", "Oracle BRM"],
  },
  {
    name: "Marcin Ostrowski",
    title: "Chief Technology Officer",
    email: "m.ostrowski@ovalinfo.com",
    bio: "Cloud-native architect and DevOps expert. Specialist in Kubernetes, event-driven microservices, and multi-cloud deployments on Azure, GCP, and OCI.",
    color: "bg-indigo-600",
    skills: ["Cloud", "Microservices", "DevOps", "Kafka", "Kubernetes"],
  },
  {
    name: "Anna Kowalczyk",
    title: "Head of Frontend Engineering",
    email: "a.kowalczyk@ovalinfo.com",
    bio: "Expert in Angular and React microfrontend architectures. Deep experience with ngrx, Redux, and RxJS for large-scale state management.",
    color: "bg-violet-600",
    skills: ["Angular", "React", "ngrx", "TypeScript", "nx"],
  },
  {
    name: "Piotr Zawadzki",
    title: "Lead Backend Engineer",
    email: "p.zawadzki@ovalinfo.com",
    bio: "Java and Spring Boot specialist with expertise in event-driven microservices, GraphQL APIs, Camunda BPM, and database optimization.",
    color: "bg-emerald-600",
    skills: ["Java", "Spring Boot", "Kafka", "GraphQL", "Camunda"],
  },
  {
    name: "Łukasz Wiśniewski",
    title: "Head of DevOps & Cloud",
    email: "l.wisniewski@ovalinfo.com",
    bio: "Multi-cloud infrastructure architect. Builds robust CI/CD pipelines on GitHub Actions, GitLab, and Azure DevOps with Terraform and Helm.",
    color: "bg-orange-600",
    skills: ["Azure", "GCP", "Terraform", "Helm", "ArgoCD"],
  },
  {
    name: "Katarzyna Nowak",
    title: "eHealth Solutions Architect",
    email: "k.nowak@ovalinfo.com",
    bio: "Architect for eHealth and fintech platforms. PSD2 banking integration specialist with deep experience in Keycloak and multi-tenant security.",
    color: "bg-pink-600",
    skills: ["eHealth", "PSD2", "Keycloak", "Angular", "Security"],
  },
  {
    name: "Robert Jankowski",
    title: "Telecom & Billing Specialist",
    email: "r.jankowski@ovalinfo.com",
    bio: "Oracle BRM expert with hands-on C++ and PLSQL experience. Performance tuning for 4G/5G OCS billing on Telia and Telenor Pakistan deployments.",
    color: "bg-blue-600",
    skills: ["Oracle BRM", "C++", "PLSQL", "ECE", "Performance"],
  },
  {
    name: "Monika Szymańska",
    title: "Delivery Manager",
    email: "m.szymanska@ovalinfo.com",
    bio: "Certified SAFe and Prince2 practitioner managing multi-team delivery across enterprise transformation programs. Experienced in managing 100+ people projects.",
    color: "bg-teal-600",
    skills: ["SAFe", "Prince2", "Agile", "Scrum", "Program Mgmt"],
  },
  {
    name: "Tomasz Wróbel",
    title: "Performance & Oracle Engineer",
    email: "t.wrobel@ovalinfo.com",
    bio: "Performance engineering specialist. JMeter and Grinder automation, Oracle BRM customization, ELK observability stack implementation.",
    color: "bg-rose-600",
    skills: ["JMeter", "Grinder", "ELK", "Oracle", "Splunk"],
  },
  {
    name: "Agnieszka Lis",
    title: "Senior Frontend Developer",
    email: "a.lis@ovalinfo.com",
    bio: "Frontend developer specializing in patient and personnel portals for eHealth. Angular, React, and microfrontend module federation expert.",
    color: "bg-fuchsia-600",
    skills: ["Angular", "React", "RxJS", "Microfrontends", "Redux"],
  },
];

function Avatar({ name, color }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${color}`}>
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">The People</span>
          <h2 className="text-4xl font-bold mt-2">
            Our <span className="text-cyan-400">Team</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Seasoned engineers and architects who have shaped some of the most complex IT systems in Europe and beyond.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 hover:border-slate-600 rounded-xl p-5 flex flex-col transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar name={member.name} color={member.color} />
                <div>
                  <div className="font-semibold text-white text-sm">{member.name}</div>
                  <div className="text-slate-500 text-xs">{member.title}</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{member.bio}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {member.skills.map((s) => (
                  <span key={s} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={`mailto:${member.email}`}
                className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors break-all"
              >
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

