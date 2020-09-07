import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  .nav-space {
    display: flex;
    min-width: 50vw;
    justify-content: space-between;
    margin-left: 10vw;
    margin-right: 10vw;
    font-size: 1.5em;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    .nav-space {
      font-size: 1em;
    }
  }
`;
