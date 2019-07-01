import styled from 'styled-components';

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  padding-top: 20vh;

  a,
  button {
    background: none;
    border: 1px solid #f3f3f3;
    color: inherit;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 1);
      color: rgba(20, 20, 20, 1);
      cursor: pointer;
    }

    &:active {
      background: rgba(249, 207, 210, 1);
      border-color: rgba(249, 207, 210, 1);
      color: rgba(20, 20, 20, 1);
    }
  }
`;

export default Hero;
