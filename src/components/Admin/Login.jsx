import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Login.css"

const AdminLogin = () => {
  return (
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
                <div className="sign-in-wrapper-child">
                    <label htmlFor="">Email</label> <br />
                    <input type="email" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="sign-in-wrapper-child"> 
                    <label htmlFor="">Password</label> <br />
                    <input type="password" placeholder="6+ karakter" />
                </div >
                <Button className="sign-in-wrapper-child">
                    Sign In
                </Button>
            </Col>
        </Row>
    </Container>
  )
  
};

export default AdminLogin