import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa il hook useNavigate per la navigazione
import bannerImage from '../assets/bar.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/prenota'); 
  };

  const handleClickki= () =>{
    navigate('/prodotti');
  };

  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Bar Concordia" className="banner-image" />
      <button className="centered-button" onClick={handleClick}>
        Prenota ora!
      </button>
      <button className="centereds-button" onClick={handleClickki}>
        Menù!
      </button>
    </div>
  );
}

export default Banner;
