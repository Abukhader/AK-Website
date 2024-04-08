import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'; // استيراد المكتبة للتمرير السلس
import logo from '../../assets/logo.png';
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');
  };

  // Function to handle smooth scrolling to the element with the specified id
  const scrollToElement = (id) => {
    scroll.scrollTo(`#${id}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
        
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <Link to="/" smooth={true} duration={800}>
            <img src={logo} className='logo' alt="Logo" height="40" />
          </Link>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="home" 
                smooth={true} 
                duration={800} 
                spy={true} 
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="about" 
                smooth={true} 
                duration={800} 
                spy={true} 
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact" 
                smooth={true} 
                duration={800} 
                spy={true} 
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="sun-moon-icon" onClick={toggleDarkMode}>
          <img src={darkMode ? sunIcon : moonIcon} alt={darkMode ? 'Moon Icon' : 'Sun Icon'} height="30" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
