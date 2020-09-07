import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';

import Logo from '../../assets/logo.png';

export default function MedicalRecord() {
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

      <Card className="card">
        <Card.Body>
          <Card.Title>Hospital 02 de Maio</Card.Title>
          <strong>Linha do tempo</strong>
          <p>
            0 Cirurgia <span>3 Especialistas</span>
          </p>
          <div>
            <Button variant="default">Registros</Button>
            <Button variant="default">Arquivos</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Hospital 02 de Maio</Card.Title>
          <strong>Linha do tempo</strong>
          <p>
            0 Cirurgia <span>3 Especialistas</span>
          </p>
          <div>
            <Button variant="default">Registros</Button>
            <Button variant="default">Arquivos</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Hospital 02 de Maio</Card.Title>
          <strong>Linha do tempo</strong>
          <p>
            0 Cirurgia <span>3 Especialistas</span>
          </p>
          <div>
            <Button variant="default">Registros</Button>
            <Button variant="default">Arquivos</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Hospital 02 de Maio</Card.Title>
          <strong>Linha do tempo</strong>
          <p>
            0 Cirurgia <span>3 Especialistas</span>
          </p>
          <div>
            <Button variant="default">Registros</Button>
            <Button variant="default">Arquivos</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Hospital 02 de Maio</Card.Title>
          <strong>Linha do tempo</strong>
          <p>
            0 Cirurgia <span>3 Especialistas</span>
          </p>
          <div>
            <Button variant="default">Registros</Button>
            <Button variant="default">Arquivos</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
