import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setLoad(true);
    const data = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://api-car-rental.binaracademy.org/customer/auth/register",
        data
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSucc(alert("Berhasil membuat akun, silahkan login"));
        }
        setLoad(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        setErr(alert(err.response.data.message));
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <div className="d-lg-flex">
      <Col
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="register-logo"></div>
        <div className="register-tittle">
          <h1>Sign Up</h1>
        </div>
        <div className="register-input">
          <label htmlFor="">Email*</label>
          <input
            type="text"
            placeholder="Contoh: johndee@gmail.com"
            onChange={handleChange}
            value={form.email}
            name="email"
          />
        </div>
        <div className="register-input">
          <label htmlFor="">Password* </label>
          <input
            type="password"
            placeholder="6+ karakter"
            onChange={handleChange}
            value={form.password}
            name="password"
          />
          <br />
          <Button variant="primary" onClick={handleSubmit}>
            {load ? "loading..." : "SignUp"}
          </Button>
        </div>
        <br />
        <div className="signup-account">
          <a>Already have an account? </a>
          <a href="/login">Sign in Here</a>
        </div>
      </Col>
      <Col
        lg={6}
        className="image-wrapper"
        style={{ backgroundColor: "#0d28a6" }}
      >
        <Image
          fluid
          className="d-none d-lg-block d-xl-block"
          src="/src/assets/img/backgroundSign.svg"
          style={{ height: "100vh", width: "auto" }}
        />
      </Col>
    </div>
  );
};

export default Register;
