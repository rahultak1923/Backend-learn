import React, { useState } from 'react'

const NoteItem = ({note}) => {
  const [show, setShow]= useState(false)
    

  return (
    <div className='container'>
      <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
  )
}

export default NoteItem
