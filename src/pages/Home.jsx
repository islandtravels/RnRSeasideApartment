import React from 'react'
import ImageSlider from '../components/ImageSlider';
import { checkus_agoda, checkus_airbnb, checkus_bookingcom } from '../assets/img';
import Booking from '../components/Booking';
import Rating from '../components/Rating';
import { img1, img2, img3, rating_info } from '../constants';
import Page_Label from '../components/Page_Label';

const Home = () => {
  return (
    <div className='page home'>
      <Hero_Section />
      <About_Section />
      <section></section>
    </div>
  )
}

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
              {rating_info.map( (info, i) => 
                <Rating logoImg={ info.img } rating={ info.rating } reviews={ info.reviews } link={ info.link }/>
              )}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

const About_Section = () => {
  return(
    <section className='about'>
      <Page_Label pageLabel={"about"} />
      <br />
      <p>
        Tired of cramped hotel rooms when traveling with family or friends?</p>
      <br />
      <p>
        Our fully furnished 2-bedroom apartment offers the perfect alternative—a spacious and relaxing home away from home. With a well-equipped kitchen, cozy living area, and comfortable bedrooms, you’ll have all the space and convenience you need to truly unwind. Ideal for short-term stays, our apartment combines comfort, privacy, and affordability, so you can enjoy your trip without compromise
      </p>
    </section>
  );
}


export default Home