import Header from '../components/Header';
import { WrapperContent } from '../styles/global';
import { Container, ImageWomen, Aside } from '../styles/home/style';

export default function Home() {
  return (
    <WrapperContent>
      <Container>
        <Aside>
          <h2>Olá, bem vindo(a)</h2>

          <h1>
            Notícias sobre o mundo da <strong>Tecnologia</strong>
          </h1>

          <p>Tenha acesso a todas as publicações por R$ 9,90 mês</p>

          <button>Inscreva-se agora</button>
        </Aside>

        <ImageWomen>
          <div />
        </ImageWomen>
      </Container>
    </WrapperContent>
  );
}
