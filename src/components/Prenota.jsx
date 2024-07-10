import React from "react";

const Prenota = () => {
  return (
    <div className="ll">
      <h1 className="title">Prenota</h1>
      <div className="forma">
        <form action="prenotazione.php" method="post" >
          <div className="form-row">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="cognome">Cognome:</label>
            <input type="text" id="cognome" name="cognome" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="prodotto">Prodotto:</label>
            <input type="text" id="prodotto" name="prodotto" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="richieste">Richieste: </label>
            {/* <textarea id="richieste" name="richieste" required></textarea> */}
            <input type="text" id="richieste" name="richieste" required />
          </div>
          
          <div className="form-row">
            <label htmlFor="data_ora">Data e Ora Prenotazione:</label>
            <input type="datetime-local" id="data_ora" name="data_ora" required />
          </div>
          
          <button type="submit" className="bottones">Prenota</button>
        </form>
      </div>
    </div>
  );
};

export default Prenota;