import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OrderSummary.css';

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // Dati da visualizzare
  const { nome, cognome, email, telefono, prodotto, richieste, data_ora } = state || {};

  const handlePrenotaAltro = () => {
    navigate('/prenota');
  };

  const handleCancellaPrenotazione = async () => {
    try {
      console.log("Email inviata per cancellazione:", email); // Debug log
      const response = await axios.post('http://localhost/bar_concordia/cancella_prenotazione.php', JSON.stringify({ email }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Risposta del server:', response.data);
      if (response.data.message === "Prenotazione cancellata con successo.") {
        navigate('/delete');
      } else {
        console.error('Errore dal server:', response.data); // Debug log
        alert(response.data.message || 'Errore durante la cancellazione della prenotazione. Si prega di riprovare.');
      }
    } catch (error) {
      console.error('Errore durante la cancellazione della prenotazione', error);
      console.error('Risposta del server:', error.response?.data); // Aggiungi questo log
      alert('Errore durante la cancellazione della prenotazione. Si prega di riprovare.');
    }
  };
  
  return (
    <div id="johnWrapper">
      <div className="johnCard">
        <div className="johnIcon">
        </div>
        <h1>Ordine effetuato con SUCCESSO!!!</h1>
      </div>
      <div className="johnCard">
        <ul className="johnList">
          <li className="johnListItem">
            <span>Nome</span>
            <span>{nome}</span>
          </li>
          <li className="johnListItem">
            <span>Cognome</span>
            <span>{cognome}</span>
          </li>
          <li className="johnListItem">
            <span>Email</span>
            <span>{email}</span>
          </li>
          <li className="johnListItem">
            <span>Telefono</span>
            <span>{telefono}</span>
          </li>
          <li className="johnListItem">
            <span>Prodotto</span>
            <span>{prodotto}</span>
          </li>
          <li className="johnListItem">
            <span>Richieste</span>
            <span>{richieste}</span>
          </li>
          <li className="johnListItem">
            <span>Data e Ora</span>
            <span>{data_ora}</span>
          </li>
        </ul>
      </div>
      <div className="johnCard">
        <div className="johnCtaRow">
          <button className="bottonel" onClick={handlePrenotaAltro}>Prenota Altro.</button>
          <button className="bottoner" onClick={handleCancellaPrenotazione}>Cancella Prenotazione.</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;