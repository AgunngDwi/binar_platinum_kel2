import React from "react";
import { Col, Container, Row, Button, Tabs, Tab } from "react-bootstrap";
import "./countdown.css";
import Countdown from "react-countdown";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CountdownComp = ({ bankData, data }) => {
  const [uploadShow, setUploadShow] = useState(false);
  const countdownDuration = 24 * 60 * 60 * 1000;
  const countdownUpload = 10 * 60 * 1000;
  const [selectImg, setSelectImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [visibleCount, setIsVisibleCount] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const today = new Date();
  const expDate = new Date(today);
  expDate.setDate(expDate.getDate() + 1);

  const rendered = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Waktu Pembayaran habis</span>;
    } else {
      return (
        <span style={{ color: "red" }}>
          {hours}:{minutes}:{seconds}
        </span>
      );
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

  console.log(selectImg);
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("slip", selectImg);

    axios
      .put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        formData,
        {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        navigate(`/payment/confirm/ticket/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <Row className="row-wrapper">
          <Col>
            <Row className="countdown-wrapper">
              <Col>
                <h6 className="tittle-countPage">
                  Selesaikan Pembayaran Sebelum
                </h6>
                <p>
                  {expDate.toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </Col>
              {!visibleCount && (
                <Col className="countdown-payment">
                  <Countdown
                    date={Date.now() + countdownDuration}
                    renderer={rendered}
                  />
                </Col>
              )}
            </Row>
            <Row className="transfer-wrapper">
              <div>
                <h6 className="tittle-countPage">Lakukan Transfer Ke </h6>
                <div className="transfer-name">
                  <p className="bank-name">{bankData?.name}</p>
                  <div className="bank-name1">
                    <p>{bankData?.fullName}</p>
                    <p>a.n Binar Car Rental</p>
                  </div>
                </div>
                <div className="number-account">
                  <label>Nomor Rekening</label>
                  <input
                    className="account-input"
                    type="text"
                    value={"70020" + data?.id}
                  />
                </div>
                <div className="number-account">
                  <label>Total Bayar</label>
                  <input
                    className="totalPrice-input"
                    type="text"
                    value={"Rp. " + data?.total_price}
                  />
                </div>
              </div>
            </Row>
            <Row className="tutor-wrapper">
              <div className="instrucTransfer">
                <h6
                  className="tittle-countPage"
                  style={{ marginBottom: "24px" }}
                >
                  Intruksi Pembayaran
                </h6>
                <Tabs defaultActiveKey="ATM" transition={false} fill>
                  <Tab
                    className="method-inst"
                    eventKey="ATM"
                    title={"ATM " + bankData.name}
                  >
                    <li>Masukkan kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” - "Transfer" - "Ke Rek{" "}
                      {bankData.name} Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor {bankData.name} Virtual Account:
                      70020+Order ID
                    </li>
                    <p>Contoh:</p>
                    <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </Tab>
                  <Tab
                    className="method-inst"
                    eventKey="mobile"
                    title={"M-" + bankData.name}
                  >
                    <li>Buka Mobile {bankData.name}</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” - "Transfer" - "Ke Rek{" "}
                      {bankData.name} Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor {bankData.name} Virtual Account:
                      70020+Order ID
                    </li>
                    <p>Contoh:</p>
                    <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                    <li>
                      Layar akan menampilkan konfirmasi, ikuti instruksi untuk
                      menyelesaikan transaksi
                    </li>
                    <li>Screenshot dan simpanlah bukti transaksi tersebut</li>
                  </Tab>
                  <Tab
                    className="method-inst"
                    eventKey="bank"
                    title={bankData.name + " Klik"}
                  >
                    <li>
                      Masukkan ke Web Klik {bankData.name}, lalu input ID & PIN
                    </li>
                    <li>
                      Pilih menu “Transaksi Lainnya” - "Transfer" - "Ke Rek{" "}
                      {bankData.name} Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor {bankData.name} Virtual Account:
                      70020+Order ID
                    </li>
                    <p>Contoh:</p>
                    <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                    <li>
                      Layar akan menampilkan konfirmasi, ikuti instruksi untuk
                      menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </Tab>
                  <Tab
                    className="method-inst"
                    eventKey="internet"
                    title="Internet Banking"
                  >
                    <li>Buka Internet Banking, lalu masukkan ID & PIN</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” - "Transfer" - "Ke Rek{" "}
                      {bankData.name} Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor {bankData.name} Virtual Account:
                      70020+Order ID
                    </li>
                    <p>Contoh:</p>
                    <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                    <li>
                      Layar HP akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </Tab>
                </Tabs>
              </div>
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
              <Col className="confirm-countUpload">
                <h6 className="tittle-countPage">Konfirmasi Pembayaran</h6>
                <p>
                  <Countdown
                    className="countdown-upload"
                    date={Date.now() + countdownUpload}
                    renderer={rendered}
                  />
                </p>
              </Col>
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
                variant={selectImg ? "success" : "secondary"}
                className="button-confirm"
                disabled={!selectImg}
                onClick={handleUpload}
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
