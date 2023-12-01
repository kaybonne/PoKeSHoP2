import styled from 'styled-components';

export const CircleContainer = styled.div`
  display: flex;
  margin-top: 3rem;
`;

export const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
  width: 24rem;
  border: 0.2rem solid var(--accent-color);
  border-radius: var(--border-radius-l); //50rem;
  transform: rotate(45deg);
  position: relative;
`;

export const InnerCircle = styled.div`
  height: 20rem;
  width: 20rem;
  border: 0.3rem solid var(--accent-color);
  border-radius: var(--border-radius-m); //40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
`;

export const PokemonCircleImage = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  z-index: 100;
  height: 17rem;
`;
