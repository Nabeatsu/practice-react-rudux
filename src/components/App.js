import React from "react";

const App = ({ number, plus, minus, day, title }) => (
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
  </div>
);

export default App;
