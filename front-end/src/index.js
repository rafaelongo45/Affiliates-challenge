import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/reset.css";
import App from "./components/App/Index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
