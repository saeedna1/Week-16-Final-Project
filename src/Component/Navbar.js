///  navbar 
import React from "react";
import {Link} from "react-router-dom";

export function Navbar() {
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">

        <div className="container-fluid">
          <Link className="navbar-brand  buld" to="/">Web App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link link-primary " aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link link-primary" to="/products">Products</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link link-primary" aria-current="page" to="/about">About Us</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link link-primary" aria-current="page" to="/contacts">Contacts</Link>
                </li>
        
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
      
            </div>
       </div>
    </nav>
  )
}





