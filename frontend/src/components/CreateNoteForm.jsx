import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function CreateNoteForm() {

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const createNote = async (e) => {
    e.preventDefault();
    api.post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          console.log("Note created successfully!");
          navigate('/');

        } else {
          console.log("Note was not created!");
        }

      })
      .catch((error) => console.error(`Error: ${error}`));

  }
  return (
    <>
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
    </>
  )
}