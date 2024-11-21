// Homepage.js
import React from 'react';
import './Homepage.css';
import Hero_image from '../../assets/Hero_image.jpg';

const Homepage = () => {
  return (
    <div id="home">
      <div className="hero-container">
        {/* Background texture overlay */}
        <div className="texture-overlay"></div>
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-text">
              <div className="spice-indicators">
                <div className="spice-circle green">
                  <div className="spice-inner"></div>
                </div>
                <div className="spice-circle red">
                  <div className="spice-inner"></div>
                </div>
              </div>
              <h1 className="hero-title">
                Deliciously Yours,<br />
                <span className="highlight">Always...</span>
              </h1>
              <p className="hero-description">
                "Our story begins with a passion for flavor, where every meal is made with heart—join us for Happy Hour."
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img
                  src={Hero_image}
                  alt="Delicious Biryani Dish"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-element top"></div>
        <div className="floating-element bottom"></div>
      </div>
    </div>
  );
};

export default Homepage;
