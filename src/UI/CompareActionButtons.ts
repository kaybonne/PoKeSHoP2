import styled from 'styled-components';

const CompareActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  button {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    border: none;
    color: var(--font-color); //rgb(228, 228, 228);
    letter-spacing: 0.1rem;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.647);
    background-color: var(--component-background-color); //transparent;
    transition: 0.3s ease-in-out;
  }
`;

export default CompareActionButtons;
