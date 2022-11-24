import { ThumbsUp, UserCircle } from 'phosphor-react';
import { useState } from 'react';
import { Container, Content, WrapperUser, Like } from './style';

interface CardCommentProps {
  comment: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
}

export default function CardComment({ comment }: CardCommentProps) {
  const { name, body, email } = comment;
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const like = () => {
    if (numberOfLikes === 0) {
      setNumberOfLikes(numberOfLikes + 1);
    }
    if (numberOfLikes !== 0) {
      setNumberOfLikes(numberOfLikes - 1);
    }
  };

  return (
    <Container>
      <Content>
        <h2>{name}</h2>
        <p>{body}</p>
      </Content>

      <WrapperUser>
        <div>
          <UserCircle size={24} weight="duotone" color="#61dafb" />
          <p>{email}</p>
        </div>

        <Like active={numberOfLikes !== 0}>
          <strong>{numberOfLikes}</strong>
          <div onClick={like}>
            <ThumbsUp size={24} weight="duotone" />
          </div>
        </Like>
      </WrapperUser>
    </Container>
  );
}
