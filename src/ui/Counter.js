import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./Counter.css";

export const Counter = hot(module)(({ initialState } = 0) => {
  const [counter, setCounter] = useState(initialState);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <button className="counter-button" onClick={increment}>
        +
      </button>
      <h2>Counter is: {counter}</h2>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
    </div>
  );
});
