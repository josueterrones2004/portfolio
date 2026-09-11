import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

// Prevent the browser from restoring the previous scroll position after reload.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Always start at the top before React renders the portfolio.
window.scrollTo({
  top: 0,
  left: 0,
  behavior: "instant",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);