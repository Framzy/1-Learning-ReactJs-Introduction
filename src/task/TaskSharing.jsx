import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskSharing() {
  const [items, setItems] = useImmer([]);

  return (
    <div style={{ backgroundColor: "#3e9ab9ff" }}>
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </div>
  );
}
