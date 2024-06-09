import { ChangeEvent, useEffect, useRef, useState } from "react";

const OPTIONS = ["Transform", "Plot"];

function getMatchedOptions(inputValue: string) {
  if (inputValue === "") {
    return [];
  }

  return OPTIONS.filter(
    (option) => option.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  );
}

export default function SmartInput() {
  const smartInput = useRef(null);
  const [results, setResults] = useState([]);
  const resultElements = results.map((result) => (
    <li key={result}>{result}</li>
  ));

  function handleOnChange(evt: ChangeEvent<HTMLInputElement>) {
    setResults(getMatchedOptions(evt.target.value));
  }

  useEffect(() => {
    smartInput.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={smartInput} onChange={handleOnChange} />
      <div className="smart-input__dropdown">
        <ul>{resultElements}</ul>
      </div>
    </div>
  );
}
