import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  gap: 64px;

  @media (min-width: 769px) {
    grid-template-columns: 60% 1fr;
  }
`;

export const Aside = styled.aside`
  > h2 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  > h1 {
    font-size: 32px;
    font-weight: 900;
    color: #ffffff;
    margin-bottom: 24px;

    > strong {
      color: ${props => props.theme.colors.secondary};
      font-weight: 900;
    }
  }

  > p {
    font-size: 18px;
  }

  > button {
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 100px;
    padding: 12px 24px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 40px;

    :hover {
      box-sizing: border-box;
      cursor: pointer;
      outline: 2px solid ${props => props.theme.colors.secondary};
      background-color: transparent;

      color: ${props => props.theme.colors.secondary};
    }
  }

  @media (min-width: 480px) {
    > h2 {
      font-size: 24px;
      margin-bottom: 40px;
    }

    > h1 {
      font-size: 48px;
    }
    > p {
      font-size: 24px;
    }

    > button {
      padding: 21px 64px;
      font-size: 20px;
      max-width: fit-content;
    }
  }
`;

export const ImageWomen = styled.div`
  width: 100%;
  height: 300px;

  > div {
    background-image: url('/images/women.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 769px) {
    width: 200px;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 100%;
  }
`;
