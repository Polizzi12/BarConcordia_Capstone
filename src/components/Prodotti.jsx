import React, { useState } from 'react';


const Prodotti = () => {
  const [activeTab, setActiveTab] = useState('pasticceria');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="padre">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'pasticceria' ? 'active' : ''}`}
          onClick={() => handleTabClick('pasticceria')}
        >
          Pasticceria
        </button>
        <button
          className={`tab-button ${activeTab === 'tavola-calda' ? 'active' : ''}`}
          onClick={() => handleTabClick('tavola-calda')}
        >
          Tavola Calda
        </button>
        <button
          className={`tab-button ${activeTab === 'caffetteria' ? 'active' : ''}`}
          onClick={() => handleTabClick('caffetteria')}
        >
          Caffetteria
        </button>
      </div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'pasticceria' ? 'active' : ''}`}>
          <h2>Pasticceria</h2>
          <ul>
            <li>Prodotto 1</li>
            <li>Prodotto 2</li>
            <li>Prodotto 3</li>
          </ul>
        </div>
        <div className={`tab-pane ${activeTab === 'tavola-calda' ? 'active' : ''}`}>
          <h2>Tavola Calda</h2>
          <ul>
            <li>Prodotto 1</li>
            <li>Prodotto 2</li>
            <li>Prodotto 3</li>
          </ul>
        </div>
        <div className={`tab-pane ${activeTab === 'caffetteria' ? 'active' : ''}`}>
          <h2>Caffetteria</h2>
          <ul>
            <li>Prodotto 1</li>
            <li>Prodotto 2</li>
            <li>Prodotto 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prodotti;