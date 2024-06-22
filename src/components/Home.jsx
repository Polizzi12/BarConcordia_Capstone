import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'; 
import Inter from '../assets/internobar.jpg'

function Home() {
  return (
    <div className="container-fluid">
      
      <div className="row">
        
        <div className="col-md-6">
          
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={Inter} />
           
          </Card>
        </div>
        <div className="col-md-6">
          
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
             
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;