import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio-section" className="portfolio-section">
      <h2 id="portfolio-heading" className="portfolio-heading">
        My Work Showcase ✨
      </h2>

      {/* Web Development Projects Section */}
      <div id="web-projects" className="portfolio-category">
        <h3 className="category-heading">Web Development Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <img
              src="/images/project1-thumbnail.jpg"
              alt="Project 1"
              className="project-image"
            />
            <h4 className="project-title">Project 1: E-Commerce Website</h4>
            <p className="project-description">
              Developed a fully functional e-commerce platform using React and Node.js, featuring secure payment integration and user authentication.
            </p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
          {/* Repeat similar blocks for other projects */}
        </div>
      </div>

      {/* Product Portfolio Section */}
      <div id="product-portfolio" className="portfolio-category">
        <h3 className="category-heading">Product Portfolio</h3>
        <div className="product-list">
          <div className="product-card">
            <img
              src="/images/product1-thumbnail.jpg"
              alt="Product 1"
              className="product-image"
            />
            <h4 className="product-title">Product 1: Mobile App</h4>
            <p className="product-description">
              Designed and developed a mobile application for iOS and Android platforms, enhancing user engagement and retention.
            </p>
            <a href="https://www.product1.com" target="_blank" rel="noopener noreferrer" className="product-link">
              Visit Product
            </a>
          </div>
          {/* Repeat similar blocks for other products */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
