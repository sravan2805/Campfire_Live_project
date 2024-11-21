import React from 'react';
import './Reviewpage.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Lakshmi',
      rating: 5,
      text: 'A customer praised Campfire Restaurant for its excellent service..',
      image: '/src/assets/Review_img1.jpg',
    },
   
    {
      name: 'Lakshmi',
      rating: 5,
      text: 'A customer praised Campfire Restaurant for its excellent service..',
      image: '/src/assets/Review_img1.jpg',
    },
    {
      name: 'Suresh M',
      rating: 5,
      text: 'A customer praised Campfire Restaurant for its excellent service..',
      image: '/src/assets/Review_img2.jpg',
    },
    {
      name: 'Emily Carter',
      rating: 5,
      text: 'Campfire Restaurant delivers a perfect blend of delicious food',
      image: '/src/assets/Review_img3.jpg',
    },
    {
      name: 'Olivia Parker',
      rating: 5,
      text: 'The restaurant offers an unforgettable dining experience with warm.',
      image: '/src/assets/Review_img4.jpg',
    },
    {
      name: 'Olivia Parker',
      rating: 5,
      text: 'A customer praised Campfire Restaurant for its excellent service..ustomer praised Campfire Restaurant for its excellent service.',
      image: '/src/assets/Review_img4.jpg',
    },
  ];

  return (
    <div id="reviews">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Our Happy Customers</h1>
        <p className="testimonials-subtitle">
          Campfire Restaurant in Madanapalle is a popular spot offering Indian,
          Chinese, and continental dishes known for its open-air dining and cozy
          ambiance. It's a great place for casual meals or small celebrations.
        </p>

        <div className="testimonials-grid md:ml-20 md:mr-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image md:mt-[-40px]">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            </div>  
          ))}
        </div>

        <p className="testimonials-footer">
          Gather 'round the campfire, where stories ignite and warmth connects us
          all.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;