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
        <ul className="portfolio-list">
          {/* Product 1 */}
          <li className="portfolio-item">
            <span className="portfolio-title">Product Understanding: Hinge, an Online Dating Application</span>
            <span className="portfolio-date">01st February '25</span>
            <a href="https://drive.google.com/file/d/18wSY3Y8rhEIsPSP4rhGnzG_Q18TuqKcf/view?usp=drive_link" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Download PDF</a>
          </li>
          <li className="portfolio-item">
            <span className="portfolio-title">Product Discovery: Local Parcel Delivery App</span>
            <span className="portfolio-date">11th February '25</span>
            <a href="https://drive.google.com/file/d/1tPU9kntrG3HnP4Egc_juiPwandNkAIGy/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Download PDF</a>
          </li>
        </ul>
      </div>
      {/* Web Development Projects Section */}
      <div id="web-projects" className="portfolio-category">
        <h3 className="category-heading">Web Development Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <img
              src="/images/client-1.jpg" 
              alt="Project 1"
              className="project-image"
            />
            <h4 className="project-title">Project 1</h4>
          </div>
          <div className="project-card">
            <img
              src="/images/image.png" 
              alt="Project 2"
              className="project-image"
            />
            <h4 className="project-title">Project 2</h4>
          </div>
           <div className="project-card">
            <img
              src="/images/client-3.jpg" 
              alt="Project 3"
              className="project-image"
            />
            <h4 className="project-title">Project 3</h4>
          </div>
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
