import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap (GLOBAL)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Global styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
