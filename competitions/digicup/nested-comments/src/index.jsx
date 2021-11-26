import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DATA from "./data/data.json";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App comments={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);
