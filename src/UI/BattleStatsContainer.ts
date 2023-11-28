import styled from 'styled-components';

const BattleStatsContainer = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    letter-spacing: 0.1rem;
    background-color: var(--component-background-color);
    li {
      display: grid;
      grid-template-columns: max-content 80%;
      gap: 0.5rem;
    }
  }
  position: absolute;
  bottom: 3rem;
  right: 2rem;
  color: var(--font-color);
  padding: 1rem;
  width: 30rem;
  &::before {
    height: 0.3rem;
    width: 9rem;
    content: '';
    background-color: var(--accent-color);
    position: absolute;
    top: 0;
    left: 0;
  }
  .name {
    margin-bottom: 1rem;
  }
  .add-pokemon {
    position: absolute;
    right: -1rem;
    bottom: -2rem;
    padding: 0.8rem 0.8rem;
    background-color: transparent;
    border: 0.1rem solid var(--accent-color);
    outline: none;
    color: var(--font-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: var(--accent-color);
    }
  }
  background: linear-gradient(
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    $dot-color;
  button {
    position: absolute;
    right: 1rem;
    bottom: -2rem;

    padding: 0.8rem 0.8rem;
    background-color: transparent;
    border: 0.1rem solid var(--accent-color);
    outline: none;
    color: var(--font-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
`;

export default BattleStatsContainer;
