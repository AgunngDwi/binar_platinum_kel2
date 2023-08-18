import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const SearchDetail = ({ data }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/cars");
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

  const replaceStatus = (status) => {
    switch (status) {
      case "true":
        return "Disewakan";
      case "false":
        return "Tidak Disewakan";
    }
  };

  return (
    <div>
      <Container>
        <Row className="search-container">
          <Col className="search-warp" style={{ height: "100px" }}>
            <div className="search-car">
              <label htmlFor="carName">Nama Mobil</label>
              <input type="text" disabled placeholder={data?.name} />
            </div>
            <div className="search-category">
              <label htmlFor="category">Kategori</label>
              <input
                name="list-category"
                disabled
                placeholder={replaceCategory(data?.category)}
              ></input>
            </div>
            <div className="search-price">
              <label htmlFor="price">Harga</label>
              <input
                type="text"
                disabled
                placeholder={data?.price?.toLocaleString("id-ID")}
              />
            </div>
            <div className="search-is-rented">
              <label htmlFor="isRented">Status</label>
              <input
                disabled
                placeholder={replaceStatus(data?.status?.toLocaleString())}
              ></input>
            </div>
            <div className="search-buttons">
              <button
                style={{
                  backgroundColor: "white",
                  color: "#0d28a6",
                  fontSize: "14px",
                  borderColor: "red",
                  border: "1px solid #0D28A6",
                  padding: "8px 12px",
                }}
                onClick={goToBack}
              >
                Edit
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchDetail;
