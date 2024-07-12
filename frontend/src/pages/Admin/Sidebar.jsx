import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/Dashboard" activeClassName="active">Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/Products" activeClassName="active">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/Email-alert" activeClassName="active">Email Alert</NavLink>
                </li>
                <li>
                    <NavLink to="/Logout" activeClassName="active">Logout</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
