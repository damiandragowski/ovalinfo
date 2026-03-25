import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Java & Backend", value: 28, color: "#6366f1" },
  { name: "Frontend (React/Angular)", value: 20, color: "#22d3ee" },
  { name: "DevOps & Cloud", value: 18, color: "#f59e0b" },
  { name: "Telecom & BRM", value: 16, color: "#10b981" },
  { name: "Databases", value: 10, color: "#f43f5e" },
  { name: "Architecture & Design", value: 8, color: "#a78bfa" },
];

const techTags = [
  { label: "Java / Spring Boot / Kotlin", category: "Backend" },
  { label: "Kafka / ActiveMQ", category: "Messaging" },
  { label: "React / Angular / TypeScript", category: "Frontend" },
  { label: "ngrx / Redux / RxJS", category: "State" },
  { label: "Azure / GCP / OCI / AWS", category: "Cloud" },
  { label: "Kubernetes / Docker / Helm", category: "Infra" },
  { label: "Oracle BRM / C++ / PLSQL", category: "Telecom" },
  { label: "PostgreSQL / MongoDB / Oracle", category: "DB" },
  { label: "ELK / Prometheus / Splunk", category: "Monitoring" },
  { label: "GraphQL / REST / openAPI", category: "API" },
  { label: "Keycloak / OAuth2 / Istio", category: "Security" },
  { label: "Camunda / Liquibase", category: "Workflow" },
];

export default function TechChart() {
  return (
    <div className="flex flex-col gap-8">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={130}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
            formatter={(value) => [`${value}%`, ""]}
          />
          <Legend
            formatter={(value) => <span style={{ color: "#94a3b8", fontSize: "12px" }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-2">
        {techTags.map((t) => (
          <span key={t.label} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
            <span className="text-cyan-400 mr-1">{t.category}:</span>{t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
