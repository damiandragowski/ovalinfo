import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Diagram(){
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div ref={ref} className="mermaid">
      {`
        graph TD;
        A[Client] --> B[Frontend];
        B --> C[API Gateway];
        C --> D[Microservices];
        D --> E[Kafka];
        D --> F[Database];
      `}
    </div>
  );
}
