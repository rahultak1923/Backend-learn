import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import NoteItem from './NoteItem';

const NoteList = () => {
    const {notes}= useContext(NoteContext);
  return (
    <div className='container my-3'>
      <h3>Your Notes</h3>
      {notes.lenght === 0 ? <p>no notes found</p>: notes.map(note => (
        <NoteItem key={note._id} note={note}/>
      ))}
    </div>
  )
}

export default NoteList
