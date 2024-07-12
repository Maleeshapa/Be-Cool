// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/Dashboard')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/' + id)
            .then(res => {
                setData(data.filter(admin => admin._id !== id)); // Remove the deleted admin from the state
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <h1 className='dashboardh1'>Welcome to Admin Dashboard</h1>
                <div className="p-4 bg-card text-card-foreground">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                        <Link to='/AdminCreate' type="button" className="btn btn-dark">
                            <span className="ml-2">Add New</span>
                        </Link>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((admin, index) => (
                                    <tr key={index}>
                                        <td>{admin._id}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.password}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(admin._id)}
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

export default Dashboard;
