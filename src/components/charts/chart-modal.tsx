import BarChart from "./bar-chart";
import "./chart-modal.css";

export interface ChartModalProps {
  data: number[];
}

export default function ChartModal({ data }: ChartModalProps) {
  return (
    <div className="chart-modal">
      <BarChart data={data} />
    </div>
  );
}
