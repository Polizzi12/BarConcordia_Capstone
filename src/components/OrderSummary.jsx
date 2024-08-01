import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = () => {
  const location = useLocation();
  const { state } = location;

  // Dati da visualizzare
  const { nome, cognome, email, telefono, prodotto, richieste, data_ora } = state || {};

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
          <button className="bottone">Prenota Altro.</button>
          <button className="bottoner">Cancella Prenotazione.</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;