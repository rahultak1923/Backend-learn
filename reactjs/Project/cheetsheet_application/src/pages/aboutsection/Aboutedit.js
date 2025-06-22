import React, { useState, useEffect } from 'react';
import { AboutData, updateAbout } from "../../api/about";
 // Adjust the path based on your folder structure

const Aboutedit = () => {
  const [data, setData] = useState([]);
  const [aboutId, setAboutId] = useState(null); // renamed from heroid

  const [formData, setFormData] = useState({
    abouttitle: "",
    aboutdescription: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await AboutData();
      console.log("Your About data is: ", result);
      const aboutInfo = result.about && result.about[0];
      setData(result.about || []);
      if (aboutInfo) {
        setFormData({
          abouttitle: aboutInfo.abouttitle || "",
          aboutdescription: aboutInfo.aboutdescription || "",
        });
        setAboutId(aboutInfo._id);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateAbout(aboutId, formData);
      console.log("Update Success:", response);
      alert("About section updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating about:", error);
      alert("Failed to update about section.");
    }
  };

  return (
    <div style={{ marginLeft: "17.125rem", paddingTop: "1.2%" }}>
      {/* Display Section */}
      <div className="card shadow-lg mx-4 card-profile-bottom" style={{ marginTop: "0%" }}>
        <div className="card-body p-3">
          <div className="row gx-4">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((about, id) => (
                <div className="col-auto my-auto" key={id}>
                  <div className="h-100">
                    <h5 className="mb-1">{about.abouttitle}</h5>
                    <p className="mb-0 font-weight-bold text-sm">{about.aboutdescription}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No about data</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header pb-0 d-flex align-items-center">
                <p className="mb-0">Edit Your About Section</p>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">About Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">About Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="abouttitle"
                        value={formData.abouttitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">About Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="aboutdescription"
                        value={formData.aboutdescription}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <button className="btn btn-success" onClick={handleUpdate}>
                      Update About Section
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

export default Aboutedit;
