import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../lib/api';
import CardComment from '../../components/CardComment';
import Header from '../../components/Header';
import { WrapperContent } from '../../styles/global';
import {
  Title,
  Subtitle,
  Content,
  WrapperComments,
} from '../../styles/post/style.post';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Post() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const id = router.query.id;
  const selectedPost = posts.find(item => item?.id === Number(id));

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(response.data);
    });
  }, [router]);

  useEffect(() => {
    api.get(`/posts/${id}/comments`).then(response => {
      setComments(response.data);
    });
  }, [posts]);

  return (
    <div>
      <Header />
      <WrapperContent>
        <Title>{selectedPost?.title}</Title>
        <Subtitle># {selectedPost?.id}</Subtitle>
        <Content>{selectedPost?.body}</Content>

        <WrapperComments>
          {comments.map(comment => (
            <CardComment key={comment.id} comment={comment} />
          ))}
        </WrapperComments>
      </WrapperContent>
    </div>
  );
}
