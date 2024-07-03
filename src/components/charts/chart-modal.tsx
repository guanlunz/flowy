import BarChart from "./bar-chart";
import "./chart-modal.css";

export interface ChartModalProps {
  data: number[];
  closeChartModal: () => void;
}

export default function ChartModal({ data, closeChartModal }: ChartModalProps) {
  return (
    <div className="chart-modal">
      <button onClick={closeChartModal}>X</button>
      <BarChart data={data} />
    </div>
  );
}
