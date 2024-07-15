// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import '../App.css';
// import Logo from '../assets/logo.svg';

// const HeaderNav = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState('/');

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   return (
//     <Navbar className={scrolled ? 'custom-navbar navbar-scrolled' : 'custom-navbar'} expand="lg" fixed="top">
//     <Container>
//       <Navbar.Brand href="#">
//         <div className='logo-container'>
//           <img src={Logo} alt="Logo" />
//         </div>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav">
//         <i className="bi bi-list"></i>
//       </Navbar.Toggle>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link as={Link} to="/" className={activeLink === '/' ? 'active' : ''}>Home</Nav.Link>
//           <Nav.Link as={Link} to="/Prodotti" className={activeLink === '/Prodotti' ? 'active' : ''}>Prodotti</Nav.Link>
//           <Nav.Link as={Link} to="/Prenota" className={activeLink === '/Prenota' ? 'active' : ''}>Prenota</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>

//   );
// }

// export default HeaderNav;

// .custom-navbar {
//   background-color: transparent;
//   height: 100px; 
//    display: flex;
//    flex-direction: column;
//    align-items: flex-start; 
//    gap:10px;
//    justify-content: space-between;
//    transition: background-color 0.3s ease;
//  }
//  .navbar-scrolled {
//    background-color:#A18F78;
//  }
 
 
 
 
//  .custom-navbar .logo-container {
//    height: 80px;
//    width: 80px;
//    overflow: hidden;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    position: relative;
//  }
//  .custom-navbar .logo-container img {
//    width: 100%;
//    height: auto;
//    object-fit: cover;
//    border-radius: 20px;
//  }
 
//  .custom-navbar .navbar-nav .nav-link {
//    color: white; /* Colore dei link */
//    font-size: 30px;
//    margin-inline: 15px;
//    position: relative;
//  }
 
//  .custom-navbar .navbar-nav .nav-link::after {
//    content: '';
//    position: absolute;
//    top: 50px;
//    left: 0;
//    width: 100%;
//    height: 2px;
//    transform: scaleX(0);
//    transition: transform 0.3s ease;
//    background-color: #27f7ea;
//  }
//  .custom-navbar .navbar-nav .nav-link:hover::after,
//  .custom-navbar .navbar-nav .nav-link.active::after {
//    transform: scaleX(1);
//  }
 
//  .custom-navbar .navbar-nav .nav-link:hover,
//  .custom-navbar .navbar-nav .nav-link.active {
//    color: #27f7ea; /* Colore dei link al passaggio del mouse e quando attivo */
//  }
 
 
//  .custom-navbar .navbar-toggler:focus,
//  .custom-navbar .navbar-toggler:active,
//  .custom-navbar .navbar-toggler:focus-visible,
//  .custom-navbar .navbar-toggler:focus-within,
//  .custom-navbar .navbar-toggler-icon:focus,
//  .custom-navbar .navbar-toggler-icon:active,
//  .custom-navbar .navbar-toggler-icon:focus-visible,
//  .custom-navbar .navbar-toggler-icon:focus-within {
//    outline: none !important;
//    box-shadow: none !important;
//    border: 2px solid #27f7ea !important; /* Cambia il colore del bordo */
//    color: #27f7ea !important; /* Cambia il colore dell'icona */
//  }
 
//  /* Cambia anche il colore dell'icona stessa */
//  .custom-navbar .navbar-toggler .bi-list {
//    color: white; /* Colore di default dell'icona */
//  }
//  .custom-navbar .navbar-toggler{
//    border: 2px solid white !important;
//  }
//  .custom-navbar .navbar-toggler:focus .bi-list,
//  .custom-navbar .navbar-toggler:active .bi-list,
//  .custom-navbar .navbar-toggler:focus-visible .bi-list,
//  .custom-navbar .navbar-toggler:focus-within .bi-list {
//    color: #27f7ea; /* Cambia il colore dell'icona quando il toggler è attivo o focalizzato */
//  }
 
//  .custom-toggler.navbar-toggler {
//    border-color:white ; /* Cambia il colore del bordo */
//  }