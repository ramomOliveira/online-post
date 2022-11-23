import { GithubLogo } from 'phosphor-react';
import LinkNavigation from './LinkNavigation/inde';
import { Container, Ul, WrapperLogin } from './styled';

export default function Header() {
  return (
    <Container>
      <div>
        <h1>online.post</h1>
        <Ul>
          <LinkNavigation active href="/" title="Início" />
          <LinkNavigation active={false} href="/posts" title="Post" />
          <LinkNavigation active={false} href="/usuarios" title="Usuários" />
        </Ul>
      </div>

      <WrapperLogin>
        <div>
          <GithubLogo size={16} color="#1F2729" weight="duotone" />
        </div>
        <p>Entrar com Github</p>
      </WrapperLogin>
    </Container>
  );
}
