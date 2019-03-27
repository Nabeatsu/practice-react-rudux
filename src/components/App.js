import React from "react";

const App = ({ number, plus, minus, day, title, asyncMinus, getJson }) => (
  <div>
    <h2>
      {title} App {number} {day}
    </h2>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      -10
    </button>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      +10
    </button>
    <button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      async-10
    </button>
    <button
      onClick={() => {
        getJson();
      }}
    >
      getJson
    </button>
  </div>
);

export default App;
