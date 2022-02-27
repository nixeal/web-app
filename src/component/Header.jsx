import React from 'react';
import '../css/header.css';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='container-fluid bg-dark text-white'>
            <header className="p-3  text-white">
          <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
                <li>
                  <Link to="/" className="nav-link px-2 text-white title-one">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/sales" className="nav-link px-2 text-white title-one">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/top3sales" className="nav-link px-2 text-white title-one">
                    Top3Sales
                  </Link>
                </li>
                <li>
                  <Link to="/average" className="nav-link px-2 text-white title-one">
                    Average
                  </Link>
                </li>
              </ul>
                </div>
          </div>
        </header>
        <h1><span>Petroleum Sales Web Application</span></h1>
        </div>
    );
}

export default Header;