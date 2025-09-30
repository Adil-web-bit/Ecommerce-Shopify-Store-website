import React from 'react';
import './Hero.css'; // Corrected the path for Navbar.css
import hand_icon from '../../assets/hand_icon.png'; // Corrected the path for hand_icon
import arrow_icon from '../../assets/arrow_icon.png'; // Corrected the path for arrow_icon
import men from '../../assets/p8.webp';


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Best Deals !  Best Prices !</h2>
      
      <div className="hero-hand-icon">
        <p>NEW</p>
        <img src={hand_icon} alt="Hand Icon" height="60px"/>
      </div>
      <p>COLLECTION</p>
      <p>FOR EVERYONE </p>

      <div className="hero-latest-btn">
         <div>Latest Collection</div>
         <img src={arrow_icon} alt="" height="20px"/>
      </div>
      </div>
      
      <div className="hero-right">
        <img src={men} alt="" height="400px"/>
      </div>
    </div>
  );
};

export default Hero;
