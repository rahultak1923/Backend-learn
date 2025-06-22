import React, { useState , useEffect } from "react";
import { updateJewellery } from "../../api/jewelleryapi";


const Editjewellery = ({ jewelleryId, JewelleryData }) => {
    const [formData, setFormData] = useState({
      jewelleryname: "",
      description: "",
      price: "",
      quantity: "",
    });
  
    // Update form data when props change (i.e., when Edit button is clicked)
    useEffect(() => {
      if (JewelleryData) {
        setFormData({
          jewelleryname: JewelleryData.jewelleryname || "",
          description: JewelleryData.description || "",
          price: JewelleryData.price || "",
          quantity: JewelleryData.quantity || "",
        });
      }
    }, [JewelleryData]); // Runs whenever JewelleryData changes
  
    // Handle input change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle update jewellery
    const handleUpdate = async () => {
      try {
        const response = await updateJewellery(jewelleryId, formData);
        console.log("Update Success:", response);
        alert("Jewellery updated successfully!");
        window.location.reload(); // Refresh the page to reflect changes
      } catch (error) {
        console.error("Error updating jewellery:", error);
        alert("Failed to update jewellery.");
      }
    };
  
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary badge badge-sm"
          data-bs-toggle="modal"
          data-bs-target={`#editModal-${jewelleryId}`} // Unique modal ID
        >
          Edit
        </button>
  
        {/* Modal */}
        <div
          className="modal fade"
          id={`editModal-${jewelleryId}`} // Unique modal ID
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Jewellery</h5>
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
                    <label htmlFor={`jewelleryname-${jewelleryId}`} className="form-label">
                      Jewellery Name
                    </label>
                    <input
                      type="text"
                      name="jewelleryname"
                      className="form-control"
                      id={`jewelleryname-${jewelleryId}`}
                      value={formData.jewelleryname}
                      onChange={handleChange}
                      required
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor={`description-${jewelleryId}`} className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id={`description-${jewelleryId}`}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor={`price-${jewelleryId}`} className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      id={`price-${jewelleryId}`}
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor={`quantity-${jewelleryId}`} className="form-label">
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      id={`quantity-${jewelleryId}`}
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
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
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Editjewellery;
