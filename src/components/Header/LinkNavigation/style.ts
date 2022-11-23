import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.li<ContainerProps>`
  :hover {
    color: #ffffff;
    font-weight: 700;
  }

  color: ${props => (props.active ? '#ffffff' : props.theme.colors.text)};
  font-weight: ${props => (props.active ? '700' : '400')};
`;
