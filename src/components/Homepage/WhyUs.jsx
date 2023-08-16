import React from "react";
import { Container } from "react-bootstrap";
import icon_complete from "../../assets/icon/symbol/icon_complete.svg";
import icon_price from "../../assets/icon/symbol/icon_price.svg";
import icon_hour from "../../assets/icon/symbol/icon_24hrs.svg";
import icon_pro from "../../assets/icon/symbol/icon_professional.svg";

const whyusData = [
  {
    icon: <img src={icon_complete} alt="" />,
    tittle: "Mobil Lengkap",
    description:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: <img src={icon_price} alt="" />,
    tittle: "Harga Murah",
    description:
      "Harga Murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: <img src={icon_hour} alt="" />,
    tittle: "Layanan 24 Jam",
    description:
      "Siap Melayani Kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: <img src={icon_pro} alt="" />,
    tittle: "Sopir Profesional",
    description:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <Container>
        <div className="whyus-tittle">
          <h1>Why us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="whyus-card">
          {whyusData.map((item, index) => (
            <div className="whyus-card-content" key={index}>
              <p>{item.icon}</p>
              <p>{item.tittle}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
