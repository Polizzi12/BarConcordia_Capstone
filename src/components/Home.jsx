import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'; 
import Inter from '../assets/internobar.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Immagineuno from '../assets/torta1.jpg';
import Immaginedue from '../assets/torta2.jpg';
import Immaginetre from '../assets/tortakinder.jpg';


function Home() {
  return (
<div>
    <div className="container-fluid melo" >
     <div className='card'>
      <div className="row mm">
        <div className="col-md-6">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={Inter} />
          </Card>
        </div>
        <div className="col-md-6">
          
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title className='card-title'>
                      Benvenuti al Bar Concordia!
              </Card.Title>
              <Card.Text>
              Situato a Mazzarrone, in Piazza della Concordia, il nostro bar è il luogo ideale per gustare la miglior pasticceria del paese e molto altro ancora. Da noi potrete assaporare dolci freschi e prelibatezze artigianali che vi conquisteranno. Non è solo una questione di dolcezza: al Bar Concordia troverete un ambiente accogliente dove trascorrere piacevoli momenti tra amici e famiglia. Un luogo dove la tradizione si unisce alla qualità, offrendo sempre il meglio per ogni occasione. Venite a trovarci e scoprite il gusto autentico del nostro bar, nel cuore di Mazzarrone.
              </Card.Text>
              <Link to="/Prodotti">
                <Button className="bottone">I NOSTRI PRODOTTI</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    </div>
    <div className='gio'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image src={Immagineuno} alt="First slide" flui/>
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
</div>
  );
}

export default Home;
