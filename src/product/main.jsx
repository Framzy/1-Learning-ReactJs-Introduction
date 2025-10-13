import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Product from "./Product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Product />
  </StrictMode>
);
