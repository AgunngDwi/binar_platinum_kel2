import React from "react";
import { Container } from "react-bootstrap";
import img_service from "../../assets/img/img_service.svg";
import icon_check from "../../assets/icon/symbol/iconcheck.svg";

const listService = [
  {
    icon: <img src={icon_check} alt="" />,
    detail: "Sewa Mobil Dengan Supir di Bali 12 Jam",
  },
  {
    icon: <img src={icon_check} alt="" />,
    detail: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    icon: <img src={icon_check} alt="" />,
    detail: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    icon: <img src={icon_check} alt="" />,
    detail: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    icon: <img src={icon_check} alt="" />,
    detail: "Layanan Airport Transfer / Drop In Out",
  },
];

const OurServices = () => {
  return (
    <div className="ourservices-container">
      <Container>
        <div className="ourservices-image">
          <img src={img_service} alt="girl-services" />
        </div>
        <div className="ourservices-list">
          <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
          <h2>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </h2>
          {listService.map((item, index) => (
            <div className="ourservices-list-detail" key={index}>
              <p className="icon-service">{item.icon}</p>
              <p className="detail-service"> {item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
