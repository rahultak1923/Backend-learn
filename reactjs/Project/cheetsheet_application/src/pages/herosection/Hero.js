import React from 'react'

const Hero = () => {

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
                <p className="mb-0">Edit Your Hero Section</p>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">Our Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">Hero Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="herotitle"
                        placeholder="Enter hero title"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">Hero Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="herodescription"
                        placeholder="Enter hero description"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <button className="btn btn-success">
                      Update Hero Section
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>


  );
};

export default Hero;
