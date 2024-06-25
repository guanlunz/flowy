import { ipcRenderer } from "electron";
import type { ExcelFile } from "../main/file-loader";

export default {
  openFile: () => {
    ipcRenderer.send("open-file");
  },
  onExcelFileLoaded: (callback: (fileContent: ExcelFile) => void) => {
    ipcRenderer.on("excel-file-loaded", (_, value: ExcelFile) => {
      callback(value);
    });
  },
};
