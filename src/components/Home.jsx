import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'; 
import Inter from '../assets/internobar.jpg'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="container-fluid melo" >
     <div className='card'>
      <div className="row">
        <div className="col-md-6">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={Inter} />
          </Card>
        </div>
        <div className="col-md-6">
          
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>
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
  );
}

export default Home;