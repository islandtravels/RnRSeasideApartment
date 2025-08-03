import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import { LogoIconMain } from '../assets/img';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkList = [
    {
      link: "",
      name: ""
    }
  ]

  return (
    <header>
      <div className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="img_con">
          <img src={LogoIconMain} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Facilties</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Find Us</Link>
            </li>
            <li>
              <Link to="/">FAQ </Link>
            </li>
            <li>
              <Link to="/">Book</Link>
            </li>
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
