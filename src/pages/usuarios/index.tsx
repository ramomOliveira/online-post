import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUsers, UsersProps } from '../../services/users';
import CardUser from '../../components/CardUser';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';
import { Content } from '../../styles/user/style.index';
import Loading from '../../components/Loading';

export default function Users() {
  const [usersList, setUsersList] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await getUsers();
      setUsersList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Header />

      <WrapperList>
        {loading ? (
          <Loading />
        ) : (
          <Content>
            {usersList.map(user => (
              <CardUser
                onClick={() => router.push(`/usuarios/${user.id}`)}
                key={user.id}
                user={user}
              />
            ))}
          </Content>
        )}
      </WrapperList>
    </div>
  );
}
