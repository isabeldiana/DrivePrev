import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import Logo from '../../assets/Medicina.png'; 

function SignIn (){
  return (
    <Container >
      <Content> 
        <img src={Logo} alt="logo"/>
        <form>
          <h1> Faça seu login</h1>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
          <a href="#">Esqueci minha senha</a>
          <a className="conta" href="#">
            <FiLogIn/>
            Criar Conta
            </a>
        </form>
      </Content>
      <Background/>
    </Container>
  )
}

export default SignIn;