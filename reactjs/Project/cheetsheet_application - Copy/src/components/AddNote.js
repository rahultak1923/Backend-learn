import React, { useState, useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const AddNote = () => {
  const [note, setNote] = useState({ title: '', description: '' });
  const { addNote } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description);
    setNote({ title: '', description: '' });
  };

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      <input name="title" placeholder="Title" value={note.title} onChange={onChange} required />
      <textarea name="description" placeholder="Description" value={note.description} onChange={onChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNote;
