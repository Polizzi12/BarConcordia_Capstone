import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Prenota from './components/Prenota';
import Prodotti from './components/Prodotti';
import Banner from './components/Banner';
import OrderSummary from './components/OrderSummary';
import SuccessMessage from './components/Delete'; 
import  { useState, useEffect } from 'react';
import ScrollToTopButton from './components/Scroll';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.title = "Bar Concordia"; 
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      offset: 500,
    });
  }, []);

  return (
    <Router>
    <div className="App">
      <HeaderNav/> 
      <Banner/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Prodotti/>} />
          <Route path="/prenota" element={<Prenota />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/delete" element={<SuccessMessage />} />
    </Routes> 
    <ScrollToTopButton />
     <Footer/>  
    </div>
    </Router>
  );
}


export default App;
