import { useState } from "react";
export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.log("Render Counter");

  function handleClick() {
    console.log(counter);
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
