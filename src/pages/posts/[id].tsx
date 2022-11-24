import Header from '../../components/Header';
import { WrapperContent } from '../../styles/global';
import { Title, Subtitle, Content } from '../../styles/post/style.post';

export default function Post() {
  return (
    <div>
      <Header />
      <WrapperContent>
        <Title>
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </Title>
        <Subtitle># 1</Subtitle>
        <Content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nam
          earum ratione, quia eius quae! Inventore quo minima iure ab
          consectetur quod optio voluptates obcaecati. Quas quod quibusdam vel
          doloribus!
        </Content>
      </WrapperContent>
    </div>
  );
}
