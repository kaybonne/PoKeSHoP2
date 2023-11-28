import styled from 'styled-components';

export const PokemonCardGridContainer = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  color: var(--font-color);
  text-transform: uppercase;
`;
export const StyledPokemonCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  margin: 4rem;
  margin-top: 2rem;
`;

export const PokemonCard = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.125);
  border: var(--border-m);
  border-radius: var(--border-radius-s);
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  svg {
    transition: 0.3s ease-in-out;
    &:hover {
      font-size: 2.2rem;
    }
  }
`;

export const PokemonCardList = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  .trash {
    color: #e21b5a;
  }
  .plus {
    color: #0e5302; //#27af0f;
  }
`;

export const PokemonCardCompare = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  svg {
    color: #1f51ff;
  }
`;

export const PokemonCardTitle = styled.h3`
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
`;

export const PokemonCardImage = styled.img`
  height: 10rem;
  filter: drop-shadow(20px 10px 10px #14121281);
  cursor: pointer;
`;

export const PokemonCardTypes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
`;

export const PokemonCardType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.4rem;
`;

export const PokemonCardTypeImage = styled.img`
  height: 2rem;
`;

export const H6 = styled.h6`
  font-size: smaller;
`;
