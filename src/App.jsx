import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const reset = () => {
    setCount(0);
  };

  const multiply = () => {
    setCount(inputValue === 0 ? count : count * inputValue);
  };

  const divide = () => {
    setCount(inputValue === 0 ? count : Math.floor(count / inputValue));
  };

  const power = () => {
    setCount(inputValue === 0 ? Math.pow(count, 2): Math.pow(count, inputValue));
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">Simple, crisp, and fast.</p>
        <div className="count-wrap">
          <span className="count-label">Count</span>
          <span className="count-value">{count}</span>
        </div>
        <div className="box">
          <div className="actions">
            <button className="btn btn-primary" onClick={increment}>
              +
            </button>
            <button className="btn btn-ghost" onClick={decrement}>
              -
            </button>
            <button className="btn btn-warn" onClick={reset}>
              Reset
            </button>
          </div>
          <div className="actions">
            <button className="btn btn-multiply" onClick={multiply}>
              *
            </button>
            <button className="btn btn-divide" onClick={divide}>
              /
            </button>
            <button className="btn btn-power" onClick={power}>
              ^
            </button>
          </div>
          <input
            type="number"
            className="number"
            placeholder="Enter a number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
