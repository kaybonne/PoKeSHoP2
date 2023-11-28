import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  color: var(--font-color);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem;
  border: 5px solid var(--font-color);
  cursor: pointer;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.4s ease-in-out;

  & svg {
    font-size: 3rem;
  }

  &:hover {
    border-top-color: red;
    border-left-color: yellow;
    border-right-color: blue;
    border-bottom-color: green;
    border-radius: 3rem;
    border-width: 10px;
  }
`;
