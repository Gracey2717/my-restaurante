import React, { useState } from 'react';
import ProfilePic1 from "../Assets/Sister.jpg";
import ProfilePic2 from "../Assets/Grace.jpg";
import ProfilePic3 from "../Assets/Mummy.jpg";
import { AiFillStar } from "react-icons/ai";

const testimonialData = [
  {
    name: "Miss Favour",
    image: ProfilePic1,
    text: `I'm not a fan of going back to leave a review but I had to because from the customer service to the quality of their products,it was all top notch.`
  },
  {
    name: "Miss Grace",
    image: ProfilePic2,
    text: `I thought those people were just exaggerating BUT what I wanted was what I got`
  },
  {
    name: "Mrs Owolabi",
    image: ProfilePic3,
    text: `It is a good brand and I'm definitely coming back for more`
  }
];

const TestimonialCard = ({ name, image, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-img" />

      <p className={isExpanded ? 'text-full' : 'text-truncated'}>
        {text}
      </p>

      <button onClick={toggleReadMore} className="read-more-btn">
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>

      <div className='testimonials-stars-container'>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>

      <h2 className="testimonial-name">{name}</h2>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='work-section-wrapper' id='testimonials'>
      <div className='work-section-top'>
        <h1 className='primary-subheading'>Customer's Review</h1>
      </div>

      <div className="testimonials-grid">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
