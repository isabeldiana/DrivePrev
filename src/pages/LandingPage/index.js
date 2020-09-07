import React from 'react';
import { Carousel, CardDeck, Card, Button } from 'react-bootstrap';
import { Container } from './styles';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import laptop from '../../assets/medical-laptop.jpg';
import cellphone from '../../assets/cellphone.jpg';
import hands from '../../assets/hands.jpg';
import computer from '../../assets/computer.jpg';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Carousel>
          <Carousel.Item className="carousel-size">
            <img
              className="d-block w-100 img-carousel"
              src={laptop}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Consulta com especialistas</h3>
              <p>
                Compartilhe suas informações com especialistas para continuar
                seus cuidados de saúde de forma integral{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-size">
            <img
              className="d-block w-100 img-carousel"
              src={hands}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Compartilhe seus dados de maneira segura</h3>
              <p>
                Autorize o acesso às informações armazenadas com quem você
                confia e de maneira segura
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-size">
            <img
              className="d-block w-100 img-carousel"
              src={cellphone}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Acesso a qualquer momento</h3>
              <p>
                Baixe e compartilhe seu histórico médico quando precisar. Seus
                dados estão seguros conosco
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1 className="title-h1">Serviços</h1>

        <CardDeck className="deck-spacing">
          <Card className="card-size">
            <Card.Img variant="top" src={computer} />
            <Card.Body>
              <Card.Title>Histórico Médico</Card.Title>
              <Button variant="primary" className="btn-servicos">
                Saiba mais
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-size">
            <Card.Img variant="top" src={computer} />
            <Card.Body>
              <Card.Title>Consulta Médica</Card.Title>
              <Button variant="primary" className="btn-servicos">
                Saiba mais
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-size">
            <Card.Img variant="top" src={computer} />
            <Card.Body>
              <Card.Title>Controle dos seus dados</Card.Title>
              <Button variant="primary" className="btn-servicos">
                Saiba mais
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <Footer />
    </>
  );
}
