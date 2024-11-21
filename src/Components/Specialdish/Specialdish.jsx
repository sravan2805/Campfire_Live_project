import React from 'react';
import './Specialdish.css';
import assets from '../../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Specialdish = () => {

  const navigate = useNavigate();

  const handleOurMenuClick = () => {
    navigate('/menu')
  }
  return (
    <div id="special-dish">
      <div className="special-dish-container">
        <div className="special-dish-heading">
          <div className="signature-badge">Signature Dish</div>
          <h1 className="dish-title"><u>4 AM Biryani</u></h1>
          <p className="dish-description">
            "A dish that speaks for itself – crafted with love, served at the special time."
          </p>
        </div>
        <div className="dish-image-container">
          <img src={assets.four_am_biryani} alt="4 AM Biryani" className="dish-image" />
          <img src={assets.star} alt="Star" className="star-image" />
        </div>
        <p className="menu-instruction">for more details visit our menu</p>
        <button onClick={handleOurMenuClick} className="menu-button">Our Menu</button>
      </div>
    </div>
  );
};

export default Specialdish;
