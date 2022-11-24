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
  margin: 80px 356px;
`;

export const WrapperContent = styled.div`
  margin: 80px 356px;
`;
