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
          <li className="portfolio-item">
            <span className="portfolio-title">Linkedin's messaging auto suggestion feature</span>
            <span className="portfolio-date">16th February '25</span>
            <a href="https://www.linkedin.com/posts/shivali-ranka_linkedin-productdesign-uxdesign-activity-7296805760477327360-HmpC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACt4XJABbnYVAv3msrzP8vUK-BFo-rsJJgw" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Click here</a>
          </li>
        </ul>
      </div>
     
    </section>
  );
}

export default Portfolio;
