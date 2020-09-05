import React, { useEffect } from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import Logo from '../../assets/logo.png'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function SignIn (){
  useEffect(() =>{
    Aos.init({duration: 900});
  }, [])

  return (
    <Container >
      <Content> 
        <img src={Logo} alt="logo"/>
        <form data-aos="fade-right">
          <h1> Faça seu login</h1>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
          <a href="#">Esqueci minha senha</a>
          <Link className="conta" to="/cadastrar">
            <FiLogIn/>
            Criar Conta
            </Link>
        </form>
      </Content>
      <Background/>
    </Container>
  )
}
