import React from 'react'
import ImageSlider from '../components/ImageSlider';
import { checkus_agoda, checkus_airbnb, checkus_bookingcom, gallery_img1, gallery_img10, gallery_img11, gallery_img12, gallery_img13, gallery_img2, gallery_img3, gallery_img4, gallery_img5, gallery_img6, gallery_img7, gallery_img8, gallery_img9, LogoIconMain } from '../assets/img';
import Booking from '../components/Booking';
import Rating from '../components/Rating';

const Home = () => {
  return (
    <div className='page home'>
      <Hero_Section />
      <section></section>
      <section></section>
    </div>
  )
}

const img1 = [
  gallery_img1,
  gallery_img2,
  gallery_img3,
  gallery_img4,
];
const img2 = [
  gallery_img5,
  gallery_img6,
  gallery_img7,
  gallery_img8,
];
const img3 = [
  gallery_img9,
  gallery_img10,
  gallery_img11,
  gallery_img12,
];


const Hero_Section = () => {
  return (
    <>
      <section className='hero'>
        <div className="hero_info">
          <div className="info">
            <h1 className="gradient-heading">Your Personal Haven in Captivating Dumaguete</h1>
            <h3>A cozy escape infused with the warmth and wonder of Dumaguete.</h3>
            <br />
            <p>#ExploreDumaguete#DumaGetMe#R&RCondotel</p>
          </div>

          <Booking />
        </div>

        <div className="img_section">
          <div className="left">
            <div className="slider_img">
              <ImageSlider images={img1} interval={3000} classId={""} />
            </div>

            <div className="slider_img">
              <ImageSlider images={img2} interval={3500} classId={""} />
            </div>
          </div>

          <div className="right">
            <div className='cto'></div>
            <div className="slider_img">
              <ImageSlider images={img3} interval={4000} classId={""} />
            </div>
            <div className='rating'>
              <Rating logoImg={ checkus_airbnb } rating={"4.8 / 5"} reviews={"28"} link={"https://www.airbnb.com/rooms/823379786177377624?"}/>
              <Rating logoImg={ checkus_agoda } rating={"9.7 / 10"} reviews={"31"} link={"https://www.agoda.com/r-r-s-rest-and-recreation-at-marina-spatial/hotel/dumaguete-ph.html"} />
              <Rating logoImg={ checkus_bookingcom } rating={"8.4 / 10"} reviews={"15"} link={"https://www.booking.com/hotel/ph/2br-cozy-seaside-condo-in-dumaguete.html?"} />
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Home