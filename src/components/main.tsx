import { Spreadsheet } from "react-spreadsheet";
import SmartInput from "./smart-input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SpreadsheetState } from "../state/spreadsheet-state";

import type { ExcelFile } from "../main/file-loader";
import ChartPanel from "./charts/chart-panel";

import "./main.css";
import FlowManager from "./flow-manager";

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

  const data = useSelector((state: SpreadsheetState) => state.spreadsheetData);

  return (
    <div className="main">
      <FlowManager />
      {shouldShowSmartInput ? (
        <SmartInput
          dismissInput={() => setShouldShowSmartInput(false)}
          plotGraph={() => setShouldShowPlottedGraph(true)}
        />
      ) : undefined}
      <div className="horizontal-panel">
        <Spreadsheet data={data} />
      </div>
      {shouldShowPlottedGraph ? (
        <ChartPanel
          data={[1, 2, 3, 4, 5]}
          closeChartPanel={() => setShouldShowPlottedGraph(false)}
        />
      ) : undefined}
    </div>
  );
}
