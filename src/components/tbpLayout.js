
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row, Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {ReactComponent as Logo} from '../assets/Logo-Final.svg';
import {ReactComponent as LogoWhite} from '../assets/Logo-Final-Monotone.svg';
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
    <Navbar expand="lg" className="bg-body-tertiary tbnav"  variant='light'>
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
            <a href="#login" style={{textDecoration: "none", color: "#793b42"}}><strong>Log In</strong></a> or <a href="#login" style={{textDecoration: "none", color: "#d94e41"}}><strong>Join Now</strong></a>
          </Navbar.Text>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {children}
  <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary tbfooter" style={{marginTop: "1%"}}>
    <Container>
      <Row>
      <Col md={'auto'}><LinkContainer to={"/"}>
    <LogoWhite className="d-inline-block align-top logo" width={150} height={150} />
    </LinkContainer><br />
    <Navbar.Text className='small'>
    © 2023 State Bar of Texas<br />800.204.2222 ext. 1411<br />
Austin: 512-427-1411
          </Navbar.Text></Col>
          <Col md="2"></Col>
        <Col>
<h4>Resources</h4>
<Nav className='flex-column'>
<Nav.Link href="/bar-books">Texas Bar Books</Nav.Link>
      <Nav.Link eventKey="link-1">Law Practice Management</Nav.Link>
      <Nav.Link eventKey="link-2">Help Center</Nav.Link>
      <Nav.Link eventKey="link-2">Texas Bar Books Online</Nav.Link>
      <Nav.Link eventKey="link-2">Scholarships</Nav.Link>
      <Nav.Link eventKey="link-2">Texas Bar Books Toolbar</Nav.Link>
</Nav>

      </Col>
      <Col>
      <h4>About Us</h4>
<Nav className='flex-column'>
<Nav.Link href="link-3">About Texas Bar Practice</Nav.Link>
      <Nav.Link eventKey="link-1">Contact Information</Nav.Link>
      <Nav.Link eventKey="link-2">Blog</Nav.Link>
</Nav>
      </Col>
      <Col><h4>Work with us</h4>
<Nav className='flex-column'>
<Nav.Link href="/bar-books">Legal Vendors</Nav.Link>
</Nav></Col>
      </Row>
    </Container>
  </Navbar>
  </>
  )
}