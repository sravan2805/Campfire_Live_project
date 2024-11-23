import React from 'react';
import './Homepage2.css';
import Heroimage1 from '../../assets/Homepage_2.webp';

const RestaurantBanner = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .banner-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 10vh;
      width: 100%;
      font-family: 'Dancing Script', cursive;
    }

    .image-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-frame {
      border-radius: 15px;
      overflow: hidden;
      width: 500px;
      max-width: 600px;
    }

    .food-image {
      width: 500px;
      display: block;
      transition: transform 0.3s ease-in-out;
    }

    .food-image:hover {
      transform: scale(1.05);
    }

    .content-section {
      flex: 1;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 5.5em;
      color: yellow;
      margin-bottom: 10px;
      line-height: 1.2;
      font-weight: 700;
    }

    .subtitle {
      font-size: 3.5em;
      margin-bottom: 10px;
      font-weight: 400;
      color: white;
    }

    .year {
      font-size: 3em;
      border-bottom: 2px solid white;
      display: inline-block;
      padding-bottom: 5px;
      font-weight: 400;
    }

    /* Responsive Design Adjustments */
    @media (max-width: 768px) {
      .banner-container {
        min-height: 10vh;
        flex-direction: column;
        padding: 0; /* Remove all padding */
      }

      .image-section,
      .content-section {
        width: 100%;
        padding: 0; /* Remove padding in smaller screens */
        margin: 0; /* Remove margin in smaller screens */
      }

      .title {
        font-size: 2.5em;
        margin: 0; /* Remove margin */
      }

      .subtitle {
        font-size: 2em;
        margin: 0; /* Remove margin */
      }

      .year {
        font-size: 1.8em;
        margin: 0; /* Remove margin */
      }
    }

    @media (max-width: 480px) {
      .banner-container {
        padding: 0;
        min-height: 10vh;
      }

      .image-frame {
        max-width: 300px;
      }

      .title {
        font-size: 1.8em;
        margin: 0;
      }

      .subtitle {
        font-size: 1.2em;
        margin: 0;
      }

      .year {
        font-size: 1em;
        margin: 0;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="banner-container">
        <div className="image-section">
          <div className="image-frame">
            <img 
              src={Heroimage1}
              alt="Chicken Biryani"
              className="food-image"
            />
          </div>
        </div>
        <div className="content-section">
          <h1 className="title">Good Times With Loved Ones</h1>
          <h2 className="subtitle">Serving Tasty Bits</h2>
          <div className="year">Since 2024</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBanner;
