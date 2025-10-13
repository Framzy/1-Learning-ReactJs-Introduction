import { useContext, useState, useRef, useMemo } from "react";
import Note from "./Note.jsx";
import { NoteContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NoteContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtering Node");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.log("Search:", searchInput.current.value);
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input type="text" ref={searchInput} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Without useMemo
// import { useContext } from "react";
// import Note from "./Note.jsx";
// import { NoteContext } from "./NoteContext";

// export default function NoteList() {
//   const notes = useContext(NoteContext);
//   return (
//     <ul>
//       {notes.map((note) => (
//         <li key={note.id}>
//           <Note note={note} />
//         </li>
//       ))}
//     </ul>
//   );
// }
