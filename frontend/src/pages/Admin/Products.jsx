import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/Products')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id, category) => {
        axios.delete('http://localhost:8081/Products/delete/' + id, { data: { category } })
            .then(res => {
                setData(data.filter(product => product._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <h1 className='dashboardh1'>Products</h1>
                <div className="p-4 bg-card text-card-foreground">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                        <Link to='/ProductsCreate' type="button" className="btn btn-dark">
                            <span className="ml-2">Add New</span>
                        </Link>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price (Rs.)</th>
                                    <th scope="col">Url</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.url}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(product._id, product.category)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
