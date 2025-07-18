import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-icons'>
                <BsTwitter />
                <FaFacebook />
                <FaInstagram />
                <SiLinkedin />
            </div>
        </div>
        <div className='footer-section-two'>
         <div className='footer-section-columns'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carrers</span>
            <span>Testimonials</span>
            <span>Work</span>
         </div>
            <div className='footer-section-columns'>
                <span>+234 1234 5678</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
             <div className='footer-section-columns'>
                <span>Terms&Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
