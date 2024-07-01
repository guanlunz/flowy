import { createRoot } from "react-dom/client";
import Main from "./components/main";
import { reducer } from "./state/spreadsheet-state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import electronApi from "./api/electron-api";

declare global {
  interface Window {
    electronAPI: typeof electronApi;
  }
}

const store = configureStore({
  preloadedState: {
    spreadsheetData: [],
  },
  reducer,
});

const root = createRoot(document.body);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
