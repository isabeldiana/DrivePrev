import styled from 'styled-components';
import imgBackgroud from '../../assets/medicos.jpg'; 

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-color: #008000;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 500px;

  img {
    width: 120px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

  h1 {
      margin-bottom: 24px
    }

  input{
      background: #333;
      border-radius: 10px;
      border: 2px solid #333;
      padding: 16px;
      width: 100%;

  & + input{
      margin-top: 8px;

      }
    }

  button{
    background: #9ed0c9;
    height: 50px;
    color: black;
    width: 100%;
    font-weight: bold;
    margin-top: 16px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    transition: background-color 300ms;
  }

  button:hover{
    background: #9efd
  }

  a{
    color: white;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 300ms;
  }

  a:hover {
    color: #999;
  }

  a.conta {
    color: #9ed0c9;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 300ms;
  }

  a.conta:hover{
    color: #9efd;
  }

  svg {
    margin-right: 16px;
  }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${imgBackgroud}) no-repeat center;
  background-size: cover;
`;