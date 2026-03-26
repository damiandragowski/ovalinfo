export default function OvalinfoO() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ display: "inline-block", height: "1.2em", width: "1.05em", verticalAlign: "-0.1em", transform: "perspective(200px) rotateY(15deg)", filter: "drop-shadow(3px 3px 5px rgba(1,1,1,0.3))" }}
    >
      <path d="M50,6 A44,44 0 0,1 94,50 L77,50 A27,27 0 0,0 50,23 Z" fill="#4285F4" />
      <path d="M94,50 A44,44 0 0,1 50,94 L50,77 A27,27 0 0,0 77,50 Z" fill="#EA4335" />
      <path d="M50,94 A44,44 0 0,1 6,50 L23,50 A27,27 0 0,0 50,77 Z" fill="#FBBC05" />
      <path d="M6,50 A44,44 0 0,1 50,6 L50,23 A27,27 0 0,0 23,50 Z" fill="#34A853" />
    </svg>
  );
}
