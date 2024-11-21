import React, { useState, useEffect } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu_icon.svg';
import cross_icon from '../../assets/cross_icon.svg';
import logo from '../../assets/campfire_logo_final.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to toggle between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll behavior for active link
  const handleScroll = () => {
    const sections = ['#home', '#About', '#menu', '#special-dish', '#reviews', '#contact', '#team'];
    const offset = 100;

    sections.forEach((sectionId) => {
      const section = document.querySelector(sectionId);
      if (
        section &&
        window.scrollY >= section.offsetTop - offset &&
        window.scrollY < section.offsetTop + section.offsetHeight - offset
      ) {
        setActiveLink(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile-specific logic
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.backgroundColor = '#0e0e0e'; // Set page background to black
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.backgroundColor = ''; // Reset background color
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {isMobile ? (
        // Mobile View
        <div className="bg-black bg-opacity-100 h-15">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <img src={logo} alt="" className="logo w-32" />
            <img
              onClick={toggleMenu}
              src={menu_icon}
              className="w-7 cursor-pointer"
              alt="Menu Icon"
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-end p-6">
              <img
                onClick={toggleMenu}
                src={cross_icon}
                className="w-6 cursor-pointer"
                alt="Close Icon"
              />
            </div>
            <ul className="flex flex-col items-center gap-6 mt-10 text-[#FBC02D]">
              {['home', 'About', 'special-dish', 'menu', 'reviews'].map(
                (section) => (
                  <a
                    key={section}
                    onClick={toggleMenu}
                    href={`#${section}`}
                    className={`${activeLink === `#${section}` ? 'text-black' : 'text-[#FBC02D]'
                      } text-lg hover:text-gray-400`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </a>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        // Desktop View
        <nav className="bg-black bg-opacity-100 h-15">
          <div className='nav-container'>
            <div className="nav-content">
              <div className="navbar-logo">
                <img src={logo} alt="Delicious Biryani Dish" className="logo-img" />
              </div>
              <div className="nav-links">
                <a
                  href="#home"
                  className={`nav-link ${activeLink === '#home' ? 'active' : ''}`}
                >
                  Home
                </a>
                <a
                  href="#About"
                  className={`nav-link ${activeLink === '#About' ? 'active' : ''}`}
                >
                  About
                </a>
                <a
                  href="#special-dish"
                  className={`nav-link ${activeLink === '#special-dish' ? 'active' : ''}`}
                >
                  Special Dish
                </a>
                <a
                  href="#menu"
                  className={`nav-link ${activeLink === '#menu' ? 'active' : ''}`}
                >
                  Menu
                </a>
                <a
                  href="#reviews"
                  className={`nav-link ${activeLink === '#reviews' ? 'active' : ''}`}
                >
                  Reviews
                </a>
               
                
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
