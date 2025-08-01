import React from 'react'

const Rating = ({ link, logoImg, rating, reviews }) => {
  return (
    <a href={link} target='_blank' className='review_stats'>
        <img src={ logoImg } alt="" />
        <p>{ rating }</p>
        <p>{ reviews }  reviews</p>
    </a>
  )
}

export default Rating