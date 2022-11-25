import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.div`
  min-width: 200px;
  height: 400px;

  > div {
    background-image: url('/images/p1.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) {
    height: 500px;
  }

  @media (min-width: 576px) {
    min-width: 250px;
  }

  @media (min-width: 1024px) {
    min-width: 300px;
    height: 500px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  > div {
    > h1 {
      color: #ffffff;
      margin-bottom: 8px;
    }

    > h2 {
      font-size: 18px;
    }

    > p {
      font-size: 14px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 4px;

      transition: color 0.5s;

      :hover {
        text-decoration: underline;
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  > div {
    > h2 {
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 12px;
    }

    > p {
      margin-bottom: 8px;
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    margin-top: 64px;
    gap: 32px;
  }
`;
