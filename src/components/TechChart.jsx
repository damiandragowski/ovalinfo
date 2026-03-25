import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Java", value: 40 },
  { name: "Frontend", value: 25 },
  { name: "DevOps", value: 20 },
  { name: "DB", value: 15 },
];

export default function TechChart(){
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
    </Pie>
  );
}
