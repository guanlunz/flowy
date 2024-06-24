import classNames from "classnames";
import "./smart-input.css";

export default function SmartInputResultItem({
  result,
  isHighlighed,
}: {
  result: string;
  isHighlighed: boolean;
}) {
  return (
    <li
      key={result}
      className={classNames({
        "smart-input-result-item": true,
        "smart-input-result-item--highlighted": isHighlighed,
      })}
    >
      <div>{result}</div>
    </li>
  );
}
