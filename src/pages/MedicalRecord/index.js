import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardDeck } from 'react-bootstrap';
import {
  FaUserMd,
  FaHeartbeat,
  FaUserCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function MedicalRecord() {
  return (
    <>
      <NavBar />
      <Container>
        <h5 className="user">
          <FaUserCircle />
          Maria da Silva{' '}
          <Link to="/" className="back">
            <FaTimesCircle color="red" />
          </Link>
        </h5>
        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd />3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>
                <Link to="/files">
                  <Button variant="default">Arquivos</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd /> 3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>
                <Link to="/files">
                  <Button variant="default">Arquivos</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd />3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>
                <Link to="/files">
                  <Button variant="default">Arquivos</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd /> 3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>
                <Link to="/diagnosis">
                  <Button variant="default">Arquivo</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd />3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>
                <Link to="/files">
                  <Button variant="default">Arquivos</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Hospital 02 de Maio</Card.Title>
              <strong>Linha do tempo</strong>
              <p>
                <span>
                  <FaHeartbeat />0 Cirurgia
                </span>{' '}
                <span>
                  {' '}
                  <FaUserMd /> 3 Especialistas
                </span>
              </p>
              <div className="group-button">
                <Link to="/diagnosis">
                  <Button variant="default">Registros</Button>
                </Link>

                <Link to="/files">
                  <Button variant="default">Arquivos</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <Footer />
    </>
  );
}
