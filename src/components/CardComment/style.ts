import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 12px ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 16px;
`;

export const Content = styled.div`
  > h2 {
    font-size: 18px;
    margin-bottom: 16px;
    color: #ffffff;
  }

  > p {
    line-height: 24px;
  }
`;

export const WrapperUser = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface LikeProps {
  active: boolean;
}

export const Like = styled.div<LikeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > div {
    color: ${props =>
      props.active ? props.theme.colors.secondary : props.theme.colors.text};
  }
`;
