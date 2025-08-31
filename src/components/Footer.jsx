import React from 'react'
import "../css/footer.css"
import { LogoIcon } from '../assets/img'
import { MdOutlineEmail } from 'react-icons/md'
import { IoPhonePortraitOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer>
      <img src={LogoIcon} alt="" />
      <div className="cto">
        <p>islandtravels.ph@gmail.com <MdOutlineEmail /></p>
        <p>0123456789 <IoPhonePortraitOutline /> </p>
      </div>
    </footer>
  )
}

export default Footer