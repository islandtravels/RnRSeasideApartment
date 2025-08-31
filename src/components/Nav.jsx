import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import { LogoIconMain } from '../assets/img';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <>
      <Hamburger />

      <header>
        <div className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
          <Link to="/#hero" className="img_con">
            <img src={LogoIconMain} alt="Logo" />
          </Link>

          <nav className={`nav-links`}>
            <ul>
              <li><Link to="/#facilities" >Facilities</Link></li>
              <li><Link to="/#about" >About</Link></li>
              <li><Link to="/#locations" >Find Us</Link></li>
              <li><Link to="/FAQ#faq" >FAQ</Link></li>
              <li><Link to="/#hero" >Book</Link></li>
            </ul>
          </nav>

          <div className="contact">
            <a href="mailto:islandtravels.ph@gmail.com?subject=Guest%20Message" target="_blank" rel="noreferrer"> Contact Us </a>
            <i className="fa-solid fa-inbox" style={{ color: "#0077B6" }}></i>
          </div>
        </div>
      </header>
    </>
  );
};

const Hamburger = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const setMenuState = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <button className='hamburger' onClick={setMenuState}>
        <div className="container">
          <span></span>
          <span></span>
          <span></span>

        </div>
      </button>
      <div className={`pop_up_menu ${openMenu ? "active" : ""}`}>
         <div className={`nav`}>
          <Link to="/#hero" className="img_con">
            <img src={LogoIconMain} alt="Logo" />
          </Link>

          <nav className={`nav-links`}>
            <ul>
              <li><Link to="/#facilities" onClick={setMenuState}>Facilities</Link></li>
              <li><Link to="/#about" onClick={setMenuState}>About</Link></li>
              <li><Link to="/#locations" onClick={setMenuState}>Find Us</Link></li>
              <li><Link to="/FAQ#faq" onClick={setMenuState}>FAQ</Link></li>
              <li><Link to="/#hero" onClick={setMenuState}>Book</Link></li>
            </ul>
          </nav>

          <div className="contact">
            <a href="mailto:islandtravels.ph@gmail.com?subject=Guest%20Message" target="_blank" rel="noreferrer"> Contact Us </a>
            <i className="fa-solid fa-inbox" style={{ color: "#0077B6" }}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;
