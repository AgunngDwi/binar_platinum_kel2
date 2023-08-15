import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./boxDetail.css";

const BoxDetail = ({ data }) => {
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

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const startRent = formatDate(data?.start_rent_at);
  const endRent = formatDate(data?.finish_rent_at);

  return (
    <div>
      <Container className="box-detail">
        <Row>
          <h5 className="tittle-box">Detail Pesananmu</h5>
          <Col>
            <label className="subtittle-box" htmlFor="">
              Nama/Tipe Mobil
            </label>
            <p className="p-boxdetail-order">{data?.Car?.name}</p>
          </Col>
          <Col>
            <label className="subtittle-box" htmlFor="">
              Kategori
            </label>
            <p className="p-boxdetail-order">
              {replaceCategory(data?.Car?.category)}
            </p>
          </Col>
          <Col>
            <label className="subtittle-box" htmlFor="">
              Tanggal Mulai Sewa
            </label>
            <p className="p-boxdetail-order">{startRent}</p>
          </Col>
          <Col>
            <label className="subtittle-box" htmlFor="">
              Tanggal Akhir Sewa
            </label>
            <p className="p-boxdetail-order">{endRent}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoxDetail;
