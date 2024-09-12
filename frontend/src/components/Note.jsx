import React from "react"
import { useNavigate, Link } from "react-router-dom";
import "../../public/styles/note.css"



export default function Note({note, onDelete}) {

    const nav = useNavigate();
    const formattedDate = new Date(note.created_at).toLocaleDateString();
    return(
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
            <Link to={`/edit-note/${note.id}`} className="edit-button">Edit</Link>
            <Link to={`/edit-note/${note.id}`} className="edit-button">Edit</Link>
        </div>
    )
}