import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Prenota from './components/Prenota';
import Prodotti from './components/Prodotti';
import Banner from './components/Banner';
import  { useState, useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Bar Concordia"; 
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
    </Routes>
    </div>
    </Router>
  );
}


export default App;
