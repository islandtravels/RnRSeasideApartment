import React from 'react'
import ImageSlider from '../components/ImageSlider';
import { gallery_img1, gallery_img12, gallery_img13, gallery_img2, gallery_img3, gallery_img4, gallery_img5, gallery_img6, gallery_img7, gallery_img8, gallery_img9 } from '../assets/img';

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
];
const img2 = [
  gallery_img4,
  gallery_img5,
  gallery_img6,
];
const img3 = [
  gallery_img7,
  gallery_img8,
  gallery_img9,
];


const Hero_Section = () => {
  return (
    <>
      <section className='hero'>
        <div className="hero_info">

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
            <div className="slider_img">
              <ImageSlider images={img3} interval={4000} classId={""} />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Home