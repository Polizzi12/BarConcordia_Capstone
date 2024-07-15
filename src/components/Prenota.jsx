
import React, { useState } from "react";


const Prenota = () => {
  const [image, setImage] = useState(null);

  const handlePaste = (event) => {
    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          setImage(event.target.result);
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="ll">
      <h1 className="title">Prenota</h1>
      <div className="forma">
        <form action="prenotazione.php" method="post">
          <div className="form-row">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required placeholder="Inserisci nome"/>
          </div>

          <div className="form-row">
            <label htmlFor="cognome">Cognome:</label>
            <input type="text" id="cognome" name="cognome" required placeholder="Inserisci cognome"/>
            
          </div>

          <div className="form-row">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required placeholder="Inserisci indirizzo e-mail valido"/>
          </div>

          <div className="form-row">
            <label htmlFor="prodotto">Prodotto:</label>
            <textarea
              id="prodotto"
              name="prodotto"
              required
              placeholder=" Inserisci qui il prodotto che vuoi prenotare 
              ES: Vassoio di 30 pasticcini, Torta 3kg, vassoio 30pz colazioni"
              rows="4"
              className="large-input"
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="richieste">Richieste:</label>
            <textarea
              id="richieste"
              name="richieste"
              required
              placeholder="Inserisci qui i dettagli del prodotto che si vuole prenotare 
              ES: -10 crema 10 ricotta 10 cioccolato.
              -2kg cioccolato 1kg ricotta.
              -torta tema Disney.
              selezionando il tasto blu sotto 'scegli file' potrai incollare l'immagine per la cialda della torta "
              rows="4"
              className="large-input"
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="image">Immagine (puoi incollare o selezionare un file):</label>
            <input
              type="file"
              id="image"
              className="file-input"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              onPaste={handlePaste}
            />
            <label htmlFor="image" className="bottonesse">
              Scegli File
            </label>
          </div>

          {image && (
            <div className="form-row">
              <label>Anteprima Immagine:</label>
              <img src={image} alt="Anteprima" style={{ maxWidth: "100%" }} />
            </div>
          )}

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