import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
`;

export const Avatar = styled.div`
  min-width: 300px;
  height: 500px;

  > div {
    background-image: url('/images/p1.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

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
`;

export const Bottom = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;

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
`;
