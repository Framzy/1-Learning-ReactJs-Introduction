import { useContext } from "react";
import Note from "./Note.jsx";
import { NoteContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NoteContext);
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
