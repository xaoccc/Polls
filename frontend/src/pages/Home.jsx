import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../../public/styles/home.css";


export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    api.get("/api/notes/")
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
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

  const createNote = async (e) => {
    e.preventDefault();
    api.post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          console.log("Note created successfully!");
          getNotes();
        } else {
          console.log("Note was not created!");
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
      <h2 className="create-note-heading">Create Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}