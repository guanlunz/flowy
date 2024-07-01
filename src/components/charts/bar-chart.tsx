import * as d3 from "d3";

export default function LinePlot({ data }: { data: number[] }) {
  const x = d3.scaleLinear([0, data.length - 1], [20, 420]);
  const y = d3.scaleLinear(d3.extent(data), [420, 20]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={400} height={400}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
