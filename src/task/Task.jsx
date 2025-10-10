import { useImmer } from "use-immer";
import { useState } from "react";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    if (!item) {
      return;
    }

    setItems((items) => {
      items.push(item);
    });

    setItem("");
  }

  function handleRemoveItem(value) {
    setItems((items) => {
      const newItems = items.filter((item) => item !== value);
      return newItems;
    });
  }

  return (
    <div style={{ backgroundColor: "#67a6a7" }}>
      <h1>Create Task</h1>
      <form action="#">
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <button onClick={() => handleRemoveItem(item)}>Del</button>
      </form>
      <h1>List Task</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
