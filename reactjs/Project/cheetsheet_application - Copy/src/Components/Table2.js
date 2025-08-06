import React, { useContext, useEffect, useState} from 'react';
import { DeleteTitle, TitleData } from '../api/title';
import Edittitle from '../pages/editjewellery/Edittitle';
import codeContext from "../context/code/codeContext"

const Table2 = () => {
const context = useContext(codeContext);
const {codes, setCodes} = context;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/prism/prism.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const[data,setData]=useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await TitleData();
      console.log("your title data is ", result);
      setData(result.title || []);
    } catch (error) {
      console.error("Failed to fetch title data", error);
    }
  };
  fetchData();
}, []);

const handleDelete = async(titleid)=>{
  try{
    const isConfirmed = window.confirm("are you sure")
    if(!isConfirmed) return;

    const result  = await DeleteTitle(titleid);
    console.log("title Deleted", result);
    alert("this code deleted successfully");

    setData((prevData)=> prevData.filter((title)=> title._id !== titleid))
  }catch(error){
    console.error("error deleting this code", error);
    alert("failed to delete this code")
  }
}

  return (
 <main class="main-content position-relative border-radius-lg " style={{marginLeft: "17.125rem"}}>
 <link rel="stylesheet" href="/prism/prism.css" />
      <div class="container-fluid py-4">
      <div class="row">
            <div class="card-header pb-0">
              <h4>Example Codes</h4>
            </div>
            <hr style={{background:"black"}} />
            {Array.isArray(codes) && codes.length > 0 ? (
  codes.map((code, id) => (
        <div class="  col-12">
          <div class="card mb-4 py-2">
    <div className="card-body px-0 pt-0 pb-2 mb-2" key={id}>
      <div className="align-item-center padding-15remleft" style={{ position: 'relative' }} key={id}>
        <div className="d-flex justify-content-between">
        <p>{code.title}</p>

<div className='d-flex'>

     
<Edittitle titleId={codes._id} TitleData={codes}/>
        <button type="button" class="btn btn-danger mx-1" onClick={()=> handleDelete(codes._id)}><i class="bi bi-trash"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
</div>
        </div>
        <pre className="language-js">
          <code>{code.description} </code>
        </pre>

        {/* <pre className="language-css">
          <code>{`color: #24272a `}</code>
        </pre> */}
      </div>

      
    </div>

            
           
          </div>
        </div>
  ))
) : (
  <p>No data</p>
)}
      </div>

     
    </div>


   
 </main>
    
  )
}

export default Table2
