export default function Todo({ text, isCompleted, onToggle }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {text}
      </span>
    </div>
  );
}
