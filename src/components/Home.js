import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"; // Assuming you have a home banner image
import BannerImage from "../Assets/crochet-basket.png"; // Assuming you have a banner image
import {FiArrowRight} from "react-icons/fi";
import About from './About';
import Work from './Work'; 
import Testimonials from './Testimonials';
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Home Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Crochet Arts Like You've Never Imagined</h1>
          <p className="primary-text">Look crafty and fahionable with us</p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="Beautiful Crochet" />
        </div>
        
      </div>
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
