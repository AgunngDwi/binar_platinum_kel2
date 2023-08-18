import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Navigate, useNavigate } from "react-router";

const NavbarMain = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div className="navbar-container">
      <Container>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LOGO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Our Service</Nav.Link>
                  <Nav.Link href="#action2">Why Us</Nav.Link>
                  <Nav.Link href="#action3">Testimonial</Nav.Link>
                  <Nav.Link href="#action4">FAQ</Nav.Link>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {!role && (
                      <Button variant="success" onClick={handleLogin}>
                        Login
                      </Button>
                    )}
                    {!role && (
                      <Button variant="primary" onClick={handleRegister}>
                        Register
                      </Button>
                    )}
                    {role && <Nav.Link>Hai,{role}</Nav.Link>}
                    {role && (
                      <Button variant="danger" onClick={handleLogout}>
                        Logout
                      </Button>
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}
      </Container>
    </div>
  );
};

export default NavbarMain;
