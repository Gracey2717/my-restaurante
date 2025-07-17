import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Bag.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div>
      <div className="about-section-container" id='about'>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="About Us" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="About Background" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
          <h1 className="primary-text">Creating artworks requires creativity and talent and trust me,we have both.</h1>
          <p className="primary-text"> We make and most importantly we customize the best and most quality crochet for our consumer.
             Our products are always so good that our customers ALWAYS comes back for more and bring a friend along too.
         </p>
                    
          <button className="secondary-button">
            Learn More <BsFillPlayCircleFill />
          </button>
          <button className='watch-video-button'>
            {""}
          </button>
        </div>
    
      </div>
    </div>
  )
}
export default About
