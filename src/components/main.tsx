import { Spreadsheet } from "react-spreadsheet";
import SmartInput from "./smart-input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SpreadsheetState } from "../state/spreadsheet-state";

import type { ExcelFile } from "../main/file-loader";

export default function Main() {
  const [shouldShowSmartInput, setShouldShowSmartInput] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // shortcut to open the smart input
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "p" && event.metaKey) {
        setShouldShowSmartInput(true);
      }
    });

    window.electronAPI.onExcelFileLoaded((fileContent: ExcelFile) => {
      dispatch({ type: "LOAD_EXCEL_FILE_DATA", data: fileContent });
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
