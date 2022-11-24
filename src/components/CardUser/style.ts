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
  }
`;

export const WrapperInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > p {
    > span {
      font-weight: 700;
    }
  }
`;
