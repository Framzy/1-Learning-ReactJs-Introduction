import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn React", done: false },
];

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...notes,
        {
          id: id++,
          text: action.text,
          done: false,
        },
      ];
    case "UPDATE_NOTE":
      return notes.map((note) =>
        note.id === action.id
          ? { ...note, text: action.text, done: action.done }
          : note
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      ...note,
      type: "UPDATE_NOTE",
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      id: note.id,
      type: "DELETE_NOTE",
    });
  }

  return (
    <div>
      <h1>Note APP</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

// Without Reducer
// export default function NoteApp() {
//   const [notes, setNotes] = useImmer(initialNotes);

//   function handleAddNote(text) {
//     setNotes((draft) => {
//       draft.push({
//         id: id++,
//         text: text,
//         done: false,
//       });
//     });
//   }

//   function handleChangeNote(note) {
//     setNotes((draft) => {
//       const index = draft.findIndex((item) => item.id === note.id);
//       draft[index] = note;
//     });
//   }

//   function handleDeleteNote(note) {
//     setNotes((draft) => {
//       const index = draft.findIndex((item) => item.id === note.id);
//       draft.splice(index, 1);
//     });
//   }

//   return (
//     <div>
//       <h1>Note APP</h1>
//       <NoteForm onAddNote={handleAddNote} />
//       <NoteList
//         notes={notes}
//         onChange={handleChangeNote}
//         onDelete={handleDeleteNote}
//       />
//     </div>
//   );
// }
