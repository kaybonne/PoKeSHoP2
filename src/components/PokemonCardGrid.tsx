import React from 'react';
import { IoGitCompare } from 'react-icons/io5';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { addToCompare, setCurrentPokemon } from '../app/slices/PokemonSlice';
import { useAppDispatch } from '../app/hooks';
import { removePokemonFromUserList } from '../app/reducers/removePokemonFromUserList';
import { useLocation, useNavigate } from 'react-router-dom';
import { setPokemonTab, setToast } from '../app/slices/AppSlice';
import { addPokemonToList } from '../app/reducers/addPokemonToList';
import { pokemonTabs } from '../utils/constants';
import { pokemonTypeInterface, userPokemonsType } from '../utils/types';
import {
  PokemonCardGridContainer,
  StyledPokemonCardGrid,
  PokemonCard,
  PokemonCardList,
  PokemonCardCompare,
  PokemonCardTitle,
  PokemonCardImage,
  PokemonCardType,
  PokemonCardTypes,
  PokemonCardTypeImage,
  H6,
} from '../UI/PokemonCardGrid';

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonsType[] }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PokemonCardGridContainer>
      <StyledPokemonCardGrid>
        {pokemons &&
          pokemons.length > 0 &&
          pokemons.map((data: userPokemonsType) => (
            <PokemonCard key={data.id}>
              <PokemonCardList>
                {location.pathname.includes('/pokemon') ||
                location.pathname.includes('/search') ? (
                  <FaPlus
                    className="plus"
                    onClick={() => dispatch(addPokemonToList(data))}
                  />
                ) : (
                  <FaTrash
                    className="trash"
                    onClick={async () => {
                      await dispatch(
                        removePokemonFromUserList({ id: data.firebaseId! })
                      );
                      dispatch(setToast('Pokemon Removed Successfully.'));
                    }}
                  />
                )}
              </PokemonCardList>
              <PokemonCardCompare>
                <IoGitCompare
                  onClick={() => {
                    dispatch(addToCompare(data));
                    dispatch(
                      setToast(`${data.name} has been added to compare queue.`)
                    );
                  }}
                />
              </PokemonCardCompare>
              <PokemonCardTitle
                onClick={() => {
                  dispatch(setPokemonTab(pokemonTabs.description));
                  dispatch(setCurrentPokemon(undefined));
                  navigate(`/pokemon/${data.id}`);
                }}
              >
                {data.name}
              </PokemonCardTitle>
              <PokemonCardImage
                src={data.image}
                alt=""
                loading="lazy"
                onClick={() => {
                  dispatch(setPokemonTab(pokemonTabs.description));
                  dispatch(setCurrentPokemon(undefined));
                  navigate(`/pokemon/${data.id}`);
                }}
              />
              <PokemonCardTypes>
                {data.types.map((type: pokemonTypeInterface, index: number) => {
                  const keys = Object.keys(type);
                  return (
                    <PokemonCardType key={index}>
                      <PokemonCardTypeImage
                        src={type[keys[0]].image}
                        alt="pokemon type"
                        loading="lazy"
                      />
                      <H6>{keys[0]}</H6>
                    </PokemonCardType>
                  );
                })}
              </PokemonCardTypes>
            </PokemonCard>
          ))}
      </StyledPokemonCardGrid>
    </PokemonCardGridContainer>
  );
}

export default PokemonCardGrid;
