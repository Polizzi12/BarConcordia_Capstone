import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Prenota = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    prodotto: "",
    richieste: "",
    data_ora: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nome", formData.nome);
    data.append("cognome", formData.cognome);
    data.append("email", formData.email);
    data.append("telefono", formData.telefono);
    data.append("prodotto", formData.prodotto);
    data.append("richieste", formData.richieste);
    data.append("data_ora", formData.data_ora);
    data.append("image", file);

    try {
      const response = await axios.post("http://localhost/bar_concordia/prenotazione.php", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Risposta del server:", response.data);
      navigate('/order-summary', { state: formData });
    } catch (error) {
      console.error("Errore durante l'invio della prenotazione", error);
      alert("Errore durante l'invio della prenotazione. Si prega di riprovare.");
    }
  };

  return (
    <div className="ll">
      <h1 className="title" data-aos="fade-up">Prenota</h1>
      <div className="forma" data-aos="fade-up">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Inserisci nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="cognome">Cognome:</label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              required
              placeholder="Inserisci cognome"
              value={formData.cognome}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Inserisci indirizzo e-mail valido"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="telefono">Telefono:</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              required
              placeholder="Inserisci numero di telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="prodotto">Prodotto:</label>
            <textarea
              id="prodotto"
              name="prodotto"
              required
              placeholder="Inserisci qui il prodotto che vuoi prenotare"
              rows="4"
              className="large-input"
              value={formData.prodotto}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="richieste">Richieste:</label>
            <textarea
              id="richieste"
              name="richieste"
              required
              placeholder="Inserisci qui i dettagli del prodotto che si vuole prenotare"
              rows="4"
              className="large-input"
              value={formData.richieste}
              onChange={handleChange}
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
            />
            <label htmlFor="image" className="bottonesse">
              Scegli File
            </label>
          </div>

          {file && (
            <div className="form-row">
              <label>Anteprima Immagine:</label>
              <img src={URL.createObjectURL(file)} alt="Anteprima" className="anteprima"/>
            </div>
          )}

          <div className="form-row">
            <label htmlFor="data_ora">Data e Ora Prenotazione:</label>
            <input
              type="datetime-local"
              id="data_ora"
              name="data_ora"
              required
              value={formData.data_ora}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="bottones">Prenota</button>
        </form>
      </div>
    </div>
  );
};

export default Prenota;





