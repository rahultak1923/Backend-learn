// src/context/NoteContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TitleContext = createContext();

const TitleContext = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  const TitleData = async () => {
    const res = await fetch("http://localhost:8000/title/", {
      headers: { "auth-token": token }
    });
    const json = await res.json();
    setNotes(json.title);
  };

  const CreateTitle = async (formData) => {
    const res = await fetch("http://localhost:8000/title/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ formData })
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
    <TitleContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContext;
