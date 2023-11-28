import React from 'react';
import {
  CircleContainer,
  InnerCircle,
  OuterCircle,
  PokemonCircleImage,

} from '../UI/PokemonBackgroudContainer';
// import balbasaur from "../assets/balbasaur.png";
// import pikachu from "../assets/pikachu.png";
// import charlizard from "../assets/charlizard.png";

export default function PokemonContainer({ image }: { image: string }) {
  return (
    <>
      <CircleContainer>
        <OuterCircle>
          <InnerCircle>
            <PokemonCircleImage src={image} alt="" />
          </InnerCircle>
        </OuterCircle>
      </CircleContainer>
     
    </>
  );
}
