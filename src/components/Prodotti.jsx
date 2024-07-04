import React, { useState } from 'react';
import Pasticcini1 from '../assets/pasticcini1.jpg'

const Prodotti = () => {
  const [activeTab, setActiveTab] = useState('pasticceria');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="padre">
      <div className='titolo'> <h1>Scopri tutto ciò che il BarConcordia ha da offrire</h1> </div>
      <div className="tabs">
        <button
          className={`tab-button pasticceria-button ${activeTab === 'pasticceria' ? 'active' : ''}`}
          onClick={() => handleTabClick('pasticceria')}
        >
          Pasticceria
        </button>
       
        <button
          className={`tab-button tavolacalda-button ${activeTab === 'tavola-calda' ? 'active' : ''}`}
          onClick={() => handleTabClick('tavola-calda')}
        >
          Tavola Calda
        </button>
      
        <button
          className={`tab-button caffetteria-button ${activeTab === 'caffetteria' ? 'active' : ''}`}
          onClick={() => handleTabClick('caffetteria')}
        >
          Caffetteria
        </button>
      
        <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'caffetteria' ? 'active' : ''}`}>
        <div className='list'>
          <h2 className='ttl' >Tavola Calda</h2>
          <ul>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li><div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            
          </ul>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'tavola-calda' ? 'active' : ''}`}>
        <div className='list'>
          <h2 className='ttl'>Tavola Calda</h2>
          <ul>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li><div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
          </ul>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'pasticceria' ? 'active' : ''}`}>
         <div className='list'>
          <h2 className='ttl'>Pasticcini</h2>
          <ul>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li><div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
          </ul>
          <h2 className='ttl'>Torte</h2>
          <ul>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li><div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
          </ul>
          <h2 className='ttl'>Freddi</h2>
          <ul>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li><div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
              <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
             </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
            <li>
            <div className="bloc">
                  <div className="image-container">
                    <img src={Pasticcini1} className="immagini" alt="Pasticcini"/>
                </div>
                <div className="description">
                  Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure il pistacchio.
                </div>
             </div>
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Prodotti;