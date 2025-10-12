import { useState } from "react";
import { useContext } from "react";
import { NoteDispatchContext } from "./NoteContext";
import "./Note.css";

export default function Note({ note }) {
  const dispatch = useContext(NoteDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.value,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  let component;

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <span>{note.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label className="note">
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      <p style={{ textDecoration: note.done ? "line-through" : "none" }}>
        {component}
      </p>

      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
