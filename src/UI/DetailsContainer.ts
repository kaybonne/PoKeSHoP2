import styled from 'styled-components';

const DetailsContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--font-color);
  padding: 1rem;
  width: 25rem;
  text-transform: uppercase;
  background-color: var(--component-background-color);
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
  button {
    position: absolute;
    right: 1rem;
    bottom: -2rem;

    padding: 0.8rem 0.8rem;
    background-color: var(--component-background-color);
    border: 0.1rem solid var(--accent-color);
    outline: none;
    color: var(--font-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  background: linear-gradient(
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    $dot-color;
`;

export default DetailsContainer;
