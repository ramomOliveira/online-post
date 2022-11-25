import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardComment from '../../components/CardComment';
import Header from '../../components/Header';
import { WrapperContent } from '../../styles/global';
import {
  CommentsProps,
  getPostById,
  getPostComments,
  PostProps,
} from '../../services/posts';
import {
  Title,
  Subtitle,
  Content,
  WrapperComments,
} from '../../styles/post/style.post';

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState<PostProps | undefined>(undefined);
  const [comments, setComments] = useState<CommentsProps[]>([]);

  const loadPost = async (id: number) => {
    try {
      const { data } = await getPostById(id);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadComments = async (id: number) => {
    try {
      const { data } = await getPostComments(id);
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      loadPost(Number(router.query.id));
      loadComments(Number(router.query.id));
    }
  }, [router]);

  return (
    <div>
      <Header />
      <WrapperContent>
        <Title>{post?.title}</Title>
        <Subtitle># {post?.id}</Subtitle>
        <Content>{post?.body}</Content>

        <WrapperComments>
          {comments.map(comment => (
            <CardComment key={comment.id} comment={comment} />
          ))}
        </WrapperComments>
      </WrapperContent>
    </div>
  );
}
