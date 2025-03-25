import React from "react";
import ReactDOM from "react-dom/client"; // Keep this import

import App from "./App";
import "./index.css";

// React 18 code to render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
