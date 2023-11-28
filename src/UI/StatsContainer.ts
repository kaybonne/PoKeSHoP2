import styled from "styled-components";

const StatsContainer = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 8rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      color: var(--font-color);;
      text-align: right;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      progress {
        transition: 2s ease-in-out;
        width: 0;
        height: 100%;
        -webkit-appearance: none;
        appearance: none;
        &::-webkit-progress-bar {
          border-radius: 1rem;
          height: 0.3rem;
          background-color: transparent;
        }
        &::-webkit-progress-value {
          border-radius: 1rem;
          background-color: var(--accent-color);
        }
      }
    }
  }
`;

export default StatsContainer