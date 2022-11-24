import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../lib/api';
import Header from '../../components/Header';
import { WrapperContent } from '../../styles/global';
import { Title, Subtitle, Content } from '../../styles/post/style.post';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Post() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostProps[]>([]);
  const id = router.query.id;
  const selectedPost = posts.find(item => item?.id === Number(id));

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(response.data);
    });
  }, [router]);

  useEffect(() => {
    api.get(`/posts/${id}/comments`).then(response => {
      console.log(response.data);
    });
  }, [router]);

  return (
    <div>
      <Header />
      <WrapperContent>
        <Title>{selectedPost?.title}</Title>
        <Subtitle># {selectedPost?.id}</Subtitle>
        <Content>{selectedPost?.body}</Content>
      </WrapperContent>
    </div>
  );
}
