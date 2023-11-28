import styled from "styled-components";

const EmptyCompareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  button {
    cursor: pointer;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: var(--accent-color);
    border: none;
    svg {
      font-size: 5rem;
      color: whitesmoke;
    }
  }
  h3 {
    color: var(--font-color);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

export default EmptyCompareContainer