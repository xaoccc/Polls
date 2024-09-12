import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

import "../../public/styles/home.css";
import { Link } from "react-router-dom";


export default function Home() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    api.get("/api/notes/")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));;
  }

  const deleteNote = async (id) => {
    api.delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          console.log("Note deleted successfully!");
          getNotes();
        } else {
          console.log("Note was not deleted!");
        }
      })
      .catch((error) => console.error(`Error: ${error}`));    
  }
  return (
    <div>
      <div className="all-notes">
        <h2>Notes</h2>
        { notes.map((note) => <Note key={note.id} note={note} onDelete={deleteNote} />)}

      </div>
      <Link className="create-note-button" to='/create-note'>Create Note</Link>
      

    </div>
  );
}