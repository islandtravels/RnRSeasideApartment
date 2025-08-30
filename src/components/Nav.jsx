import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import { LogoIconMain } from '../assets/img';
import { Link, useLocation } from 'react-router-dom';

/*
  TODO: FIX NAV BAR FOR MOBILE
*/

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <Link to="/#hero" className="img_con">
          <img src={LogoIconMain} alt="Logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/#facilities" onClick={() => setMenuOpen(false)}>Facilities</Link></li>
            <li><Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/#locations" onClick={() => setMenuOpen(false)}>Find Us</Link></li>
            <li><Link to="/FAQ#faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/#hero" onClick={() => setMenuOpen(false)}>Book</Link></li>
          </ul>
        </nav>

        <div className="contact"> 
          <a href="mailto:islandtravels.ph@gmail.com?subject=Guest%20Message" target="_blank"  rel="noreferrer"> Contact Us </a> 
          <i className="fa-solid fa-inbox" style={{ color: "#0077B6" }}></i> 
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
