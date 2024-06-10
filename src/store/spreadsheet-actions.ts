export type SpreadSheetAction = {
  type: string;
};

export const SpreadSheetActions: SpreadSheetAction[] = [
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
