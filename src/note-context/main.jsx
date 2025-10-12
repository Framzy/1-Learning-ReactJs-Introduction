import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./NoteApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hello World</h1>
    <NoteApp />
  </StrictMode>
);
