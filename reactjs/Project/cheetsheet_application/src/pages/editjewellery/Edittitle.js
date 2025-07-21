import React, { useEffect, useState } from "react";
import {  UpdateTitle } from "../../api/title";


const Edittitle = ({ titleId , TitleData}) => {
  const[formData, setFormData] = useState({
    title:"",
    description:"",
  });
  useEffect(()=>{
    if(TitleData){
      setFormData({
        title:TitleData.title || "",
        description: TitleData.description || "",
      })
    }
  },[TitleData])

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  
  const handleUpdate = async ()=>{
    try{
      const response = await UpdateTitle(titleId, formData);
      console.log("update success:",response);
      window.location.reload();
    }catch(error){

    }
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-success badge badge-sm" style={{padding:"12px"}}
        data-bs-toggle="modal"
        data-bs-target={`#editModal-${titleId}`}
      ><i class="bi bi-pencil-square "></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mx-1 bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
        Edit
      </button>

      <div
        className="modal fade"
        id={`editModal-${titleId}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Code's</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="container mt-3">
                <div className="mb-3">
                  <label htmlFor={`title-${titleId}`} className="form-label">Edit Title </label>
                  <input type="text" name="title" id={`title-${titleId}`} value={formData.title} className="form-control" onChange={handleChange} required/>
                  
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor={`description-${titleId}`}>Description</label>
                  <input type="text" name="description" className="form-control" id={`description-${titleId}`} value={formData.description}
                  onChange={handleChange} />
                </div>

                {/* <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input type="number" name="price" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="text" name="quantity" className="form-control" />
                </div> */}
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={handleUpdate}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edittitle;
