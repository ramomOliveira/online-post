import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  line-height: 24px;
  margin-bottom: 24px;

  @media (min-width: 480px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 769px) {
    font-size: 48px;
    font-weight: 900;
    line-height: 60px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (min-width: 480px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 30px;

  @media (min-width: 480px) {
    font-size: 18px;
  }
`;
