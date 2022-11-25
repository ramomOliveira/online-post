import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../lib/api';
import Header from '../../components/Header';
import TopBlock from '../../components/User/TopBlock';
import { WrapperContent } from '../../styles/global';

interface UserProps {
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

export default function User() {
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      api
        .get(`/users/${router.query.id}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [router]);

  return (
    <div>
      <Header />

      <WrapperContent>{user && <TopBlock user={user} />}</WrapperContent>
    </div>
  );
}
