import React from 'react'
import "../css/nav.css"
import { LogoIconMain } from '../assets/img'

const Nav = () => {
  return (
    <header>
      <div className="nav">
        <div className="img_con">
          <img src={ LogoIconMain } alt="" />
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
          <a href="mailto:islandtravels.ph@gmail.com" target='_blank'>Contact Us</a>
          <i class="fa-solid fa-inbox" style={{color:"#0077B6"}}></i>
        </div>
      </div>
    </header>
  )
}

export default Nav