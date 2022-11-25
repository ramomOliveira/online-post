import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../lib/api';
import CardUser from '../../components/CardUser';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';
import { Content } from '../../styles/user/style.index';

interface UsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Users() {
  const [usersList, setUsersList] = useState<UsersProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    api.get('/users').then(response => {
      setUsersList(response.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <WrapperList>
        <Content>
          {usersList.map(user => (
            <CardUser
              onClick={() => router.push(`/usuarios/${user.id}`)}
              key={user.id}
              user={user}
            />
          ))}
        </Content>
      </WrapperList>
    </div>
  );
}
