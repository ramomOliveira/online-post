import { useEffect, useState } from 'react';
import CardPosts from '../../components/CardPosts';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';
import { useRouter } from 'next/router';
import { getPosts, PostProps } from '../../services/posts';
import Loading from '../../components/Loading';

export default function Posts() {
  const [postsList, setPostList] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await getPosts();
      setPostList(data);
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
      <WrapperList>
        {loading ? (
          <Loading />
        ) : (
          postsList.map(post => (
            <CardPosts
              onClick={() => router.push(`/posts/${post.id}`)}
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))
        )}
      </WrapperList>
    </div>
  );
}
