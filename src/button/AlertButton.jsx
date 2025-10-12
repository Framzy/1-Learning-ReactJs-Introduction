import { useRef } from "react";

export default function AlertButton({ text, message }) {
  const counter = useRef(0);

  function handleClick(e) {
    console.log(e.target);
    alert(message + " " + counter.current++);
  }
  return <button onClick={handleClick}>{text}</button>;
}
