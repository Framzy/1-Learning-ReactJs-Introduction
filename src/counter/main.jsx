import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
