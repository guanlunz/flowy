import classNames from "classnames";
import "./smart-input.css";
import { SpreadSheetAction } from "../store/spreadsheet-actions";

export default function SmartInputResultItem({
  result,
  isHighlighed,
  onSelect,
}: {
  result: SpreadSheetAction;
  isHighlighed: boolean;
  onSelect: (action: SpreadSheetAction) => void;
}) {
  return (
    <li
      key={result.type}
      role="button"
      onClick={() => onSelect(result)}
      className={classNames({
        "smart-input-result-item": true,
        "smart-input-result-item--highlighted": isHighlighed,
      })}
    >
      <div>{result.type}</div>
    </li>
  );
}
