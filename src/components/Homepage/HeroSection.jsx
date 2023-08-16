import React from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgMercy from "../../assets/img/mercy.svg";

const HeroSection = ({ showButton, showContent, showImg }) => {
  return (
    <div className="hero-container">
      <Container>
        <Col className="hero-tittle">
          <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to={"/cars"}>
            {showButton && <button>Mulai Sewa Mobil</button>}
          </Link>
        </Col>
        <Col className="hero-image">
          <img src={imgMercy} alt="" />
        </Col>
      </Container>
    </div>
  );
};

export default HeroSection;
