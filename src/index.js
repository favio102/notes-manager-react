import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
