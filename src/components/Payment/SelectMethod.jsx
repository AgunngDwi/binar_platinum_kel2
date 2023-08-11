import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "/src/components/Payment/selectMethod.css";
import { useNavigate, useParams } from "react-router-dom";

const SelectMethod = ({ data }) => {
  let { id } = useParams();
  const navigate = useNavigate();
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

  const dayRent = (startDate, endDate) => {
    const startRent = new Date(startDate);
    const finishRent = new Date(endDate);
    const timeDifference = finishRent.getTime() - startRent.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return dayDifference;
  };

  const dayDifference = dayRent(data?.start_rent_at, data?.finish_rent_at);
  const totalDayRent = dayDifference + 1;

  const handlePay = () => {
    navigate(`/payment/confirm/${id}`);
  };

  return (
    <div>
      <Container>
        <Row className="selectMethod-wrapper">
          <Col className="payment-method">
            <h3>Pilih Bank Transfer</h3>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <h3>BCA Transfer</h3>
            <h3>BNI Transfer</h3>
            <h3>Mandiri Transfer</h3>
          </Col>
          <Col className="payment-detail">
            <p className="tittle-detail-payment1">{data?.Car?.name}</p>
            <p style={{ color: "#8A8A8A" }}>
              <img
                className="img-categoryorder"
                src="/src/assets/icon/fi_users.svg"
                alt=""
              />
              {replaceCategory(data?.Car?.category)}
            </p>
            <div className="total-price-order">
              <p style={{ marginBottom: "18px" }}>Total</p>
              <p style={{ fontWeight: "700" }}>Rp.{data?.total_price}</p>
            </div>
            <p
              className="tittle-detail-payment1"
              style={{ marginBottom: "8px" }}
            >
              Harga
            </p>
            <div className="detail-price-order">
              <li>
                Sewa Mobil Rp.{data?.Car?.price} x {totalDayRent}{" "}
              </li>
              <p>Rp.{data?.total_price}</p>
            </div>
            <p
              className="tittle-detail-payment1"
              style={{ marginBottom: "8px" }}
            >
              Biaya Lainnya
            </p>
            <div className="detail-price-order1">
              <li>Pajak</li>
              <p style={{ color: "green" }}>Termasuk</p>
            </div>
            <div className="detail-price-order">
              <li>Biaya makan sopir</li>
              <p style={{ color: "green" }}>Termasuk</p>
            </div>
            <p
              className="tittle-detail-payment1"
              style={{ marginBottom: "8px" }}
            >
              Belum Termasuk
            </p>
            <li style={{ marginBottom: "8px" }}>Bensin</li>
            <li>Tol dan parkir</li>
            <div className="total-price-order" style={{ fontWeight: "700" }}>
              <p>Total</p>
              <p>Rp.{data?.total_price}</p>
            </div>
            <Button
              className="btn-payment1"
              variant="success"
              onClick={handlePay}
            >
              Bayar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectMethod;
