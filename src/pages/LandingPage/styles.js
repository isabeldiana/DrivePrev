import styled from 'styled-components';

export const Container = styled.div`
  .carousel-size {
    max-height: 90vh;
  }

  .title-h1 {
    margin: 5vh auto;
    text-align: center;
  }

  .btn-servicos {
    width: 40%;
    padding: 10px;
    background-image: linear-gradient(#00995d, #00150d);
    color: wheat;
    border: 0;
    border-radius: 10px;
  }

  .deck-spacing {
    display: flex;
    justify-content: center;
    padding: 0 10vw;
    margin-bottom: 5vh;
  }

  @media (max-width: 1000px) {
    .deck-spacing {
      display: block;
      padding: auto;
    }

    .card-size {
      min-width: 250px !important;
      max-width: 300px;
      margin-top: 20px;
    }
  }

  @media (max-width: 800px) {
  }
`;
