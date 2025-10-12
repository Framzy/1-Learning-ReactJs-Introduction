# Create Stopwatchn with React Hooks, useState, and useRef

```js
import { useState, useRef } from "react";

export default function Timer() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);

  function handleStart() {
    if (timer.current) clearInterval(timer.current);

    // Simpan waktu saat mulai lagi, dikurangi elapsed sebelumnya
    setStart(Date.now() - elapsed);
    setNow(Date.now());
    setIsRunning(true);

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timer.current = null;
    setIsRunning(false);
    setElapsed(now - start); // simpan waktu yang sudah berjalan
  }

  function handleReset() {
    clearInterval(timer.current);
    timer.current = null;
    setStart(null);
    setNow(null);
    setElapsed(0);
    setIsRunning(false);
  }

  const timePassed = start && now ? now - start : elapsed;

  return (
    <>
      <h1>Timer: {timePassed} ms</h1>
      {isRunning ? (
        <div>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div>
          <button onClick={handleStart}>Start</button>
          {elapsed > 0 && <button onClick={handleReset}>Reset</button>}
        </div>
      )}
    </>
  );
}
```
