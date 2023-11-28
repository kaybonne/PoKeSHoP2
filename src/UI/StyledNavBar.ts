import styled from 'styled-components';

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  border-bottom: 0.5px solid var(--box-line-color);
`;

export const NavData = styled.div`
  display: grid;
  margin: 0px;
  border: 0.5px solid var(--box-line-color);
  border-top: none;
  border-bottom: none;
  padding: 0 20rem;
  ul {
    display: grid;
    /* justify-content: center; */
    grid-template-columns: repeat(4, 20%);
    height: 100%;
    list-style-type: none;
    z-index: 1;
    position: relative;
    a {
      text-decoration: none;
      color: var(--font-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid transparent;

      li {
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        font-weight: 500;
        letter-spacing: 0.2rem;
      }
    }
  }
`;

export const LeftNavBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--font-color);
    font-size: 2rem;
    cursor: pointer;
  }
  img {
    cursor: pointer;
    height: 5rem;
  }
`;
export const RightNavBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--font-color);
    font-size: 2rem;
    cursor: pointer;
  }
  img {
    cursor: pointer;
    height: 3.5rem;
  }
`;

export const Underline = styled.div`
  display: block;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: var(--underline-height);
  width: 20%;
  background-color: var(--accent-color);
  pointer-events: none;
  transition: transform var(--transition-duration) ease-in-out;
  &:nth-child(1) {
    transition: calc(var(--transition-duration) * 0.8);
  }
  &:nth-child(2) {
    transition: calc(var(--transition-duration) * 1.2);
  }
`;
