import { UserCircle } from 'phosphor-react';
import { Container, WrapperUser, WrapperInfo } from './style';

interface UserProps {
  user: {
    name: string;
    email: string;
    company: {
      name: string;
    };
  };
  onClick: () => void;
}

export default function CardUser({ user, onClick }: UserProps) {
  const { name, email, company } = user;
  return (
    <Container onClick={onClick}>
      <WrapperUser>
        <UserCircle size={32} />
        <h1>{name}</h1>
      </WrapperUser>

      <WrapperInfo>
        <p>{email}</p>
        <p>
          <span>Empresa:</span>
          {company.name}
        </p>
      </WrapperInfo>
    </Container>
  );
}
