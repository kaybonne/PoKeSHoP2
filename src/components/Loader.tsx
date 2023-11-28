import React from "react";
import pokeballLoader from "../assets/pokeball-loader.gif";
import { StyledLoader } from "../UI/Loader";

function Loader() {
  return (
    <StyledLoader>
      <img src={pokeballLoader} alt="" />
    </StyledLoader>
  );
}

export default Loader;
