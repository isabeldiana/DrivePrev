import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import { FaArrowLeft, FaShareAlt, FaDownload } from 'react-icons/fa';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function Diagnosis() {
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
          Diagnóstico{' '}
          <span>
            <FaShareAlt /> <FaDownload />
          </span>
        </h3>

        <CardDeck className="deck-spacing">
          <Card className="card">
            <Card.Body>
              <strong>Resumo do paciente:</strong>
              <p>
                Paciente do sexo feminino, 70 anos, hipertenso e alérgico a
                sulfa; queixa-se de dor ao exercer atividades fisicas.
              </p>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <strong>Contexto clínico:</strong>
              <p>
                Resumo da história clínica, doenças hereditárias, hábitos e
                riscos no meio ambiente.
              </p>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Body>
              <strong>Diagnóstico preventivo:</strong>
              <p>
                Insuficiência cardíaca externa 80%, hipótese 2 a 15% e hipótese
                3 a 5%.
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <Footer />
    </>
  );
}
