import React from 'react';
import './Footer.css'; // Ensure this CSS file contains the necessary styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h4>📬 Contact</h4>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:shivaliranka12@gmail.com">shivaliranka12@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+919826255034">+91-9826255034</a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>🔗 Follow Me</h4>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/shivaliranka"
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

      <div className="footer-bottom">
        <p>&copy; 2025 Shivali Ranka. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
