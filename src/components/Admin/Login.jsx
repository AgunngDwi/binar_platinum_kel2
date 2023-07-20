import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import "./Login.css";

const AdminLogin = () => {
  // Inisiasi fungsi untuk navigasi antar path
  const navigate = useNavigate();

  // Atur nilai awal state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [shownAlert, setShownAlert] = useState(false);
  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);

  // Bikin fungsi untuk menangani input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Bikin fungsi untuk mempost data ke API
  const handleSubmit = (e) => {
    setLoad(true);
    const data = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`https://api-car-rental.binaracademy.org/admin/auth/login`, data)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("admin_token", res.data.access_token);
        localStorage.setItem("role", res.data.role);
        setLoad(false);
        const role = localStorage.getItem("role");
        if (role==="Customer") {
          setShownAlert(true);
          localStorage.removeItem("admin_token");
          localStorage.removeItem("role") 
        }
        if (role === "admin" || role === "Admin") {
          setTimeout(() => {
            navigate("/admin_dashboard");
          }, 3000);
        }
        
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
        setShownAlert(true);
      });
  };

  // Bikin hook agar tidak bisa kembali ke halaman admin login ketika login sudah dilakukan
  useEffect(() => {
    let existToken = localStorage.getItem("admin_token");
    if (existToken && existToken !== undefined) {
      navigate("/admin_dashboard");
    }
  });

  return (
    <div className="admin-login-body">
      <Container fluid className="admin-login-container">
        <Row className="d-flex admin-login-parent">
          <Col lg={8} className="img-background">
            <img align="right" src="/src/assets/img/image 2.jpg" alt="" />
          </Col>
          <Col lg={4} className="sign-in-wrapper">
            <div className="sign-in-wrapper-child">
              <div className="logo"></div>
            </div>
            <h2 className="sign-in-wrapper-child">Welcome, Admin BCR</h2>
            {shownAlert && (
              <Alert>
                <p>
                  Masukkan username dan password yang benar. Perhatikan
                  penggunaan huruf kapital.
                </p>
              </Alert>
            )}
            <div className="sign-in-wrapper-child">
              <label htmlFor="">Email</label> <br />
              <input
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="sign-in-wrapper-child">
              <label htmlFor="">Password</label> <br />
              <input
                type="password"
                placeholder="6+ karakter"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <Button className="sign-in-wrapper-child" onClick={handleSubmit}>
              {" "}
              {load ? "Loading..." : "Sign In"}{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
