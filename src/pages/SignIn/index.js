import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Aos from 'aos';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo1.png';
import 'aos/dist/aos.css';

export default function SignIn() {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <form data-aos="fade-right">
          <h1> Faça seu login</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <Link to="/medicalrecord">
            <button type="submit">Entrar</button>
          </Link>
          <a href="/">Esqueci minha senha</a>
          <Link className="conta" to="/cadastrar">
            <FiLogIn />
            Criar Conta
          </Link>
        </form>
      </Content>
      <Background />
    </Container>
  );
}
