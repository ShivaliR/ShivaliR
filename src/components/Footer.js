import React from 'react';
import './Footer.css'; // Make sure this file is correctly imported

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section: Services (like in the TechMuse design) */}
        <div className="footer-section footer-services">
          <h3>Services</h3>
          <ul>
          <li>WordPress Development</li>
          <li>React Development</li>
          <li>Shopify & E-Commerce Websites</li>
          <li>Plugin Development</li>
          <li>AI Integrations</li>
          </ul>
        </div>

        {/* Middle Section: Tagline or CTA buttons (B2B Partnership, A Free Quote) */}
        <div className="footer-section footer-center contact-us">
        <h3>Contact Us</h3>
        <ul>
        <li>
          <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
            <a href="mailto:shivaliranka12@gmail.com">shivaliranka12@gmail.com</a>
          </li>
          <li>
          <i className="fas fa-phone" style={{ marginRight: '10px' }}></i>
            <a href="tel:+919826255034">+91-9826255034</a>
          </li>
        </ul>
          
          
        </div>

        {/* Right Section: Contact + Socials (like the TechMuse design) */}
        <div className="footer-section footer-contact">
         

          <h4>Social Links</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shivali-ranka/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ShivaliR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Shivali Ranka. All rights reserved. | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
