import { CellBase, Matrix } from "react-spreadsheet";

export interface SpreadsheetState {
  spreadsheetData: Matrix<CellBase<any>>;
}

const reducer = (state: SpreadsheetState, action: { type: string }) => {
  switch (action.type) {
    case "OPEN_FILE":
      window.electronAPI.openFile();
      break;
    default:
      break;
  }

  return state;
};

export { reducer };
