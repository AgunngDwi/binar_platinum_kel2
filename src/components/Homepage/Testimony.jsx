import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonialImg from "../../assets/img/img_photo.svg";
import testimonialImg2 from "../../assets/img/img_photo (1).svg";

const testimonial = [
  {
    image: <img src={testimonialImg} alt="" />,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "John Dee, 32, Bromo",
  },
  {
    image: <img src={testimonialImg2} alt="" />,
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "John Dee, 32, Bromo",
  },
  {
    image: <img src={testimonialImg} alt="" />,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "John Dee, 32, Bromo",
  },
];

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star-icon">
      &#9733;
    </span>
  ));
  return <div className="star-rating">{stars}</div>;
};

const Testimony = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="testimony-container">
      <Container>
        <div className="testimony-tittle">
          <h1>Testimonial</h1>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <div className="testimony-content">
          <div className="testimony-card">
            <Slider {...settings}>
              {testimonial.map((item, index) => {
                return (
                  <div className="testimony-card-warp" key={index}>
                    <div className="testimony-image">
                      <p>{item.image}</p>
                    </div>
                    <div className="testimony-detail">
                      <StarRating rating={item.rating} />
                      <p className="testimony-text">{item.text}</p>
                      <p className="testimony-name">{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimony;
