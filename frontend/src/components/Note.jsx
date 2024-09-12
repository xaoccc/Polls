import React from "react"
import { useNavigate } from "react-router-dom";
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
            <button  className="edit-button" onClick={() => nav(`/edit-note/${note.id}`, { state: { note } })} >Edit</button>
        </div>
    )
}