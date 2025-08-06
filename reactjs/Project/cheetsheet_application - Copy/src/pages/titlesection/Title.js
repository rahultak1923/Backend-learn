import React, { useState, useEffect } from 'react';
import { TitleData, updateTitle } from "../../api/title";

const TitleEdit = () => {
  const [data, setData] = useState([]);
  const [titleId, setTitleId] = useState(null);

  const [formData, setFormData] = useState({
    websitetitle: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await TitleData();
      console.log("Fetched title data:", result);

      const titleInfo = result.title && result.title[0];
      setData(result.title || []);

      if (titleInfo) {
        setFormData({
          websitetitle: titleInfo.websitetitle || "",
        });
        setTitleId(titleInfo._id);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateTitle(titleId, formData);
      console.log("Update response:", response);
      alert("Website title updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update title.");
    }
  };

  return (
    <div style={{ marginLeft: "17.125rem", paddingTop: "1.2%" }}>
      {/* Display Section */}
      <div className="card shadow-lg mx-4 card-profile-bottom">
        <div className="card-body p-3">
          <div className="row gx-4">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((title, index) => (
                <div className="col-auto my-auto" key={index}>
                  <div className="h-100">
                    <h5 className="mb-1">{title.websitetitle}</h5>
                  </div>
                </div>
              ))
            ) : (
              <p>No title data available</p>
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
                <p className="mb-0">Edit Website Title</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label">Website Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="websitetitle"
                        value={formData.websitetitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <button className="btn btn-success" onClick={handleUpdate}>
                      Update Title
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

export default TitleEdit;
