// TODO: better define the action types
export type SpreadSheetAction = {
  type:
    | "OPEN_SAMPLE_EXCEL"
    | "OPEN_FILE"
    | "PLOT"
    | "TRANSFORM"
    | "UNDO"
    | "REDO";
};

export const SpreadSheetActions: SpreadSheetAction[] = [
  {
    type: "OPEN_SAMPLE_EXCEL",
  },
  {
    type: "OPEN_FILE",
  },
  {
    type: "PLOT",
  },
  {
    type: "TRANSFORM",
  },
  {
    type: "UNDO",
  },
  {
    type: "REDO",
  },
];
