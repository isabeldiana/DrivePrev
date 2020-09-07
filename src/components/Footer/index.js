import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Container } from './styles';

import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import github from '../../assets/github.png';

export default function Footer() {
  return (
    <Container>
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
    </Container>
  );
}
