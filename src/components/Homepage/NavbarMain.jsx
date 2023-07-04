import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarMain = () => {
  return (
    <div className='navbar-container'>
    <Container >
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
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar> 
      ))}
      </Container>
      </div>
  );
}

export default NavbarMain