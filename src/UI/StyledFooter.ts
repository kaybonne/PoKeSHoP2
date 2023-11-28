import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  border-top: 0.5px solid var(--box-line-color);
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e21b5a;
  svg {
    cursor: pointer;
    font-size: 3rem;
  }
`;

export const FooterData = styled.div`
  margin: 0px;
  border: 0.5px solid var(--box-line-color);
  border-top: none;
  border-bottom: none;
  ul {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    list-style-type: none;
    li {
      color: var(--font-color);
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: var(--accent-color);
      }
    }
    .active {
      background-color: var(--accent-color);
    }
  }
`;
