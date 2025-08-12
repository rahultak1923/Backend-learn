import React, { useState } from 'react';
import { CreateJewellery } from '../../api/jewelleryapi'; // Adjust path if necessary

const Form = () => {
    const [jewelleryname, setJwelleryname] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageFile, setImageFile] = useState(null);

    // const handleImageChange = (event) => {
    //     setImageFile(event.target.files[0]);
    //     console.log("imageFile in handleImageChange:", event.target.files[0]);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("imageFile before FormData:", imageFile);
        const formData = new FormData();
        formData.append('jewelleryname', jewelleryname);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        // console.log("FormData contents:");
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        try {
            await CreateJewellery(formData);
            setJwelleryname('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setImageFile(null);
            alert('Jewellery added successfully!');
        } catch (error) {
            console.error('Error creating jewellery:', error);
            alert('Failed to add jewellery.');
        }
    };

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex align-items-center">
                                <p className="mb-0">Add Jewellery</p>
                                <button className="btn btn-primary btn-sm ms-auto">Settings</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="text-uppercase text-sm">Jewellery Information</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">
                                                Jewelleryname
                                            </label>
                                            <input
                                                className="form-control"
                                                name="jewelleryname"
                                                type="text"
                                                value={jewelleryname}
                                                onChange={(event) => setJwelleryname(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">
                                                Jewellery Image
                                            </label>
                                            <input
                                                className="form-control"
                                                type="file"
                                                onChange={(event)=>setImageFile(event.target.files[0])}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">
                                                Description
                                            </label>
                                            <input
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                type="text"
                                                value={description}
                                                onChange={(event) => setDescription(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">
                                                Price
                                            </label>
                                            <input
                                                className="form-control"
                                                name="price"
                                                type="number"
                                                value={price}
                                                onChange={(event) => setPrice(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="example-text-input" className="form-control-label">
                                                Quantity
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={quantity}
                                                onChange={(event) => setQuantity(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-sm ms-auto" type="submit">
                                    Create Jewellery
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;