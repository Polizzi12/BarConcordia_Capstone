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
import Immaginecinque from '../assets/conischizzati.jpg';
import Immaginequattro from '../assets/conipistacchio.jpg';
import Immaginesei from '../assets/conicolorati.jpg';
import Immaginesette from '../assets/conicioccolato.jpg';
import Immaginesex from '../assets/tortaS.jpg';
import bancopasticcini from '../assets/pasticcini1.jpg';
import bancocolazioni from '../assets/banco_colazione.jpg';
import Granita from "../assets/granitapistacchio&brioches.jpg";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Sep from "../assets/separè.png"


function Home() {
 
  return (
<div>
    <div className='cont'>
           {/* Sezione 1 */}
           <div className="container-fluid melo" data-aos="fade-right">
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
      <div className="separ-container">
         <img src={Sep} alt="separè" className='separ' />
      </div>
      <div className='gio' data-aos="fade-up">
      <h1 className='titles'>Le nostre fantastiche torte</h1>
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
        <Carousel.Item>
          <Image src={Immaginesex} alt="Fourth slide" fluid/>
          <Carousel.Caption>
            <h3>Torta Cream-Tart</h3>
            <p>Eleganza e Gusto in ogni morso: Scopri la nostra cream-tart</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="separ-container">
         <img src={Sep} alt="separè" className='separ' />
      </div>
      <div className="container-fluid gio" data-aos="fade-left">
        <div className="row mm">
          <div className="col-md-6">
            <div className="section-content">
              <h2 className='section-title'>
                Esplora La Nostra Pasticceria
              </h2>
              <p className='section-text'>
              Immergiti nel dolce mondo della nostra pasticceria, dove ogni morso ti farà assaporare la genuinità e la passione delle nostre creazioni. Torte spettacolari e pasticcini deliziosi ti aspettano. Vieni a scoprire il piacere di un dolce fatto con amore. Non perdere l'occasione di assaggiare la nostra indistinguibile crema pasticcera, una vera delizia per il palato. Ogni prodotto è creato per offrirti un'esperienza unica e indimenticabile. La nostra pasticceria è il luogo ideale per ritrovare i sapori di una volta e concederti un momento di dolcezza.
              </p>
              <Link to="/Prodotti" className="bottone">PASTICCERIA</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={bancopasticcini} alt="Esterno del bar Concordia" className="section-image-two" />
          </div>
        </div>
      </div>
      <div className="separ-container">
         <img src={Sep} alt="separè" className='separ' />
      </div>
      <div className='gio' data-aos="fade-up" >
      <h1 className="titles">I Nostri Coni Turchi</h1>
      <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={Immaginequattro} alt="First slide" fluid />
        <Carousel.Caption>
          <h3>Coni Turchi Al Pistacchio</h3>
          <p>Il miglior gusto per i nostri speciali coni turchi.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={Immaginecinque} alt="Second slide" fluid />
        <Carousel.Caption>
          <h3>Coni Turchi Al Torrone</h3>
          <p>Croccanti e freschi per un gusto unico e inconfondibile.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Immaginesei} alt="Third slide" fluid />
        <Carousel.Caption>
          <h3>Coni Turchi Alla Frutta</h3>
          <p>Un'esplosione di freschezza con i sapori più fruttati.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Immaginesette} alt="Fourth slide" fluid />
        <Carousel.Caption>
          <h3>Coni Turchi Al Cioccolato e Nocciole</h3>
          <p>Una delizia irresistibile per gli amanti del cioccolato e delle nocciole.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
     <div className="separ-container">
         <img src={Sep} alt="separè" className='separ' />
      </div>
      <div className="container-fluid did" data-aos="fade-right">
        <div className="row mm">
          <div className="col-md-6">
            <img src={Granita} alt="Interno del bar Concordia" className="section-image-three" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="section-content">
            <h2 className='section-title'>
  Per Gli Amanti Dei Sapori Freddi!
</h2>
<p className='section-text'>
Scopri la nostra selezione di prelibatezze fredde! Visita la sezione dedicata sul nostro sito e lasciati tentare dalle nostre specialità che completeranno perfettamente la tua esperienza al Bar Concordia. Non perdere l'opportunità di assaporare le nostre deliziose torte semifredde, la fantastica granita e, come non nominare, i nostri irresistibili coni turchi. Ogni morso è un'esplosione di sapori freschi e genuini. La qualità e il gusto che ci contraddistinguono sono sempre presenti in ogni nostra creazione. Ti aspettiamo per farti scoprire un'altra deliziosa parte della nostra offerta, nel cuore di Mazzarrone. Vieni a trovarci e concediti un momento di freschezza indimenticabile!
</p>
              <Link to="/Prodotti" className="bottone">DOLCI FREDDI</Link>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    
</div>
  );
}

export default Home;