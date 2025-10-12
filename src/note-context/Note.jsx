import { useState } from "react";

import "./Note.css";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setisEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setisEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <span>{note.text}</span>
        <button onClick={() => setisEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <label className="note">
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      <p style={{ textDecoration: note.done ? "line-through" : "none" }}>
        {component}
      </p>

      <button
        onClick={() => {
          onDelete(note);
        }}
      >
        Delete
      </button>
    </label>
  );
}
