import { useState } from "react";
import "./App.css";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [activeError, setError] = useState(false);


  const handleReset = () => {
    setInputValue("");
    setResult("");
    setError(false);
  };

  const handleConversion = () => {
    let numericInput = Number(inputValue);
    let inputType = Number.isInteger(numericInput);
    if (inputValue != "" && inputType === true) {
      setResult(Number(numericInput).toString(2));
      setError(false);
    } else {
      setError(true);
      setResult("");
    }
  };

  function copyToClipboard(e) {

  };


  return (
    <div className="App">
      <div className="main-container">
        <div className="main-wrapper">
          <h2>Number Conversion</h2>
          <div className="input-container">
            <div className="input-number-container label-input-container">
              <label htmlFor="input-number">Input Number</label>
              <input
                type="text"
                id="input-number"
                className={`input-field ${activeError ? "active-error" : ""}`}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setError(false);
                  setResult("");
                }}
              />
              <p
                className={` error-field ${activeError ? "error-message" : ""}`}
              >
                Enter a valid number
              </p>
            </div>
            <div className="from-base-container label-input-container">
              <label htmlFor="from-base">From Base</label>
              <input
                type="text"
                id="from-base"
                className="input-field"
                placeholder="Base 10 / Decimal"
                disabled
              />
            </div>
            <div className="to-base-container label-input-container">
              <label htmlFor="to-base">To Base</label>
              <input
                type="text"
                id="to-base"
                className="input-field"
                placeholder="Base 2 / Binary"
                disabled
              />
            </div>
            <div className="button-container">
              <button
                id="convert-button"
                className="form-button"
                onClick={handleConversion}
              >
                = Convert
              </button>
              <button
                id="reset-button"
                className="form-button"
                onClick={handleReset}
              >
                x Reset
              </button>
            </div>
            <div className="textarea-container">
              <textarea
                className="textArea"
                rows={8}
                disabled
                value={result}
              ></textarea>
            </div>
            <div className="copy-button-container">
              <button id="copy-button" className="form-button" onClick={copyToClipboard}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
