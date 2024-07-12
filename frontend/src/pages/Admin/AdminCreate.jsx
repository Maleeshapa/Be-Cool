import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminCreate() {


    const [values, setValues] = useState ({

        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/AdminCreate', values)
            .then(res => {
                console.log(res);
                navigate('/Dashboard');
            })

            .catch(err => console.log(err))
    }


    return (
        <div className="dashboard d-flex">
            <Sidebar />
            <div className="main-content flex-grow-1 p-4">
                <h1 className='dashboardh1'>Create New Admin</h1>

                <div className="p-4 bg-card text-card-foreground">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                        <Link to='/Dashboard' className="btn btn-dark">
                            <span className="ml-2">GO BACK</span>
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-zinc-100 p-4 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    onChange={e=> setValues({...values, email: e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    onChange={e=> setValues({...values, password: e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Create Admin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCreate;
