import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import Logo from '../../assets/logo.png'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SignUp (){
  useEffect(() =>{
    Aos.init({duration: 900});
  }, [])

  return (
    <Container >
       <Background/>
      <Content> 
        <img src={Logo} alt="logo"/>
        <form data-aos="fade-left">
          <h1> Faça seu Cadastro</h1>
          <input type="text" placeholder="Nome"/>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Cadastrar</button>
          <Link className="conta" to="/">
            <FiArrowLeft/>
            Voltar para Login
            </Link>
        </form>
      </Content>
     
    </Container>
  )
}

