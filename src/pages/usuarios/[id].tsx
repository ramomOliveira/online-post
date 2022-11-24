import Header from '../../components/Header';
import TopBlock from '../../components/User/TopBlock';
import { WrapperContent } from '../../styles/global';

export default function User() {
  return (
    <div>
      <Header />

      <WrapperContent>
        <TopBlock />
      </WrapperContent>
    </div>
  );
}
