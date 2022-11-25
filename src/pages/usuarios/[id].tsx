import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserById, UsersProps } from '../../services/users';
import Header from '../../components/Header';
import TopBlock from '../../components/User/TopBlock';
import { WrapperContent } from '../../styles/global';
import Loading from '../../components/Loading';

export default function User() {
  const [user, setUser] = useState<UsersProps>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const load = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await getUserById(id);
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      load(Number(router.query.id));
    }
  }, [router]);

  return (
    <div>
      <WrapperContent>
        {loading ? <Loading /> : user && <TopBlock user={user} />}
      </WrapperContent>
    </div>
  );
}
