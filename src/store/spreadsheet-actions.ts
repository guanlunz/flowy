// TODO: better define the action types
export type SpreadSheetAction = {
  type: "OPEN_FILE" | "PLOT" | "TRANSFORM" | "UNDO" | "REDO";
};

export const SpreadSheetActions: SpreadSheetAction[] = [
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
