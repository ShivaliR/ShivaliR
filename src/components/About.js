// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="profile-container">
        <img src="/images/profile-short.jpg" alt="Shivali Ranka" className="profile-image" />
        <p>Hello, I am Shivali Ranka, a passionate web developer dedicated to crafting innovative and user-centric web solutions. With expertise in website development, Generative AI, Google Ads, and SEO, I aim to bridge technology and creativity to deliver impactful digital experiences.</p>
      </div>

      <h3>Let’s Connect</h3>
      <p>Whether you're looking to collaborate, network, or just have a conversation about the latest tech trends, I'd love to connect!</p>
      <ul class="flex-col-parent">
        <li><strong>Phone: </strong><a href="tele:+91-7498734837">+91-9826255034</a></li>
        <li><strong>Email: </strong><a href="mailto:shivaliranka12@gmail.com">shivaliranka12@gmail.com</a></li>
        <li><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/shivaliranka">LinkedIn Profile</a></li>
        <li><strong>GitHub: </strong><a href="https://github.com/shivaliranka">GitHub Profile</a></li>
      </ul>

      <h3>Education & Credentials</h3>
      <ul class="flex-col-parent">
        <li>Master of Business Administration (MBA), Indian Institute of Management, Raipur</li>
        <li>Bachelor of Technology (B.Tech), Information Technology, Symbiosis International University, Pune</li>
      </ul>

      <h3>Technical Expertise</h3>
      <ul class="flex-col-parent">
        <li>Web Development: HTML, CSS, JavaScript, React.js, WordPress CMS, PHP, Advanced Custom Fields, WooCommerce, HubSpot CMS</li>
        <li>Generative AI & Tools: AI Integrations, Prompt Engineering, Marketing Strategies</li>
        <li>Management: Client Management, Project Management, Team Coordination, Leadership Training</li>
        <li>Version Control: Git, Bitbucket</li>
      </ul>

      <h3>Professional Experience</h3>
      <ul class="flex-col-parent">
        <li><strong>Sr. Front-end Developer, GO MO Group (March 2022 - Present)</strong>
          <ul>
            <li>Developed 20+ responsive websites, enhancing user experiences and client satisfaction.</li>
            <li>Engaged with 10+ B2B SaaS clients and implemented tailored CMS solutions.</li>
            <li>Built WooCommerce eCommerce platforms, custom post types, and custom fields.</li>
            <li>Automated tasks with JavaScript apps integrated with Generative AI, improving operations by 30%.</li>
            <li>Led process improvements, boosting team efficiency by 20%.</li>
          </ul>
        </li>
        <li><strong>Frontend Developer, OrderStack (Feb 2022 - March 2022)</strong>
          <ul class="flex-col-parent">
            <li>Participated in advanced JS, CSS optimization training and collaborated on custom projects.</li>
          </ul>
        </li>
        <li><strong>Software Engineer, Optum (UnitedHealth Group) (Aug 2020 - Nov 2021)</strong>
          <ul class="flex-col-parent">
            <li>Developed responsive websites under senior supervision and resolved incidents during critical situations.</li>
            <li>Gained expertise in mainframe technologies and functional knowledge of the medical industry.</li>
          </ul>
        </li>
      </ul>

      <h3>Contributing Beyond the Desk</h3>
      <ul class="flex-col-parent">
        <li>Web Developer, Covid India Task Force: Designed platforms to assist state governments and startups during COVID-19.</li>
        <li>Web Designer, Rotary International District 3040: Designed and maintained the club website for social awareness.</li>
        <li>Cadet, National Cadet Corps: Participated in camps focused on leadership and community service.</li>
      </ul>

      <h3>Recognitions & Achievements</h3>
      <ul class="flex-col-parent">
        <li>Awarded "Star Performer" for three consecutive months for excellent performance.</li>
        <li>Developed a highly praised website within 2 weeks with outstanding UI/UX.</li>
        <li>Created the organization's first automation tool, reducing implementation time from 7-8 hours to 5 minutes.</li>
      </ul>
    </section>
  );
}

export default About;
