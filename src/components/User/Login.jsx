import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./LoginUser.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "../../redux/reducers/authReducer";

const Login = () => {
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
      .post("https://api-car-rental.binaracademy.org/customer/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("role", res.data.role);
        setSucc(alert("ANDA BERHASIL LOGIN"));
        window.history.go(-1);
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          setErr(alert(err.response.data.message));
        }
        setLoad(false);
      });
  };

  return (
    <div className="d-lg-flex">
      <Col className="login-wrapper">
        <div className="login-logo"></div>
        <div className="login-tittle">
          <h1>Welcome Back!</h1>
        </div>
        <div className="login-input">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="johndee@gmail.com"
            onChange={handleChange}
            value={form.email}
            name="email"
          />
        </div>
        <div className="login-input">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="6+ karakter"
            onChange={handleChange}
            value={form.password}
            name="password"
          />
          <br />
          <Button variant="primary" onClick={handleSubmit}>
            {load ? "loading..." : "Sign in"}
          </Button>
        </div>
        <br />
        <div className="signup-account">
          <a>Don't Have Account? </a>
          <a href="/register">Sign Up for Free</a>
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

export default Login;
