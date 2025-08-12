import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"; // change if needed
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Fetch all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setNotes(json);
    };

    // Add a note
    const addNote = async (title, description) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    };

    // Delete a note
    const deleteNote = async (id) => {
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        setNotes(notes.filter(note => note._id !== id));
    };

    // Update a note
    const updateNote = async (id, title, description) => {
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description })
        });

        setNotes(notes.map(note => note._id === id ? { ...note, title, description } : note));
    };

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
