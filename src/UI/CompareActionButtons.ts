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
    color: rgb(228, 228, 228);
    letter-spacing: 0.1rem;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.647);
    background-color: transparent;
    transition: 0.3s ease-in-out;
    &:nth-of-type(1) {
      &:hover {
        background-color: #1f51ff;
        border-color: #1f51ff;
      }
    }
    &:nth-of-type(2) {
      &:hover {
        background-color: #27af0f;
        border-color: #27af0f;
      }
    }
    &:nth-of-type(3) {
      &:hover {
        background-color: #e21b5a;
        border-color: #e21b5a;
      }
    }
  }
`;

export default CompareActionButtons