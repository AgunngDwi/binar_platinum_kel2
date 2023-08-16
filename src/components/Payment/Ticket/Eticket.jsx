import React from "react";
import "./eTicket.css";
import { Container, Row, Col } from "react-bootstrap";
import InvoicePdf from "./InvoicePdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import succTicket from "../../../assets/icon/symbol/success.svg";
import downButton from "../../../assets/icon/symbol/fi_download.svg";

const eTicket = ({ dataOrder }) => {
  console.log("ini page ticket", dataOrder);
  return (
    <div>
      <Container className="ticket-container">
        <Row className="successPay-wrap">
          <img src={succTicket} alt="success" />
          <h6>Pembayaran Berhasil</h6>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </Row>
        <Row className="box-successWrap">
          <Col className="tittle-download">
            <h6>Invoice</h6>
            <p>*BCR/{dataOrder.id}/INV/2023</p>
          </Col>
          <Col className="download-button">
            <PDFDownloadLink
              document={<InvoicePdf dataInvoice={dataOrder} />}
              fileName="invoice.pdf"
            >
              <button>
                <img src={downButton} alt="" />
                Unduh
              </button>
            </PDFDownloadLink>
          </Col>
          <Row className="pdf-viewer">
            <PDFViewer
              showToolbar={false}
              style={{ width: "100%", height: "500px" }}
            >
              <InvoicePdf dataInvoice={dataOrder} />
            </PDFViewer>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default eTicket;
