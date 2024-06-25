import { CellBase, Matrix } from "react-spreadsheet";
import { ExcelFile } from "../main/file-loader";

export interface SpreadsheetState {
  spreadsheetData: Matrix<CellBase<any>>;
}

function transformExcelData(excelFile: ExcelFile) {
  return excelFile[0].data.map((row: string[]) =>
    row.map((cell) => ({ value: cell }))
  );
}

// TODO: use types from spreadsheet-actions
const reducer = (
  state: SpreadsheetState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case "OPEN_FILE":
      window.electronAPI.openFile();
      break;

    case "LOAD_EXCEL_FILE_DATA":
      return {
        ...state,
        spreadsheetData: transformExcelData(action.data),
      };
      break;

    default:
      break;
  }

  return state;
};

export { reducer };
