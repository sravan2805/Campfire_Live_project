import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">HOW TO GET IN TOUCH?</h2>

        <div className="content-wrapper">
          <div className="contact-info">
            <div className="info-section">
              <h3>ADDRESS</h3>
              <p>
                Anantapur - Tirupati Hwy, near
                <br />
                Mits College, Kadiri, Anagallu,
                <br />
                Andhra Pradesh 517326
              </p>
            </div>

            <div className="info-section">
              <h3>PHONE NUMBER</h3>
              <p>+91 83419 73665</p>
            </div>

            <div className="info-section">
              <h3>EMAIL ADDRESS</h3>
              <p>camfire@gmail.com</p>
            </div>
          </div>

          {/* <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your mail" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="book-table">BOOK A TABLE</button>
          </form> */}
        </div>

        <div className="text-center mt-8">
          <p>Follow Us</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
           <a href="#"><img src="data:image/png;base64,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" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
