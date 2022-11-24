import { useRouter } from 'next/router';
import { GithubLogo } from 'phosphor-react';
import BurgerMenu from './BurgerMenu';
import LinkNavigation from './LinkNavigation';
import { Container, Ul, WrapperLogin } from './styled';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <div>
        <BurgerMenu />
        <h1>online.post</h1>
        <Ul>
          <LinkNavigation
            active={router.pathname === '/'}
            href="/"
            title="Início"
          />
          <LinkNavigation
            active={router.pathname.includes('/posts')}
            href="/posts"
            title="Post"
          />
          <LinkNavigation
            active={router.pathname.includes('/usuarios')}
            href="/usuarios"
            title="Usuários"
          />
        </Ul>
      </div>

      <WrapperLogin>
        <div>
          <GithubLogo size={16} color="#1F2729" weight="duotone" />
        </div>
        <p>
          Entrar <span>com Github</span>
        </p>
      </WrapperLogin>
    </Container>
  );
}
