import { Spreadsheet } from "react-spreadsheet";
import SmartInput from "./smart-input";
import { configureStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const store = configureStore({
  preloadedState: {
    spreadsheetData: [
      [{ value: "Vanilla" }, { value: "Chocolate" }],
      [{ value: "Strawberry" }, { value: "Cookies" }],
    ],
  },
  reducer: () => {},
});

export default function Main() {
  const [shouldShowSmartInput, setShouldShowSmartInput] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "l" && event.metaKey) {
        setShouldShowSmartInput(true);
      }
    });
  }, []);
  return (
    <div>
      {shouldShowSmartInput ? <SmartInput /> : undefined}
      <Spreadsheet data={[]} />
    </div>
  );
}
