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
    color: black;
    font-size: 22px;
    margin-right: 6px;
  }

  .diagn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 20px;
  }

  .diagn svg {
    font-size: 18px;
    margin-left: 10px;
  }

  .diagn span {
    margin-right: 30px;
  }

  strong {
    color: #777;
    font-size: 20px;
    font-weight: normal;
  }

  p {
    color: black;
    font-size: 16px;
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
  }

  .card {
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
