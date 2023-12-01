import pokeball1 from '../assets/logo.png';
import pokeball2 from '../assets/pokeball2.png';
import balbasaur from '../assets/balbasaur.png';
import charlizard from '../assets/charlizard.png';
import pikachu from '../assets/pikachu.png';
import styled from 'styled-components';

const StyledBackground = styled.div`
  z-index: -1;
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const StyledBackgroundImage = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  height: 35rem;
`;

export default function Background() {
  return (
    <StyledBackground>
      <StyledBackgroundImage src={pikachu} alt="" />
      <StyledBackgroundImage src={pokeball2} alt="" />
      <StyledBackgroundImage src={pikachu} alt="" />
      <StyledBackgroundImage src={charlizard} alt="" />
      <StyledBackgroundImage src={pokeball1} alt="" />
      <StyledBackgroundImage src={balbasaur} alt="" />
    </StyledBackground>
  );
}
