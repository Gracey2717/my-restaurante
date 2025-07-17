import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"; // Assuming you have a home banner image
import BannerImage from "../Assets/crochet-basket.png"; // Assuming you have a banner image
import {FiArrowRight} from "react-icons/fi";

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
          <img src={BannerImage} alt="Delicious Food" />
        </div>
      </div>
    </div>
  );
}

export default Home;
