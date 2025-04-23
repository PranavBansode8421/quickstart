import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbarr'>
    <div className="container">
    <div className="row p-0 m-0">
        
            <div className="col-10  p-0 m-0">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand  " to="/">
                            <img className='navbar-logo-img' src="	https://bootstrapmade.com/content/demo/QuickStart/assets/img/logo.png" alt="logo" />
                            <span className="brand-logo ">QuickStart</span>
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav w-100 fw-semibold d-flex justify-content-end">
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                </li>

                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link" to="/feature">Features</NavLink>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link" to="/price">Pricing</NavLink>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                                </li>
                                
                               
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/contact">Contacts</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-1 "></div>

        </div>
    </div>
    </div>
  )
}

export default Navbar
