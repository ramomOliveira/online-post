import { EnvelopeSimple, Globe, Phone } from 'phosphor-react';
import { Container, Avatar, UserInfo, Top, Bottom } from './style';

interface UserProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

export default function TopBlock({ user }: UserProps) {
  const { username, name, email, phone, website, address, company } = user;
  return (
    <Container>
      <Avatar>
        <div />
      </Avatar>

      <UserInfo>
        <Top>
          <div>
            <h1>{username}</h1>
            <h2>{name}</h2>
          </div>

          <div>
            <p>
              <EnvelopeSimple size={16} />
              {email}
            </p>
            <p>
              <Phone size={16} />
              {phone}
            </p>
            <p>
              <Globe size={16} />
              {website}
            </p>
          </div>
        </Top>

        <Bottom>
          <div>
            <h2>Endereço</h2>
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <p>{address.city}</p>
            <p>{address.zipcode}</p>
          </div>

          <div>
            <h2>Empresa</h2>
            <p>{company.name}</p>
            <p>{company.catchPhrase}</p>
            <p>{company.bs}</p>
          </div>
        </Bottom>
      </UserInfo>
    </Container>
  );
}
