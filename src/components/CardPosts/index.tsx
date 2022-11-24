import { Container } from './style';

interface CardPostsProps {
  id: number;
  title: string;
  body: string;
  onClick: () => void;
}

export default function CardPosts({
  body,
  id,
  title,
  onClick,
}: CardPostsProps) {
  return (
    <Container onClick={onClick}>
      <h2># {id}</h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </Container>
  );
}
