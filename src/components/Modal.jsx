// <?php
// // Abilita CORS
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// // Configurazione database
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "bar_concordia";

// // Creazione connessione
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Controllo connessione
// if ($conn->connect_error) {
//     die("Connessione fallita: " . $conn->connect_error);
// }

// // Recupera i dati dal form
// $nome = $_POST['nome'];
// $cognome = $_POST['cognome'];
// $email = $_POST['email'];
// $telefono = $_POST['telefono']; // Recupero del telefono
// $prodotto = $_POST['prodotto'];
// $richieste = $_POST['richieste'];
// $data_ora = $_POST['data_ora'];
// $image = $_FILES['image'];

// // Validazione dei dati
// if (empty($nome) || empty($cognome) || empty($email) || empty($prodotto) || empty($data_ora)) {
//     die("Tutti i campi obbligatori eccetto 'richieste' devono essere compilati.");
// }

// // Salva l'immagine se presente
// $image_path = "";
// if ($image && $image['tmp_name']) {
//     $target_dir = "uploads/";
//     if (!is_dir($target_dir)) {
//         mkdir($target_dir, 0777, true); // Crea la directory se non esiste
//     }
//     $image_path = $target_dir . basename($image["name"]);
//     if (move_uploaded_file($image["tmp_name"], $image_path)) {
//         echo "Immagine caricata con successo.";
//     } else {
//         die("Errore durante il caricamento dell'immagine.");
//     }
// }

// // Inserimento dati nel database
// $sql = "INSERT INTO prenotazioni (nome, cognome, email, telefono, prodotto, richieste, image_path, data_ora)
// VALUES ('$nome', '$cognome', '$email', '$telefono', '$prodotto', '$richieste', '$image_path', '$data_ora')";

// if ($conn->query($sql) === TRUE) {
//     $last_id = $conn->insert_id;

//     // Invio email di conferma all'utente
//     $to = $email;
//     $subject = "Conferma Prenotazione";
//     $message = "Grazie per la tua prenotazione, $nome $cognome. La tua prenotazione è stata registrata con successo.";
//     $headers = "From: barconcordia5@gmail.com";

//     mail($to, $subject, $message, $headers);

//     // Invio email al proprietario del bar
//     $owner_email = "barconcordia5@gmail.com";
//     $owner_subject = "Nuova Prenotazione Ricevuta";
//     $owner_message = "Dettagli della prenotazione:\n\n
//         Nome: $nome\n
//         Cognome: $cognome\n
//         Email: $email\n
//         Telefono: $telefono\n
//         Prodotto: $prodotto\n
//         Richieste: $richieste\n
//         Data e Ora: $data_ora\n";
    
//     mail($owner_email, $owner_subject, $owner_message, $headers);

//     echo "Prenotazione registrata con successo.";
// } else {
//     echo "Errore durante l'inserimento nel database: " . $conn->error;
// }

// $conn->close();
// ?>








