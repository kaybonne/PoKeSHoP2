import styled from 'styled-components';

const StyledApp = styled.div`
  z-index: 1;
  background: var(--background-color); //rgba(4, 6, 20, 0.85);
  box-shadow: 0 8px 32px 0 rgba(6, 8, 28, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(13px);
  border: 1px solid rgba(23, 20, 20, 0.18);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10vh auto 10vh;
  grid-template-columns: 1fr;
  .content {
    margin: 0 5rem;
    border: 0.5px solid var(--box-line-color);
    border-top: none;
    border-bottom: none;
    height: 80vh;
  }
`;

export default StyledApp;
