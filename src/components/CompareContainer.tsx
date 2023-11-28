import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { removeFromCompare } from '../app/slices/PokemonSlice';
import { useAppDispatch } from '../app/hooks';
import { addPokemonToList } from '../app/reducers/addPokemonToList';
import { pokemonTypes } from '../utils';
import {
  pokemonStatType,
  pokemonTypeInterface,
  userPokemonsType,
} from '../utils/types';
import EmptyCompareContainer from '../UI/EmptyCompareContainer';
import SimpleContainer from '../UI/SimpleContainer';
import CompareDetails from '../UI/CompareDetails';
import CompareInfo from '../UI/CompareInfo';
import CompareElements from '../UI/CompareElements';
import CompareImage from '../UI/CompareImage';
import CompareActionButtons from '../UI/CompareActionButtons';
import { StyledButton } from '../UI/Button';
import {
  PokemonTypeIcons,
  PokemonsTypeTitle,
  PokemonsTypesContainer,
  PokemonType,
  PokemonTypeImage,
  PokemonTypes,
} from '../UI/PokemonTypesContainer';

function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          // @ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };
  const getStats = () => {
    return (
      <>
        <PokemonTypes>
          <PokemonsTypeTitle>Strength</PokemonsTypeTitle>
          <PokemonTypeIcons>
            {createStatsArray(pokemon?.types!, 'strength').map(
              (stat: { image: string }) => (
                <PokemonType>
                  <PokemonTypeImage src={stat.image} alt="" />
                </PokemonType>
              )
            )}
          </PokemonTypeIcons>
        </PokemonTypes>
        <PokemonTypes>
          <PokemonsTypeTitle>Weakness</PokemonsTypeTitle>
          <PokemonTypeIcons>
            {createStatsArray(pokemon?.types!, 'weakness').map(
              (stat: { image: string }) => (
                <PokemonType>
                  <PokemonTypeImage src={stat.image} alt="" />
                </PokemonType>
              )
            )}
          </PokemonTypeIcons>
        </PokemonTypes>
        <PokemonTypes>
          <PokemonsTypeTitle>Resistance</PokemonsTypeTitle>
          <PokemonTypeIcons>
            {createStatsArray(pokemon?.types!, 'resistance').map(
              (stat: { image: string }) => (
                <PokemonType>
                  <PokemonTypeImage src={stat.image} alt="" />
                </PokemonType>
              )
            )}
          </PokemonTypeIcons>
        </PokemonTypes>
        <PokemonTypes>
          <PokemonsTypeTitle>Vulnerable</PokemonsTypeTitle>
          <PokemonTypeIcons>
            {createStatsArray(pokemon?.types!, 'vulnerable').map(
              (stat: { image: string }) => (
                <PokemonType>
                  <PokemonTypeImage src={stat.image} alt="" />
                </PokemonType>
              )
            )}
          </PokemonTypeIcons>
        </PokemonTypes>
      </>
    );
  };
  return (
    <SimpleContainer>
      {isEmpty && (
        <EmptyCompareContainer>
          <button onClick={() => navigate('/search')}>
            <FaPlus />
          </button>
          <h3>Add Pokemon for Comparison</h3>
        </EmptyCompareContainer>
      )}
      {pokemon && (
        <CompareElements key={pokemon?.id}>
          <CompareInfo>
            <CompareDetails>
              <h3>{pokemon?.name}</h3>
              <CompareImage src={pokemon?.image} alt="pokemon" />
            </CompareDetails>
            <PokemonsTypesContainer>
              <PokemonTypes>
                <PokemonsTypeTitle>Type</PokemonsTypeTitle>
                <PokemonTypeIcons>
                  {pokemon?.types.map((type: pokemonTypeInterface) => {
                    const keys = Object.keys(type);
                    return (
                      <PokemonType>
                        <PokemonTypeImage
                          src={type[keys[0]].image}
                          alt="pokemon type"
                          loading="lazy"
                        />
                      </PokemonType>
                    );
                  })}
                </PokemonTypeIcons>
              </PokemonTypes>
              {getStats()}
            </PokemonsTypesContainer>
          </CompareInfo>
          <CompareActionButtons>
            <StyledButton
              buttonType="Add"
              onClick={() => {
                dispatch(addPokemonToList(pokemon));
              }}
            >
              Add
            </StyledButton>
            <StyledButton
              buttonType="View"
              onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
            >
              View
            </StyledButton>
            <StyledButton
              buttonType="Remove"
              onClick={() => dispatch(removeFromCompare({ id: pokemon?.id }))}
            >
              Remove
            </StyledButton>
          </CompareActionButtons>
        </CompareElements>
      )}
    </SimpleContainer>
  );
}

export default CompareContainer;
