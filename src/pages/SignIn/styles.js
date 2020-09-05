import styled from 'styled-components';
import imgBackgroud from '../../assets/medicos.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-image: linear-gradient(#00995d, #004127);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 500px;

  img {
    width: 320px;
    margin-left: 70px;
  }

  form {
    margin: 80px 0;
    width: 300px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: wheat;
    }

    input {
      background: #333;
      border-radius: 10px;
      border: 2px solid #333;
      padding: 16px;
      width: 100%;
      color: #ddd;
      font-size: 16px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-image: linear-gradient(#00995d, #00150d);
      height: 50px;
      color: wheat;
      width: 100%;
      font-weight: bold;
      font-size: 16px;
      margin-top: 16px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      cursor: pointer;
      transition: background-color 300ms;
    }

    button:hover {
      opacity: 0.8;
    }

    a {
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
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      text-decoration: none;
      transition: color 300ms;
    }

    a.conta:hover {
      color: #9efd;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${imgBackgroud}) no-repeat center;
  background-size: cover;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
