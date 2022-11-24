import CardUser from '../../components/CardUser';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';
import { Content } from '../../styles/user/style.index';

export default function Users() {
  return (
    <div>
      <Header />

      <WrapperList>
        <Content>
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
        </Content>
      </WrapperList>
    </div>
  );
}
