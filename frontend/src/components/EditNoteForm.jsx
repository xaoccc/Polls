import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function CreateNoteForm() {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const { note_id } = useParams();


    const editNote = async (e) => {
        e.preventDefault();
        api.put(`/api/notes/edit/${note_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    console.log("Note updated successfully!");
                    navigate('/');
                } else {
                    console.log("Note was not updated!");
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    }


    return (
        <>
            <h2 className="create-note-heading">Edit Note</h2>
            <form onSubmit={editNote}>
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