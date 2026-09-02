import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Projects'; // Ensure Projects.js is correct

function App() {
  return (
    <Router>
      <div className="website"> {/* Corrected class to className */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Portfolio />} /> {/* Ensure the correct import */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
