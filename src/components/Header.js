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
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio/web-projects">Web Projects</Link></li>
          <li><Link to="/portfolio/product-portfolio">Product Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
