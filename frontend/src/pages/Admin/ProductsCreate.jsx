import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductsCreate() {
    const [values, setValues] = useState({
        name: '',
        price: '',
        url: '',
        category: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/ProductsCreate', values)
            .then(res => {
                console.log(res);
                navigate('/Products');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="dashboard d-flex">
            <Sidebar />
            <div className="main-content flex-grow-1 p-4">
                <h1 className='dashboardh1'>Create New Product</h1>
                <div className="p-4 bg-card text-card-foreground">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                        <Link to='/Products' className="btn btn-dark">
                            <span className="ml-2">GO BACK</span>
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-zinc-100 p-4 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Product Name"
                                    onChange={e => setValues({ ...values, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Product Price (Rs.)</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    className="form-control"
                                    placeholder="Enter Product Price"
                                    onChange={e => setValues({ ...values, price: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">Product Image</label>
                                <input
                                    type="text"
                                    id="url"
                                    name="url"
                                    className="form-control"
                                    placeholder="Enter Image URL"
                                    onChange={e => setValues({ ...values, url: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    className="form-control"
                                    onChange={e => setValues({ ...values, category: e.target.value })}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Milkshake">Milkshake</option>
                                    <option value="Smoothie">Smoothie</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Create Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsCreate;
