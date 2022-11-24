import { useEffect, useState } from 'react';
import CardPosts from '../../components/CardPosts';
import Header from '../../components/Header';
import { WrapperList } from '../../styles/global';
import api from '../../../lib/api';
import { useRouter } from 'next/router';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [postsList, setPostList] = useState<PostProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    api.get('/posts').then(response => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <WrapperList>
        {postsList.map(post => (
          <CardPosts
            onClick={() => router.push(`/posts/${post.id}`)}
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </WrapperList>
    </div>
  );
}
