import React from "react";
import "./Project.css";

function Portfolio() {
  return (
    <section className="product-portfolio-section">
      {/* Portfolio Heading */}
      <h1 className="portfolio-heading">Product Portfolio</h1>
     
      {/* Product Portfolio Section */}
      <div className="portfolio-category">
        <ul className="portfolio-list">
    <li className="portfolio-item">
            <span className="portfolio-title">Product Improvement: Amazon’s Product Returns (Reducing Unnecessary Returns)</span>
            <span className="portfolio-date">11th March '25</span>
            <a href="https://drive.google.com/file/d/1PqzCw40Uq0fB0wjJQnKHnxHeaArou9FA/view?usp=drive_link"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Download PDF
            </a>
          </li>

          <li className="portfolio-item">
            <span className="portfolio-title">Product Improvement: Fixing LinkedIn’s Content Quality Issues (User Retention & Engagement)</span>
            <span className="portfolio-date">06th March '25</span>
            <a href="https://drive.google.com/file/d/1uu1ek5DnxU287qylf7sUrF0SqqU0EwfJ/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Download PDF
            </a>
          </li>

          <li className="portfolio-item">
            <span className="portfolio-title">Comprehensive Product Analysis: Conversion Rate Optimization for Websites.co.in</span>
            <span className="portfolio-date">01st March '25</span>
            <a href="https://drive.google.com/file/d/1z-JmDWQJMG76bxcciHuqHffft9Mk5SND/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Download PDF
            </a>
          </li>

          <li className="portfolio-item">
            <span className="portfolio-title">Product Understanding: Hinge, an Online Dating Application</span>
            <span className="portfolio-date">01st February '25</span>
            <a href="https://drive.google.com/file/d/18wSY3Y8rhEIsPSP4rhGnzG_Q18TuqKcf/view?usp=drive_link"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Download PDF
            </a>
          </li>

          <li className="portfolio-item">
            <span className="portfolio-title">Product Discovery: Local Parcel Delivery App</span>
            <span className="portfolio-date">11th February '25</span>
            <a href="https://drive.google.com/file/d/1tPU9kntrG3HnP4Egc_juiPwandNkAIGy/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Download PDF
            </a>
          </li>

          <li className="portfolio-item">
            <span className="portfolio-title">Problem Discovery: LinkedIn's Messaging Auto Suggestion Feature</span>
            <span className="portfolio-date">16th February '25</span>
            <a href="https://www.linkedin.com/posts/shivali-ranka_linkedin-productdesign-uxdesign-activity-7296805760477327360-HmpC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACt4XJABbnYVAv3msrzP8vUK-BFo-rsJJgw"
               target="_blank"
               rel="noopener noreferrer"
               className="portfolio-link">
              Click Here
            </a>
          </li>
        </ul>
        <h2 className="product-hashtags">#ProductManagement
      #ProductDesign
      #ProductStrategy
      #ProductThinking
      #MVP
      #Wireframing
      #UIUX
      #Prototyping
      #UXResearch
      #DesignThinking
      #Figma
      #Agile
      #ABTesting
      #DataDriven
      #MarketResearch
      #Strategy
      </h2>
      </div>
      
    </section>
    
  );
}

export default Portfolio;
