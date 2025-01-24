import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio-section" className="portfolio-section">
      <h2 id="portfolio-heading" className="portfolio-heading">
        My Work Showcase ✨
      </h2>

      {/* Product Portfolio Section */}
      <div id="product-portfolio" className="portfolio-category">
        <h3 className="category-heading">Product Portfolio</h3>
        <div className="product-list">
          {/* Product 1 */}
          <div className="product-card">
            <img
              src="/images/hinge.png"
              alt="Hinge"
              className="product-image"
            />
            <h4 className="product-title">Product 1: Hinge</h4>
            <p className="product-description">
Understanding product mindset            </p>
<a href="https://www.product1.com/sample.pdf" target="_blank" rel="noopener noreferrer" className="product-link" download>
  Download PDF
</a>          
          </div>
          {/* Add more product cards as needed */}
        </div>
      </div>
      {/* Web Development Projects Section */}
      <div id="web-projects" className="portfolio-category">
        <h3 className="category-heading">Web Development Projects</h3>
        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-card">
            <img
              src="/images/client-1.jpg" 
              alt="Project 1"
              className="project-image"
            />
            <h4 className="project-title">Project 1</h4>
          </div>
          {/* Project 2 */}
          <div className="project-card">
            <img
              src="/images/image.png" 
              alt="Project 2"
              className="project-image"
            />
            <h4 className="project-title">Project 2</h4>
          </div>
           {/* Project 3 */}
           <div className="project-card">
            <img
              src="/images/client-3.jpg" 
              alt="Project 3"
              className="project-image"
            />
            <h4 className="project-title">Project 3</h4>
          </div>
           {/* Project 4 */}
           <div className="project-card">
            <img
              src="/images/client-4.jpg" 
              alt="Project 4"
              className="project-image"
            />
            <h4 className="project-title">Project 4</h4>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Portfolio;
