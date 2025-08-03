import React from 'react'
import "../css/Rating.css"

const Rating = ({ link, logoImg, rating, reviews }) => {
  return (
    <a href={link} target='_blank' className='review_stats'>
      <div className="inner">
        <img src={logoImg} alt="" />
        <div>
          <p>{rating}</p>
          <p>{reviews} reviews</p>
        </div>
      </div>
    </a>
  )
}

export default Rating