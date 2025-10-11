import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <Counter />
  </StrictMode>
);
