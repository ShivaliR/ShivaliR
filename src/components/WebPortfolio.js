import React from 'react';
import './Webportfolio.css';

function WebPortfolio() {
  return (
    <section id="web-portfolio-section" className="web-portfolio-section-class">
      <h2 id="portfolio-heading" className="portfolio-heading">
      Web Development Projects
      </h2>

      {/* Web Development Projects Section */}
      <div id="web-projects" className="portfolio-category">
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
