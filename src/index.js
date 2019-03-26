import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import App from "./containers/App";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
