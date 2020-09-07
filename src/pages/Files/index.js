import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import { FaArrowLeft, FaShareAlt, FaDownload } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function Files() {
  return (
    <>
      <NavBar />
      <Container>
        <h5 className="user">
          <Link to="/medicalrecord">
            <FaArrowLeft />
          </Link>{' '}
        </h5>

        <h3 className="diagn">
          Exames{' '}
          <span>
            <FaShareAlt /> <FaDownload />
          </span>
        </h3>

        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <strong>
                Exame 1 <FcDocument />
              </strong>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <strong>
                Exame 2 <FcDocument />
              </strong>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <strong>
                Exame 3 <FcDocument />
              </strong>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <strong>
                Exame 4 <FcDocument />
              </strong>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <Footer />
    </>
  );
}
