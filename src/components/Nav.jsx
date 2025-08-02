import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import { LogoIconMain } from '../assets/img';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <div className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="img_con">
          <img src={LogoIconMain} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Facilties</li>
            <li>About</li>
            <li>Find Us</li>
            <li>FAQ</li>
            <li>Book</li>
          </ul>
        </nav>
        <div className="contact">
          <a href="mailto:islandtravels.ph@gmail.com" target="_blank" rel="noreferrer">
            Contact Us
          </a>
          <i className="fa-solid fa-inbox" style={{ color: "#0077B6" }}></i>
        </div>
      </div>
    </header>
  );
};

export default Nav;
