import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "../src/context/ThemeProvider";
import "./assets/styles/index.css";
import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
