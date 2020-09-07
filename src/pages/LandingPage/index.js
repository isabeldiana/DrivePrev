import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {
  Navbar,
  Nav,
  Carousel,
  CardDeck,
  Card,
  Button,
  Image,
} from 'react-bootstrap';

import Logo from '../../assets/logo.png';
import laptop from '../../assets/medical-laptop.jpg';
import cellphone from '../../assets/cellphone.jpg';
import hands from '../../assets/hands.jpg';
import computer from '../../assets/computer.jpg';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import github from '../../assets/github.png';

export default function LandingPage() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-container">
          <Nav className="mr-auto nav-space">
            <Link to="/">Home</Link>
            <Link to="/login">Iniciar Sessão</Link>
            <Link to="/cadastrar">Criar Conta</Link>
            <Link to="/">Trabalhe Conosco</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
              Compartilhe suas informações com especialistas para continuar seus
              cuidados de saúde de forma integral{' '}
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
              Autorize o acesso às informações armazenadas com quem você confia
              e de maneira segura
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

      <Card className="text-center footer">
        <Card.Body>
          <Card.Title>Políticas de privacidade</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Hac sed pellentesque donec mattis auctor urna, mi.
            <br />
            Sodales augue aenean tellus mattis cras non.
          </Card.Text>
          <Card.Title>Redes Sociais</Card.Title>

          <Image src={instagram} className="icon-color" />

          <Image src={email} className="icon-color" />

          <Image src={github} className="icon-color" />

          <Card.Header className="header">DrivePrev® | 2020</Card.Header>
        </Card.Body>
      </Card>
    </>
  );
}
