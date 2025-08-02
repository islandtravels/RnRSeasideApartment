import React from "react";
import ImageSlider from "../components/ImageSlider";
import {
  gallery_img14,
  gallery_img22,
  gallery_img5,
} from "../assets/img";
import { FaClock, FaUsers, FaChild, FaSmokingBan, FaDoorClosed, FaTrashAlt, FaUtensils, FaDog, FaBan, FaBirthdayCake } from 'react-icons/fa';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Booking from "../components/Booking";
import Rating from "../components/Rating";
import { houseRulesList, img1, img2, img3, rating_info, testimonials } from "../constants";
import Page_Label from "../components/Page_Label";
import AboutCard from "../components/AboutCard";

const Home = () => {
  return (
    <div className="page home">
      <Hero_Section />
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
            <div className="cto"></div>
            <div className="slider_img">
              <ImageSlider images={img3} interval={4000} classId={""} />
            </div>
            <div className="rating">
              {rating_info.map((info, i) => (
                <Rating
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
  return (
    <section className="facilities">
      <div className="container">
        <div className="left">
          <Page_Label pageLabel={"Facilities"} blue />
          <h1 className="gradient-heading">What We Offer</h1>

          <div className="fac_list_container">
            <div className="fac_list">
              <p><i class="fa-solid fa-wifi"></i> Wifi</p>
              <p><i class="fa-solid fa-tv"></i> 32 inch HDTV</p>
              <p><i class="fa-solid fa-snowflake"></i> Air conditioning</p>
              <p><i class="fa-solid fa-fire-burner"></i> Kitchen</p>
              <p><i class="fa-solid fa-person-swimming"></i> Pool</p>
              <p><i class="fa-solid fa-dumbbell"></i> Gym</p>
              <p><i class="fa-solid fa-elevator"></i> Elevator</p>
              <p><i class="fa-solid fa-fire-extinguisher"></i> Fire Extinguisher</p>
              <p><i class="fa-solid fa-ban-smoking"></i> Smoke Detector</p>
              <p><i class="fa-solid fa-eye"></i> 24-hour Security</p>
              <button>View All Amenities</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={gallery_img22} alt="" />
        </div>
      </div>
    </section>
  );
};

const HouseRules_Section = () => {
  return (
    <section className="house_rules">
      <Page_Label pageLabel={"House Rules"} blue />
      <br />
      <h2 className="gradient-heading">Please read and follow these to ensure a pleasant stay for everyone.</h2>
      <br />
      <br />

      <div className="rules_grid">
        {houseRulesList.map((rule, index) => {
          const Icon = rule.icon;
          return (
            <div className="rule_card" key={index}>
              <Icon className="icon" />
              <div>
                <h4>{rule.title}</h4>
                {rule.content && rule.content.map((line, i) => <p key={i}>{line}</p>)}
                {rule.note && <small>{rule.note}</small>}
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
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial_section">
      <h2>What Our Guests Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial_card">
            <div className="testimonial_platform">
              <img src={t.logo} alt={t.platform} className="platform_logo" />
            </div>
            <p className="testimonial_review">"{t.review}"</p>
            <div className="testimonial_footer">
              <span className="testimonial_name">– {t.name}</span>
              <div className="testimonial_rating">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Home;
