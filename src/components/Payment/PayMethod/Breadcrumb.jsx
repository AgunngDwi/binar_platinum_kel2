import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BreadcrumbItem, Col, Container, Row } from "react-bootstrap";
import "./bread.css";
import { useLocation, useParams } from "react-router-dom";

const BreadcrumbComp = ({ bankData, stepper }) => {
  const { id } = useParams();
  const location = useLocation();
  const backPage = () => {
    window.history.go(-1);
  };

  return (
    <div className="breadcrumb-container">
      <Container>
        <Row className="breadcrumb-row">
          <Col className="back-page">
            <a style={{ cursor: "pointer" }} onClick={backPage}>
              <img src="/src/assets/icon/fi_arrow-left.png" alt="" />
            </a>
            {!bankData ? (
              <p>Pembayaran</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "14px", fontWeight: "700" }}>
                  {bankData?.fullName}
                </p>
                <p style={{ fontSize: "12px", fontWeight: "400" }}>
                  Order ID : {id}
                </p>
              </div>
            )}
          </Col>
          {stepper.map((item) => (
            <div className="bread-comp" key={item.id}>
              <span
                className={`circle-id ${item.active ? "active" : "inactive"}`}
              >
                {item.id}
              </span>
              <p className="tittle-crumb">{item.name}</p>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbComp;
