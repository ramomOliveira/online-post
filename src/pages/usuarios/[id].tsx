import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserById, UsersProps } from '../../services/users';
import Header from '../../components/Header';
import TopBlock from '../../components/User/TopBlock';
import { WrapperContent } from '../../styles/global';

export default function User() {
  const [user, setUser] = useState<UsersProps>();
  const router = useRouter();

  const load = async (id: number) => {
    try {
      const { data } = await getUserById(id);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      load(Number(router.query.id));
    }
  }, [router]);

  return (
    <div>
      <Header />

      <WrapperContent>{user && <TopBlock user={user} />}</WrapperContent>
    </div>
  );
}
