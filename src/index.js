// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import "./index.css";
import App from "./App";


const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
