import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  > h2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > h1 {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 4px;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 32px;
    border-bottom: 1px solid ${props => props.theme.colors.gray700};
  }

  :hover {
    cursor: pointer;

    > h2 {
      color: ${props => props.theme.colors.secondary};
      font-weight: 700;
    }
  }

  @media (min-width: 480px) {
    > h2 {
      font-size: 16px;
    }

    > h1 {
      font-size: 24px;
    }

    > p {
      font-size: 16px;
    }
  }
`;
