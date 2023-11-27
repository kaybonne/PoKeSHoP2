import pokeball1 from '../assets/logo.png';
import pokeball2 from '../assets/pokeball2.png';
import styled from 'styled-components';

const StyledBackground = styled.div`
  z-index: -1;
  position: absolute;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  img {
    max-inline-size: 100%;
    block-size: auto;
    height: 20rem;
  }
`;

export default function Background() {
  return (
    <StyledBackground>
      <img src={pokeball1} alt="" className="pokeball pokeball-1" />
      <img src={pokeball2} alt="" className="pokeball pokeball-2" />
      <img src={pokeball1} alt="" className="pokeball pokeball-3" />
      <img src={pokeball2} alt="" className="pokeball pokeball-4" />
      <img src={pokeball1} alt="" className="pokeball pokeball-5" />
      <img src={pokeball2} alt="" className="pokeball pokeball-6" />
    </StyledBackground>
  );
}
