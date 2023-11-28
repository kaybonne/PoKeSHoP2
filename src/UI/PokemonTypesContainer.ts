import styled from 'styled-components';

export const PokemonsTypesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 1rem;
`;

export const PokemonTypes = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 2rem;
  width: 100%;
`;

export const PokemonsTypeTitle = styled.h4`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PokemonTypeIcons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
`;
export const PokemonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
export const PokemonTypeImage = styled.img`
  height: 3rem;
  width: 3rem;
`;
