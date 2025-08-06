import React, { useState } from "react";
import CodeContext from "./codeContext";

const CodeState= (props)=>{
const notesInitial = [
    {
      "_id": "6887e4a5c1e3b620b88fca66",
      "user": "68850c7e99d14acabffe8d63",
      "title": "rahul",
      "description": "console.log('hello rahul is token')",
      "createdAt": "2025-07-28T20:59:17.882Z",
      "updatedAt": "2025-07-28T20:59:17.882Z",
      "__v": 0
    },
    {
      "_id": "6887e4a5c1e3b620b88fca66",
      "user": "68850c7e99d14acabffe8d63",
      "title": "rahul kumar",
      "description": "console.log('hello rahul is token')",
      "createdAt": "2025-07-28T20:59:17.882Z",
      "updatedAt": "2025-07-28T20:59:17.882Z",
      "__v": 0
    },
]
const [codes, setCodes] = useState(notesInitial)
    return(
        <CodeContext.Provider value={{codes, setCodes}}>
           {props.children}
        </CodeContext.Provider>
    )
}

export default CodeState