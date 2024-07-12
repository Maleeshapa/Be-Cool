import React from 'react';
import logo from '../images/Becool3.png';
import { IoMdCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light  fixed-top ">
            <div className='container'>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="120" height="50" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a href="#first" className="nav-link" activeClassName="active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Third" className="nav-link" activeClassName="active">Menu</a>
                        </li>
                        <li className="nav-item">
                        <a href="#Four" className="nav-link" activeClassName="active">Book</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex" style={{marginLeft:'120px'}}> 
                        <NavLink className="nav-link me-2" to="/Cart"><IoMdCart size={'32'} /></NavLink>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
