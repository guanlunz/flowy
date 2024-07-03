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
  dismissInput: () => void;
  plotGraph: () => void;
}

export default function SmartInput({
  dismissInput,
  plotGraph,
}: SmartInputProps) {
  function selectSmartInputOption(action: SpreadSheetAction) {
    switch (action.type) {
      case "PLOT":
        plotGraph();
        break;
    }

    dismissInput();

    dispatch(action);
  }

  const smartInput = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [results, setResults] = useState<SpreadSheetAction[]>([]);
  const resultElements = results.map((result, index) => (
    <SmartInputResultItem
      result={result}
      key={result.type}
      isHighlighed={index === currentIndex}
      onSelect={selectSmartInputOption}
    />
  ));

  const dispatch = useDispatch();

  function handleOnChange(evt: ChangeEvent<HTMLInputElement>) {
    setResults(getMatchedOptions(evt.target.value));
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLInputElement>) {
    if (evt.code === "Enter") {
      const action = results[currentIndex];
      selectSmartInputOption(action);
    } else if (evt.code === "ArrowDown") {
      setCurrentIndex((currentIndex + 1) % results.length);
    } else if (evt.code === "ArrowUp") {
      setCurrentIndex((currentIndex - 1 + results.length) % results.length);
    } else if (evt.code === "Escape") {
      dismissInput();
    }
  }

  // focus on the input once it's initialized
  useEffect(() => {
    smartInput.current.focus();
  }, []);

  return (
    <div className="smart-input__container" onKeyDown={handleKeyDown}>
      <input
        type="text"
        className="smart-input__text-field"
        placeholder="Enter an action, e.g. plot graph"
        ref={smartInput}
        onChange={handleOnChange}
      />
      <div className="smart-input__dropdown">
        <ul className="smart-input__result-list">{resultElements}</ul>
      </div>
    </div>
  );
}
