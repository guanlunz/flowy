import { CellBase, Matrix, Spreadsheet } from "react-spreadsheet";

export interface SpreadsheetState {
  spreadsheetData: Matrix<CellBase<any>>;
}

const reducer = (state: SpreadsheetState, action: { type: string }) => {
  switch (action.type) {
    default:
      break;
  }
  debugger;

  return state;
};

export { reducer };
