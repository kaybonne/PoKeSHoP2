import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const WelcomeContainer = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`;

const P = styled.p`
  color: #806d6d;
  font-size: 3rem;
`;

function Welcome() {
  return (
    <WelcomeContainer>
      <LogoImage src={logo} alt="logo" />
      <P> Do you lack time? </P>
      <P>Are you afraid of the woods and the secrets hidden there?</P>
      <P>Not very skilled at throwing pokeballs?</P>
      <P>This is the place for you!</P>
      <P>Welcome to the place where you can CATCH THEM ALL!</P>
    </WelcomeContainer>
  );
}

export default Welcome;
