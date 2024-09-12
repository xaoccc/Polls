import { useState } from "react";
import { useNavigate, useParams, useLocation  } from "react-router-dom";
import api from "../api";

export default function CreateNoteForm() {
    // Note component sends the note object as state here. We now take the note through useLocation hook
    const location = useLocation();
    const { note } = location.state;
    // Use the object info to get initial states of the input fields of the form
    const [content, setContent] = useState(note.content);
    const [title, setTitle] = useState(note.title);
    const navigate = useNavigate();
    // We can take the id from the note object or from the url. Usually url is used for this, so we stick to this rule:
    const { note_id } = useParams();

    // Axios will need the updated values of the note. We must add all necessary params
    const updatedNote = {
        title: title,  
        content: content,  
    };

    const editNote = async (e) => {
        e.preventDefault();
        api.put(`/api/notes/edit/${note_id}/`, updatedNote)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
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