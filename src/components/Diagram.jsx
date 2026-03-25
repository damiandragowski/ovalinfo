import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#1e293b",
    primaryTextColor: "#e2e8f0",
    primaryBorderColor: "#6366f1",
    lineColor: "#22d3ee",
    secondaryColor: "#0f172a",
    tertiaryColor: "#0f172a",
  },
});

export default function Diagram() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.run({ nodes: [ref.current] });
    }
  }, []);

  return (
    <div ref={ref} className="mermaid flex justify-center overflow-x-auto">
      {`
        graph TD
        A[Client / Browser] --> B[CDN / Azure Front Door]
        B --> C1[React Microfrontend]
        B --> C2[Angular Microfrontend]
        C1 --> D[API Gateway]
        C2 --> D
        D --> E[Keycloak / Auth]
        D --> F[Microservice: Billing]
        D --> G[Microservice: Orders]
        D --> H[Microservice: KYC]
        F --> I[Kafka / ActiveMQ]
        G --> I
        H --> I
        F --> J[(PostgreSQL)]
        G --> K[(MongoDB)]
        H --> J
        I --> L[ELK Stack / Monitoring]
        I --> M[Camunda BPM]
      `}
    </div>
  );
}
