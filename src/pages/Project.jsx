import { useParams } from "react-router-dom";

export default function Project(){
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-4">{id.toUpperCase()}</h1>
      <p className="text-slate-400">
        Enterprise case study with architecture, scaling, and business impact.
      </p>
    </div>
  )
}
