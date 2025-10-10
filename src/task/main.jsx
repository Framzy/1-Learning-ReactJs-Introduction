import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Task from "./Task.jsx";
import TaskSharing from "./TaskSharing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task />
    <TaskSharing />
  </StrictMode>
);
