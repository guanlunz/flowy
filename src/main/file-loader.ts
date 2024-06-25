import xlsx from "node-xlsx";
import fs from "fs";

export type ExcelFile = ReturnType<typeof xlsx.parse>;

export function loadFile(filePath: string): ExcelFile | undefined {
  if (filePath.endsWith(".xls") || filePath.endsWith(".xlsx")) {
    const worksheets = xlsx.parse(fs.readFileSync(filePath));
    return worksheets;
  }

  return undefined;
}
