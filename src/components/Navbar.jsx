import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Kearney Developments</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/insights">Insights</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
