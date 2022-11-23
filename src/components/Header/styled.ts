import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 64px;
  border: 1px solid ${props => props.theme.colors.gray700};
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  margin-left: 84px;
  display: flex;
  gap: 32px;
`;

export const WrapperLogin = styled.div`
  background-color: ${props => props.theme.colors.gray700};
  padding: 8px 16px;
  font-weight: 700;
  gap: 16px;
  border-radius: 100px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 4px;
    border-radius: 50%;
  }
`;
