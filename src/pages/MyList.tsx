import React, { useEffect } from 'react';
import Wrapper from '../sections/Wrapper';
import Login from '../components/Login';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserPokemons } from '../app/reducers/getUserPokemons';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { StyledList } from '../UI/StyledList';

function MyList() {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);
  return (
    <StyledList>
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </StyledList>
  );
}

export default Wrapper(MyList);
