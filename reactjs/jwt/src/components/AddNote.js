import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext';

const AddNote = () => {
    const [ note, setNote]= useState({ title:"", description:""});
    const {addNote}= useContext(NoteContext);

    const handleSubmit = (e)=>{
        // e.prevantDefault();
        addNote(note.title, note.description);
        setNote({title:"", description:""});
    }

    const onChange = (e)=> setNote({ ...note, [e.target.name]: e.target.value});
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">title</label>
    <input type="text" class="form-control" id="title" name='title' value={note.title} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">description</label>
    <input type="text" class="form-control" id="description" name='description' onChange={onChange} value={note.description}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddNote
