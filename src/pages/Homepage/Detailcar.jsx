import React, { useEffect, useRef, useState } from "react";
import NavbarMain from "../../components/Homepage/NavbarMain";
import HeroSection from "../../components/Homepage/HeroSection";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Homepage/Footer";
import "/src/css/Homepage/detail.css";
import { DateRangePicker } from "rsuite";
import {
  Button,
  Card,
  Row,
  CardGroup,
  Col,
  Container,
  CardImg,
} from "react-bootstrap";

const Detailcar = () => {
  const [form, setForm] = useState({
    start_rent_at: "",
    finish_rent_at: "",
    car_id: "",
  });
  const [data, setData] = useState({});
  const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
  const [isDateSelected, setIsDateSelected] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  // console.log(id)

  const getDetailData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;

    axios
      .get(api)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailData();
    setForm({
      ...form,
      car_id: parseInt(id),
    });
  }, []);

  const handleDateSelect = (dates) => {
    if (dates && dates[0] && dates[1]) {
      setForm({
        ...form,
        start_rent_at: dates[0].toISOString().split("T")[0], //convert ke string lalu pisahkan timezone
        finish_rent_at: dates[1].toISOString().split("T")[0],
      });
      setIsDateSelected(true);
    } else {
      setForm({
        ...form,
        start_rent_at: "",
        finish_rent_at: "",
      });
      setIsDateSelected(false);
    }
  };

  const handlePayment = () => {
    const data = {
      start_rent_at: form.start_rent_at,
      finish_rent_at: form.finish_rent_at,
      car_id: form.car_id,
    };

    // const token = localStorage.getItem("token")
    // const config = {
    //   headers: {
    //     token: token
    //   }
    // }

    axios
      .post("https://api-car-rental.binaracademy.org/customer/order", data, {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const orderId = res.data.id;
        navigate(`/payment/${orderId}`);
      })
      .catch((err) => console.log(err));
  };

  const replaceCategory = (category) => {
    switch (category) {
      case "large":
        return "6 - 8 orang";
      case "medium":
        return "4 - 6 orang";
      case "small":
        return "2 - 4 orang";
      default:
        return category;
    }
  };

  return (
    <div>
      <NavbarMain />
      <HeroSection showButton={false} />
      <Container>
        <Row>
          <Col>
            <Card className="card-detail">
              <Card.Body>
                <Card.Title>Tentang Paket</Card.Title>
                <Card.Subtitle>Include</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Card.Text>

                <Card.Subtitle>Exclude</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp. 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Card.Text>

                <Card.Title>Refund, Reschedule, Overtime</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp. 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp. 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp. 20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-car">
              <Card.Img variant="top" className="img-detail" src={data.image} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text className="car-category">
                  <img src="/src/assets/icon/fi_users.svg" />
                  {replaceCategory(data.category)}
                </Card.Text>
                <label className="label-card" htmlFor="">
                  Tentukan lama sewa mobil (max. 7hari)
                </label>
                <DateRangePicker
                  disabledDate={combine(allowedMaxDays(7), beforeToday())}
                  showOneCalendar
                  placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                  onChange={handleDateSelect}
                />
                <Card.Title className="price-car">
                  Total Rp.{data.price}
                </Card.Title>
                <Button
                  className="button-card"
                  variant={isDateSelected ? "success" : "secondary"}
                  disabled={!isDateSelected}
                  onClick={handlePayment}
                >
                  Lanjutkan Pembayaran
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Detailcar;
