import React, { useState } from 'react'
import { CreateTitle } from '../../api/title';

const Hero = () => {
  const[title,setTitle]= useState('');
  const[description,setDescription]= useState('');

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('title',title);
    formData.append('description',description)
    try {
  await CreateTitle({ title, description }); 
  setTitle('');
  setDescription('');
  alert('Code added successfully');
} catch (error) {
  console.error('Error creating code:', error);
}

  }
  return (
 <div style={{ marginLeft: "17.125rem", paddingTop: "1.2%" }}>
      <div className="card shadow-lg mx-4 card-profile-bottom" style={{ marginTop: "0%" }}>
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">Hero Title Here</h5>
                <p className="mb-0 font-weight-bold text-sm">Hero description goes here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
       
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header pb-0 d-flex align-items-center">
                <p className="mb-0">Added your code</p>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">Our Information</p>
              
                   <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-12">
      <div className="form-group">
        <label className="form-control-label">Add Code Title</label>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Enter your code title"
        />
      </div>
    </div>

    <div className="col-md-12">
      <div className="form-group">
        <label className="form-control-label">Add your Code & Description</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your description"
        />
      </div>
    </div>

    <div className="col-md-12 mt-3">
      <button className="btn btn-success" type="submit">
        Add your code
      </button>
    </div>
  </div>
</form>

              
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>


  );
};

export default Hero;
