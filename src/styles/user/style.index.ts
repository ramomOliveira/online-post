import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
