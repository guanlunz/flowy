import { Spreadsheet } from "react-spreadsheet";
import SmartInput from "./smart-input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SpreadsheetState } from "../state/spreadsheet-state";

export default function Main() {
  const [shouldShowSmartInput, setShouldShowSmartInput] = useState(false);
  useEffect(() => {
    // shortcut to open the smart input
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "l" && event.metaKey) {
        setShouldShowSmartInput(true);
      }
    });
  }, []);

  const data = useSelector((state: SpreadsheetState) => state.spreadsheetData);

  return (
    <div>
      {shouldShowSmartInput ? <SmartInput /> : undefined}
      <Spreadsheet data={data} />
    </div>
  );
}
