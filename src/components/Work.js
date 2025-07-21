import React from 'react';
import { useNavigate } from 'react-router-dom';

import PickMeals from '../Assets/cursor.png';
import OrderMeals from '../Assets/settings.png';
import DeliveryMeals from '../Assets/mobile-payment.png';

const Work = () => {
  const navigate = useNavigate(); // For page navigation

  const workInfoData = [
    {
      image: PickMeals,
      title: 'Pick Style',
      description: 'Select your favorite styles from our menu.',
      buttonText: 'Explore Styles',
    },
    {
      image: OrderMeals,
      title: 'Customize It',
      description: 'Choose Yarn color and crochet styles in your liking.',
      buttonText: 'Explore Colors',
    },
    {
      image: DeliveryMeals,
      title: 'Make Payment',
      description: 'Process delivery to your doorstep.',
      buttonText: 'Payment Process',
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>How it works</p>
        <p className='primary-text'>All You Need To Do:</p>
      </div>

      <div className='work-section-card'>
        {workInfoData.map((data) => (
          <div className='work-section-info' key={data.title}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button
              onClick={() => navigate('/styles')}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#fe9e0d',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              {data.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
