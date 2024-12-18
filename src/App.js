import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import WebProjects from './components/WebProjects';
import ProductPortfolio from './components/ProductPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div class="website">
        <Header />
        <Switch>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/web-projects" element={<WebProjects />} />
          <Route path="/portfolio/product-portfolio" element={<ProductPortfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
