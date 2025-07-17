import React from 'react'
import PickMeals from '../Assets/cursor.png'
import OrderMeals from '../Assets/settings.png'
import DeliveryMeals from '../Assets/mobile-payment.png'

const Work = () => {
   const workInfoData =[
{
     image: PickMeals,
     title: "Pick Style",
     description: "Select your favorite styles from our menu.",
},
{
     image: OrderMeals,
     title: "Customize It",
     description: "Choose Yarn color and crochet styles in your liking.",
},
{
     image: DeliveryMeals,
     title: "Make Payment",
     description: "Process delivery to your doorstep.",
},
   ];
      return (
    <div className='work-section-wrapper'>
       <div className='work-section-top'>
        <p className='primary-subheading'>How it works</p>
        <p className='primary-text'></p>
       </div>

       <div className='work-section-buttom'>
          {workInfoData.map((data) => (
               <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                         <img src={data.image} alt={data.title} />
                         </div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
               </div>
   
          ))}
       </div>
    </div>
   ); 
}
export default Work
