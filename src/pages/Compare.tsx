import React from 'react';
import Wrapper from '../sections/Wrapper';
import CompareContainer from '../components/CompareContainer';
import { useAppSelector } from '../app/hooks';
import { StyledCompare } from '../UI/StyledCompare';

function Compare() {
  const { compareQueue } = useAppSelector(({ pokemon }) => pokemon);
  return (
    <StyledCompare>
      <CompareContainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareContainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </StyledCompare>
  );
}

export default Wrapper(Compare);
