import React from 'react';
import './Project.css';

function Portfolio() {
  return (
    <section id="portfolio-section" className="portfolio-section">
      <h2 id="portfolio-heading" className="portfolio-heading">
        Product Portfolio
      </h2>

      {/* Currently Working On Section */}
      {/* <div id="currently-working-on" className="portfolio-category">
        <h3 className="portfolio-subheading">Currently Working On</h3>
        <ul className="portfolio-list">
          <li className="portfolio-item">
            <img 
              src="/images/linkedin-content-quality-issue.png" 
              alt="LinkedIn Content Quality Issues" 
              className="portfolio-thumbnail"
            />
            <span className="portfolio-title">LinkedIn Content Quality Issues - User Retention & Churn Rate</span>
            <span className="portfolio-date">Ongoing</span>
            <a href="#" className="portfolio-link">Coming Soon</a>
          </li>
        </ul>
      </div> */}

      {/* Product Portfolio Section */}
      <div id="product-portfolio" className="portfolio-category">
        <ul className="portfolio-list">
        <li className="portfolio-item">
            <img 
              src="/images/linkedin-logo.png" 
              alt="Fixing LinkedIn’s Content Quality Issues: A Case Study on User Retention & Engagement" 
              className="portfolio-thumbnail"
            />
            <span className="portfolio-title">Product Improvement: Fixing LinkedIn’s Content Quality Issues - User Retention & Engagement</span>
            <span className="portfolio-date">06th March '25</span>
            <a href="https://docs.google.com/presentation/d/1cV3ezgsovXC_DBqJIgGKVLKlOkejWLlAIvTAUyom9g0/edit?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Download PDF</a>
          </li>

          {/* Product 1 */}
          <li className="portfolio-item">
            <img 
              src="/images/hinge-logo.png" 
              alt="Hinge Product Research" 
              className="portfolio-thumbnail"
            />
            <span className="portfolio-title">Product Understanding: Hinge, an Online Dating Application</span>
            <span className="portfolio-date">01st February '25</span>
            <a href="https://drive.google.com/file/d/18wSY3Y8rhEIsPSP4rhGnzG_Q18TuqKcf/view?usp=drive_link" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Download PDF</a>
          </li>

          {/* Product 2 */}
          <li className="portfolio-item">
            <img 
              src="/images/local-delivery.jpg" 
              alt="Parcel Delivery App Research" 
              className="portfolio-thumbnail"
            />
            <span className="portfolio-title">Product Discovery: Local Parcel Delivery App</span>
            <span className="portfolio-date">11th February '25</span>
            <a href="https://drive.google.com/file/d/1tPU9kntrG3HnP4Egc_juiPwandNkAIGy/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Download PDF</a>
          </li>

          {/* Product 3 */}
          <li className="portfolio-item">
            <img 
              src="/images/linkedin-logo.png" 
              alt="LinkedIn Auto Suggestion Research" 
              className="portfolio-thumbnail"
            />
            <span className="portfolio-title">LinkedIn's Messaging Auto Suggestion Feature</span>
            <span className="portfolio-date">16th February '25</span>
            <a href="https://www.linkedin.com/posts/shivali-ranka_linkedin-productdesign-uxdesign-activity-7296805760477327360-HmpC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACt4XJABbnYVAv3msrzP8vUK-BFo-rsJJgw" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="portfolio-link">Click Here</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
