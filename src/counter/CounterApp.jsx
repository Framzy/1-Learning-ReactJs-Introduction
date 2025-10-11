import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {show2 ? <Counter name="aaaa" /> : <Counter name="ffff" />}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      <label> Show Counter 2</label>
    </div>
  );
}
