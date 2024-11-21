import React from 'react';
import Map from "../../assets/Map.jpg"; // Adjust this path
import Web_plus_academy_logo from "../../assets/Web_plus_academy_logo.jpg";
import backgroundImage from "../../assets/Background.jpg"; // Adjust this path
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MapSection = () => {
  return (
    <div
      className="w-full text-white relative"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Content Container with Flex Layout */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center">
        {/* Left Side: Map with Ease-In-Out Effect */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 map-container  transition-transform transform hover:scale-105 hover:duration-500 ease-in-out">
          <div className="relative w-full h-40 md:h-56 rounded-lg overflow-hidden"> {/* Further reduced map height */}
            <img
              src={Map}
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: About Us, Opening Hours, Details in a single row */}
        <div className="w-full md:w-2/3 flex justify-between space-x-6 mt-8 md:mt-0">
          {/* About Us */}
          <div className="w-1/3 space-y-4 pl-8">
            <h2 className="text-yellow-400 text-base sm:text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Us
            </h2>
            <div className="flex items-center justify-start space-x-2 text-gray-300 text-xs sm:text-sm">
              <FaPhoneAlt />
              <p>8341973665</p>
            </div>
            <div className="flex items-center justify-start space-x-2 text-gray-300 text-xs sm:text-sm">
              <FaEnvelope />
              <p>camfire@gmail.com</p>
            </div>
            <div className="flex items-start justify-start space-x-2 text-gray-300 text-xs sm:text-sm">
              <FaMapMarkerAlt />
              <p>
                Anantapur Tirupati Hwy<br />
                Kadiri, Angallu<br />
                Chittoor - 517326<br />
                Near MITS college
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-1/3 space-y-4 pl-8">
            <h2 className="text-orange-400 text-base sm:text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Opening hours
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">Every day: 12pm-10pm</p>
            <p className="text-gray-300 text-xs sm:text-sm">Sunday: 10am-10pm</p>
          </div>

          {/* Details Section */}
          <div className="w-1/3 space-y-4 pl-8">
            <h2 className="text-red-400 text-base sm:text-lg font-bold mb-4">
              Details
            </h2>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons - Reduced size */}
      <div className="flex justify-center mt-6 space-x-2 mb-8"> {/* Reduced space between icons */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl hover:scale-110" /> {/* Reduced size */}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl hover:scale-110" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl hover:scale-110" />
        </a>
      </div>

      {/* Footer */}
      <div className=" bg-black text-center mt-8 text-xs sm:text-sm text-white-400 py-6">
        <p>© 2024 Camfire. All Rights Reserved |</p>
        <p className="text-sm sm:text-lg">Script Design & Development</p>
        <p className="text-sm sm:text-lg font-bold">SAREDUFY WebplusAcademy Pvt Ltd</p>
      </div>

      {/* Logo positioned at the bottom right corner */}
      <div className="absolute bottom-10 left-4 ">
        <img
          src={Web_plus_academy_logo}
          alt="Web Plus Academy Logo"
           width="40px" /> {/* Reduced logo size */}
      </div>

    </div>
  );
};

export default MapSection;