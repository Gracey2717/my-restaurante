import React from 'react';
import Navbar from './components/Navbar1';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work'; 
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'; // Assuming you have some styles in App.css

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

