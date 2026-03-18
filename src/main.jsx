import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const start = Date.now();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

const MIN_LOADING_TIME = 1000;

const loader = document.getElementById("initial-loader");

if (loader) {
  const elapsed = Date.now() - start;
  const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.remove();
    }, 600);
  }, remaining);
}
