import React, { useState, useEffect } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [carName, setCarName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isRented, setIsRented] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car`;

    axios
      .get(api)
      .then((res) => {
        setOriginalData(res.data.cars);
        setData(res.data.cars);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleCarNameChange = (e) => {
    setCarName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleIsRentedChange = (e) => {
    setIsRented(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = originalData.filter((car) => {
      const isCarNameMatch = car.name
        .toLowerCase()
        .includes(carName.toLowerCase());
      const isCategoryMatch = category ? car.category === category : true;
      const isPriceMatch = price ? car.price === parseInt(price) : true;
      const isRentedMatch = isRented
        ? car.status.toString() === isRented
        : true;

      return isCarNameMatch && isCategoryMatch && isPriceMatch && isRentedMatch;
    });

    setData(filteredData);
  };

  const redirect = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="outer">
      <Container>
        <Row className="search-container">
          <Col className="search-warp">
            <div className="search-label">
              <label htmlFor="carName">Nama Mobil</label>
              <input
                type="text"
                placeholder="Ketik nama/tipe mobil"
                value={carName}
                onChange={handleCarNameChange}
              />
            </div>
            <div className="search-label">
              <label htmlFor="category">Kategori</label>
              <select
                name="list-category"
                id="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Silahkan pilih kategori</option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
            <div className="search-label">
              <label htmlFor="price">Harga</label>
              <input
                type="text"
                placeholder="Masukan hargamu"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="search-label">
              <label htmlFor="isRented">Status</label>
              <select
                name="list-is-rented"
                id="isRented"
                value={isRented}
                onChange={handleIsRentedChange}
              >
                <option value=""></option>
                <option value="false">Disewakan</option>
                <option value="true">Tidak Disewakan</option>
              </select>
            </div>
            <div className="search-buttons">
              <button className="search-button" onClick={handleSearch}>
                Cari Mobil
              </button>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
          {data.map((item, id) => (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title className="card1">{item.name}</Card.Title>
                  <Card.Text className="card2">
                    Rp. {item.price.toLocaleString("id-ID")} / hari
                  </Card.Text>
                  <Card.Text className="card3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button
                    className="pilih-mobil"
                    variant="success"
                    onClick={() => redirect(item.id)}
                  >
                    {" "}
                    Pilih Mobil
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
