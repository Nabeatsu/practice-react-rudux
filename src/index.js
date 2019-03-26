import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";

import { Provider } from "react-redux";

const store = createStore(reducer);
console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

const App = () => <h2>App</h2>;
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
