import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about-section" className="about-section">
      <h2 id="about-heading" className="about-heading">
        About Me ✨
      </h2>

      <div id="profile-container" className="profile-container">
        <div id="profile-card" className="profile-card">
          <img
            id="profile-image"
            src="/images/profile-short.jpg"
            alt="Shivali Ranka"
            className="profile-image"
          />
          <div className="profile-card-content">
            <h3 className="profile-name">Hi, Shivali here! 🌟</h3>
            <p className="profile-description">
            📍 I'm a passionate website developer with a growing interest in the
              world of products. Currently based in Pune, but originally from
              Meghnagar and also have lived in Indore. 🏡
            </p>
          </div>
        </div>
        <div className="card" id="education-card">
  <h3>🎓 Education</h3>
  <ul>
    <li>
      📍 <strong>B.Tech. in Information Technology, </strong> Symbiosis International University, Pune
    </li>
    <li>
    📍 <strong>MBA, </strong>  
   Indian Institute of Management, Raipur
    </li>
  </ul>
</div>



        <div className="card" id="expertise-card">
          <h3>🔧 What I Do?</h3>
          <p>
          📍 Building user-focused websites with technologies like JavaScript,
            React, WordPress, PHP, ACF, Node.js, and CSS. 💻
          </p>
          <p>
          📍 Exploring product portfolios and studying real-world cases to merge
            technical expertise with a product-oriented approach. 📈
          </p>
        </div>

     

      </div>

      <div className="memories-section">
        <h3>📸 Memories</h3>
        <p>
          Everyone likes pictures! Here are a couple of me and some of my
          cherished memories. 💖
        </p>
        <div className="memory-gallery">
          <img src="/images/tcs.jpeg" alt="Memory 3" className="memory-image" />
          <img
            src="/images/memory-1.jpg"
            alt="Memory 4"
            className="memory-image iimr"
          />
          <img
            src="/images/memory-6.jpg"
            alt="Memory 5"
            className="memory-image"
          />
          <img
            src="/images/memory-8.jpg"
            alt="Memory 7"
            className="memory-image"
          />
          <img
            src="/images/memory-8.png"
            alt="Memory 8"
            className="memory-image"
          />
          <img
            src="/images/memory-10.png"
            alt="Memory 9"
            className="memory-image"
          />
       
          <img
            src="/images/memory-12.png"
            alt="Memory 11"
            className="memory-image"
          />
        </div>
      </div>

      <div className="resume-section" id="resume-section">
        <a
          id="resume-link"
          href="/files/ShivaliRanka_Resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">📄 View Full Resume</button>
        </a>
      </div>
      <div className="contact-section card">
  <h3>Let's work together? 🤝</h3>
  <form className="contact-form">
    <div className="form-group">
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>
    <div className="form-group">
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>
    <div className="form-group">
      <textarea id="message" placeholder="Enter your message" required></textarea>
    </div>
    <button type="submit">Send Message ✨</button>
  </form>
</div>


    </section>

    
  );
}

export default About;
