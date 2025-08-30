import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import {
  gallery_img14,
  gallery_img22,
  gallery_img5,
} from "../assets/img";
import { FaClock, FaUsers, FaChild, FaSmokingBan, FaDoorClosed, FaTrashAlt, FaUtensils, FaDog, FaBan, FaBirthdayCake } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Booking from "../components/Booking";
import Rating from "../components/Rating";
import { galleryImgList, houseRulesList, img1, img2, img3, rating_info, testimonials } from "../constants";
import Page_Label from "../components/Page_Label";
import AboutCard from "../components/AboutCard";
import Gallery from "../components/Gallery";

const Home = () => {

  return (
    <div className="page home">
      <Hero_Section />
      <Location_Section />
      <About_Section />
      <Facilties_Section />
      <HouseRules_Section />
      <Testimonial_Section />
    </div>
  );
};

const Hero_Section = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_info">
          <div className="info">
            <h1 className="gradient-heading">
              Your Personal Haven in Captivating Dumaguete
            </h1>
            <h3>
              A cozy escape infused with the warmth and wonder of Dumaguete.
            </h3>
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
            <div className="cto">
              <p>islandtravels.ph@gmail.com <MdOutlineEmail /></p>
              <p>0123456789 <IoPhonePortraitOutline /> </p>
            </div>
            <div className="slider_img">
              <ImageSlider images={img3} interval={4000} classId={""} />
            </div>
            <div className="rating">
              {rating_info.map((info, i) => (
                <Rating
                  key={i}
                  logoImg={info.img}
                  rating={info.rating}
                  reviews={info.reviews}
                  link={info.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const About_Section = () => {
  return (
    <section className="about">
      <div className="title">
        <Page_Label pageLabel={"About"} blue />
        <br />
        <br />
        <h1>
          Tired of cramped hotel rooms when traveling with family or friends?
        </h1>
        <br />
      </div>

      <br />

      <div className="about_info">
        <div className="about_content">
          <p>
            Our fully furnished 2-bedroom apartment offers the perfect
            alternative—a spacious and relaxing home away from home. With a
            well-equipped kitchen, cozy living area, and comfortable bedrooms,
            you’ll have all the space and convenience you need to truly unwind.
            Ideal for short-term stays, our apartment combines comfort, privacy,
            and affordability, so you can enjoy your trip without compromise.
          </p>
        </div>

        <div className="photo_corner">
          <div className="about_card">
            <AboutCard img={gallery_img14} location={"Pool side area"} />
          </div>
          <div className="about_card">
            <AboutCard img={gallery_img5} location={"Second Bedroom"} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Facilties_Section = () => {
  const [facePopUp, setFacPopUp] = useState(false)

  const handlePopUpOpen = () => {
    setFacPopUp(!facePopUp)
  }

  return (
    <>
      <section className="facilities">
        <div className="container">
          <div className="left">
            <Page_Label pageLabel={"Facilities"} blue />
            <h1 className="gradient-heading">What We Offer</h1>

            <div className="fac_list_container">
              <div className="fac_list">
                <p><i className="fa-solid fa-wifi"></i> Wifi</p>
                <p><i className="fa-solid fa-tv"></i> 32 inch HDTV</p>
                <p><i className="fa-solid fa-snowflake"></i> Air conditioning</p>
                <p><i className="fa-solid fa-fire-burner"></i> Kitchen</p>
                <p><i className="fa-solid fa-person-swimming"></i> Pool</p>
                <p><i className="fa-solid fa-dumbbell"></i> Gym</p>
                <p><i className="fa-solid fa-elevator"></i> Elevator</p>
                <p><i className="fa-solid fa-fire-extinguisher"></i> Fire Extinguisher</p>
                <p><i className="fa-solid fa-ban-smoking"></i> Smoke Detector</p>
                <p><i className="fa-solid fa-eye"></i> 24-hour Security</p>
                <button onClick={handlePopUpOpen}>View All Amenities</button>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={gallery_img22} alt="" />
          </div>
        </div>
      </section>

      <div className={`facePopUp ${facePopUp ? "active": ""}`}>
        <button onClick={handlePopUpOpen}>Exit</button>
        <div className="facePopUpContainer">
          <h1>Facilities</h1>
        </div>
      </div>
    </>

  );
};

const HouseRules_Section = () => {
  return (
    <section className={"rulesSection"}>
      <Page_Label pageLabel={"House Rules"} blue />
      <br />
      <h2 className={"heading"}>Follow For A Better Experience</h2>
      <div className={"rulesGrid"}>
        {houseRulesList.map((rule, index) => {
          const Icon = rule.icon;
          return (
            <div key={index} className={"ruleCard"}>
              <div className={"iconWrapper"}>
                <Icon className={"icon"} />
              </div>
              <div className={"content"}>
                <h3 className={"title"}>{rule.title}</h3>
                {rule.content && (
                  <ul className={"contentList"}>
                    {rule.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {rule.note && <p className={"note"}>{rule.note}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Testimonial_Section = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const getRatingClass = (platform, rating) => {
    if (platform === "Agoda" || platform === "Booking.com") {
      if (rating >= 9) return "rating-green";
      if (rating >= 8) return "rating-yellow";
      if (rating >= 7) return "rating-orange";
      return "rating-red";
    }
    return "rating-star";
  };

  const isNumericRating = (platform) =>
    platform === "Agoda" || platform === "Booking.com";


  return (
    <section className="testimonial_section">
      <div className="title">
        <Page_Label pageLabel={"Testimonials"} blue />
        <h2>What Our Guests Say</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial_card">
            <div className="testimonial_platform">
              <img src={t.logo} alt={t.platform} className="platform_logo" />
            </div>

            <p className="testimonial_review">"{t.review}"</p>
            <div className="testimonial_footer">
              <span className="testimonial_name">– {t.name}, {t.date}</span>
              <div className={`rating-badge ${getRatingClass(t.platform, t.rating)}`}>
                {
                  isNumericRating(t.platform) ? (
                    `${t.rating}/10`
                  ) : (
                    [...Array(t.rating)].map((_, i) => <span key={i}>⭐</span>)
                  )
                }
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

const Location_Section = () => {
  return (
    <section className="location">
      <Page_Label pageLabel={"Location"} blue />
      <br />
      <h2>We are located at Marina Spatial by Filinvest 88C6+MPJ, Lungsod ng Dumaguete, Lalawigan ng Negros Oriental</h2>
      <br />
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.14109676408634!2d123.31144485445148!3d9.321856257338478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6fe90c2b71a7%3A0xcc333c33bb104eae!2sMarina%20Spatial%20by%20Filinvest!5e0!3m2!1sen!2sph!4v1687585593823!5m2!1sen!2sph" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </section>
  )
}

export default Home;
