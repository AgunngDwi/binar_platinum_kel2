import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./countdown.css";
import Countdown from "react-countdown";
import { useState } from "react";

const CountdownComp = () => {
  const [uploadShow, setUploadShow] = useState(false);
  const countdownDuration = 24 * 60 * 60 * 1000;
  const countdownUpload = 10 * 60 * 1000;
  const [selectImg, setSelectImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [visibleCount, setIsVisibleCount] = useState(false);

  const rendered = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return "Waktu Pembayaran habis";
    }
  };

  const handleConfirm = () => {
    setUploadShow(true);
    setIsVisibleCount(true);
  };

  const handleImage = (e) => {
    const picture = e.target.files[0];
    setSelectImg(picture);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(picture);
  };

  return (
    <div>
      <Container>
        <Row className="row-wrapper">
          <Col>
            <Row className="countdown-wrapper">
              <Col>
                <h6>Selesaikan Pembayaran Sebelum</h6>
                <p>Rabu, 19 Mei 2023 Jam 13.00 WIB</p>
              </Col>
              {!visibleCount && (
                <Col className="countdown-payment">
                  <Countdown date={Date.now() + countdownDuration} />
                </Col>
              )}
            </Row>
            <Row className="transfer-wrapper">
              <h6>Lakukan Transfer Ke </h6>
            </Row>
            <Row className="tutor-wrapper">
              <h6>Intruksi Pembayaran</h6>
            </Row>
          </Col>
          {!uploadShow ? (
            <Col className="confirm-wrapper">
              <p>
                Klik Konfirmasi Pembayaran untuk mempercepat proses pengecekan
              </p>
              <Button
                className="button-confirm"
                variant="success"
                onClick={handleConfirm}
              >
                Konfirmasi Pembayaran
              </Button>
            </Col>
          ) : (
            <Col className="confirm-wrapper1">
              <h6>
                Konfirmasi Pembayaran{" "}
                <Countdown
                  className="countdown-upload"
                  date={Date.now() + countdownUpload}
                />
              </h6>
              <p style={{ marginTop: "15px", marginBottom: "24px" }}>
                Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
                akan segera kami cek tunggu kurang lebih 10 menit untuk
                mendapatkan konfirmasi.
              </p>
              <p style={{ marginBottom: "8px" }}>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
              <label style={{ marginTop: "16px" }} htmlFor="">
                <img
                  src={previewImg}
                  alt="Preview"
                  style={{ maxWidth: "296px", maxHeight: "162px" }}
                />
                <input type="file" onChange={handleImage} />
              </label>
              <br />
              <Button
                style={{ marginTop: "24px" }}
                variant="success"
                className="button-confirm"
              >
                Upload
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CountdownComp;
