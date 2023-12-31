import styled from 'styled-components';

export const SearchBar = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  color: var(--font-color);
  text-transform: uppercase;
`;

export const PokemonSearchBar = styled.input`
  background-color: var(--searchbar-background-color);
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  height: 9%;
  color: var(--font-color);
  font-size: 1.3rem;
  padding-left: 1rem;
  &::-webkit-input-placeholder {
    color: var(--font-color); //rgba(255, 255, 255, 0.779);
  }
`;
