// src/context/NoteContext.js
import React, { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:8000/title", {
      headers: { "auth-token": token }
    });
    const json = await res.json();
    setNotes(json.title);
  };

  const addNote = async (title, description) => {
    const res = await fetch("http://localhost:8000/title/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ title, description })
    });
    const json = await res.json();
    setNotes([...notes, json.title]);
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:8000/title/delete/${id}`, {
      method: "DELETE",
      headers: { "auth-token": token }
    });
    setNotes(notes.filter(note => note._id !== id));
  };

  const updateNote = async (id, title, description) => {
    const res = await fetch(`http://localhost:8000/title/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ title, description })
    });
    const updated = await res.json();
    setNotes(notes.map(note => note._id === id ? updated.title : note));
  };

  useEffect(() => {
    if (token) fetchNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
