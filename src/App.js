import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar1";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ProductShowcase from "./Data/ProductShowcase"; // Adjust path as needed
import ProductDetails from "./Data/ProductDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* 👇 This is your homepage — includes all sections */}
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* You can add About, Testimonials, etc. here too */}
                <Footer />
              </>
            }
          />

          {/* 👇 This is the only other route */}
          <Route
            path="/styles"
            element={
              <>
                <ProductShowcase initialCategory="Style" />
                <Footer />
              </>
            }
          />
        <Route
         path="/product/:id"
         element={
          <>
         <ProductDetails />
           <Footer />
            </>
         }
         />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
