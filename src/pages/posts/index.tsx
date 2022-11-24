import CardPosts from '../../components/CardPosts';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';

export default function Posts() {
  return (
    <div>
      <Header />

      <WrapperList>
        <CardPosts />
        <CardPosts />
        <CardPosts />
        <CardPosts />
        <CardPosts />
      </WrapperList>
    </div>
  );
}
