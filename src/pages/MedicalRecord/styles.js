import styled from 'styled-components';

export const Container = styled.div`
  .group-button {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-weight: bold;
    font-size: 30px;
  }

  .user {
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-top: 20px;
  }

  .user svg {
    color: pink;
    font-size: 28px;
    margin-right: 6px;
  }

  .back {
    width: 10%;
    right: 0;
    position: absolute;
  }

  a {
    width: 100%;
  }
  button {
    width: 80%;
    padding: 10px;
    background-image: linear-gradient(#00995d, #00150d);
    color: wheat;
    border: 0;
    border-radius: 10px;
  }

  p {
    display: flex;
    justify-content: space-between;
  }

  span {
    display: flex;
    align-items: center;
  }

  span svg {
    color: #999;
    margin-right: 5px;
  }

  .deck-spacing {
    display: flex;
    justify-content: center;
    padding: 0 10vw;
    margin-bottom: 5vh;
  }

  .card {
    margin-top: 50px;
    background-color: #f7f7f7;
  }
  @media (max-width: 1000px) {
    .deck-spacing {
      display: block;
      padding: auto;
    }
  }

  @media (max-width: 800px) {
  }
`;
