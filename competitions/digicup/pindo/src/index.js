import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { formData } from "./data/formData";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App fields={formData} onSubmit={console.log} />
  </React.StrictMode>,
  document.getElementById("root")
);
