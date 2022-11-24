import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.gray700};
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 18px;
    }
  }

  @media (min-width: 769px) {
    padding: 16px 32px;

    > div {
      > h1 {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    padding: 16px 64px;

    > div {
      > h1 {
        font-size: 32px;
      }
    }
  }
`;

export const Ul = styled.ul`
  margin-left: 84px;
  display: none;
  gap: 32px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const WrapperLogin = styled.div`
  background-color: ${props => props.theme.colors.gray700};
  padding: 4px 8px;
  font-weight: 700;
  gap: 8px;
  border-radius: 100px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 4px;
    border-radius: 50%;
  }

  > p {
    font-size: 14px;
    > span {
      display: none;
    }
  }

  :hover {
    box-sizing: border-box;
    cursor: pointer;
    color: #61dafb;
    outline: 2px solid #61dafb;
    background-color: transparent;
  }

  @media (min-width: 481px) {
    padding: 8px 16px;
    gap: 16px;
    > p {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    > p {
      > span {
        display: inline-block;
      }
    }
  }
`;
