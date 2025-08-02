import React from 'react'

const AboutCard = ({ img, location }) => {
  return (
    <div className='Card'>
        <img src={ img } alt="" />

        <div className="card_content">
            <p>{ location }</p>
        </div>
    </div>
  )
}

export default AboutCard