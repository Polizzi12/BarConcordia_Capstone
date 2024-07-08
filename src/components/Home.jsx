import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'; 
import Interno from '../assets/internobar.jpg'
import Esterno from '../assets/esternobar.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Immagineuno from '../assets/torta1.jpg';
import Immaginedue from '../assets/torta2.jpg';
import Immaginetre from '../assets/tortakinder.jpg';
import Immaginecinque from '../assets/conischizzati.jpg'
import Immaginequattro from '../assets/conipistacchio.jpg'
import Immaginesei from '../assets/conicolorati.jpg'
import Immaginesette from '../assets/conicioccolato.jpg'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
 
  return (
<div>
    <div className='cont'>
           {/* Sezione 1 */}
           <div className="container-fluid melo" data-aos="fade-up">
        <div className="row mm">
          <div className="col-md-6">
            <img src={Interno} alt="Interno del bar Concordia" className="section-image-one" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="section-content">
              <h2 className='section-title'>
                Benvenuti Al Bar Concordia!
              </h2>
              <p className='section-text'>
                Situato a Mazzarrone, in Piazza della Concordia, il nostro bar è il luogo ideale per gustare la miglior pasticceria del paese e molto altro ancora. Da noi potrete assaporare dolci freschi e prelibatezze artigianali che vi conquisteranno. Non è solo una questione di dolcezza: al Bar Concordia troverete un ambiente accogliente dove trascorrere piacevoli momenti tra amici e famiglia. Un luogo dove la tradizione si unisce alla qualità, offrendo sempre il meglio per ogni occasione. Venite a trovarci e scoprite il gusto autentico del nostro bar, nel cuore di Mazzarrone.
              </p>
              <Link to="/Prodotti" className="bottone">I NOSTRI PRODOTTI</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='gio' data-aos="fade-up">
      <Carousel>
        <Carousel.Item interval={1000}>
        <img src={Immagineuno} alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Torta 30 anni </h3>
            <p>3 piani di torta completamente decorata.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image src={Immaginedue} alt="Second slide" flui/>
          <Carousel.Caption>
            <h3>Torta 18 anni</h3>
            <p>Ben 4 piani di torta decorati con stile elegante.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Immaginetre} alt="Third slide" fluid/>
          <Carousel.Caption>
            <h3>Torta Kinder</h3>
            <p>Torta piena di pezzi Kinder, per i più golosi.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      {/* Sezione 2 con immagini */}
      <div className="container-fluid gio" data-aos="fade-up">
        <div className="row mm">
          <div className="col-md-6">
            <div className="section-content">
              <h2 className='section-title'>
                Esplora La Nostra Pasticceria
              </h2>
              <p className='section-text'>
                Immergiti nel dolce mondo della nostra pasticceria, dove ogni morso ti farà assaporare la genuinità e la passione delle nostre creazioni. Torte spettacolari, pasticcini deliziosi e altre prelibatezze ti aspettano. Vieni a scoprire il piacere di un dolce fatto con amore.
              </p>
              <Link to="/Prodotti" className="bottone">PASTICCERIA</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Esterno} alt="Esterno del bar Concordia" className="section-image-two" />
          </div>
        </div>
      </div>
      <div className='gio' data-aos="fade-up" >
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image src={Immaginequattro} alt="First slide" flui/>
          <Carousel.Caption>
            <h3>Coni Turchi Al Pistacchio </h3>
            <p>Il miglior gusto per i nostri speciali coni turchi.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image src={Immaginecinque} alt="Second slide" flui/>
          <Carousel.Caption>
          <h3>Coni Turchi Alle Nocciole</h3>
          <p>Croccanti nocciole per un gusto unico e inconfondibile.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Immaginesei} alt="Third slide" fluid/>
          <Carousel.Caption>
          <h3>Coni Turchi Alla Frutta</h3>
          <p>Un'esplosione di freschezza con i sapori più fruttati.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Immaginesette} alt="Third slide" fluid/>
          <Carousel.Caption>
          <h3>Coni Turchi Al Cioccolato</h3>
          <p>Una delizia irresistibile per gli amanti del cioccolato.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>
      {/* Sezione 3 */}
      <div className="container-fluid did" data-aos="fade-up">
        <div className="row mm">
          <div className="col-md-6">
            <img src={Interno} alt="Interno del bar Concordia" className="section-image-three" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="section-content">
              <h2 className='section-title'>
                Per Gli Amanti Del Salato!
              </h2>
              <p className='section-text'>
                Scopri la nostra selezione di prelibatezze salate! Visita la sezione dedicata sul nostro sito e lasciati tentare dalle nostre specialità che completeranno perfettamente la tua esperienza al Bar Concordia. Non perdere l'opportunità di assaporare il meglio della gastronomia locale, sempre con la qualità e il gusto che ci contraddistingue. Ti aspettiamo per farti scoprire un'altra deliziosa parte della nostra offerta, nel cuore di Mazzarrone.
              </p>
              <Link to="/Prodotti" className="bottone">SAPORI SALATI</Link>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    
</div>
  );
}

export default Home;