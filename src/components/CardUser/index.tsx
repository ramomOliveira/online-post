import { UserCircle } from 'phosphor-react';
import { Container, WrapperUser, WrapperInfo } from './style';

export default function CardUser() {
  return (
    <Container>
      <WrapperUser>
        <UserCircle size={32} />
        <h1>Nome user</h1>
      </WrapperUser>

      <WrapperInfo>
        <p>email do usuario</p>
        <p>
          <span>Empresa:</span> Lobby tech
        </p>
      </WrapperInfo>
    </Container>
  );
}
