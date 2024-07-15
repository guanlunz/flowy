import BarChart from "./bar-chart";
import "./chart-panel.css";

export interface ChartPanelProps {
  data: number[];
  closeChartPanel: () => void;
}

export default function ChartPanel({ data, closeChartPanel }: ChartPanelProps) {
  return (
    <div className="chart-panel horizontal-panel">
      <button onClick={closeChartPanel}>X</button>
      <BarChart data={data} />
    </div>
  );
}
