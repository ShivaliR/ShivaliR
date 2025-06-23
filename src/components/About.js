import React, {useState} from "react";
import emailjs from "emailjs-com";
import "./About.css";
import "./Contact-form.css";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    services: [],
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      services: checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
      phone: formData.phone,
      message: formData.message,
      services: formData.services.join(", "), // Convert array to a string
      budget: formData.budget,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_vk6xdlo",
        "template_sr2espm",
        templateParams,
        "F3rD-bV2PYW-JAI5e"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      country: "",
      phone: "",
      message: "",
      services: [],
      budget: "",
    });
  };
  return (
    <section id="about-section" className="about-section">
      <h1 id="about-heading" className="about-heading">
        About Me
      </h1>

      <div id="profile-container" className="profile-container">
        <div id="profile-card" className="profile-card">
          <img
            id="profile-image"
            src="/images/profile-short.jpg"
            alt="Shivali Ranka"
            className="profile-image"
          />
          <div className="profile-card-content">
            <h3 className="profile-name">Hi, <span className="highlight-pink-text">Shivali</span> here!</h3>
            <p className="profile-description">
            I'm an Associate Product Manager. I'm from Meghnagar, Madhya Pradesh.
            </p>
          </div>
        </div>
        <div className="card" id="education-card">
  <h3>Education</h3>
  <ul>
  <li>
    📍 <strong>MBA, </strong>  
   Indian Institute of Management, Raipur
    </li>
    <li>
      📍 <strong>B.Tech. in Information Technology, </strong> Symbiosis International University, Pune
    </li>
    
  </ul>
</div>



        <div className="card" id="expertise-card">
        <h3>What I Do?</h3>
        <p>
          📍 Building product mindset by exploring and solving real-world cases to merge
            technical expertise with a product-oriented approach.
          </p>
        
          <p>
          📍 Building user-focused websites with technologies like JavaScript,
            React, WordPress, PHP, ACF, Node.js, and CSS.
          </p>
          
        </div>

     

      </div>

      <div className="memories-section">
        <h3>Memories</h3>
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
          href="files/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">📄 View Full Resume</button>
        </a>
      </div>
      <div className="recommendations-section">
        <h3>Kudos</h3>
        <div className="recommendations-gallery">
          <img src="/images/recommendation-6.png" alt="Recommendation 1" className="recommendation-image recomm-one" />
          <img src="/images/recommendation-5.png" alt="Recommendation 2" className="recommendation-image enlarged"/>
          <img src="/images/recommendation-2.png" alt="Recommendation 3" className="recommendation-image rotateMinus10" />
        </div>
        <div className="recommendations-gallery">
          <img src="/images/recommendation-4.png" alt="Recommendation 4" className="recommendation-image" />
          <img src="/images/recommendation-1.png" alt="Recommendation 5" className="recommendation-image" />
          <img src="/images/recommendation-3.png" alt="Recommendation 6" className="recommendation-image" />
        </div>
      </div>

    
      <div className="contact-section">
  <h2>Let’s Build Something Amazing Together!</h2>
  <p>Tell me about your project, and I’ll help you turn your idea into reality.</p>

  <h3>What services do you need?</h3>
  <div className="services-selection">
    {["Custom Website Development", "E-commerce Setup", "AI Integration & Automation"].map((service) => (
      <label key={service} className="checkbox-label">
        <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleCheckboxChange} />
        {service}
      </label>
    ))}
  </div>

  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label>Your Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Eg: John Doe*" required />
      </div>
      <div className="form-group">
        <label>Your Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Eg: john@example.com*" required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Where are you located? 🌍</label>
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">--Select Your Country--</option>
          <option value="USA">United States</option>
          <option value="India">India</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Phone Number (Optional)</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Eg: +1 455-999-00" />
      </div>
    </div>

    <div className="form-group">
      <label>Tell Me More About Your Project ✨</label>
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Eg: I need an AI-powered eCommerce store with automation..." required></textarea>
    </div>

    <button type="submit" className="submit-btn">Get a Free Quote</button>
  </form>
</div>

    </section>

    
  );
}

export default About;
