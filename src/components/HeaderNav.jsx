import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import backgroundImage from '../assets/bar.jpg';
import Logo from '../assets/logo.svg';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
 
    <Navbar className={scrolled ? 'custom-navbar navbar-scrolled' : 'custom-navbar'} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
        <img
            src={Logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="Prodotti">Prodotti</Nav.Link>
            <Nav.Link as={Link} to="Prenota">Prenota</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  );
}

export default HeaderNav;