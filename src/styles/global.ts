import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Montserrat, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style-type: none;
  }
`;

export const WrapperList = styled.div`
  margin: 16px 24px;

  @media (min-width: 480px) {
    margin: 24px 32px;
  }

  @media (min-width: 769px) {
    margin: 32px 56px;
  }

  @media (min-width: 1024px) {
    margin: 48px 188px;
  }

  @media (min-width: 1280px) {
    margin: 80px 356px;
  }
`;

export const WrapperContent = styled.div`
  margin: 16px 24px;

  @media (min-width: 480px) {
    margin: 24px 32px;
  }

  @media (min-width: 769px) {
    margin: 32px 56px;
  }

  @media (min-width: 1024px) {
    margin: 48px 188px;
  }

  @media (min-width: 1280px) {
    margin: 48px 222px;
  }

  @media (min-width: 1520px) {
    margin: 80px 356px;
  }
`;
