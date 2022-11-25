import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 12px ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 16px;
  display: inline-flex;
  flex-direction: column;

  transition: box-shadow 0.5s;

  :hover {
    cursor: pointer;
    box-shadow: 0px 2px 12px ${props => props.theme.colors.primary};
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > h1 {
    color: #ffffff;
    font-size: 18px;
  }

  @media (min-width: 480px) {
    > h1 {
      font-size: 24px;
    }
  }
`;

export const WrapperInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > p {
    font-size: 14px;
    > span {
      font-weight: 700;
      margin-right: 8px;
    }
  }

  @media (min-width: 480px) {
    > p {
      font-size: 16px;
    }
  }
`;
