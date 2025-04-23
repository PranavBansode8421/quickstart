import React from "react";
import "../css/Footer.css";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div className="footer-layout pt-5 m-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h1 className="mx-3">QuickStart</h1>
            <p className="mx-3 mt-3">A108 Adam Street New York, NY 535022</p>
            <p className="mx-3 mt-4">
              <strong>Phone:</strong>
              +1 5589 55488 55
            </p>
            <p className="mx-3 ">
              <strong>Email:</strong>
              info@example.com
            </p>
            <div className="d-flex p-3 ">
              <div className="social-icons ">
                <i className="bi bi-twitter-x "></i>
              </div>
              <div className="social-icons ">
                <i className="bi bi-facebook "></i>
              </div>
              <div className="social-icons ">
                <i className="bi bi-instagram "></i>
              </div>
              <div className="social-icons ">
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 midsec">
            <div className="row">
              <div className="col-md-6">
                <h3>Useful Links</h3>
                <div className="d-flex flex-column h-100  linkwrap">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About us</NavLink>
                  <NavLink to="/service">Services</NavLink>
                  <NavLink to="/contact">Terms of service</NavLink>
                  <NavLink to="/contact">Privacy policy</NavLink>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Our Services</h3>
                <div className="d-flex flex-column h-100  linkwrap">
                  <p>Web Design</p>
                  <p>Web Development</p>
                  <p>Product Management</p>
                  <p>Marketing</p>
                  <p>Graphic Design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 lastsec">
            <h3>Our Newsletter</h3>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">© Copyright <strong> QuickStart </strong>
      
      All Rights Reserved
      </p>
      <p className="text-center">Designed by BootstrapMade</p>
    </div>
  );
};

export default Footer;
