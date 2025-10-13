import { useOnline } from "./OnlineHook";

export default function Online() {
  const isOnline = useOnline();
  return (
    <div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}
