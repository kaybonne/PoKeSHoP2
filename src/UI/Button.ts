import styled, { css } from 'styled-components';

interface StyledButtonProps {
  buttonType: 'Add' | 'View' | 'Remove';
}

const getColorBasedOnType = (type: 'Add' | 'View' | 'Remove'): string => {
  switch (type) {
    case 'Add':
      return '#1f51ff';
    case 'View':
      return '#27af0f';
    case 'Remove':
      return '#e21b5a';
    default:
      return 'transparent';
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
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

  ${({ buttonType }) => {
    const backgroundColor = getColorBasedOnType(buttonType);
    return css`
      &:hover {
        background-color: ${backgroundColor};
        border-color: ${backgroundColor};
      }
    `;
  }}
`;
