import pokeball1 from '../assets/logo.png';
import pokeball2 from '../assets/pokeball2.png';
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
      <StyledBackgroundImage src={pokeball1} alt="" />
      <StyledBackgroundImage src={pokeball2} alt="" />
      <StyledBackgroundImage src={pokeball1} alt="" />
      <StyledBackgroundImage src={pokeball2} alt="" />
      <StyledBackgroundImage src={pokeball1} alt="" />
      <StyledBackgroundImage src={pokeball2} alt="" />
    </StyledBackground>
  );
}
