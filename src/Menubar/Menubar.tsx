import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Adjust the color as needed */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Polished Automotive</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;