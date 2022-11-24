import { EnvelopeSimple, Globe, Phone } from 'phosphor-react';
import { Container, Avatar, UserInfo, Top, Bottom } from './style';

export default function TopBlock() {
  return (
    <Container>
      <Avatar>
        <div />
      </Avatar>

      <UserInfo>
        <Top>
          <div>
            <h1>Ramom</h1>
            <h2>Ramom Eneilson de oliveira Silva</h2>
          </div>

          <div>
            <p>
              <EnvelopeSimple size={16} />
              email.com@/cpss.br
            </p>
            <p>
              <Phone size={16} />
              23-312-23123-31
            </p>
            <p>
              <Globe size={16} />
              siite.com.site@gdgd.com
            </p>
          </div>
        </Top>

        <Bottom>
          <div>
            <h2>Endereço</h2>
            <p>Olimpio Irinel bianchete</p>
            <p>Apt. 49</p>
            <p>Alfredo Vasconcelos</p>
            <p>36272-000</p>
          </div>

          <div>
            <h2>Empresa</h2>
            <p>Lobby tech</p>
            <p>Multi-layered client-server neural-net</p>
            <p>harness real-time e-markets</p>
          </div>
        </Bottom>
      </UserInfo>
    </Container>
  );
}
