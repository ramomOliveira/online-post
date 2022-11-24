import Link from 'next/link';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Container, styles } from './style';

export default function BurgerMenu() {
  return (
    <Container>
      <Menu styles={styles}>
        <a className="menu-item" href="/">
          Início
        </a>
        <a className="menu-item" href="/posts">
          Posts
        </a>
        <a className="menu-item" href="/usuarios">
          Usuários
        </a>
      </Menu>
    </Container>
  );
}
