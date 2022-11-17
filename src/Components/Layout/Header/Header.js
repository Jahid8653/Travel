import React, { useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Header.css'
import { useLocation } from 'react-router-dom';

export default function Header() {
  let location = useLocation();
  useEffect(() => {
    console.log("Location: ", location);
  }, [location])
  return (
    <div className='Header'>
   <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img className='Lgo' src="../../../Image/Logo.jpeg" alt = "prject Logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={`${location.pathname==="/home"?"active":" "}`}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`${location.pathname==="/about"?"active":" "}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/packages" className={`${location.pathname==="/packages"?"active":" "}`}>Packages</Nav.Link>
            <Nav.Link as={Link} to="/topdestination" className={`${location.pathname==="/topdestination"?"active":" "}`}>Top Destination</Nav.Link>
            <Nav.Link as={Link} to="/blog" className={`${location.pathname==="/blog"?"active":" "}`}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className={`${location.pathname==="/contact-us"?"active":" "}`}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/logout" className={`${location.pathname==="/logout"?"active":" "}`}>Logout</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar>
      <br />  

    </div>
  )
}
