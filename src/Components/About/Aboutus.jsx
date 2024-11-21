import React from 'react';
import './Aboutus.css'
import Food from '../../assets/About_us_image.jpg'

const AboutUs = () => {
  return (
    <div id="About">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">ABOUT US</h1>
          <div className="title-underline"></div>

          <div className="about-layout">
            <div className="moon-shape">
              <div className="image-container">
                <img
                  src={Food}
                  alt="Delicious rustic meal"
                  className="food-image"
                />
              </div>
            </div>

            <div className="text-content">
              <p className="quote">"Every flavor tells a story"</p>

              <p className="description">
                At Campfire, we bring people together over the
                warmth of delicious, rustic meals. Our passion for fresh,
                locally sourced ingredients drives every dish we serve,
                creating an unforgettable dining experience.
              </p>

              <p className="tagline">
                Come join us at Campfire, where great food and even better memories are always on the menu
              </p>
            </div>

            <div className="right-ellipse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
