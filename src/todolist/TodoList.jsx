import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn HTML", isCompleted: false },
    { id: 2, text: "Learn CSS", isCompleted: false },
    { id: 3, text: "Learn JavaScript", isCompleted: false },
    { id: 4, text: "Learn React", isCompleted: false },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
}
