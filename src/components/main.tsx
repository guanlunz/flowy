import { Spreadsheet } from "react-spreadsheet";
import SmartInput from "./smart-input";
import BarChart from "./charts/bar-chart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SpreadsheetState } from "../state/spreadsheet-state";

import type { ExcelFile } from "../main/file-loader";
import ChartModal from "./charts/chart-modal";

export default function Main() {
  const [shouldShowSmartInput, setShouldShowSmartInput] = useState(false);
  const [shouldShowPlottedGraph, setShouldShowPlottedGraph] = useState(false);

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

  function plotGraph() {
    setShouldShowPlottedGraph(true);
  }

  const data = useSelector((state: SpreadsheetState) => state.spreadsheetData);

  return (
    <div>
      {shouldShowSmartInput ? <SmartInput plotGraph={plotGraph} /> : undefined}
      <Spreadsheet data={data} />
      {shouldShowPlottedGraph ? (
        <ChartModal data={[1, 2, 3, 4, 5]} />
      ) : undefined}
    </div>
  );
}
