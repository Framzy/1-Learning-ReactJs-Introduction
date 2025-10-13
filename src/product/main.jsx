import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ProductList from "./ProductList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductList />
  </StrictMode>
);
