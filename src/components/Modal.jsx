// allora ti chiedo un grandissimo aiuto ho questi due script che dovrebbero gestire un form con il suo back-end connesso ad un db. ora considerando che sto sviluppando in react. e il mio script php si trova dentro la cartella public e a sua volta all'iterno della cartella php e il file è chiamato prentazione.php il form è contenuto dentro un components jsx chiamato Prenota. quando compilo il form e premo invio, mi esce un messaggio di errore che è presente nello script jsx, sapresti dirmi come risolvere?

// Questo è l'errore:
// Si è verificato un errore durante l'invio della prenotazione. 


// import React, { useState } from "react";

// const Prenota = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     cognome: "",
//     email: "",
//     prodotto: "",
//     richieste: "",
//     data_ora: "",
//   });
//   const [file, setFile] = useState(null);

//   // Gestisce il contenuto incollato per l'immagine
//   const handlePaste = (event) => {
//     const items = event.clipboardData.items;
//     for (const item of items) {
//       if (item.type.indexOf("image") !== -1) {
//         const blob = item.getAsFile();
//         setFile(blob);
//       }
//     }
//   };

//   // Gestisce il cambiamento del file selezionato
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFile(file);
//   };

//   // Gestisce il cambiamento dei campi di testo del form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Gestisce l'invio del form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Crea un oggetto FormData per inviare i dati al server
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (file) {
//       data.append("image", file);
//     }

//     try {
//       const response = await fetch("/php/prenotazione.php", {  // Modifica il percorso qui
//         method: "POST",
//         body: data,
//       });
  
//       if (response.ok) {
//         const result = await response.text();
//         alert(result);
//         // Resetta lo stato del form dopo la conferma
//       } else {
//         throw new Error("Errore durante l'invio della prenotazione.");
//       }
//     } catch (error) {
//       console.error("Errore:", error);
//       alert("Si è verificato un errore durante l'invio della prenotazione.");
//     }
//   };

//   return (
//     <div className="ll">
//       <h1 className="title">Prenota</h1>
//       <div className="forma">
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <label htmlFor="nome">Nome:</label>
//             <input
//               type="text"
//               id="nome"
//               name="nome"
//               required
//               placeholder="Inserisci nome"
//               value={formData.nome}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="cognome">Cognome:</label>
//             <input
//               type="text"
//               id="cognome"
//               name="cognome"
//               required
//               placeholder="Inserisci cognome"
//               value={formData.cognome}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="email">E-mail:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               placeholder="Inserisci indirizzo e-mail valido"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="prodotto">Prodotto:</label>
//             <textarea
//               id="prodotto"
//               name="prodotto"
//               required
//               placeholder="Inserisci qui il prodotto che vuoi prenotare"
//               rows="4"
//               className="large-input"
//               value={formData.prodotto}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="form-row">
//             <label htmlFor="richieste">Richieste:</label>
//             <textarea
//               id="richieste"
//               name="richieste"
//               required
//               placeholder="Inserisci qui i dettagli del prodotto che si vuole prenotare"
//               rows="4"
//               className="large-input"
//               value={formData.richieste}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="form-row">
//             <label htmlFor="image">Immagine (puoi incollare o selezionare un file):</label>
//             <input
//               type="file"
//               id="image"
//               className="file-input"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//               onPaste={handlePaste}
//             />
//             <label htmlFor="image" className="bottonesse">
//               Scegli File
//             </label>
//           </div>

//           {file && (
//             <div className="form-row">
//               <label>Anteprima Immagine:</label>
//               <img src={URL.createObjectURL(file)} alt="Anteprima" style={{ maxWidth: "100%" }} />
//             </div>
//           )}

//           <div className="form-row">
//             <label htmlFor="data_ora">Data e Ora Prenotazione:</label>
//             <input
//               type="datetime-local"
//               id="data_ora"
//               name="data_ora"
//               required
//               value={formData.data_ora}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="bottones">Prenota</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Prenota; 

// <?php 
// if ($_SERVER["REQUEST_METHOD"] == "POST") {

//     $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
//     $cognome = filter_var($_POST['cognome'], FILTER_SANITIZE_STRING);
//     $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
//     $prodotto = filter_var($_POST['prodotto'], FILTER_SANITIZE_STRING);
//     $richieste = filter_var($_POST['richieste'], FILTER_SANITIZE_STRING);
//     $data_ora = $_POST['data_ora'];

//     $imagePath = '';
//     if (!empty($_FILES['image']['name'])) {
//         $targetDir = "../uploads";
//         $imageName = basename($_FILES["image"]["name"]);
//         $imagePath = $targetDir . $imageName;
//         move_uploaded_file($_FILES["image"]["tmp_name"], $imagePath);
//     }

//     $conn = new mysqli('localhost', 'root', '', 'bar_concordia');

//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }

//     $stmt = $conn->prepare("INSERT INTO prenotazioni (nome, cognome, email, prodotto, richieste, data_ora, image) VALUES (?, ?, ?, ?, ?, ?, ?)");
//     $stmt->bind_param("sssssss", $nome, $cognome, $email, $prodotto, $richieste, $data_ora, $imagePath);

//     if ($stmt->execute()) {
//         // Invio delle email di conferma
//         mail($email, "Conferma Prenotazione", "Grazie per la tua prenotazione!", "From: no-reply@tuodominio.com");
//         mail("proprietario@bar.com", "Nuova Prenotazione", "Hai ricevuto una nuova prenotazione:\nNome: $nome\nCognome: $cognome\nEmail: $email\nProdotto: $prodotto\nRichieste: $richieste\nData e Ora: $data_ora\nImmagine: $imagePath", "From: no-reply@tuodominio.com");

//         echo "Prenotazione confermata!";
//     } else {
//         echo "Errore nella prenotazione: " . $stmt->error;
//     }

//     $stmt->close();
//     $conn->close();
// }
// ?>

// l'errore che mi esce invece in console è questo 

// Failed to load resource: the server responded with a status of 404 (Not Found)

// come risolvo..... 


// import React, { useState } from "react";

// const Prenota = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     cognome: "",
//     email: "",
//     prodotto: "",
//     richieste: "",
//     data_ora: "",
//   });
//   const [file, setFile] = useState(null);

//   // Gestisce il contenuto incollato per l'immagine
//   const handlePaste = (event) => {
//     const items = event.clipboardData.items;
//     for (const item of items) {
//       if (item.type.indexOf("image") !== -1) {
//         const blob = item.getAsFile();
//         setFile(blob);
//       }
//     }
//   };

//   // Gestisce il cambiamento del file selezionato
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFile(file);
//   };

//   // Gestisce il cambiamento dei campi di testo del form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Gestisce l'invio del form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Crea un oggetto FormData per inviare i dati al server
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (file) {
//       data.append("image", file);
//     }

//     try {
//       const response = await fetch("/php/prenotazione.php", {
//         method: "POST",
//         body: data,
//       });
  
//       if (response.ok) {
//         const result = await response.text();
//         alert(result);
//         // Resetta lo stato del form dopo la conferma
//       } else {
//         throw new Error("Errore durante l'invio della prenotazione.");
//       }
//     } catch (error) {
//       console.error("Errore:", error);
//       alert("Si è verificato un errore durante l'invio della prenotazione.");
//     }
//   };

//   return (
//     <div className="ll">
//       <h1 className="title">Prenota</h1>
//       <div className="forma">
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <label htmlFor="nome">Nome:</label>
//             <input
//               type="text"
//               id="nome"
//               name="nome"
//               required
//               placeholder="Inserisci nome"
//               value={formData.nome}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="cognome">Cognome:</label>
//             <input
//               type="text"
//               id="cognome"
//               name="cognome"
//               required
//               placeholder="Inserisci cognome"
//               value={formData.cognome}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="email">E-mail:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               placeholder="Inserisci indirizzo e-mail valido"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-row">
//             <label htmlFor="prodotto">Prodotto:</label>
//             <textarea
//               id="prodotto"
//               name="prodotto"
//               required
//               placeholder="Inserisci qui il prodotto che vuoi prenotare"
//               rows="4"
//               className="large-input"
//               value={formData.prodotto}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="form-row">
//             <label htmlFor="richieste">Richieste:</label>
//             <textarea
//               id="richieste"
//               name="richieste"
//               required
//               placeholder="Inserisci qui i dettagli del prodotto che si vuole prenotare"
//               rows="4"
//               className="large-input"
//               value={formData.richieste}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="form-row">
//             <label htmlFor="image">Immagine (puoi incollare o selezionare un file):</label>
//             <input
//               type="file"
//               id="image"
//               className="file-input"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//               onPaste={handlePaste}
//             />
//             <label htmlFor="image" className="bottonesse">
//               Scegli File
//             </label>
//           </div>

//           {file && (
//             <div className="form-row">
//               <label>Anteprima Immagine:</label>
//               <img src={URL.createObjectURL(file)} alt="Anteprima" className="anteprima" />
//             </div>
//           )}

//           <div className="form-row">
//             <label htmlFor="data_ora">Data e Ora Prenotazione:</label>
//             <input
//               type="datetime-local"
//               id="data_ora"
//               name="data_ora"
//               required
//               value={formData.data_ora}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="bottones">Prenota</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Prenota;














