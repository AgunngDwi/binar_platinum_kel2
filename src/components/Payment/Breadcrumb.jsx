import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BreadcrumbItem, Col, Container, Row } from "react-bootstrap";
import "/src/components/Payment/bread.css";
import { useLocation } from "react-router-dom";

const BreadcrumbComp = () => {
  const location = useLocation();

  return (
    <div className="breadcrumb-container">
      <Container>
        <Row className="breadcrumb-row">
          <Col className="back-page">
            <a href="">
              <img src="/src/assets/icon/fi_arrow-left.png" alt="" />
            </a>
            <p>Pembayaran</p>
          </Col>
          <Col className="bread-comp">
            <Breadcrumb>
              <Breadcrumb.Item active={location.pathname === "/payment"}>
                Pilih Metode
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href="/payment/confirm"
                active={location.pathname === "/payment/confirm"}
              >
                Bayar
              </Breadcrumb.Item>
              <Breadcrumb.Item
                active={location.pathname === "/payment/confirm/ticket"}
              >
                Tiket
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbComp;
