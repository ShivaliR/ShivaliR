import React from 'react';
import './Portfolio.css';

function WebPortfolio() {
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

export default WebPortfolio;
