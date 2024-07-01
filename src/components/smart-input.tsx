import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import SmartInputResultItem from "./smart-input-result-item";
import { useDispatch } from "react-redux";
import {
  SpreadSheetAction,
  SpreadSheetActions,
} from "../store/spreadsheet-actions";

function getMatchedOptions(inputValue: string) {
  if (inputValue === "") {
    return [];
  }

  return SpreadSheetActions.filter(
    (action) =>
      action.type.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  );
}

interface SmartInputProps {
  plotGraph: () => void;
}

export default function SmartInput({ plotGraph }: SmartInputProps) {
  const smartInput = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [results, setResults] = useState<SpreadSheetAction[]>([]);
  const resultElements = results.map((result, index) => (
    <SmartInputResultItem
      result={result.type}
      key={result.type}
      isHighlighed={index === currentIndex}
    />
  ));

  const dispatch = useDispatch();

  function handleOnChange(evt: ChangeEvent<HTMLInputElement>) {
    setResults(getMatchedOptions(evt.target.value));
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLInputElement>) {
    if (evt.code === "Enter") {
      const action = results[currentIndex];
      switch (action.type) {
        case "PLOT":
          plotGraph();
          break;
      }

      dispatch(results[currentIndex]);
    } else if (evt.code === "ArrowDown") {
      setCurrentIndex((currentIndex + 1) % results.length);
    } else if (evt.code === "ArrowUp") {
      setCurrentIndex((currentIndex - 1 + results.length) % results.length);
    }
  }

  useEffect(() => {
    smartInput.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={smartInput}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <div className="smart-input__dropdown">
        <ul>{resultElements}</ul>
      </div>
    </div>
  );
}
