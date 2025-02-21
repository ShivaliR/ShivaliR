import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Projects'; // Ensure Projects.js is correct
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebPortfolio from './components/WebPortfolio';

function App() {
  return (
    <Router>
      <div className="website"> {/* Corrected class to className */}
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} /> {/* Ensure the correct import */}
          <Route path="/webportfolio" element={<WebPortfolio />} /> {/* Updated path to lowercase */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
