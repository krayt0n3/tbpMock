
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {ReactComponent as Logo} from '../assets/Logo-Final.svg';
import '../styles/App.scss';

export default function TBPLayout({children}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(e) {
    setIsOpen(
      !isOpen
    )
  };

  function handleClose(e) {
    setIsOpen(
     false
    )
  };

  return( <>
    <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="light">
    <Container>
    <LinkContainer to={"/"}>
    <Logo className="d-inline-block align-top logo" width={90} height={90} />
    </LinkContainer>
    <Navbar.Brand href="#home">
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to={"/bookshop"}>
          <Nav.Link href="/bookshop">Bookshop</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://blog.texasbarpractice.com/">Blog</Nav.Link>
          <Nav.Link href="https://blog.texasbarpractice.com/">About Us</Nav.Link>
          <Nav.Link href="https://blog.texasbarpractice.com/">Contact </Nav.Link>
          <NavDropdown 
          title="SBOT Resources"
          id="basic-nav-dropdown"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          show={isOpen}>
            <NavDropdown.Item href="https://www.texasbar.com/">State Bar of Texas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.texasbarcle.com/CLE/Home.asp">
              Texas Bar CLE
            </NavDropdown.Item>
          </NavDropdown>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find a Product"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <Nav>
        <Navbar.Text>
            <a href="#login">Log In</a> or <a href="#login">Join Now</a>
          </Navbar.Text>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {children}
  <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
} 