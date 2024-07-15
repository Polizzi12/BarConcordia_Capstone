import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/logo.svg';

const HeaderNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

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

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <Navbar className={scrolled ? 'custom-navbar navbar-scrolled' : 'custom-navbar'} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <div className='logo-container'>
            <img src={Logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Prodotti" className={activeLink === '/Prodotti' ? 'active' : ''}>Prodotti</Nav.Link>
            <Nav.Link as={Link} to="/Prenota" className={activeLink === '/Prenota' ? 'active' : ''}>Prenota</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;