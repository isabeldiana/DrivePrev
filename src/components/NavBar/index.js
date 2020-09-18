import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from './styles';

import Logo from '../../assets/logo1.png';

export default function NavBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-container">
          <Nav className="mr-auto nav-space ">
            <Link to="/">Home</Link>
            <Link to="/login">Iniciar Sessão</Link>
            <Link to="/cadastrar">Criar Conta</Link>
            <Link to="/">Trabalhe Conosco</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
