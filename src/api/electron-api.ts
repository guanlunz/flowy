import { dialog, ipcRenderer } from "electron";

export default {
  openFile: () => {
    ipcRenderer.send("open-file");
  },
};
