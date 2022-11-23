import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: 32px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '25px',
    height: '20px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#325',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#fff',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
    left: '0',
  },
  bmMenu: {
    background: '#fff',
    padding: '20px 20px 0',
    fontSize: '1.15em',
    width: '100%',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#222',
    padding: '10px',
  },
  bmItem: {
    display: 'flex',
    marginBottom: '20px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
  },
};
