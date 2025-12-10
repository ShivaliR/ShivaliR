import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/Portfolio.png" alt="Portfolio Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/about" className="nav-link">About Me</Link></li>
          <li><Link to="/projects" className="nav-link">Product Portfolio</Link></li>
          <li><Link to="/webportfolio" className="nav-link">My apps</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
