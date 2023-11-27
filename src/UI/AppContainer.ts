import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  height: 100vh;

  .page {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
    &-thumb {
      background-color: rgba(219, 219, 219, 0.557);
    }
  }
 
`;
export default AppContainer
